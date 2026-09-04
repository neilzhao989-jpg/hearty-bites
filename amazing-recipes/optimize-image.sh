#!/bin/bash
# Generates the responsive image variants referenced by recipePhoto() in index.html.
#
#   ./optimize-image.sh <source-image> <slug>
#
# Produces assets/<slug>-{400,800,1200}.{jpg,webp}, cropped to 4:3 and
# stripped of metadata. Uses sips (macOS built-in) for JPEG and ffmpeg for WebP.

set -euo pipefail

SRC="${1:?usage: ./optimize-image.sh <source-image> <slug>}"
SLUG="${2:?usage: ./optimize-image.sh <source-image> <slug>}"
OUT="$(cd "$(dirname "$0")" && pwd)/assets"

[ -f "$SRC" ] || { echo "error: no such file: $SRC" >&2; exit 1; }
mkdir -p "$OUT"

# Center-crop to 4:3 so the card and hero framing stay predictable.
W=$(sips -g pixelWidth  "$SRC" | awk '/pixelWidth/{print $2}')
H=$(sips -g pixelHeight "$SRC" | awk '/pixelHeight/{print $2}')
TARGET_H=$(( W * 3 / 4 ))
if [ "$TARGET_H" -le "$H" ]; then
  CROP_W=$W; CROP_H=$TARGET_H
else
  CROP_H=$H; CROP_W=$(( H * 4 / 3 ))
fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
sips -s format jpeg "$SRC" --out "$TMP/base.jpg" >/dev/null
sips -c "$CROP_H" "$CROP_W" "$TMP/base.jpg" >/dev/null

# WebP serves virtually all real traffic, so it carries the quality; the JPEG is a
# fallback and is kept lean. sips is a weak JPEG encoder, so quality above ~50 can
# produce files larger than an already-optimized source for no visible gain.
for size in 400 800 1200; do
  sips -Z "$size" "$TMP/base.jpg" --out "$TMP/$size.jpg" >/dev/null
  sips -s format jpeg -s formatOptions 50 "$TMP/$size.jpg" --out "$OUT/$SLUG-$size.jpg" >/dev/null
  ffmpeg -loglevel error -y -i "$TMP/$size.jpg" -c:v libwebp -quality 68 \
    -map_metadata -1 "$OUT/$SLUG-$size.webp"
done

echo "Wrote to $OUT:"
cd "$OUT" && ls -lh "$SLUG"-*.jpg "$SLUG"-*.webp | awk '{printf "  %-40s %s\n", $9, $5}'
