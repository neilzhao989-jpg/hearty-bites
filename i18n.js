/* Amazing Recipes — French and Simplified Chinese.
   English lives in index.html; this file supplies the replacements, the same
   way Auric Aura does it. Anything missing here falls back to English rather
   than rendering blank, which matters on a site where a missing line could be
   the one saying a dish is unsafe at a given level.

   Three shapes live in here:
     ui      — the chrome: nav, headings, buttons, labels.
     levels  — IDDSI level names and descriptions. Safety-critical.
     recipes — per slug, the translatable fields of a recipe.
     units   — measurement words, so batch scaling keeps working. See the note
               on AR_UNITS at the bottom.                                    */

window.AR_I18N = {

  /* ------------------------------------------------------------------ fr */
  fr: {
    ui: {
      'skip': 'Aller au contenu principal',
      'tagline': 'Chaque recette classée selon un niveau de texture IDDSI',
      'brand': 'Amazing Recipes',
      'brand.sub': 'Des recettes réconfortantes, faciles à manger',
      'nav.recipes': 'Recettes',
      'nav.guide': 'Guide des textures',
      'nav.reviews': 'Avis',
      'nav.open': 'Ouvrir le menu',
      'nav.close': 'Fermer le menu',
      'home.h1': 'Amazing Recipes — chaque recette classée selon un niveau de texture IDDSI',
      'home.lede': 'Une cuisine tendre, facile à mâcher et à avaler. Chaque recette indique le niveau de texture IDDSI auquel elle convient.',
      'hero.eyebrow': 'Niveaux IDDSI 3 à 7',
      'hero.title': 'Chaque recette classée pour sa texture',
      'hero.lede': 'Du liquidifié au facile à mâcher — vous savez toujours à quel point un plat est tendre avant de le cuisiner.',
      'back': 'Retour à toutes les recettes',
      'fact.time': 'Durée',
      'fact.serves': 'Portions',
      'fact.effort': 'Difficulté',
      'texture.label': 'Niveau de texture',
      'texture.all': 'Voir tous les niveaux de texture',
      'sec.ingredients': 'Ingrédients',
      'sec.instructions': 'Préparation',
      'sec.tips': 'Conseils de service',
      'sec.tips.head': 'Conseils importants',
      'sec.nutrition': 'Valeurs nutritionnelles',
      'sec.dietary': 'Notes diététiques',
      'sec.reviews': 'Avis',
      'batch.label': 'Quantité',
      'batch.aria': 'fois la recette',
      'nut.calories': 'Calories',
      'nut.protein': 'Protéines',
      'nut.fat': 'Lipides',
      'nut.carbs': 'Glucides',
      'nut.sodium': 'Sodium',
      'nut.cholesterol': 'Cholestérol',
      'mixed.warn': 'Les solides et le liquide se séparent dans ce plat.',
      'mixed.note': 'Non considéré comme sûr aux niveaux 4 à 6 tel quel.',
      'guide.h1': 'Comprendre les niveaux de texture IDDSI',
      'guide.lede': 'Le cadre IDDSI classe les aliments et les boissons du niveau 0 au niveau 7. Voici les niveaux utilisés sur ce site.',
      'reviews.h1': 'Avis',
      'reviews.lede': 'Les retours de personnes ayant cuisiné ces recettes classées par texture. Ouvrez une recette et descendez en bas de page pour en laisser un.',
      'review.name': 'Votre nom',
      'review.text': 'Votre avis',
      'review.rating': 'Note',
      'review.post': 'Publier l’avis',
      'review.empty': 'Aucun avis pour l’instant. Ouvrez une recette et descendez en bas de page pour écrire le premier.',
      'review.public': 'Les avis sont publics : toute personne visitant ce site les verra.',
      'review.count': 'avis',
      'foot.browse': 'Parcourir',
      'foot.all': 'Toutes les recettes',
      'foot.levels': 'Niveaux de texture',
      'foot.blurb': 'Une cuisine réconfortante et facile à manger. Chaque plat repose sur des textures tendres et des saveurs douces, et porte une note de texture afin que vous sachiez toujours ce que vous obtenez.',
      'foot.rights': 'Tous droits réservés.',
      'serves': 'portions',
      'lang.label': 'Langue',
      'foot.levels.item': 'Niveau {n} &mdash; {name}',
      'filter.level': '{n} recettes au niveau {level}, {name}',
      'filter.all': 'Affichage des {n} recettes',
      'summary': 'Convient à toute personne ayant du mal à mâcher ou à avaler. Classé IDDSI niveau {n} ({name}) — {plain} — la norme de texture utilisée pour la dysphagie et les régimes à texture modifiée.'
    },
    levels: {
      2: { name: 'Légèrement épais', plain: 'Boisson épaissie',
           desc: 'Coule de la cuillère, mais nettement plus lentement que l’eau. Se boit à la tasse ou avec une paille large, et laisse un léger film en s’écoulant. Un niveau de boisson plutôt que d’aliment.' },
      3: { name: 'Liquidifié', plain: 'Lisse et buvable',
           desc: 'Se verse comme une soupe épaisse que l’on peut boire. Aucun morceau, aucun fragment, aucune mastication. Se prend à la tasse ou à la cuillère, et ne doit pas garder sa forme dans l’assiette.' },
      4: { name: 'Mixé', plain: 'Purée lisse, sans mastication',
           desc: 'Parfaitement lisse et assez épais pour garder sa forme sur une cuillère, mais assez tendre pour ne demander aucune mastication. Ne doit jamais être collant, grumeleux ni filandreux.' },
      5: { name: 'Haché et humide', plain: 'Tendre, haché et facile à avaler',
           desc: 'Tendre, humide et finement haché en très petits morceaux qui s’écrasent facilement sous une légère pression de la fourchette. Toute sauce doit adhérer plutôt que se séparer.' },
      6: { name: 'Tendre et en petits morceaux', plain: 'Tendre, facile à mâcher',
           desc: 'Tendre au point de se détacher à la fourchette, sans couteau. Une mastication reste nécessaire, mais rien ne doit être dur, filandreux ni sec.' },
      7: { name: 'Facile à mâcher', plain: 'Facile à mâcher',
           desc: 'Aliments ordinaires de texture tendre. Rien de dur, de croquant ni de filandreux, et aucun morceau difficile à mâcher.' }
    },
    recipes: {}
  },

  /* ------------------------------------------------------------------ zh */
  zh: {
    ui: {
      'skip': '跳转到主要内容',
      'tagline': '每道食谱都标注 IDDSI 质地等级',
      'brand': 'Amazing Recipes',
      'brand.sub': '易于进食的暖心食谱',
      'nav.recipes': '食谱',
      'nav.guide': '质地指南',
      'nav.reviews': '评价',
      'nav.open': '打开菜单',
      'nav.close': '关闭菜单',
      'home.h1': 'Amazing Recipes — 每道食谱都标注 IDDSI 质地等级',
      'home.lede': '为咀嚼或吞咽困难的人准备的软嫩菜肴。每道食谱都标明其适用的 IDDSI 质地等级。',
      'hero.eyebrow': 'IDDSI 第 3 至 7 级',
      'hero.title': '每道食谱都按质地分级',
      'hero.lede': '从细泥到易咀嚼——下厨之前就知道这道菜到底有多软。',
      'back': '返回全部食谱',
      'fact.time': '用时',
      'fact.serves': '份量',
      'fact.effort': '难度',
      'texture.label': '质地等级',
      'texture.all': '查看全部质地等级',
      'sec.ingredients': '食材',
      'sec.instructions': '做法',
      'sec.tips': '食用提示',
      'sec.tips.head': '重要提示',
      'sec.nutrition': '营养成分',
      'sec.dietary': '饮食说明',
      'sec.reviews': '评价',
      'batch.label': '份量倍数',
      'batch.aria': '倍食谱',
      'nut.calories': '热量',
      'nut.protein': '蛋白质',
      'nut.fat': '脂肪',
      'nut.carbs': '碳水化合物',
      'nut.sodium': '钠',
      'nut.cholesterol': '胆固醇',
      'mixed.warn': '这道菜的固体与汤汁会分离。',
      'mixed.note': '按原方做法，不适用于第 4 至 6 级。',
      'guide.h1': '了解 IDDSI 质地等级',
      'guide.lede': 'IDDSI 框架将食物与饮品分为第 0 至 7 级。以下是本站所采用的等级。',
      'reviews.h1': '评价',
      'reviews.lede': '来自做过这些分级食谱的人的留言。打开任意食谱，滚动到页面底部即可留言。',
      'review.name': '您的姓名',
      'review.text': '您的评价',
      'review.rating': '评分',
      'review.post': '发表评价',
      'review.empty': '暂无评价。打开任意食谱，滚动到页面底部写下第一条。',
      'review.public': '评价是公开的：访问本站的所有人都能看到。',
      'review.count': '条评价',
      'foot.browse': '浏览',
      'foot.all': '全部食谱',
      'foot.levels': '质地等级',
      'foot.blurb': '易于进食的暖心菜肴。每道菜都以柔软的质地和温和的风味为基础，并标注质地等级，让您始终清楚自己吃的是什么。',
      'foot.rights': '版权所有。',
      'serves': '份',
      'lang.label': '语言',
      'foot.levels.item': '第 {n} 级 &mdash; {name}',
      'filter.level': '第 {level} 级（{name}）共 {n} 道食谱',
      'filter.all': '显示全部 {n} 道食谱',
      'summary': '适合咀嚼或吞咽困难的人食用。已评定为 IDDSI 第 {n} 级（{name}）——{plain}——这是吞咽障碍照护与软食所采用的质地标准。'
    },
    levels: {
      2: { name: '微稠', plain: '加稠饮品',
           desc: '能从勺子上流下，但明显比水慢。可用杯子或粗吸管饮用，流动时会在杯壁留下一层薄膜。属于饮品等级，而非食物等级。' },
      3: { name: '流质', plain: '细滑可饮',
           desc: '像浓稠而可以喝的汤一样倾倒。没有颗粒，没有碎块，完全不需要咀嚼。可用杯子或勺子取食，盛在盘中不应保持形状。' },
      4: { name: '细泥',  plain: '细滑无需咀嚼',
           desc: '完全细滑，稠到能在勺中保持形状，但又软到完全不需咀嚼。绝不可黏牙、结块或带纤维。' },
      5: { name: '细碎湿润', plain: '软嫩细碎、易吞咽',
           desc: '软嫩湿润，剁成极小的碎粒，用叉子轻压即可压碎。任何酱汁都应附着其上，而不是分离出来。' },
      6: { name: '软质小块', plain: '软嫩易咀嚼',
           desc: '软到用叉子就能分开，无需用刀。仍需咀嚼，但不应有任何坚硬、粗纤维或干柴的部分。' },
      7: { name: '易咀嚼', plain: '易咀嚼',
           desc: '质地柔软的普通食物。没有坚硬、酥脆或带筋的部分，也没有难以咀嚼的块状物。' }
    },
    recipes: {}
  }
};

/* Measurement words per language, so the 1x/2x/3x control keeps working after
   a switch. scaleAmount() only rewrites a number when a known unit follows it,
   so an untranslated unit means the amount silently stops scaling.
   `plural` is the French feminine/masculine plural; Chinese measure words do
   not inflect, so zh lists each unit once and pluralises to itself.          */
window.AR_UNITS = {
  fr: ['tasse', 'tasses', 'cuillère à soupe', 'cuillères à soupe', 'c. à soupe',
       'cuillère à café', 'cuillères à café', 'c. à café',
       'litre', 'litres', 'ml', 'g', 'kg', 'gramme', 'grammes',
       'gousse', 'gousses', 'branche', 'branches', 'brin', 'brins',
       'boîte', 'boîtes', 'sachet', 'sachets', 'pincée', 'pincées'],
  zh: ['杯', '汤匙', '茶匙', '大勺', '小勺', '克', '千克', '毫升', '升',
       '瓣', '根', '枝', '罐', '包', '撮', '片', '个', '只', '块']
};
