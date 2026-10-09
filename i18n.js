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
      'review.count.n': '{n} avis',
      'review.none': 'Aucun avis pour cette recette pour l’instant. Si vous l’avez cuisinée, vos remarques aideront la prochaine personne.',
      'review.placeholder': 'Comment est-ce sorti ? Quelque chose à signaler sur la texture ?',
      'review.local': 'Les avis partagés sont indisponibles pour le moment ; celui-ci n’a été enregistré que dans ce navigateur.',
      'review.loading': 'Chargement…',
      'review.needboth': 'Merci d’indiquer votre nom et quelques mots sur la recette.',
      'review.stars': '{n} étoiles',
      'nut.sodium.flag': 'À propos du sodium :',
      'review.loadingList': 'Chargement des avis…',
      'time.freezing': '(congélation)',
      'hero.count': 'recettes réparties sur cinq niveaux de texture. Choisissez un niveau pour affiner.',
      'ladder.title': 'De quel niveau de texture avez-vous besoin ?',
      'ladder.all': 'Tous les niveaux',
      'card.mixed': 'À mixer ou à épaissir',
      'card.level': 'Niveau {n} &middot; {name}',
      'home.whatlevels': 'Que signifient les niveaux de texture ?',
      'guide.disclaimer': 'Les niveaux de texture indiqués ici sont un point de départ, non une évaluation clinique. Un orthophoniste ou un diététicien doit confirmer le niveau qui convient à la personne pour qui vous cuisinez.',
      'reviews.eyebrow': 'De celles et ceux qui les ont cuisinées',
      'reviews.intro': 'Les remarques laissées par les personnes ayant cuisiné ces recettes — comment le plat est sorti, et comment il s’est comporté au niveau de texture indiqué.',
      'guide.intro': 'Chaque recette de ce site est classée selon le cadre IDDSI — l’échelle commune utilisée par les cliniciens pour décrire le degré de tendreté requis. Servez-vous-en pour faire correspondre une recette à la texture dont vous ou l’un de vos proches avez besoin.',
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
    mixed: {
      'chicken-noodle-soup': 'Mixez toute la soupe, ou épaississez le bouillon jusqu’à ce qu’il ne se sépare plus des nouilles et du poulet.',
      'chinese-egg-drop-soup': 'Les rubans d’œuf flottent dans un bouillon fluide. Mixez le tout, ou épaississez le bouillon pour que les deux se déplacent ensemble.',
      'korean-soft-tofu-soup': 'Le tofu et les légumes baignent dans un bouillon fluide. Mixez le tout, ou épaississez le bouillon avant de servir.',
      'lamb-stew-tomatoes': 'Réduisez ou épaississez la sauce jusqu’à ce qu’elle adhère à la viande et aux légumes au lieu de former une flaque autour.',
      'ground-beef-curry': 'Épaississez la sauce jusqu’à ce qu’elle enrobe la viande hachée et la pomme de terre au lieu de se séparer.',
      'kimchi-ramen': 'Des nouilles dans un bouillon fluide. En dessous du niveau 7, mixez la soupe jusqu’à ce qu’elle soit lisse, ou écartez cette recette.',
      'watermelon-sorbet': 'Le sorbet fond en un liquide fluide dans la bouche. Toute personne sous boissons épaissies ne doit pas en consommer, quel que soit le niveau attribué au solide glacé.'
    },
    /* RECIPES:fr */
    recipes: {
      "apple-sauce": {
              "title": "Compote de pommes maison",
              "description": "Une compote simple et délicatement épicée, cuite à partir de pommes fraîches — à rendre parfaitement lisse ou à garder légèrement texturée.",
              "ingredients": [
                      {
                              "amount": "1 moyenne",
                              "item": "Pomme",
                              "note": "155 à 170 g"
                      },
                      {
                              "amount": "3 c. à soupe",
                              "item": "Eau"
                      },
                      {
                              "amount": "1/2 c. à café",
                              "item": "Sucre"
                      },
                      {
                              "amount": "1/8 c. à café",
                              "item": "Cannelle moulue"
                      }
              ],
              "instructions": [
                      "Pelez la pomme, retirez le cœur et coupez-la en morceaux.",
                      "Dans une casserole d’un litre, réunissez la pomme, l’eau, le sucre et la cannelle.",
                      "Portez à frémissement à feu moyen. Baissez à feu doux, couvrez et laissez cuire 20 à 25 minutes, en remuant une ou deux fois pour éviter que cela n’attache. La pomme est prête lorsqu’elle est tendre et s’écrase entièrement à la fourchette.",
                      "Retirez du feu. Pour une compote avec morceaux, écrasez à la fourchette ou au presse-purée. Pour une compote lisse, utilisez un mixeur plongeant ou versez dans un blender.",
                      "Si la compote est trop liquide, poursuivez la cuisson à découvert et à feu doux jusqu’à ce qu’elle épaississe."
              ],
              "servingTips": [
                      "Préparez toujours la version lisse — mixée au mixeur plongeant jusqu’à disparition de tout morceau — pour toute personne suivant un régime à texture modifiée. La version avec morceaux ne convient pas en dessous du niveau 6.",
                      "Pelez soigneusement la pomme ; les morceaux de peau restants sont coriaces et ne se désagrègent pas en si peu de cuisson.",
                      "Cette compote est naturellement souple une fois cuite et se mixe sans peine, ce qui en fait l’un des desserts ou accompagnements de niveau 4 les plus simples du site.",
                      "La compote sert souvent à faire passer plus facilement d’autres aliments ou des médicaments — demandez à un pharmacien ou à l’équipe soignante avant de la mélanger à un traitement."
              ],
              "dietaryNotes": "Naturellement sans gluten, sans produits laitiers et végétalienne. Les valeurs ci-dessus sont estimées à partir des ingrédients, la recette source n’en fournissant pas.",
              "nutrition": {
                      "basis": "Estimé à partir des ingrédients indiqués, pour 2 portions (une pomme moyenne au total). Il s’agit d’une estimation, non d’une analyse en laboratoire."
              }
      },
      "baked-cinnamon-apples": {
              "title": "Pommes au four à la cannelle",
              "description": "Des pommes au four tièdes et fondantes, garnies d’un cœur de sucre et de cannelle — naturellement tendres, parfaites pour un dessert réconfortant et facile à manger.",
              "ingredients": [
                      {
                              "amount": "4 grosses",
                              "item": "Pommes fermes et sucrées",
                              "note": "Honeycrisp, Fuji ou Gala conviennent le mieux"
                      },
                      {
                              "amount": "4 c. à soupe",
                              "item": "Cassonade blonde"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Cannelle moulue"
                      },
                      {
                              "amount": "1/4 c. à café",
                              "item": "Noix de muscade moulue"
                      },
                      {
                              "amount": "2 c. à soupe",
                              "item": "Beurre doux, ramolli"
                      },
                      {
                              "amount": "1/4 tasse",
                              "item": "Cidre ou jus de pomme"
                      }
              ],
              "instructions": [
                      "Préchauffez le four à 190 °C. Beurrez légèrement un plat de 23 × 33 cm.",
                      "Évidez les pommes en laissant environ 1,2 cm de chair au fond pour retenir la garniture. Utilisez une cuillère parisienne ou une cuillère à café pour retirer le cœur et creuser un puits.",
                      "Dans un petit bol, mélangez la cassonade, la cannelle, la muscade et le beurre ramolli jusqu’à obtenir une texture sableuse.",
                      "Garnissez chaque pomme du mélange en le tassant doucement.",
                      "Disposez les pommes dans le plat. Versez le cidre autour des pommes.",
                      "Couvrez hermétiquement de papier aluminium et enfournez 35 minutes.",
                      "Retirez l’aluminium et poursuivez la cuisson 10 à 15 minutes, jusqu’à ce que les pommes soient parfaitement tendres à la pointe d’une fourchette. La chair doit être translucide et céder sous la pression.",
                      "Laissez tiédir 10 minutes avant de servir. Les pommes doivent être assez tendres pour se manger à la cuillère, sans demander de mastication ou presque.",
                      "Servez arrosées du jus de cuisson, avec une cuillerée de crème fouettée ou de glace vanille si vous le souhaitez."
              ],
              "servingTips": [
                      "Les pommes sont cuites lorsque la fourchette entre sans résistance et que la peau se sépare facilement de la chair.",
                      "Pour les régimes mixés, prélevez la chair cuite et écrasez-la ou mixez-la jusqu’à ce qu’elle soit lisse.",
                      "Choisissez des pommes qui tiennent à la cuisson — évitez les variétés molles qui se transforment en compote.",
                      "Vérifiez à la cuillère avant de servir : la pomme doit se prélever en morceaux souples et faciles à gérer.",
                      "Les noix concassées dont on garnit souvent ce dessert ont été volontairement laissées de côté. Des éclats durs et croquants dans un plat par ailleurs souple constituent un risque de textures mélangées : les deux demandent des degrés de mastication différents, et cette association compte parmi les plus difficiles à gérer en sécurité."
              ],
              "dietaryNotes": "Sans gluten, avec une option sans produits laitiers (utilisez un beurre végétal). Sans fruits à coque tel qu’indiqué — voir les conseils de service pour comprendre pourquoi la garniture habituelle est écartée.",
              "nutrition": {
                      "basis": "Estimé à partir des ingrédients indiqués, pour 4 portions (une pomme farcie chacune). Il s’agit d’une estimation, non d’une analyse en laboratoire."
              }
      },
      "banana-custard": {
              "title": "Crème dessert à la banane",
              "description": "Une banane bien mûre mixée dans une crème vanille lisse, puis tamisée jusqu’à ce qu’il n’y ait plus rien à mâcher. Trois ingrédients, aucune cuisson.",
              "ingredients": [
                      {
                              "amount": "1/2 moyenne",
                              "item": "Banane bien mûre",
                              "note": "60 g — plus elle est mûre, mieux c’est"
                      },
                      {
                              "amount": "3/4 tasse",
                              "item": "Crème dessert vanille lisse, prête à l’emploi",
                              "note": "180 g"
                      },
                      {
                              "amount": "1/4 c. à café",
                              "item": "Extrait de vanille"
                      }
              ],
              "instructions": [
                      "Écrasez soigneusement la banane.",
                      "Mixez la banane, la crème dessert et la vanille jusqu’à obtenir un mélange parfaitement lisse.",
                      "Passez au tamis fin s’il reste des fibres.",
                      "Réfrigérez, ou servez à la température prescrite, et vérifiez la texture avant de passer à table."
              ],
              "servingTips": [
                      "La photographie montre le dessert garni de rondelles de banane et de copeaux de chocolat. Ni l’un ni l’autre n’a sa place au niveau 3, où rien ne doit demander de mastication. Ce qui est classé ici, c’est la crème mixée seule.",
                      "La banane est filandreuse, et le mixage seul n’en vient pas toujours à bout. L’étape 3 est ce qui fait la différence entre « niveau 3 » et « presque niveau 3 » : tamisez même si le mélange paraît lisse.",
                      "Les crèmes du commerce varient beaucoup d’une marque à l’autre. Le niveau 3 doit encore couler de la cuillère : vérifiez la vôtre et détendez-la avec un peu de lait si elle se tient en dôme.",
                      "Elle raffermit au réfrigérateur. Si vous la refroidissez, revérifiez la consistance une fois froide plutôt que tiède."
              ],
              "dietaryNotes": "Contient des produits laitiers et de l’œuf, selon la crème utilisée. Vérifiez la présence de gluten si cela compte : beaucoup de crèmes prêtes à l’emploi sont épaissies à l’amidon de blé.",
              "nutrition": {
                      "basis": "Estimé à partir des ingrédients indiqués, pour 2 portions, avec une crème vanille du commerce standard. Le document source ne fournissait aucune valeur nutritionnelle : il s’agit donc d’une estimation, non d’une analyse en laboratoire."
              }
      },
      "banana-smoothie": {
              "title": "Smoothie banane-orange",
              "description": "Un smoothie simple et crémeux à la banane et à l’orange, avec du yaourt grec — lisse, versable et naturellement sucré.",
              "ingredients": [
                      {
                              "amount": "1",
                              "item": "Banane"
                      },
                      {
                              "amount": "1/2",
                              "item": "Orange, pelée et coupée en quartiers"
                      },
                      {
                              "amount": "1/3 tasse",
                              "item": "Yaourt grec"
                      },
                      {
                              "amount": "1/4 tasse",
                              "item": "Eau ou lait",
                              "note": "Laitier ou végétal"
                      },
                      {
                              "amount": "1-2 c. à café",
                              "item": "Miel ou sirop d’érable",
                              "note": "Facultatif"
                      }
              ],
              "instructions": [
                      "Coupez grossièrement la banane et les quartiers d’orange, puis mettez-les dans un blender avec le yaourt et l’eau (ou le lait).",
                      "Mixez jusqu’à obtenir une texture crémeuse et lisse. Goûtez, puis rectifiez avec du miel si besoin."
              ],
              "servingTips": [
                      "Mixez un peu plus longtemps que nécessaire : mal mixés, les quartiers d’orange laissent de fines fibres filandreuses, le principal risque dans une boisson par ailleurs très lisse.",
                      "Ce smoothie se verse sans retenir sa forme, ce qui en fait naturellement une texture liquidifiée de niveau 3 une fois mixé.",
                      "Pour qui a besoin d’une texture plus épaisse tenant à la cuillère plutôt que d’une boisson, ajoutez du yaourt ou un épaississant jusqu’à une consistance de niveau 4.",
                      "Servez aussitôt après avoir mixé : les smoothies se séparent ou se fluidifient en attendant."
              ],
              "dietaryNotes": "Végétarien. Utilisez un yaourt et un lait végétaux pour une version sans produits laitiers.",
              "nutrition": {
                      "basis": "Par portion ; la recette en donne 2."
              }
      },
      "blueberry-smoothie": {
              "title": "Smoothie aux myrtilles",
              "description": "Des myrtilles mixées avec du yaourt et du lait, filtrées pour retirer les peaux, puis épaissies en boisson légèrement épaisse.",
              "ingredients": [
                      {
                              "amount": "1/2 tasse",
                              "item": "Myrtilles",
                              "note": "75 g"
                      },
                      {
                              "amount": "1/2 tasse",
                              "item": "Yaourt nature",
                              "note": "120 ml"
                      },
                      {
                              "amount": "1/2 tasse",
                              "item": "Lait",
                              "note": "120 ml"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Sucre",
                              "note": "Facultatif"
                      },
                      {
                              "amount": "Selon les indications",
                              "item": "Épaississant du commerce",
                              "note": "Uniquement si nécessaire pour atteindre le niveau 2 prescrit"
                      }
              ],
              "instructions": [
                      "Mixez les myrtilles, le yaourt, le lait et le sucre jusqu’à obtenir un mélange lisse.",
                      "Passez au tamis fin pour retirer les peaux.",
                      "N’ajoutez de l’épaississant que si c’est nécessaire pour atteindre le niveau 2 prescrit, en suivant les indications du produit.",
                      "Laissez reposer le temps indiqué, remuez, puis vérifiez avant de servir."
              ],
              "servingTips": [
                      "Le niveau 2 désigne l’épaisseur d’une boisson, pas la texture d’un aliment. La quantité d’épaississant dépend du produit utilisé et du niveau réellement prescrit : suivez les indications du fabricant plutôt qu’un nombre de cuillères fixe.",
                      "Laissez reposer le temps indiqué par l’épaississant avant de juger. La plupart continuent d’épaissir pendant plusieurs minutes, et une boisson qui paraît juste après le mélange peut être trop épaisse une fois à table.",
                      "Vérifiez la boisson finie avec le test d’écoulement IDDSI, à la température à laquelle elle sera servie. Réchauffer ou refroidir modifie son écoulement.",
                      "Filtrez avant d’épaissir. Les pépins, les peaux et les fibres de fruit sont la seule chose qu’un épaississant ne peut pas corriger."
              ],
              "dietaryNotes": "Contient des produits laitiers. Naturellement sans gluten. Les peaux de myrtille doivent être filtrées : elles ne se désagrègent pas au mixeur.",
              "nutrition": {
                      "basis": "Estimé à partir des ingrédients indiqués, pour 2 portions, sucre facultatif compris. Il s’agit d’une estimation, non d’une analyse en laboratoire."
              }
      },
      "butternut-squash-bisque": {
              "title": "Velouté de courge butternut",
              "description": "Un velouté de courge butternut d’une douceur naturelle, parfaitement lisse, enrichi de crème et d’épices chaudes — un bol de pur réconfort.",
              "ingredients": [
                      {
                              "amount": "900 g",
                              "item": "Courge butternut, pelée et coupée en cubes",
                              "note": "De la courge prédécoupée convient très bien pour gagner du temps"
                      },
                      {
                              "amount": "1 moyen",
                              "item": "Oignon, en dés"
                      },
                      {
                              "amount": "2 gousses",
                              "item": "Ail, haché"
                      },
                      {
                              "amount": "4 tasses",
                              "item": "Bouillon de volaille ou de légumes pauvre en sel"
                      },
                      {
                              "amount": "1/2 tasse",
                              "item": "Crème entière",
                              "note": "Ou du lait de coco entier pour une version sans produits laitiers"
                      },
                      {
                              "amount": "1/4 c. à café",
                              "item": "Noix de muscade moulue"
                      },
                      {
                              "amount": "1/4 c. à café",
                              "item": "Cannelle moulue"
                      },
                      {
                              "amount": "1/4 c. à café",
                              "item": "Poivre blanc"
                      },
                      {
                              "amount": "2 c. à soupe",
                              "item": "Beurre"
                      },
                      {
                              "amount": "1 c. à soupe",
                              "item": "Sirop d’érable",
                              "note": "Facultatif, pour un peu plus de douceur"
                      }
              ],
              "instructions": [
                      "Faites fondre le beurre dans une grande casserole à feu moyen. Ajoutez l’oignon et l’ail et faites cuire environ 5 minutes, jusqu’à ce qu’ils soient tendres et parfumés.",
                      "Ajoutez la courge en cubes et remuez pour bien l’enrober de beurre.",
                      "Versez le bouillon et portez à ébullition. Baissez à feu doux et laissez mijoter à couvert 25 à 30 minutes, jusqu’à ce que la courge soit très tendre et se perce sans effort à la fourchette.",
                      "Retirez du feu. Mixez au mixeur plongeant jusqu’à obtenir une texture parfaitement lisse et soyeuse. Vous pouvez aussi mixer par fournées au blender, en faisant attention au liquide chaud.",
                      "Remettez le velouté dans la casserole à feu doux. Incorporez la crème, la muscade, la cannelle, le poivre blanc et le sirop d’érable le cas échéant.",
                      "Réchauffez doucement en remuant souvent, jusqu’à ce que le velouté soit chaud. Ne le laissez pas bouillir après l’ajout de la crème.",
                      "Goûtez et rectifiez l’assaisonnement. Le velouté doit être parfaitement lisse, sans le moindre grumeau. Au besoin, mixez de nouveau pour une onctuosité absolue.",
                      "Servez dans des bols chauds avec un filet de crème en spirale. Sa texture lisse en fait un plat facile en cas de difficultés de déglutition."
              ],
              "servingTips": [
                      "Ce velouté est naturellement lisse, mais peut être passé au tamis fin pour plus de finesse encore si nécessaire.",
                      "Il épaissit en refroidissant. Ajoutez du bouillon au réchauffage pour retrouver la consistance voulue.",
                      "Servez tiède — trop chaud, le velouté peut brûler et compliquer la déglutition.",
                      "Congelez-le en portions individuelles pour le réchauffer facilement plus tard."
              ],
              "dietaryNotes": "Sans gluten, avec une option naturellement sans produits laitiers. Pauvre en sodium avec un bouillon maison. Texture parfaitement lisse, adaptée aux régimes dysphagie.",
              "nutrition": {
                      "basis": "Estimé à partir des ingrédients indiqués, pour 6 portions, sirop d’érable facultatif compris. Il s’agit d’une estimation, non d’une analyse en laboratoire."
              }
      },
      "chicken-golden-soup": {
              "title": "Soupe dorée au poulet et aux pastina",
              "description": "Une soupe de poulet apaisante à la teinte dorée, avec de minuscules pâtes pastina en forme d’étoile, pensée pour être douce et nourrissante.",
              "ingredients": [
                      {
                              "amount": "450 g",
                              "item": "Blancs de poulet désossés et sans peau"
                      },
                      {
                              "amount": "8 tasses",
                              "item": "Bouillon de volaille pauvre en sel"
                      },
                      {
                              "amount": "1 tasse",
                              "item": "Pâtes pastina",
                              "note": "Petites étoiles ou autres petites pâtes à potage"
                      },
                      {
                              "amount": "2 moyennes",
                              "item": "Carottes, en tout petits dés"
                      },
                      {
                              "amount": "2 branches",
                              "item": "Céleri, en tout petits dés"
                      },
                      {
                              "amount": "1 petit",
                              "item": "Oignon, finement émincé"
                      },
                      {
                              "amount": "3 gousses",
                              "item": "Ail, haché"
                      },
                      {
                              "amount": "1/4 tasse",
                              "item": "Persil frais, ciselé"
                      },
                      {
                              "amount": "1/4 c. à café",
                              "item": "Curcuma",
                              "note": "Pour la couleur dorée et ses vertus anti-inflammatoires"
                      },
                      {
                              "amount": "1 c. à soupe",
                              "item": "Huile d’olive"
                      }
              ],
              "instructions": [
                      "Poivrez les blancs de poulet. Dans une grande casserole, portez le bouillon à frémissement à feu moyen.",
                      "Plongez les blancs entiers dans le bouillon frémissant. Baissez à feu doux, couvrez et laissez cuire 15 à 20 minutes, jusqu’à ce que le poulet soit cuit à cœur et très tendre.",
                      "Retirez le poulet et laissez-le reposer 10 minutes. Effilochez-le en petits morceaux tendres à l’aide de deux fourchettes. Il doit se défaire sans aucune résistance.",
                      "Dans la même casserole, faites chauffer l’huile d’olive à feu moyen. Ajoutez l’oignon, les carottes et le céleri. Laissez cuire environ 8 minutes, jusqu’à ce qu’ils soient très tendres.",
                      "Ajoutez l’ail et le curcuma, et remuez 1 minute jusqu’à ce que le mélange embaume.",
                      "Versez le bouillon et portez à ébullition. Ajoutez les pastina et faites-les cuire selon les indications du paquet, en général 8 à 10 minutes, jusqu’à ce qu’elles soient très tendres.",
                      "Remettez le poulet effiloché dans la casserole. Les pâtes doivent être assez tendres pour s’écraser à la fourchette.",
                      "Incorporez le persil frais. Goûtez et rectifiez l’assaisonnement. La soupe doit être réconfortante et facile à manger.",
                      "En cas de difficultés de déglutition, la soupe peut être servie telle quelle ou légèrement écrasée pour mieux lier les pâtes et le poulet."
              ],
              "servingTips": [
                      "Faites cuire les pâtes un peu plus longtemps que ne l’indique le paquet, pour une texture plus souple.",
                      "Taillez les légumes très finement, afin qu’ils ne demandent aucune mastication.",
                      "Le poulet doit être si tendre qu’il se défait dans le bouillon.",
                      "Pour les régimes mixés, passez toute la soupe au mixeur jusqu’à ce qu’elle soit parfaitement lisse avant de servir."
              ],
              "dietaryNotes": "Option sans gluten possible avec des pâtes de riz, ou en supprimant les pâtes. Version pauvre en sel avec un bouillon maison.",
              "nutrition": {
                      "basis": "Estimé à partir des ingrédients indiqués, pour 4 portions, avec le bouillon pauvre en sel prévu par la recette. Il s’agit d’une estimation, non d’une analyse en laboratoire."
              }
      },
      "chicken-noodle-soup": {
              "title": "Soupe de poulet aux nouilles",
              "description": "Une soupe de poulet aux nouilles entièrement maison, montée sur un bouillon mijoté longuement, avec du poulet effiloché et des nouilles aux œufs fondantes.",
              "ingredients": [
                      {
                              "amount": "2 c. à soupe",
                              "item": "Huile végétale"
                      },
                      {
                              "amount": "4 c. à café",
                              "item": "Sel, en deux fois"
                      },
                      {
                              "amount": "900 g",
                              "item": "Morceaux de poulet avec os et peau",
                              "note": "De préférence un mélange de cuisses et de blancs"
                      },
                      {
                              "amount": "8 tasses",
                              "item": "Bouillon de volaille pauvre en sel"
                      },
                      {
                              "amount": "4 tasses",
                              "item": "Eau froide"
                      },
                      {
                              "amount": "2",
                              "item": "Brins de thym"
                      },
                      {
                              "amount": "1",
                              "item": "Feuille de laurier"
                      },
                      {
                              "amount": "1 petit",
                              "item": "Oignon jaune, grossièrement haché",
                              "note": "Environ 1,25 tasse"
                      },
                      {
                              "amount": "2",
                              "item": "Branches de céleri, émincées à 3 mm",
                              "note": "Environ 1,25 tasse"
                      },
                      {
                              "amount": "1 grosse",
                              "item": "Carotte, pelée et émincée à 3 mm",
                              "note": "Environ 1 tasse"
                      },
                      {
                              "amount": "170 g",
                              "item": "Larges nouilles aux œufs",
                              "note": "Cassez-les court avant de les ajouter, ou remplacez-les par une petite forme comme les pastina — les nouilles longues sont le seul vrai danger de ce bol"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Poivre noir du moulin"
                      },
                      {
                              "amount": "1/4 tasse",
                              "item": "Persil frais, finement ciselé"
                      }
              ],
              "instructions": [
                      "Dans une grande casserole profonde, faites chauffer l’huile à feu moyen-vif. Salez le poulet sur toutes ses faces avec 2 cuillères à café de sel, puis déposez-le peau vers le bas. Laissez cuire sans y toucher jusqu’à ce qu’il soit bien doré d’un côté, environ 5 minutes. Retournez et laissez dorer l’autre face, environ 5 minutes de plus.",
                      "Ajoutez le bouillon, l’eau, le thym et le laurier. Portez à tout petit frémissement à feu moyen-vif, puis baissez à feu doux-moyen et laissez cuire jusqu’à ce qu’un thermomètre planté dans la partie la plus épaisse d’un blanc indique 74 °C, soit 20 à 30 minutes.",
                      "Transférez les blancs sur une planche. Poursuivez la cuisson de la viande brune environ 40 minutes de plus, puis transférez-la également et laissez tout refroidir au moins 10 minutes. Retirez la peau et les os et jetez-les. Effilochez le poulet en morceaux tendres, de la taille d’une bouchée.",
                      "Pendant ce temps, retirez le thym et le laurier. Ajoutez l’oignon, le céleri et la carotte, et faites cuire à feu doux-moyen en ajustant pour maintenir un tout petit frémissement, en remuant de temps en temps, jusqu’à ce qu’ils soient tout juste tendres, environ 5 minutes. Cassez les nouilles en tronçons courts avant de les ajouter, puis laissez-les cuire en remuant de temps en temps jusqu’à ce qu’elles soient souples — une à deux minutes au-delà de l’al dente, et non à l’al dente.",
                      "Incorporez le poulet et le poivre, puis salez avec les 2 cuillères à café de sel restantes selon le goût.",
                      "Répartissez la soupe dans les bols. Parsemez de persil et d’un tour de poivre.",
                      "À préparer à l’avance : la soupe (sans les nouilles) se prépare jusqu’à 5 jours à l’avance. Conservez-la au réfrigérateur dans un récipient hermétique. Pour servir, portez-la à frémissement dans une grande casserole, ajoutez les nouilles et laissez cuire jusqu’à l’al dente, environ 5 minutes."
              ],
              "servingTips": [
                      "Les nouilles aux œufs, dans leur longueur normale, présentent un vrai risque d’étouffement — coupez-les court aux ciseaux de cuisine directement dans le bol, ou remplacez-les par une petite forme de pâtes comme les pastina, pour toute personne en dessous du niveau 6.",
                      "Effilochez le poulet très finement et hachez les légumes très petits pour le niveau 5. Le blanc, surtout, doit se défaire sans presque aucune résistance une fois bien cuit.",
                      "Pour les niveaux 3 à 4, égouttez le bouillon, mixez les légumes et le poulet avec un peu de bouillon jusqu’à obtenir une texture lisse, et supprimez complètement les nouilles.",
                      "Préparer le bouillon (sans nouilles) jusqu’à 5 jours à l’avance est une excellente façon de cuisiner en quantité, puis de finir chaque bol selon la texture requise."
              ],
              "dietaryNotes": "Contient du gluten (nouilles aux œufs) ; remplacez-les par des nouilles sans gluten ou supprimez-les pour une version sans gluten.",
              "nutrition": {
                      "basis": "Par portion ; la recette en donne 8.",
                      "flag": "à 1 140 mg par portion, c’est près de la moitié de la limite quotidienne de sodium d’un adulte. Utilisez un bouillon réellement pauvre en sel ou fait maison, et goûtez avant d’ajouter les 4 cuillères à café de sel complètes."
              }
      },
      "chinese-egg-drop-soup": {
              "title": "Soupe aux œufs à la chinoise",
              "description": "Un bouillon doré et doux, traversé de rubans d’œuf soyeux — monté sur un fond de volaille et de champignons mijoté longuement.",
              "ingredients": [
                      {
                              "amount": "1",
                              "item": "Poulet entier ou morceaux de poulet",
                              "note": "Pour le bouillon ; le poids n’était pas précisé dans la source"
                      },
                      {
                              "amount": "Selon besoin",
                              "item": "Eau, pour blanchir",
                              "note": "Les aromates de blanchiment n’étaient pas précisés dans la source — de l’eau claire suffit"
                      },
                      {
                              "amount": "Une poignée",
                              "item": "Champignons shiitake séchés",
                              "note": "Pour le fond de champignons ; faites tremper 15 à 30 minutes. Quantité non précisée dans la source"
                      },
                      {
                              "amount": "Quelques tranches",
                              "item": "Gingembre frais"
                      },
                      {
                              "amount": "2-3",
                              "item": "Ciboules",
                              "note": "Entières, plus un peu de vert émincé pour la finition"
                      },
                      {
                              "amount": "Quelques tranches",
                              "item": "Radis daikon"
                      },
                      {
                              "amount": "Un trait",
                              "item": "Vin de Shaoxing"
                      },
                      {
                              "amount": "Selon le goût",
                              "item": "Sel et poivre blanc",
                              "note": "Pour la soupe finie"
                      },
                      {
                              "amount": "1/2 tasse",
                              "item": "Fécule de pomme de terre",
                              "note": "Délayée dans juste assez d’eau pour former une suspension ; ajoutez-en si besoin"
                      },
                      {
                              "amount": "3-4",
                              "item": "Œufs, battus",
                              "note": "Quantité non précisée dans la source — ajustez selon la quantité de rubans souhaitée"
                      }
              ],
              "instructions": [
                      "Mettez le poulet et tous les ingrédients du blanchiment dans une casserole. Laissez frémir 5 à 10 minutes, puis jetez le liquide et rincez l’écume du poulet.",
                      "Pour le fond de champignons, faites tremper les shiitake séchés dans l’eau 15 à 30 minutes.",
                      "Remettez le poulet dans une casserole propre avec le gingembre, les ciboules et le radis. Versez le jus de trempage des champignons, le vin de Shaoxing et assez d’eau pour couvrir. Portez à ébullition, baissez à frémissement doux et laissez cuire 1 à 2 heures, jusqu’à ce que le poulet se défasse entièrement. Filtrez le bouillon une fois prêt.",
                      "Pour la soupe, transvasez le bouillon filtré dans une casserole propre et assaisonnez de sel et de poivre blanc.",
                      "Liez le bouillon avec la fécule délayée, en commençant par environ une demi-tasse et en ajoutant si vous le souhaitez plus épais.",
                      "Versez les œufs battus en un mince filet, en les projetant vers l’avant dans la soupe pour qu’ils prennent en rubans fins et souples.",
                      "Servez chaud, parsemé de vert de ciboule émincé."
              ],
              "servingTips": [
                      "Une fois filtrée, cette recette est réellement douce pour la plupart des niveaux de texture : le bouillon est lisse et les rubans d’œuf sont naturellement tendres.",
                      "La recette source ne précisait ni les quantités d’aromates ni le nombre d’œufs — commencez léger, goûtez et ajustez plutôt que de deviner de grandes quantités.",
                      "Pour le niveau 4 ou en dessous, mixez brièvement la soupe finie afin que les rubans d’œuf et les éclats de champignon soient parfaitement lisses, et supprimez la ciboule de finition.",
                      "Veillez à bien filtrer le bouillon — de petits éclats d’os ou des fibres de gingembre qui passeraient à travers représentent un vrai danger."
              ],
              "dietaryNotes": "Naturellement sans produits laitiers. Contient de l’œuf ; utilisez du tamari à la place de tout assaisonnement à base de soja pour une version sans gluten. Les valeurs ci-dessus sont estimées à partir des ingrédients, la recette source n’en fournissant pas.",
              "nutrition": {
                      "basis": "Estimé pour 6 portions de soupe finie. La recette source laissait plusieurs quantités ouvertes : on suppose ici un poulet de 1,4 kg, 4 œufs, un bouillon filtré et la chair servie à part plutôt que dans la soupe. À considérer comme un ordre de grandeur."
              }
      },
      "chinese-silken-tofu": {
              "title": "Tofu soyeux à la sauce soja tiède",
              "description": "Du tofu soyeux bien frais, nappé d’une sauce tiède parfumée au soja, à l’ail et à la ciboule — il demande à peine une cuillère, et aucune mastication.",
              "ingredients": [
                      {
                              "amount": "300 g",
                              "item": "Tofu soyeux",
                              "note": "Du tofu mou convient aussi"
                      },
                      {
                              "amount": "1,5 c. à soupe",
                              "item": "Huile végétale",
                              "note": "Ou toute huile neutre"
                      },
                      {
                              "amount": "2/3 tasse",
                              "item": "Oignon jaune ou blanc, en petits dés"
                      },
                      {
                              "amount": "1/2 tasse",
                              "item": "Ciboule, finement ciselée"
                      },
                      {
                              "amount": "3 gousses",
                              "item": "Ail, haché"
                      },
                      {
                              "amount": "3 c. à soupe",
                              "item": "Sauce soja claire ou ordinaire"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Sucre blanc"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Huile de sésame grillé"
                      }
              ],
              "instructions": [
                      "Décollez le film plastique à un coin de la barquette de tofu. En le maintenant en place, retournez la barquette au-dessus de l’évier et laissez s’écouler le liquide. Posez un essuie-tout propre sur l’ouverture, retournez le tout sur une surface plane et laissez le papier absorber l’humidité de surface.",
                      "Entaillez légèrement chaque coin de la barquette pour laisser entrer l’air. Posez une assiette de service à l’envers sur le tofu, puis retournez délicatement l’assiette et la barquette ensemble pour que le tofu se démoule de lui-même. Réfrigérez jusqu’à ce qu’il soit bien froid.",
                      "Faites chauffer l’huile végétale dans une petite casserole à feu moyen. Ajoutez l’oignon, la ciboule et l’ail. Faites revenir 2 à 3 minutes, jusqu’à ce que l’oignon devienne tendre et translucide.",
                      "Baissez à feu doux. Versez la sauce soja, le sucre et l’huile de sésame directement dans la casserole avec l’oignon et l’ail. Mélangez bien et laissez chauffer environ 1 minute. Laissez la sauce tiédir 1 minute.",
                      "Sortez le tofu du réfrigérateur. Versez la sauce tiède uniformément sur le bloc froid — le tofu ne demande aucune cuisson, il est déjà parfaitement fondant à la sortie de la barquette."
              ],
              "servingTips": [
                      "Le tofu soyeux est l’une des sources de protéines les plus tendres qui soient — il s’écrase à plat sous une pression de cuillère quasi nulle, ce qui en fait une base de niveau 4 immédiate.",
                      "Les graines de sésame et la ciboule crue de la garniture ont été laissées de côté : ce plat est classé niveau 4, et ce sont des éléments petits, durs ou fibreux qui n’ont pas leur place dans un régime lisse. La ciboule cuite dans la sauce, elle, ne pose pas de problème : elle s’attendrit complètement à la casserole.",
                      "S’il faut une texture pleinement de niveau 3, écrasez le tofu avec la sauce mélangée jusqu’à ce que l’ensemble se verse, plutôt que de le servir en bloc entier.",
                      "Servez la sauce tiède, non brûlante, directement sur le tofu froid — le contraste fait partie du plat, mais une sauce bouillante présente un vrai risque."
              ],
              "dietaryNotes": "Végétarien, et végétalien possible (vérifiez le sucre). Utilisez du tamari pour une version sans gluten. Très riche en sodium — voir la note ci-dessus avant de servir à une personne suivant un régime pauvre en sel.",
              "nutrition": {
                      "basis": "Par portion ; cette recette en donne 2.",
                      "flag": "à 1 523 mg de sodium par portion, c’est plus de la moitié de la limite quotidienne d’un adulte, presque entièrement dus à la sauce soja — utilisez une sauce soja pauvre en sel et commencez en dessous de la quantité indiquée."
              }
      },
      "chinese-steamed-egg": {
              "title": "Œufs vapeur à la chinoise",
              "description": "Un flan d’œuf vapeur soyeux et salé, nappé d’une sauce brillante au soja et au sésame — si lisse qu’il demande à peine une cuillère, et encore moins de mastication.",
              "ingredients": [
                      {
                              "amount": "2",
                              "item": "Œufs"
                      },
                      {
                              "amount": "3/4 tasse",
                              "item": "Eau"
                      },
                      {
                              "amount": "1/2 c. à café",
                              "item": "Bouillon de poule en poudre"
                      },
                      {
                              "amount": "1/4 c. à café",
                              "item": "Sel"
                      },
                      {
                              "amount": "1 c. à soupe",
                              "item": "Sauce soja",
                              "note": "Pour la sauce"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Huile de sésame",
                              "note": "Pour la sauce"
                      },
                      {
                              "amount": "1/2 c. à café",
                              "item": "Sucre",
                              "note": "Pour la sauce"
                      }
              ],
              "instructions": [
                      "Battez les œufs avec l’eau, le bouillon en poudre et le sel.",
                      "Passez le mélange au tamis dans un bol. Assurez-vous qu’il ne reste aucune bulle d’air — s’il en reste, crevez-les avec un briquet ou retirez-les à la cuillère.",
                      "Couvrez de film alimentaire, percez quelques trous et faites cuire 15 minutes à la vapeur. Le flan doit être tout juste pris et trembler légèrement au centre.",
                      "Pendant ce temps, préparez une sauce simple avec la sauce soja, l’huile de sésame et le sucre.",
                      "À l’aide d’un petit couteau, tracez un motif dans le flan, versez la sauce dessus et servez."
              ],
              "servingTips": [
                      "La garniture de ciboule dont on finit habituellement ce plat a été laissée de côté : le flan est classé niveau 4, les lanières de ciboule ne le sont pas. Si vous remettez une garniture pour quelqu’un sans restriction, filtrez d’abord la sauce pour qu’aucun éclat croquant d’huile pimentée ne l’accompagne.",
                      "Le tamisage du mélange cru à l’étape 2 est ce qui rend le flan pris parfaitement lisse. Ne le sautez pas.",
                      "Cuisez doucement. Un flan trop cuit devient caoutchouteux et rend de l’eau, ce qui crée une couche liquide fluide plus risquée à avaler que le flan lui-même.",
                      "Servez tiède plutôt que brûlant — le flan retient bien la chaleur et peut ébouillanter."
              ],
              "dietaryNotes": "Naturellement sans gluten si vous remplacez la sauce soja par du tamari. Très riche en sodium — voir la note nutritionnelle ci-dessous avant de servir à une personne suivant un régime pauvre en sel.",
              "nutrition": {
                      "basis": "Par portion, calculé à partir des ingrédients indiqués (la recette en donne 2). On suppose que la totalité de la sauce est consommée."
              }
      },
      "classic-meatloaf": {
              "title": "Pain de viande classique",
              "description": "Un pain de viande moelleux et tendre, glacé au ketchup acidulé — réconfortant, familier, et facile à attendrir encore pour les régimes plus doux.",
              "ingredients": [
                      {
                              "amount": "2 gros",
                              "item": "Œufs"
                      },
                      {
                              "amount": "1 moyen",
                              "item": "Oignon jaune, coupé en quartiers"
                      },
                      {
                              "amount": "1 moyenne",
                              "item": "Carotte, pelée et coupée en gros morceaux",
                              "note": "Gros uniquement parce qu’ils passent ensuite au robot — ils finissent finement hachés dans le pain de viande"
                      },
                      {
                              "amount": "1",
                              "item": "Branche de céleri, coupée en gros morceaux",
                              "note": "Également hachée fin ; aucune fibre de céleri ne subsiste dans le pain cuit"
                      },
                      {
                              "amount": "1 gousse",
                              "item": "Ail, pelée"
                      },
                      {
                              "amount": "680 g",
                              "item": "Viande hachée",
                              "note": "De préférence un mélange bœuf, porc et veau, ou de la dinde 93/7"
                      },
                      {
                              "amount": "3/4 tasse",
                              "item": "Chapelure"
                      },
                      {
                              "amount": "1/4 tasse",
                              "item": "Persil frais, ciselé",
                              "note": "Un peu plus pour la finition si souhaité"
                      },
                      {
                              "amount": "1/4 tasse",
                              "item": "Lait"
                      },
                      {
                              "amount": "1/4 tasse",
                              "item": "Ketchup"
                      },
                      {
                              "amount": "1 c. à soupe",
                              "item": "Sauce Worcestershire"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Sel"
                      },
                      {
                              "amount": "1/2 c. à café",
                              "item": "Poivre noir concassé"
                      },
                      {
                              "amount": "1/4 tasse",
                              "item": "Ketchup",
                              "note": "Pour le glaçage"
                      },
                      {
                              "amount": "2 c. à soupe",
                              "item": "Cassonade bien tassée",
                              "note": "Pour le glaçage"
                      },
                      {
                              "amount": "1 c. à soupe",
                              "item": "Vinaigre de vin rouge",
                              "note": "Pour le glaçage"
                      }
              ],
              "instructions": [
                      "Préchauffez le four à 175 °C. Graissez un moule à cake de 23 × 13 cm.",
                      "Dans un grand bol, battez légèrement les deux œufs.",
                      "Mettez l’oignon, le céleri, la carotte et l’ail dans un robot et mixez par impulsions jusqu’à obtenir un hachis fin — environ 1 tasse. Ajoutez-le au bol avec les œufs.",
                      "Ajoutez la viande hachée, la chapelure, le persil, le lait, le ketchup, la sauce Worcestershire, le sel et le poivre. Mélangez à la main sans trop travailler la préparation. Tassez légèrement dans le moule.",
                      "Dans un petit bol, mélangez le ketchup, la cassonade et le vinaigre de vin rouge pour le glaçage. Badigeonnez le pain de viande de la moitié du glaçage et enfournez 35 minutes.",
                      "Badigeonnez du reste de glaçage et remettez au four 55 minutes, jusqu’à ce que le cœur atteigne au moins 74 °C au thermomètre et que le pain soit parfaitement tendre de part en part. La température continuera de monter légèrement pendant le repos.",
                      "Laissez reposer 15 minutes avant de démouler ou de trancher."
              ],
              "servingTips": [
                      "Une portion correspond à 2 tranches. Comme il s’agit de viande hachée, ce pain est naturellement tendre, sans fibre musculaire entière à mâcher — écrasez une tranche à la fourchette avec une cuillerée de glaçage pour un niveau 5 immédiat.",
                      "Pour aller plus vite, façonnez la préparation en 6 petits pains sur une plaque à rebord et enfournez à 200 °C environ 25 minutes, en vérifiant les 74 °C à cœur.",
                      "Ne travaillez pas trop la préparation : trop malaxée, elle donne un pain plus dense et plus difficile à défaire, ce qui va à l’encontre de l’objectif de texture souple.",
                      "Servez avec un supplément de glaçage ou une sauce légère sur chaque tranche, pour garder le moelleux et faciliter la déglutition."
              ],
              "dietaryNotes": "Réalisable avec une seule viande hachée ou un mélange — les valeurs ci-dessus sont calculées avec du bœuf haché. Contient du gluten tel qu’indiqué ; utilisez une chapelure sans gluten pour l’adapter.",
              "nutrition": {
                      "basis": "Par portion (2 tranches), calculé avec du bœuf haché. Il s’agit d’une portion sur 5."
              }
      },
      "congee": {
              "title": "Congee (bouillie de riz)",
              "description": "Une bouillie de riz à la saveur neutre, mijotée longuement à feu doux jusqu’à devenir épaisse, crémeuse et soyeuse — l’une des textures les plus douces de toute cette collection.",
              "ingredients": [
                      {
                              "amount": "1 tasse",
                              "item": "Riz blanc",
                              "note": "Tout riz à grain moyen ou long convient — jasmin, à sushi ou ordinaire"
                      },
                      {
                              "amount": "8-10 tasses",
                              "item": "Eau ou bouillon",
                              "note": "Plus d’eau donne un congee plus liquide ; le bouillon apporte goût et valeur nutritive"
                      },
                      {
                              "amount": "Selon le goût",
                              "item": "Sel"
                      },
                      {
                              "amount": "Facultatif",
                              "item": "Riz cuit de la veille",
                              "note": "Pour un congee plus rapide — voir la méthode express ci-dessous"
                      },
                      {
                              "amount": "Facultatif",
                              "item": "Aromates",
                              "note": "Gingembre, ail, extrémités de ciboule"
                      },
                      {
                              "amount": "Facultatif",
                              "item": "Légumes racines",
                              "note": "Carotte, céleri, oignon — si vous préparez un bouillon"
                      },
                      {
                              "amount": "Facultatif",
                              "item": "Herbes",
                              "note": "Tiges de coriandre, persil, laurier"
                      }
              ],
              "instructions": [
                      "Réunissez 1 tasse de riz blanc cru et 8 à 10 tasses d’eau ou de bouillon maison dans une grande casserole.",
                      "Portez à ébullition, puis baissez le feu pour maintenir un frémissement régulier. Remuez de temps en temps pour éviter que cela n’attache.",
                      "Laissez cuire à découvert 1 à 2 heures, jusqu’à ce que les grains se défassent, libèrent leur amidon et que le congee soit parfaitement fondant et crémeux. Ajoutez de l’eau si le mélange devient trop épais.",
                      "Ajoutez le sel, des tranches de gingembre et les aromates de votre choix durant les 20 à 30 dernières minutes de cuisson.",
                      "Le congee est prêt lorsqu’il est épais, crémeux et soyeux. Servez-le nature ou garni.",
                      "Pour une version express, réunissez 4 tasses de riz cuit et 3 tasses de bouillon de poule dans une casserole moyenne. Portez à ébullition, puis laissez mijoter 15 à 20 minutes en remuant, jusqu’à ce que le riz se défasse en bouillie. Ajoutez du bouillon pour la consistance souhaitée."
              ],
              "servingTips": [
                      "La proportion classique est de 1 volume de riz pour 8 à 10 volumes d’eau ou de bouillon — visez le haut de la fourchette, et cuisez doucement et longuement, pour le résultat le plus soyeux et le plus adapté au niveau 4.",
                      "Remuez régulièrement pendant toute la cuisson : cela empêche le riz d’attacher au fond et accélère la désagrégation des grains.",
                      "Pour une texture de niveau 4 entièrement mixée, passez le congee fini au mixeur. Tel que mijoté, un congee nature se situe plutôt au niveau 5, avec des grains fondus mais encore perceptibles.",
                      "Gardez des garnitures simples et souples pour les régimes à texture modifiée : échalotes frites, ail frit et cacahuètes grillées sont des ajouts classiques, mais ne conviennent pas en dessous du niveau 6. Un filet de sauce soja ou d’huile de sésame, en revanche, ne pose pas de problème."
              ],
              "dietaryNotes": "Naturellement sans gluten et sans produits laitiers tel qu’indiqué. Utiliser du bouillon plutôt que de l’eau, ou ajouter de la viande effilochée, modifiera l’estimation nutritionnelle ci-dessus.",
              "nutrition": {
                      "basis": "Estimé pour la recette de base (1 tasse de riz cuite dans 9 tasses d’eau avec une pincée de sel, sans ajout facultatif), pour 6 portions. Il s’agit d’une estimation, non d’une analyse en laboratoire."
              }
      },
      "cream-of-mushroom-soup": {
              "title": "Velouté de champignons",
              "description": "Un velouté de champignons d’une onctuosité veloutée, avec de la crème et un bouillon savoureux — chaud, réconfortant et naturellement tendre.",
              "ingredients": [
                      {
                              "amount": "10",
                              "item": "Champignons de Paris bruns",
                              "note": "Nettoyés à l’aide d’un torchon"
                      },
                      {
                              "amount": "100 ml",
                              "item": "Crème entière"
                      },
                      {
                              "amount": "150 ml",
                              "item": "Bouillon",
                              "note": "Tout type convient"
                      },
                      {
                              "amount": "1/2",
                              "item": "Oignon, en dés"
                      },
                      {
                              "amount": "2 gousses",
                              "item": "Ail"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Paprika"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Ail en poudre"
                      },
                      {
                              "amount": "1 brin",
                              "item": "Thym frais"
                      },
                      {
                              "amount": "30 ml",
                              "item": "Vin blanc",
                              "note": "Facultatif"
                      },
                      {
                              "amount": "2 c. à soupe",
                              "item": "Fécule de maïs"
                      },
                      {
                              "amount": "2 c. à soupe",
                              "item": "Beurre"
                      }
              ],
              "instructions": [
                      "Nettoyez la terre des champignons avec un torchon. Émincez-les et réservez.",
                      "Taillez finement l’oignon et les gousses d’ail.",
                      "Dans une poêle, mettez le beurre et le brin de thym. Laissez chauffer jusqu’à ce que le beurre s’imprègne du thym, puis retirez le brin.",
                      "Ajoutez les champignons, l’oignon et l’ail. Faites cuire en remuant de temps en temps, jusqu’à évaporation complète de l’eau des champignons.",
                      "Déglacez au vin blanc. Laissez cuire jusqu’à évaporation complète.",
                      "Versez le bouillon et portez à ébullition. Incorporez le paprika et l’ail en poudre.",
                      "Délayez la fécule de maïs dans autant d’eau pour former une suspension. Mélangez jusqu’à disparition des grumeaux.",
                      "Ajoutez cette suspension dans la casserole en ébullition. Baissez à feu doux et laissez mijoter jusqu’à épaississement.",
                      "Une fois le velouté épaissi, incorporez la crème. Servez chaud."
              ],
              "servingTips": [
                      "Émincez les champignons finement pour une texture finale plus tendre, qui demande un minimum de mastication.",
                      "Pour une consistance encore plus lisse, mixez la moitié du velouté avant d’ajouter la crème.",
                      "Le velouté épaissit en refroidissant. Ajoutez du bouillon au réchauffage si nécessaire.",
                      "Servez tiède pour éviter les brûlures, ce qui compte d’autant plus en cas de difficultés de déglutition."
              ],
              "dietaryNotes": "Sans gluten avec de la fécule de maïs. Pour une version sans produits laitiers, remplacez la crème par de la crème de coco.",
              "nutrition": {
                      "basis": "Estimé à partir des ingrédients indiqués, pour 3 portions, vin blanc facultatif compris. Il s’agit d’une estimation, non d’une analyse en laboratoire."
              }
      },
      "creamy-scrambled-eggs": {
              "title": "Œufs brouillés crémeux",
              "description": "Des œufs brouillés remués lentement et délicatement, en tout petits grains souples — l’une des protéines les plus simples et les plus douces à servir.",
              "ingredients": [
                      {
                              "amount": "4 gros",
                              "item": "Œufs"
                      },
                      {
                              "amount": "1/8 c. à café",
                              "item": "Sel",
                              "note": "Ou davantage selon le goût"
                      },
                      {
                              "amount": "1/2 c. à soupe",
                              "item": "Beurre ou huile d’olive"
                      },
                      {
                              "amount": "Facultatif",
                              "item": "Poivre noir du moulin et ciboulette ciselée",
                              "note": "Au moment de servir"
                      }
              ],
              "instructions": [
                      "Cassez les œufs dans un bol moyen, salez et fouettez jusqu’à obtenir un mélange lisse et mousseux. Laissez reposer 5 à 10 minutes.",
                      "Faites fondre le beurre dans une poêle antiadhésive moyenne, à feu doux à moyen. Lorsque le beurre commence à grésiller, fouettez les œufs une dernière fois puis versez-les dans la poêle. Aussitôt, à l’aide d’une spatule souple, décrivez sans arrêt de petits cercles dans la poêle, jusqu’à ce que les œufs épaississent légèrement et que de très petits grains commencent à se former, environ 30 secondes.",
                      "Passez des petits cercles à de grands mouvements de balayage dans la poêle, jusqu’à voir apparaître des grains plus gros, crémeux et fondants, environ 20 secondes.",
                      "Lorsque les œufs sont tout juste pris et encore légèrement coulants par endroits, retirez la poêle du feu et laissez quelques secondes pour finir la cuisson. Mélangez une dernière fois et servez aussitôt, avec un peu de sel, un tour de poivre noir et quelques herbes fraîches ciselées si vous le souhaitez."
              ],
              "servingTips": [
                      "La cuisson douce et lente, avec un remuage constant, est ce qui garde les grains petits, souples et moelleux — c’est naturellement l’une des protéines les plus douces de tout le site.",
                      "Écrasez légèrement les œufs à la fourchette directement dans l’assiette pour un niveau 4 immédiat.",
                      "Supprimez la ciboulette et le poivre concassé pour toute personne au niveau 4 ou en dessous — incorporez plutôt un peu de beurre ou de crème supplémentaire pour le moelleux.",
                      "Ne laissez pas les œufs prendre complètement ni colorer : trop cuits, ils deviennent secs et friables, ce qui est plus difficile à gérer, non l’inverse."
              ],
              "dietaryNotes": "Sans gluten. Naturellement pauvre en glucides. Remplacez le beurre par de l’huile d’olive pour une version sans produits laitiers.",
              "nutrition": {
                      "basis": "Par portion (la recette en donne 2)."
              }
      },
      "creamy-tomato-soup": {
              "title": "Velouté de tomate",
              "description": "Une soupe de tomate enrichie de crème et de purée, puis mixée et filtrée jusqu’à ce qu’il ne reste ni pépins ni peaux.",
              "ingredients": [
                      {
                              "amount": "1 tasse",
                              "item": "Soupe de tomate pauvre en sel",
                              "note": "240 ml"
                      },
                      {
                              "amount": "2 c. à soupe",
                              "item": "Crème entière",
                              "note": "30 ml"
                      },
                      {
                              "amount": "1 c. à soupe",
                              "item": "Purée de tomate lisse",
                              "note": "15 ml"
                      },
                      {
                              "amount": "Selon le goût",
                              "item": "Sel et assaisonnement"
                      },
                      {
                              "amount": "Selon les indications",
                              "item": "Épaississant du commerce",
                              "note": "Uniquement si nécessaire pour atteindre le niveau 3 prescrit"
                      }
              ],
              "instructions": [
                      "Réchauffez doucement la soupe. Ne la laissez pas bouillir.",
                      "Incorporez la crème et la purée de tomate.",
                      "Mixez jusqu’à obtenir une texture parfaitement lisse si nécessaire, puis filtrez pour retenir pépins et morceaux.",
                      "Si elle reste plus fluide que le niveau 3 prescrit, épaississez-la selon les indications du produit.",
                      "Vérifiez-la à la température à laquelle elle sera servie, et servez-la lisse, sans grumeaux ni fibres."
              ],
              "servingTips": [
                      "Les pépins et la peau de tomate sont toute la raison d’être du filtrage à l’étape 3. Ils survivent au mixage, ils sont assez petits pour passer inaperçus, et ce sont précisément eux que le niveau 3 vise à exclure.",
                      "Le basilic et la spirale de crème sur la photographie relèvent du stylisme. Les herbes ne conviennent pas au niveau 3 ; une spirale de crème mélangée à la soupe, en revanche, ne pose pas de problème.",
                      "L’épaississant est un dernier recours, pas un ingrédient. Mixez et filtrez d’abord, puis n’en ajoutez que si la soupe reste plus fluide que le niveau prescrit, en suivant les indications du produit.",
                      "La soupe de tomate en conserve est généralement riche en sodium, même dans ses versions pauvres en sel. Goûtez avant d’ajouter du sel."
              ],
              "dietaryNotes": "Contient des produits laitiers. Vérifiez la présence de gluten dans la soupe en conserve : il sert souvent d’épaississant.",
              "nutrition": {
                      "basis": "Estimé à partir des ingrédients indiqués, pour 2 portions, avec une soupe en conserve pauvre en sel. Le document source ne fournissait aucune valeur nutritionnelle : il s’agit donc d’une estimation, non d’une analyse en laboratoire."
              }
      },
      "egg-salad": {
              "title": "Salade d’œufs",
              "description": "Une salade d’œufs crémeuse et classique, avec céleri, ciboulette et une pointe de moutarde à l’ancienne — souple, moelleuse et facile à prendre à la cuillère.",
              "ingredients": [
                      {
                              "amount": "8",
                              "item": "Œufs durs, écalés"
                      },
                      {
                              "amount": "1/2",
                              "item": "Branche de céleri, en tout petits dés",
                              "note": "Environ 1/3 de tasse — ou supprimez-la ; ses fibres sont le principal risque de texture ici"
                      },
                      {
                              "amount": "1/4 tasse",
                              "item": "Mayonnaise"
                      },
                      {
                              "amount": "2 c. à soupe",
                              "item": "Ciboulette, finement ciselée"
                      },
                      {
                              "amount": "2 c. à café",
                              "item": "Jus de citron frais"
                      },
                      {
                              "amount": "2 c. à café",
                              "item": "Moutarde à l’ancienne"
                      },
                      {
                              "amount": "Selon le goût",
                              "item": "Sel et poivre noir du moulin"
                      },
                      {
                              "amount": "Facultatif",
                              "item": "Paprika",
                              "note": "Au moment de servir"
                      }
              ],
              "instructions": [
                      "Hachez grossièrement les œufs et mettez-les dans un bol moyen. Écrasez-les légèrement à la fourchette pour défaire les jaunes et obtenir un mélange fondant et grumeleux. Ajoutez le céleri, la mayonnaise, la ciboulette, le jus de citron et la moutarde, puis mélangez. Salez et poivrez.",
                      "Transvasez dans un bol de service. Saupoudrez de paprika."
              ],
              "servingTips": [
                      "Les crackers qui accompagnent habituellement ce plat ont été laissés de côté : durs et croquants, associés à une salade souple, ils créent exactement la bouchée à textures mélangées la plus difficile à gérer. Servez plutôt à la cuillère.",
                      "Écrasez les œufs plus soigneusement que pour une salade d’œufs ordinaire, à la fourchette ou au plat d’un couteau, jusqu’à ce qu’il ne reste aucun morceau distinct : vous obtenez un niveau 5 immédiat.",
                      "Pour le niveau 4, mixez brièvement la salade finie au robot avec une cuillerée de mayonnaise supplémentaire, jusqu’à ce qu’elle soit lisse.",
                      "Taillez le céleri très finement, ou supprimez-le, car ses fibres comptent parmi les rares textures réellement risquées de ce plat."
              ],
              "dietaryNotes": "Sans gluten tel qu’indiqué. Riche en cholestérol du fait des œufs — à noter pour qui en surveille l’apport.",
              "nutrition": {
                      "basis": "Par portion ; la recette en donne 4."
              }
      },
      "fluffy-pancakes": {
              "title": "Pancakes moelleux",
              "description": "Des pancakes classiques, souples et aériens, à partir d’une pâte maison toute simple — un petit-déjeuner doux, facile à imbiber de sirop pour le moelleux.",
              "ingredients": [
                      {
                              "amount": "2 tasses",
                              "item": "Farine de blé"
                      },
                      {
                              "amount": "1/4 tasse",
                              "item": "Sucre en poudre ou édulcorant"
                      },
                      {
                              "amount": "4 c. à café",
                              "item": "Levure chimique"
                      },
                      {
                              "amount": "1/4 c. à café",
                              "item": "Bicarbonate de soude"
                      },
                      {
                              "amount": "1/2 c. à café",
                              "item": "Sel"
                      },
                      {
                              "amount": "1,75 tasse",
                              "item": "Lait"
                      },
                      {
                              "amount": "1/4 tasse",
                              "item": "Beurre fondu et légèrement refroidi"
                      },
                      {
                              "amount": "2 c. à café",
                              "item": "Extrait de vanille"
                      },
                      {
                              "amount": "1 gros",
                              "item": "Œuf"
                      }
              ],
              "instructions": [
                      "Réunissez la farine, le sucre (ou l’édulcorant), la levure, le bicarbonate et le sel dans un grand bol. Creusez un puits au centre et ajoutez le lait, le beurre fondu, la vanille et l’œuf.",
                      "Fouettez d’abord les ingrédients liquides entre eux, puis incorporez-les lentement aux ingrédients secs. Mélangez jusqu’à obtenir une pâte lisse (quelques grumeaux ne posent pas de problème). La pâte sera épaisse et crémeuse — si elle est trop épaisse pour se verser aisément, ajoutez un peu de lait, petit à petit.",
                      "Réservez la pâte et laissez-la reposer pendant que vous faites chauffer la poêle.",
                      "Faites chauffer une poêle antiadhésive à feu doux à moyen et graissez-la légèrement au beurre. Versez 1/4 de tasse de pâte et étalez doucement en rond.",
                      "Lorsque le dessous est doré et que des bulles apparaissent en surface, retournez à la spatule et laissez dorer l’autre face. Répétez avec le reste de la pâte.",
                      "Servez avec du miel, du sirop d’érable, des fruits, de la glace ou du yaourt glacé — ou nature."
              ],
              "servingTips": [
                      "Les textures aériennes et spongieuses comme celle des pancakes sont en réalité plus délicates qu’il n’y paraît pour certains troubles de la déglutition : l’éponge absorbe la salive et gonfle. Servez-les bien imbibés de sirop ou d’une sauce fluide, jamais secs.",
                      "Cuisez un peu plus longtemps à feu plus doux pour un pancake plus dense et moins aéré, que certaines personnes trouvent plus facile et plus sûr à gérer.",
                      "Pour une texture plus souple, déchirez le pancake en petits morceaux et laissez-les une minute dans du sirop tiède avant de servir, plutôt que de le servir entier.",
                      "Écartez complètement les pancakes pour toute personne évaluée en dessous du niveau 6 — la mie spongieuse ne convient pas aux régimes hachés, mixés ou liquidifiés."
              ],
              "dietaryNotes": "Végétarien. Contient du gluten tel qu’indiqué ; un mélange de farines sans gluten 1:1 peut généralement être substitué.",
              "nutrition": {
                      "basis": "Par pancake (la recette en donne environ 12 ; une portion correspond généralement à 2)."
              }
      },
      "ground-beef-curry": {
              "title": "Curry de bœuf haché",
              "description": "Un curry japonais riche et rapide, au bœuf haché, à la pomme de terre et à la carotte — lié avec des tablettes de curry et une cuillerée de chocolat noir pour la profondeur.",
              "ingredients": [
                      {
                              "amount": "450 g",
                              "item": "Bœuf haché",
                              "note": "90/10"
                      },
                      {
                              "amount": "5 gousses",
                              "item": "Ail, finement haché"
                      },
                      {
                              "amount": "1 c. à soupe",
                              "item": "Gingembre, finement haché"
                      },
                      {
                              "amount": "1/2 gros",
                              "item": "Oignon, en petits dés"
                      },
                      {
                              "amount": "1 moyenne",
                              "item": "Pomme de terre, pelée et coupée en dés de 1,2 cm",
                              "note": "De petits dés cuisent uniformément pendant le court mijotage"
                      },
                      {
                              "amount": "1/2 tasse",
                              "item": "Carottes, en petits dés"
                      },
                      {
                              "amount": "2",
                              "item": "Tablettes de curry japonais",
                              "note": "La recette source utilisait la marque S&B"
                      },
                      {
                              "amount": "1,5 tasse",
                              "item": "Eau"
                      },
                      {
                              "amount": "1 c. à soupe",
                              "item": "Chocolat noir"
                      }
              ],
              "instructions": [
                      "Hachez finement l’ail et le gingembre. Coupez l’oignon en dés et la pomme de terre en dés de 1,2 cm. Réservez le tout.",
                      "Versez de l’huile dans une poêle à feu moyen et ajoutez l’ail, le gingembre et l’oignon. Faites cuire deux minutes, jusqu’à ce que le mélange embaume et s’attendrisse un peu.",
                      "Ajoutez le bœuf haché et faites-le cuire en l’émiettant, jusqu’à environ 80 % de cuisson.",
                      "Incorporez les pommes de terre et les carottes et laissez cuire une minute pour les enrober d’aromates.",
                      "Ajoutez les tablettes de curry et l’eau, en remuant brièvement pour aider les tablettes à fondre. Couvrez et laissez mijoter 10 minutes à feu doux.",
                      "Retirez le couvercle, mélangez bien et terminez par le chocolat noir. Mélangez jusqu’à ce qu’il soit entièrement fondu et incorporé. La pomme de terre et la carotte doivent alors être parfaitement fondantes.",
                      "Servez le curry à côté du riz ou dessus, et garnissez éventuellement de ciboule et de furikake."
              ],
              "servingTips": [
                      "Coupez la pomme de terre et la carotte en petits dés dès le départ : plus les morceaux sont petits, plus ils cuiront uniformément jusqu’à être parfaitement fondants pendant les 10 minutes de mijotage.",
                      "Le bœuf haché n’a aucune fibre musculaire à mâcher : une fois les légumes tendres, tout le plat s’écrase facilement à la fourchette pour une texture de niveau 5.",
                      "Pour le niveau 4, écrasez ou mixez le curry fini — la sauce est déjà épaisse et lisse, ce qui facilite le mixage.",
                      "Supprimez le furikake et la ciboule de finition pour les régimes à texture modifiée ; tous deux ajoutent de petits éléments secs ou fibreux."
              ],
              "dietaryNotes": "Contient du gluten (la plupart des tablettes de curry japonais sont à base de roux) et des produits laitiers. Vérifiez les allergènes de votre marque de tablettes ; il existe des versions sans gluten.",
              "nutrition": {
                      "basis": "Par portion."
              }
      },
      "joel-robuchon-mashed-potatoes": {
              "title": "Purée de pommes de terre de Joël Robuchon",
              "description": "La légendaire purée ultra-soyeuse, passée au tamis fin jusqu’à devenir du pur velours — plus riche et plus lisse qu’une purée ordinaire.",
              "ingredients": [
                      {
                              "amount": "1 kg",
                              "item": "Pommes de terre"
                      },
                      {
                              "amount": "250 g",
                              "item": "Beurre doux, froid, en dés"
                      },
                      {
                              "amount": "250 ml",
                              "item": "Lait entier, tiédi"
                      },
                      {
                              "amount": "Selon le goût",
                              "item": "Sel"
                      },
                      {
                              "amount": "Facultatif",
                              "item": "Poivre blanc moulu",
                              "note": "Pour l’assaisonnement"
                      }
              ],
              "instructions": [
                      "Lavez les pommes de terre.",
                      "Mettez-les à cuire dans une casserole d’eau froide salée.",
                      "Dès l’ébullition, baissez à frémissement et poursuivez la cuisson jusqu’à ce qu’elles soient parfaitement fondantes, environ 20 à 30 minutes.",
                      "Égouttez-les et placez-les dans un récipient recouvert d’un torchon pour les garder au chaud.",
                      "Pelez-les encore chaudes et déposez-les dans un second récipient tapissé de film alimentaire fendu au centre, pour y laisser tomber les pommes de terre pelées et les garder au chaud.",
                      "Passez les pommes de terre au presse-purée dans une casserole.",
                      "Chauffez à feu moyen en remuant 3 à 5 minutes pour évaporer l’excès d’humidité.",
                      "Passez au tamis fin à l’aide d’une corne — c’est cette étape qui rend la purée parfaitement lisse.",
                      "Remettez sur feu moyen et incorporez progressivement le beurre froid en dés, au fouet, pour émulsionner la purée.",
                      "Fouettez sans arrêt afin que l’émulsion ne se brise pas.",
                      "Ajoutez le lait tiède petit à petit jusqu’à la consistance crémeuse et aérienne souhaitée.",
                      "Salez à votre goût. Ajoutez éventuellement une pincée de poivre blanc."
              ],
              "servingTips": [
                      "Choisissez une pomme de terre à chair ferme comme la Ratte ou la Yukon Gold — elles tiennent à la cuisson et absorbent bien plus de beurre sans devenir élastiques.",
                      "Le passage au presse-purée puis au tamis fin est ce qui élimine le moindre grumeau — ne sautez pas l’étape du tamis pour une personne suivant un régime mixé.",
                      "Cette purée est très riche en beurre ; détendez-la avec un peu de lait tiède supplémentaire s’il lui faut couler plus facilement de la cuillère pour une texture de niveau 3.",
                      "Servez tiède plutôt que brûlant, et ne gardez la finition classique au dessin de fourchette que pour la présentation — elle ne change rien à l’onctuosité de chaque bouchée."
              ],
              "dietaryNotes": "Sans gluten. Préparation très riche et grasse — pour une version allégée, réduisez le beurre et appuyez-vous davantage sur le lait tiède pour l’onctuosité.",
              "nutrition": {
                      "basis": "Tel qu’indiqué dans la recette source, par portion. Le détail du sodium et du cholestérol n’était pas fourni."
              }
      },
      "kimchi-ramen": {
              "title": "Ramen au kimchi",
              "description": "Un bol de ramen rapide et incendiaire dans un bouillon relevé au kimchi, finis d’un œuf mollet et de ciboule.",
              "ingredients": [
                      {
                              "amount": "100 ml",
                              "item": "Huile de colza"
                      },
                      {
                              "amount": "Une petite poignée",
                              "item": "Ciboulette chinoise, ciselée"
                      },
                      {
                              "amount": "150 g",
                              "item": "Kimchi, haché"
                      },
                      {
                              "amount": "200 ml",
                              "item": "Jus de kimchi (saumure)"
                      },
                      {
                              "amount": "200 ml",
                              "item": "Eau"
                      },
                      {
                              "amount": "20 g",
                              "item": "Piment coréen en poudre (gochugaru)"
                      },
                      {
                              "amount": "1 paquet",
                              "item": "Nouilles ramen"
                      },
                      {
                              "amount": "Selon le goût",
                              "item": "Ciboule, finement émincée"
                      },
                      {
                              "amount": "1",
                              "item": "Œuf mollet, coupé en deux"
                      }
              ],
              "instructions": [
                      "Faites chauffer l’huile de colza dans une casserole à feu moyen. Ajoutez la ciboulette et le kimchi haché. Faites sauter 2 minutes.",
                      "Versez le jus de kimchi et l’eau. Incorporez le piment en poudre. Portez à ébullition, puis baissez le feu et laissez frémir 5 minutes.",
                      "Plongez les nouilles dans le bouillon et laissez cuire 58 secondes.",
                      "Versez dans un bol et garnissez de ciboule et de l’œuf mollet."
              ],
              "servingTips": [
                      "Les nouilles longues et les feuilles entières de kimchi présentent un véritable risque d’étouffement — telle qu’écrite, cette recette doit rester réservée au niveau 7 (facile à mâcher) ou à un régime sans restriction.",
                      "Si vous l’adaptez vers le bas, coupez les nouilles cuites en tronçons de 3 à 5 cm avec des ciseaux de cuisine directement dans le bol, et hachez finement le kimchi avant de l’ajouter.",
                      "Faites cuire l’œuf entièrement plutôt que mollet, et coupez-le en petits dés, pour qui a besoin d’une texture plus ferme et moins coulante.",
                      "Le gochugaru pique vraiment — commencez en dessous de la quantité indiquée et ajustez au goût."
              ],
              "dietaryNotes": "Contient du gluten (nouilles ramen) et de l’œuf. Des nouilles ramen sans gluten peuvent être substituées.",
              "nutrition": {
                      "basis": "Selon le tableau nutritionnel de la recette source (le nombre de portions couvertes n’y est pas précisé).",
                      "flag": "le kimchi, sa saumure et le gochugaru sont tous salés — si le sodium est une préoccupation, rincez légèrement le kimchi et utilisez une base d’assaisonnement ramen moins salée."
              }
      },
      "korean-soft-tofu-soup": {
              "title": "Soupe coréenne au tofu soyeux (sundubu-jjigae)",
              "description": "Un ragoût coréen réconfortant et relevé, construit autour d’un tofu très tendre, mijoté avec des légumes fondants et un œuf tout juste pris — modulable et infiniment réconfortant.",
              "ingredients": [
                      {
                              "amount": "Environ 3 tiges",
                              "item": "Ciboules",
                              "note": "Ciselées, blancs et verts séparés"
                      },
                      {
                              "amount": "2 gousses",
                              "item": "Ail, haché"
                      },
                      {
                              "amount": "2 c. à café",
                              "item": "Gochugaru (piment coréen en poudre)",
                              "note": "Finement moulu"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Huile de sésame"
                      },
                      {
                              "amount": "1 tasse",
                              "item": "Eau"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Sauce de poisson"
                      },
                      {
                              "amount": "1/2 c. à café",
                              "item": "Sucre"
                      },
                      {
                              "amount": "1 tasse",
                              "item": "Aubergine, pelée et coupée en petits dés",
                              "note": "Le pelage compte — la peau reste coriace et filandreuse quelle que soit la durée de cuisson"
                      },
                      {
                              "amount": "2 pieds",
                              "item": "Pak choï nain, finement ciselé",
                              "note": "Hachez particulièrement fin les côtes blanches fibreuses"
                      },
                      {
                              "amount": "1 barquette",
                              "item": "Tofu mou ou soyeux",
                              "note": "Écrasé à la taille de morceaux souhaitée"
                      },
                      {
                              "amount": "1",
                              "item": "Œuf",
                              "note": "Facultatif — cuisez jusqu’à ce que le jaune soit ferme, non coulant"
                      }
              ],
              "instructions": [
                      "Faites chauffer l’huile de sésame dans un pot en pierre coréen (ou une casserole) à feu moyen.",
                      "Une fois l’huile chaude, ajoutez l’ail, les blancs de ciboule et le gochugaru. Faites revenir jusqu’à ce que le mélange embaume et que le piment soit torréfié.",
                      "Ajoutez l’eau et portez à ébullition. Ramenez ensuite à frémissement (feu doux à moyen) et incorporez le sucre et la sauce de poisson.",
                      "Ajoutez le pak choï et l’aubergine. Laissez cuire jusqu’à ce qu’ils soient parfaitement fondants, environ 5 minutes — plus que les 2 minutes d’une version classique, car il leur faut céder sous la fourchette plutôt que rester croquants.",
                      "Ajoutez le tofu mou. C’est le moment agréable : écrasez-le à la cuillère à la taille de morceaux souhaitée.",
                      "Si vous utilisez un œuf, cassez-le au centre du pot et couvrez. Laissez cuire 5 à 6 minutes à la vapeur, jusqu’à ce que le blanc et le jaune soient entièrement pris — un jaune coulant fluidifie le bouillon de façon imprévisible pendant le repas, alors cuisez-le à cœur et mélangez-le.",
                      "Parsemez du vert de ciboule restant et dégustez."
              ],
              "servingTips": [
                      "Cette version laisse de côté les champignons enoki d’un sundubu-jjigae traditionnel. Leurs longs filaments ne se défont pas en bouche et ne peuvent pas être raccourcis dans le pot : c’est le seul ingrédient qu’il valait mieux retirer plutôt qu’adapter.",
                      "L’aubergine est pelée et l’œuf cuit à cœur pour la même raison : la peau d’aubergine reste coriace et filandreuse quelle que soit la cuisson, et un jaune coulant fluidifie le bouillon pendant que vous mangez.",
                      "Pour un niveau de texture inférieur, écrasez le tofu jusqu’à le fondre dans le bouillon et hachez le pak choï plus fin encore. Pour une version mixée, passez la soupe finie au mixeur jusqu’à ce qu’elle soit parfaitement lisse.",
                      "Allégez le gochugaru pour les personnes sensibles au piquant — la chaleur monte vite dans ce bouillon."
              ],
              "dietaryNotes": "Contient de la sauce de poisson et de l’œuf. Naturellement sans gluten ; vérifiez la marque de gochugaru si un sans-gluten strict est nécessaire.",
              "nutrition": {
                      "basis": "Selon le calculateur nutritionnel de la recette (2 portions de 1,5 tasse chacune). La recette elle-même en donne environ 4.",
                      "flag": "à 599 mg de sodium, et avec une sauce de poisson et un gochugaru salés par nature, utilisez une sauce de poisson pauvre en sel et goûtez avant d’ajouter du sel."
              }
      },
      "lamb-stew-tomatoes": {
              "title": "Ragoût d’agneau aux tomates",
              "description": "Un ragoût d’agneau généreux et épicé, avec des morceaux fondants dans un bouillon de tomate riche — mijoté longuement jusqu’à ce que la viande se défasse.",
              "ingredients": [
                      {
                              "amount": "900 g",
                              "item": "Gigot d’agneau désossé",
                              "note": "Coupé en cubes de 2,5 cm. Insistez sur le désossé : des éclats d’os sont difficiles à repérer dans une sauce tomate foncée"
                      },
                      {
                              "amount": "1 boîte (800 g)",
                              "item": "Tomates concassées ou entières"
                      },
                      {
                              "amount": "1 gros",
                              "item": "Oignon, émincé en julienne"
                      },
                      {
                              "amount": "3 gousses",
                              "item": "Ail frais, écrasé"
                      },
                      {
                              "amount": "3 c. à soupe",
                              "item": "Ail en poudre"
                      },
                      {
                              "amount": "4 c. à soupe",
                              "item": "Piment de Cayenne",
                              "note": "À ajuster selon le goût"
                      },
                      {
                              "amount": "3 c. à soupe",
                              "item": "Sel"
                      },
                      {
                              "amount": "2 c. à soupe",
                              "item": "Poivre noir"
                      },
                      {
                              "amount": "10 ml",
                              "item": "Huile d’olive"
                      },
                      {
                              "amount": "200 ml",
                              "item": "Bouillon (tout type)",
                              "note": "De l’eau convient aussi"
                      }
              ],
              "instructions": [
                      "Coupez l’agneau en cubes de 2,5 cm en dégraissant si nécessaire. Des cubes plus petits que pour un ragoût ordinaire : ils braisent plus uniformément jusqu’à être fondants, et chaque morceau est déjà d’une taille gérable une fois cuit.",
                      "Dans un bol, mélangez l’ail en poudre, le poivre, le sel et le piment de Cayenne. Ajoutez l’huile d’olive et remuez jusqu’à obtenir une pâte lisse.",
                      "Enduisez généreusement tous les morceaux d’agneau de cette pâte, en veillant à ce qu’ils soient uniformément couverts. Réservez-en un peu si besoin.",
                      "Écrasez les trois gousses d’ail. Frottez-en la moitié sur les morceaux d’agneau et gardez l’autre moitié pour la cuisson.",
                      "Émincez l’oignon en julienne. Mélangez-le au reste d’ail écrasé et réservez.",
                      "Faites chauffer une grande cocotte à feu vif. Saisissez tous les morceaux d’agneau sur toutes leurs faces jusqu’à ce qu’ils soient bien dorés. Procédez en plusieurs fois pour ne pas surcharger la cocotte. Réservez.",
                      "Dans la même cocotte, ajoutez les oignons et l’ail. Faites revenir environ 5 minutes, jusqu’à ce qu’ils soient tendres et légèrement caramélisés.",
                      "Remettez l’agneau dans la cocotte. Ouvrez la boîte de tomates et ajoutez-les avec le bouillon. Couvrez et laissez cuire à feu doux 3 à 4 heures, ou enfournez à 190 °C pendant 2 à 4 heures.",
                      "L’agneau est prêt lorsqu’il est parfaitement fondant et se défait sans effort. Testez à la fourchette : la viande ne doit opposer aucune résistance.",
                      "Une fois fondant, défaites encore l’agneau à la fourchette directement dans la cocotte — au niveau 6, aucun morceau ne doit dépasser 1,5 cm, et il doit s’effondrer sous une légère pression.",
                      "Montez le feu et laissez réduire le bouillon jusqu’à ce qu’il épaississe et nappe bien la cuillère.",
                      "Servez chaud sur des pâtes ou avec du riz. L’agneau doit être assez tendre pour se manger avec un minimum de mastication."
              ],
              "servingTips": [
                      "L’agneau est prêt lorsqu’une fourchette défait la viande sans aucune résistance — vérifiez plusieurs morceaux pour vous assurer d’une tendreté homogène.",
                      "En cas de difficultés de déglutition, coupez l’agneau cuit en très petits morceaux ou écrasez-le légèrement avec la sauce.",
                      "La sauce doit être assez épaisse pour napper une cuillère — ajustez en laissant réduire plus longtemps ou en ajoutant du liquide.",
                      "Ce ragoût se conserve bien jusqu’à 3 jours au réfrigérateur, et ses saveurs continuent de se développer."
              ],
              "dietaryNotes": "Sans gluten. Réduisez le piment de Cayenne pour atténuer le piquant. Servez avec du riz ou des pâtes pour l’apport en glucides. Extrêmement riche en sodium tel qu’indiqué — voir la note nutritionnelle ci-dessus.",
              "nutrition": {
                      "basis": "Estimé à partir des ingrédients indiqués, pour 4 portions, en comptant la totalité du mélange d’épices puisqu’il est appliqué directement sur la viande. Il s’agit d’une estimation, non d’une analyse en laboratoire.",
                      "flag": "les 3 cuillères à soupe de sel du mélange d’épices représentent environ 5 300 mg par portion — plus du double de la limite quotidienne d’un adulte. Réduisez le sel à environ 1 cuillère à café au total et assaisonnez plutôt en fin de cuisson ; la recette fonctionne toujours, et c’est le changement le plus important à faire avant de la servir à une personne suivant un régime pauvre en sel."
              }
      },
      "lobster-bisque": {
              "title": "Bisque de homard",
              "description": "Une bisque de crustacés classique et crémeuse, montée sur un fumet de homard maison et mixée jusqu’à ce qu’il ne reste plus rien à mâcher.",
              "ingredients": [
                      {
                              "amount": "4 c. à soupe",
                              "item": "Beurre"
                      },
                      {
                              "amount": "1 gros",
                              "item": "Oignon jaune, en dés"
                      },
                      {
                              "amount": "5 branches",
                              "item": "Céleri, en dés"
                      },
                      {
                              "amount": "3 moyennes",
                              "item": "Carottes, en dés"
                      },
                      {
                              "amount": "1 gousse",
                              "item": "Ail, hachée"
                      },
                      {
                              "amount": "Selon le goût",
                              "item": "Sel et poivre blanc"
                      },
                      {
                              "amount": "1 brin",
                              "item": "Estragon frais",
                              "note": "Ou 3/4 c. à café séché"
                      },
                      {
                              "amount": "3 c. à soupe",
                              "item": "Concentré de tomate"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Paprika"
                      },
                      {
                              "amount": "1/8 c. à café",
                              "item": "Piment de Cayenne"
                      },
                      {
                              "amount": "1/4 tasse",
                              "item": "Farine de blé"
                      },
                      {
                              "amount": "1 tasse",
                              "item": "Vin blanc sec"
                      },
                      {
                              "amount": "1/3 tasse",
                              "item": "Xérès sec ou crème de xérès"
                      },
                      {
                              "amount": "6 tasses",
                              "item": "Fumet de homard ou de crustacés",
                              "note": "À préparer ci-dessous, ou du commerce"
                      },
                      {
                              "amount": "1 brin",
                              "item": "Thym frais",
                              "note": "Ou 1/4 c. à café séché"
                      },
                      {
                              "amount": "1",
                              "item": "Feuille de laurier"
                      },
                      {
                              "amount": "1 tasse",
                              "item": "Crème entière"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Vinaigre de xérès",
                              "note": "Ou vinaigre de vin rouge ou blanc"
                      },
                      {
                              "amount": "300 g",
                              "item": "Chair de homard cuite",
                              "note": "Lisez le premier conseil de service avant de l’ajouter dans le bol"
                      },
                      {
                              "amount": "Facultatif",
                              "item": "Ciboulette ciselée",
                              "note": "Garniture — ne convient pas au niveau 3"
                      },
                      {
                              "amount": "1 gros",
                              "item": "Oignon, coupé en deux",
                              "note": "Pour le fumet"
                      },
                      {
                              "amount": "2 branches",
                              "item": "Céleri, coupées en deux",
                              "note": "Pour le fumet"
                      },
                      {
                              "amount": "1",
                              "item": "Carotte, coupée en deux",
                              "note": "Pour le fumet"
                      },
                      {
                              "amount": "3 gousses",
                              "item": "Ail, écrasées",
                              "note": "Pour le fumet"
                      },
                      {
                              "amount": "5",
                              "item": "Grains de poivre",
                              "note": "Pour le fumet"
                      },
                      {
                              "amount": "4 brins",
                              "item": "Thym",
                              "note": "Pour le fumet"
                      },
                      {
                              "amount": "2",
                              "item": "Feuilles de laurier",
                              "note": "Pour le fumet"
                      },
                      {
                              "amount": "Autant que possible",
                              "item": "Carapaces de homard, de crevette ou de crabe",
                              "note": "Pour le fumet — plus il y en a, mieux c’est"
                      },
                      {
                              "amount": "Pour couvrir",
                              "item": "Eau",
                              "note": "Pour le fumet"
                      }
              ],
              "instructions": [
                      "Faites fondre le beurre dans une grande cocotte à fond épais, à feu moyen.",
                      "Ajoutez l’oignon, le céleri, les carottes et l’ail. Salez et poivrez au poivre blanc, puis faites cuire en remuant souvent, jusqu’à ce que les légumes soient tendres sans colorer, environ 8 minutes.",
                      "Ajoutez l’estragon, le concentré de tomate, le piment de Cayenne et le paprika, puis mélangez jusqu’à ce que le concentré soit bien dispersé.",
                      "Ajoutez la farine et mélangez jusqu’à incorporation.",
                      "Ajoutez le vin blanc et le xérès, montez à feu moyen-vif et remuez jusqu’à absorption du liquide.",
                      "Ajoutez le fumet, le thym et le laurier. Salez et poivrez, puis couvrez et laissez mijoter jusqu’à ce que les légumes soient parfaitement fondants, environ 20 minutes.",
                      "Retirez le brin de thym et le laurier, puis mixez la soupe jusqu’à ce qu’elle soit totalement lisse, au mixeur plongeant ou par fournées au blender.",
                      "Continuez jusqu’à ce qu’il ne reste plus aucun grumeau ni la moindre granulosité. Cela peut prendre bien plus longtemps que prévu. Si le mixeur n’y parvient pas, passez la soupe au tamis fin.",
                      "Remettez la soupe à feu doux-moyen. Incorporez la crème et le vinaigre de xérès.",
                      "Goûtez et rectifiez l’assaisonnement.",
                      "Servez. Au niveau 3, la bisque va seule dans le bol — lisez le premier conseil de service avant d’ajouter chair de homard ou ciboulette.",
                      "Pour préparer le fumet vous-même, mettez l’oignon, le céleri et la carotte coupés en deux, l’ail écrasé, les grains de poivre, le thym, les feuilles de laurier et les carapaces dans un grand faitout. Tassez pour combler les vides.",
                      "Couvrez d’eau et portez à ébullition, puis baissez à frémissement doux et laissez cuire 20 à 30 minutes.",
                      "Filtrez. Le rendement varie. Le fumet se conserve jusqu’à 6 mois au congélateur."
              ],
              "servingTips": [
                      "La bisque elle-même est de niveau 3 une fois mixée, mais la chair de homard et la ciboulette dont on la finit habituellement ne le sont pas. Des morceaux de chair dans une soupe lisse constituent une consistance mixte, parmi les plus risquées à avaler. Au niveau 3, laissez les deux hors du bol, ou mixez la chair de homard avec la soupe à l’étape 7 pour qu’elle passe au mixeur avec le reste.",
                      "L’étape 8 est celle qui décide si ce plat est de niveau 3 ou non. Les crustacés et le céleri laissent des fibres qu’un mixage rapide ne brise pas. S’il reste la moindre granulosité sur la langue, passez au tamis.",
                      "Filtrez après le mixage même si la soupe paraît lisse. Les éclats de carapace passent facilement inaperçus dans une soupe opaque et ne se détectent qu’une fois en bouche.",
                      "Elle épaissit en refroidissant, puis encore au réfrigérateur. Le niveau 3 doit encore couler de la cuillère : détendez-la avec un peu de fumet ou de lait au réchauffage et revérifiez avant de servir."
              ],
              "dietaryNotes": "Contient des crustacés et des produits laitiers. Contient du gluten tel qu’indiqué ; la farine peut être remplacée par de la fécule de maïs. Les valeurs fournies indiquent également 14 g d’acides gras saturés, 3 g de fibres, 6 g de sucres et 687 mg de potassium.",
              "nutrition": {
                      "basis": "Par portion, telle que fournie avec la recette. Elle en donne 6, et la valeur inclut la chair de homard.",
                      "flag": "à 1 146 mg par portion, c’est environ la moitié de la limite quotidienne d’un adulte, et un fumet de crustacés du commerce fera généralement monter ce chiffre. Utilisez un fumet pauvre en sel ou maison, et assaisonnez en fin de cuisson, une fois la soupe réduite."
              }
      },
      "mango-jam-with-yogurt": {
              "title": "Confiture de mangue au yaourt",
              "description": "Une confiture de mangue lisse et naturellement sucrée, mélangée à un yaourt crémeux — une cuillerée lumineuse, en dessert ou en collation.",
              "ingredients": [
                      {
                              "amount": "2 tasses",
                              "item": "Mangue fraîche, coupée en morceaux"
                      },
                      {
                              "amount": "1/2 tasse",
                              "item": "Sucre"
                      },
                      {
                              "amount": "1 c. à soupe",
                              "item": "Jus de citron"
                      },
                      {
                              "amount": "Facultatif",
                              "item": "Une pincée de sel ou 1/4 c. à café d’extrait de vanille",
                              "note": "Pour plus de profondeur"
                      },
                      {
                              "amount": "Pour servir",
                              "item": "Yaourt nature"
                      }
              ],
              "instructions": [
                      "Mettez la mangue dans une casserole à feu moyen. Faites cuire 5 à 7 minutes jusqu’à ce qu’elle soit tendre, en remuant de temps en temps. Écrasez-la à la cuillère ou au presse-purée jusqu’à obtenir une pulpe bien fondante.",
                      "Ajoutez le sucre et le jus de citron (ainsi que le sel ou la vanille, le cas échéant). Mélangez bien.",
                      "Laissez mijoter à feu doux 15 à 20 minutes en remuant souvent, jusqu’à consistance de confiture. Elle est prête lorsqu’elle tient sa forme sur une cuillère ou une assiette froide.",
                      "Laissez refroidir complètement. Transvasez dans un bocal propre et conservez au réfrigérateur.",
                      "Mélangez une cuillerée à un pot de yaourt et dégustez."
              ],
              "servingTips": [
                      "Écrasez soigneusement la mangue à l’étape 1 : les fibres filandreuses près du noyau sont le principal risque de texture ici, vérifiez leur absence avant de servir.",
                      "Pour une texture de niveau 3, parfaitement lisse et versable, mixez la confiture finie avant de l’incorporer au yaourt.",
                      "Pour les régimes à texture modifiée, choisissez un yaourt lisse et non sucré, sans morceaux de fruits ni granola.",
                      "La confiture se conserve environ deux semaines au réfrigérateur — préparez-en une fournée à l’avance et portionnez-la."
              ],
              "dietaryNotes": "Naturellement sans gluten et végétarienne. Choisissez un yaourt végétal pour rendre l’ensemble sans produits laitiers.",
              "nutrition": {
                      "basis": "Par portion de confiture de mangue seule (le yaourt qui l’accompagne n’est pas compté)."
              }
      },
      "mapo-tofu": {
              "title": "Mapo tofu",
              "description": "Des cubes de tofu soyeux mijotés dans une sauce relevée avec du porc finement haché — un classique de semaine, naturellement doux en bouche.",
              "ingredients": [
                      {
                              "amount": "90 g",
                              "item": "Porc haché"
                      },
                      {
                              "amount": "2 c. à café",
                              "item": "Ail, haché"
                      },
                      {
                              "amount": "1 barquette",
                              "item": "Tofu mou",
                              "note": "Coupé en petits cubes d’environ 1,2 cm, ou écrasé dans la sauce pour une texture plus souple"
                      },
                      {
                              "amount": "1 sachet",
                              "item": "Sauce mapo tofu du commerce"
                      },
                      {
                              "amount": "Selon le goût",
                              "item": "Ciboule, finement ciselée"
                      }
              ],
              "instructions": [
                      "Faites chauffer un peu d’huile dans un wok et faites revenir l’ail jusqu’à ce qu’il embaume.",
                      "Ajoutez le porc haché et faites-le cuire en l’émiettant, jusqu’à ce qu’il soit presque cuit.",
                      "Ouvrez la sauce mapo tofu et mélangez-la au porc haché jusqu’à cuisson complète.",
                      "Ajoutez le tofu mou et laissez cuire doucement à feu doux, jusqu’à ce que la sauce épaississe et que le tofu soit chaud et fondant.",
                      "Parsemez de ciboule et servez avec du riz chaud."
              ],
              "servingTips": [
                      "Le porc haché et le tofu mou sont déjà naturellement tendres : tel qu’écrit, c’est l’un des plats salés les plus doux de cette collection.",
                      "Coupez le tofu en cubes plus petits, ou écrasez-le délicatement dans la sauce, pour rapprocher la texture du niveau 4.",
                      "Lisez l’étiquette du sachet de sauce : ces préparations sont souvent riches en sodium, et certaines contiennent une pâte de fèves fermentées qui peut être très relevée.",
                      "Servez sur du riz nature bien cuit, ou sur de la purée de pommes de terre plutôt que du riz pour qui a besoin d’une base encore plus souple."
              ],
              "dietaryNotes": "Contient du soja et du porc. Les valeurs ci-dessus sont estimées à partir des ingrédients, la recette source n’en fournissant pas — elles varieront beaucoup selon la sauce du commerce utilisée.",
              "nutrition": {
                      "basis": "Estimé pour 4 portions, en supposant une barquette de 300 g de tofu mou et un sachet de sauce mapo tofu d’environ 60 g. Le riz d’accompagnement n’est pas compté. Le sachet de sauce est la principale inconnue : lisez son étiquette, les marques varient beaucoup.",
                      "flag": "environ 600 mg par portion, presque entièrement dus au sachet de sauce du commerce. Les marques varient beaucoup — lisez l’étiquette et n’utilisez pas tout le sachet si le sodium est une préoccupation."
              }
      },
      "peach-smoothie": {
              "title": "Smoothie à la pêche",
              "description": "Des pêches au sirop léger mixées avec du yaourt, du lait et de la vanille en une boisson soyeuse légèrement épaisse.",
              "ingredients": [
                      {
                              "amount": "1/2 tasse",
                              "item": "Pêches en conserve au jus, égouttées",
                              "note": "120 g"
                      },
                      {
                              "amount": "1/2 tasse",
                              "item": "Yaourt nature",
                              "note": "120 ml"
                      },
                      {
                              "amount": "1/2 tasse",
                              "item": "Lait",
                              "note": "120 ml"
                      },
                      {
                              "amount": "1/2 c. à café",
                              "item": "Extrait de vanille"
                      },
                      {
                              "amount": "Selon les indications",
                              "item": "Épaississant du commerce",
                              "note": "Uniquement si nécessaire pour atteindre le niveau 2 prescrit"
                      }
              ],
              "instructions": [
                      "Mixez les pêches, le yaourt, le lait et la vanille jusqu’à obtenir une texture soyeuse.",
                      "Filtrez s’il reste des fibres.",
                      "Ajustez au niveau 2 prescrit avec de l’épaississant, en suivant les indications du produit.",
                      "Respectez le temps d’hydratation indiqué, remuez de nouveau et vérifiez la consistance avant de servir."
              ],
              "servingTips": [
                      "Le niveau 2 désigne l’épaisseur d’une boisson, pas la texture d’un aliment. La quantité d’épaississant dépend du produit utilisé et du niveau réellement prescrit : suivez les indications du fabricant plutôt qu’un nombre de cuillères fixe.",
                      "Laissez reposer le temps indiqué par l’épaississant avant de juger. La plupart continuent d’épaissir pendant plusieurs minutes, et une boisson qui paraît juste après le mélange peut être trop épaisse une fois à table.",
                      "Vérifiez la boisson finie avec le test d’écoulement IDDSI, à la température à laquelle elle sera servie. Réchauffer ou refroidir modifie son écoulement.",
                      "Filtrez avant d’épaissir. Les pépins, les peaux et les fibres de fruit sont la seule chose qu’un épaississant ne peut pas corriger."
              ],
              "dietaryNotes": "Contient des produits laitiers. Naturellement sans gluten. Des pêches au sirop augmenteront nettement la teneur en sucre.",
              "nutrition": {
                      "basis": "Estimé à partir des ingrédients indiqués, pour 2 portions, avec des pêches au jus plutôt qu’au sirop. Il s’agit d’une estimation, non d’une analyse en laboratoire."
              }
      },
      "pumpkin-soup": {
              "title": "Velouté de potiron",
              "description": "De la purée de potiron détendue au bouillon et à la crème, réchauffée avec de la cannelle, puis mixée jusqu’à être parfaitement lisse.",
              "ingredients": [
                      {
                              "amount": "1 tasse",
                              "item": "Purée de potiron",
                              "note": "240 g"
                      },
                      {
                              "amount": "3/4 tasse",
                              "item": "Bouillon pauvre en sel",
                              "note": "180 ml"
                      },
                      {
                              "amount": "1/4 tasse",
                              "item": "Crème",
                              "note": "60 ml"
                      },
                      {
                              "amount": "1/4 c. à café",
                              "item": "Cannelle"
                      },
                      {
                              "amount": "Une pincée",
                              "item": "Sel"
                      },
                      {
                              "amount": "Selon les indications",
                              "item": "Épaississant du commerce",
                              "note": "Uniquement si nécessaire pour atteindre le niveau 3 prescrit"
                      }
              ],
              "instructions": [
                      "Réunissez le potiron, le bouillon, la crème et les assaisonnements dans une casserole.",
                      "Chauffez doucement 5 à 7 minutes en remuant souvent.",
                      "Mixez jusqu’à obtenir une texture parfaitement lisse.",
                      "N’ajustez la consistance avec de l’épaississant que selon les indications, pour le niveau 3 prescrit.",
                      "Vérifiez la texture finale avant de servir."
              ],
              "servingTips": [
                      "Utilisez de la purée, et non une garniture à tarte en conserve. Celle-ci est déjà sucrée et épicée, et prend beaucoup plus épais, ce qui ferait dépasser le niveau 3.",
                      "Les graines grillées dont on garnit habituellement ce velouté ne conviennent à aucun des niveaux de texture de ce site. Laissez-les de côté.",
                      "L’épaississant est un dernier recours, pas un ingrédient. Mixez et filtrez d’abord, puis n’en ajoutez que si la soupe reste plus fluide que le niveau prescrit, en suivant les indications du produit.",
                      "Le velouté épaissit nettement en refroidissant. Le niveau 3 doit encore couler de la cuillère : revérifiez une fois à température de service plutôt qu’à la sortie du feu."
              ],
              "dietaryNotes": "Contient des produits laitiers. Naturellement sans gluten si le bouillon l’est. Utilisez une crème végétale et un bouillon de légumes pour une version sans produits laitiers.",
              "nutrition": {
                      "basis": "Estimé à partir des ingrédients indiqués, pour 2 portions, avec de la purée de potiron non sucrée et un bouillon pauvre en sel. Le document source ne fournissait aucune valeur nutritionnelle : il s’agit donc d’une estimation, non d’une analyse en laboratoire."
              }
      },
      "rice-pudding": {
              "title": "Riz au lait classique",
              "description": "Un riz au lait crémeux mijoté au lait, relevé d’une pointe de vanille et de cannelle — un dessert doux, qui se mange à la cuillère.",
              "ingredients": [
                      {
                              "amount": "4,5 tasses",
                              "item": "Lait entier",
                              "note": "1 080 ml"
                      },
                      {
                              "amount": "1/4 tasse",
                              "item": "Sucre en poudre",
                              "note": "50 g"
                      },
                      {
                              "amount": "Une pincée",
                              "item": "Sel"
                      },
                      {
                              "amount": "3/4 tasse",
                              "item": "Riz blanc cru",
                              "note": "Riz rond, 135 g"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Extrait de vanille"
                      },
                      {
                              "amount": "Selon le goût",
                              "item": "Cannelle moulue"
                      }
              ],
              "instructions": [
                      "Dans une grande casserole, mélangez le lait, le sucre et le sel. Portez à ébullition à feu moyen-vif. Ajoutez le riz et mélangez.",
                      "Baissez à feu doux et couvrez partiellement. Laissez mijoter en remuant souvent, jusqu’à ce que le riz soit fondant et le mélange épaissi, environ 25 à 30 minutes.",
                      "Incorporez la vanille et la cannelle selon le goût. Poursuivez la cuisson jusqu’à l’épaisseur voulue — le riz au lait épaissira encore en refroidissant ; détendez-le avec un peu de lait s’il devient trop épais.",
                      "Servez tiède, ou laissez refroidir à température ambiante puis réfrigérez dans un récipient hermétique et servez froid. Saupoudrez de cannelle si vous le souhaitez."
              ],
              "servingTips": [
                      "Les raisins secs d’un riz au lait classique ont été laissés de côté. Des morceaux collants et élastiques dispersés dans un dessert souple comptent parmi les textures les plus risquées en cas de troubles de la déglutition, et contrairement à un gros légume, on ne peut pas les rendre plus sûrs en les coupant plus petits.",
                      "Laissez mijoter un peu plus de 30 minutes si vous voulez que les grains se défassent davantage et disparaissent dans la crème, pour se rapprocher d’une texture de niveau 4.",
                      "Pour un niveau 4 entièrement lisse, mixez le riz au lait fini jusqu’à ce qu’il soit crémeux.",
                      "Il épaissit nettement en refroidissant — détendez-le d’un trait de lait tiède juste avant de servir s’il est devenu trop épais."
              ],
              "dietaryNotes": "Végétarien. Contient des produits laitiers tel qu’indiqué ; un lait sans lactose ou végétal peut être substitué. Les valeurs ci-dessus sont estimées à partir des ingrédients, la recette source n’en fournissant pas.",
              "nutrition": {
                      "basis": "Estimé à partir des ingrédients indiqués, pour 6 portions. Il s’agit d’une estimation, non d’une analyse en laboratoire."
              }
      },
      "stovetop-mac-and-cheese": {
              "title": "Macaronis au fromage à la casserole",
              "description": "Des macaronis au fromage riches et crémeux préparés à la casserole, avec une sauce aux œufs et au cheddar — sans passage au four.",
              "ingredients": [
                      {
                              "amount": "3 tasses",
                              "item": "Macaronis ou coquillettes moyennes"
                      },
                      {
                              "amount": "2",
                              "item": "Œufs"
                      },
                      {
                              "amount": "1 boîte (340 g)",
                              "item": "Lait concentré non sucré"
                      },
                      {
                              "amount": "1/4 c. à café",
                              "item": "Moutarde en poudre"
                      },
                      {
                              "amount": "Selon le goût",
                              "item": "Sel et poivre"
                      },
                      {
                              "amount": "4 c. à soupe",
                              "item": "Beurre"
                      },
                      {
                              "amount": "3 tasses",
                              "item": "Cheddar râpé",
                              "note": "Le plus affiné possible"
                      }
              ],
              "instructions": [
                      "Portez 2 litres d’eau à ébullition dans une grande casserole, versez les pâtes et faites-les cuire jusqu’à ce qu’elles soient presque tendres — deux minutes de plus que le temps al dente indiqué, pour une bouchée plus souple.",
                      "Pendant ce temps, mélangez les œufs, la moitié du lait concentré, la moutarde en poudre, 1/2 cuillère à café de sel et 1/4 de cuillère à café de poivre.",
                      "Égouttez les pâtes et remettez-les dans la casserole. Placez sur feu doux et incorporez le beurre jusqu’à ce qu’il fonde.",
                      "Incorporez le mélange aux œufs et la moitié du cheddar. Poursuivez la cuisson à feu doux en ajoutant progressivement le reste de lait et de cheddar, jusqu’à ce que le mélange soit chaud et crémeux, environ 5 minutes.",
                      "Salez et poivrez à votre goût."
              ],
              "servingTips": [
                      "La sauce est un peu liquide juste après la préparation — laissez reposer 10 minutes avant de servir, ou servez aussitôt en bols avec des cuillères ; elle épaissit en refroidissant à mesure que les macaronis l’absorbent.",
                      "Faites cuire les pâtes deux minutes de plus que ne l’indique le paquet, et coupez ou écrasez les coquillettes une fois dans l’assiette, pour qu’elles soient plus faciles à gérer.",
                      "Pour un niveau de texture inférieur, mixez une partie du plat fini jusqu’à ce qu’il soit lisse — la sauce crémeuse aux œufs et au cheddar se mixe sans peine.",
                      "Évitez de servir très chaud — la sauce au fromage retient la chaleur et peut ébouillanter."
              ],
              "dietaryNotes": "Contient du gluten tel qu’indiqué ; des pâtes sans gluten peuvent être substituées. Végétarien.",
              "nutrition": {
                      "basis": "Par portion ; il s’agit d’une portion sur 5."
              }
      },
      "strawberry-yogurt-drink": {
              "title": "Boisson fraise-yaourt",
              "description": "Des fraises mixées avec du yaourt et du lait, puis filtrées et épaissies en boisson légèrement épaisse.",
              "ingredients": [
                      {
                              "amount": "1/2 tasse",
                              "item": "Fraises, équeutées",
                              "note": "75 g"
                      },
                      {
                              "amount": "3/4 tasse",
                              "item": "Yaourt nature",
                              "note": "180 ml"
                      },
                      {
                              "amount": "1/2 tasse",
                              "item": "Lait",
                              "note": "120 ml"
                      },
                      {
                              "amount": "1 c. à café",
                              "item": "Sucre",
                              "note": "Facultatif"
                      },
                      {
                              "amount": "Selon les indications",
                              "item": "Épaississant du commerce",
                              "note": "Uniquement si nécessaire pour atteindre le niveau 2 prescrit"
                      }
              ],
              "instructions": [
                      "Mixez les fraises, le yaourt, le lait et le sucre jusqu’à obtenir un mélange parfaitement lisse.",
                      "Passez au tamis fin pour retirer les akènes.",
                      "Si la boisson est plus fluide que le niveau 2 prescrit, ajoutez de l’épaississant en suivant les indications du produit.",
                      "Laissez reposer le temps indiqué par l’épaississant, remuez de nouveau, puis vérifiez la consistance avant de servir."
              ],
              "servingTips": [
                      "Le niveau 2 désigne l’épaisseur d’une boisson, pas la texture d’un aliment. La quantité d’épaississant dépend du produit utilisé et du niveau réellement prescrit : suivez les indications du fabricant plutôt qu’un nombre de cuillères fixe.",
                      "Laissez reposer le temps indiqué par l’épaississant avant de juger. La plupart continuent d’épaissir pendant plusieurs minutes, et une boisson qui paraît juste après le mélange peut être trop épaisse une fois à table.",
                      "Vérifiez la boisson finie avec le test d’écoulement IDDSI, à la température à laquelle elle sera servie. Réchauffer ou refroidir modifie son écoulement.",
                      "Filtrez avant d’épaissir. Les pépins, les peaux et les fibres de fruit sont la seule chose qu’un épaississant ne peut pas corriger."
              ],
              "dietaryNotes": "Contient des produits laitiers. Naturellement sans gluten. Les épaississants varient — vérifiez les allergènes du vôtre.",
              "nutrition": {
                      "basis": "Estimé à partir des ingrédients indiqués, pour 2 portions, sucre facultatif compris. L’épaississant apporte une énergie négligeable. Il s’agit d’une estimation, non d’une analyse en laboratoire."
              }
      },
      "vanilla-bean-custard": {
              "title": "Crème à la gousse de vanille",
              "description": "Une crème à la vanille soyeuse et élégante, à la vraie gousse — parfaitement lisse et délicatement prise, pensée pour fondre sur la langue.",
              "ingredients": [
                      {
                              "amount": "4 gros",
                              "item": "Œufs"
                      },
                      {
                              "amount": "4 gros",
                              "item": "Jaunes d’œufs"
                      },
                      {
                              "amount": "2/3 tasse",
                              "item": "Sucre en poudre"
                      },
                      {
                              "amount": "2 tasses",
                              "item": "Crème entière"
                      },
                      {
                              "amount": "1 tasse",
                              "item": "Lait entier"
                      },
                      {
                              "amount": "1",
                              "item": "Gousse de vanille, fendue et grattée",
                              "note": "Ou 2 c. à café d’extrait de vanille"
                      },
                      {
                              "amount": "1/4 c. à café",
                              "item": "Sel fin"
                      },
                      {
                              "amount": "1/4 c. à café",
                              "item": "Noix de muscade moulue",
                              "note": "Facultatif"
                      }
              ],
              "instructions": [
                      "Préchauffez le four à 165 °C. Disposez six ramequins de 180 ml dans un grand plat à rôtir.",
                      "Dans un bol moyen, fouettez les œufs, les jaunes et le sucre jusqu’à obtenir un mélange lisse et légèrement pâli.",
                      "Dans une casserole, réunissez la crème, le lait, la gousse de vanille (graines et gousse) et le sel. Chauffez à feu moyen jusqu’aux premières vapeurs et à l’apparition de petites bulles sur les bords. Ne faites pas bouillir.",
                      "Versez lentement le mélange chaud sur les œufs en fouettant sans arrêt pour les tempérer. Ajoutez-le progressivement pour éviter qu’ils ne coagulent.",
                      "Passez le mélange au tamis fin dans un grand verre doseur. Cela retire les éventuels morceaux d’œuf cuit et garantit une onctuosité parfaite.",
                      "Répartissez la crème dans les ramequins. Saupoudrez chacun d’une toute petite pincée de muscade, le cas échéant.",
                      "Versez de l’eau chaude dans le plat à rôtir jusqu’à mi-hauteur des ramequins. Ce bain-marie assure une cuisson douce et régulière.",
                      "Enfournez 40 à 45 minutes, jusqu’à ce que les bords soient pris mais que le centre tremble encore légèrement. Les crèmes doivent être cuites à cœur tout en restant soyeuses et tendres.",
                      "Sortez les ramequins du bain-marie et laissez refroidir à température ambiante. Réfrigérez au moins 2 heures, jusqu’à ce qu’elles soient bien froides et prises.",
                      "Avant de servir, passez un doigt sur le bord de chaque crème. Elle doit se détacher sans effort. La texture doit être soyeuse, tremblante et fondre en bouche."
              ],
              "servingTips": [
                      "La crème est prête lorsqu’elle passe le test du tremblement : une tape légère ne doit provoquer qu’un petit mouvement au centre.",
                      "Trop cuites, les crèmes deviennent granuleuses et rendent de l’eau — sortez-les du four quand le centre paraît encore un peu insuffisamment pris.",
                      "Pour qui a besoin d’une texture mixée, passez la crème froide au mixeur jusqu’à ce qu’elle soit parfaitement lisse avant de servir.",
                      "Servez légèrement fraîche ou à température ambiante — une crème froide se contrôle plus facilement en bouche."
              ],
              "dietaryNotes": "Sans gluten. Peut être allégée avec du lait demi-écrémé ou un mélange de lait et de crème.",
              "nutrition": {
                      "basis": "Estimé à partir des ingrédients indiqués, pour 6 ramequins. Il s’agit d’une estimation, non d’une analyse en laboratoire."
              }
      },
      "watermelon-sorbet": {
              "title": "Sorbet à la pastèque",
              "description": "Un sorbet à la pastèque rafraîchissant en quatre ingrédients, mixé puis congelé — lumineux, simple et naturellement sucré.",
              "ingredients": [
                      {
                              "amount": "6 tasses",
                              "item": "Morceaux de pastèque congelés"
                      },
                      {
                              "amount": "1 tasse",
                              "item": "Sirop de pastèque",
                              "note": "Ou sirop de sucre, agave ou miel"
                      },
                      {
                              "amount": "1/2 tasse",
                              "item": "Eau"
                      },
                      {
                              "amount": "2 c. à soupe",
                              "item": "Jus de citron vert frais"
                      }
              ],
              "instructions": [
                      "Mettez 3 tasses de pastèque, 1/2 tasse de sirop, 1/4 tasse d’eau et 1 cuillère à soupe de jus de citron vert dans un blender puissant. Mixez jusqu’à obtenir une texture lisse, en faisant des pauses pour repousser le mélange si les lames se bloquent.",
                      "Transvasez le sorbet dans un moule à cake en métal ou un autre récipient adapté au congélateur, et placez-le au froid.",
                      "Répétez avec le reste des ingrédients, puis servez aussitôt ou conservez couvert au congélateur jusqu’à une semaine."
              ],
              "servingTips": [
                      "Les desserts glacés comportent un risque de texture facile à manquer : en fondant en bouche, le sorbet se transforme vite en un liquide fluide et rapide, plus difficile à contrôler que ne le laisse croire la boule glacée. Parlez-en à un orthophoniste ou à un diététicien avant de servir un dessert glacé à une personne au niveau 4 ou en dessous.",
                      "Laissez le sorbet quelques minutes à température ambiante avant de servir, pour qu’il soit souple et granité plutôt que dur comme de la pierre — plus facile à prélever et plus sûr à avaler.",
                      "Servez par petites cuillerées en laissant chacune s’attendrir légèrement en bouche, plutôt qu’une grosse boule glacée d’un coup.",
                      "Cette recette ne contient ni produits laitiers ni presque aucune fibre : c’est une bonne option de douceur froide une fois la texture validée."
              ],
              "dietaryNotes": "Naturellement végétalien, sans gluten et sans produits laitiers. Voir la note ci-dessus sur les textures glacées et la sécurité de la déglutition avant de servir.",
              "nutrition": {
                      "basis": "Par portion ; la recette en donne environ 6."
              }
      }
    }
    /* /RECIPES:fr */
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
      'review.count.n': '{n} 条评价',
      'review.none': '这道食谱还没有评价。如果您做过，您的心得会帮到下一位尝试的人。',
      'review.placeholder': '成品如何？关于质地有什么值得一提的吗？',
      'review.local': '目前无法使用共享评价，这条评价仅保存在本浏览器中。',
      'review.loading': '加载中…',
      'review.needboth': '请填写您的姓名，并写下几句关于这道食谱的话。',
      'review.stars': '{n} 星',
      'nut.sodium.flag': '关于钠含量：',
      'review.loadingList': '正在加载评价…',
      'time.freezing': '（冷冻）',
      'hero.count': '道食谱，涵盖五个质地等级。选择一个等级以缩小范围。',
      'ladder.title': '您需要哪一个质地等级？',
      'ladder.all': '全部等级',
      'card.mixed': '需搅打或增稠',
      'card.level': '第 {n} 级 &middot; {name}',
      'home.whatlevels': '这些质地等级是什么意思？',
      'guide.disclaimer': '本站标注的质地等级只是起点，并非临床评估。请由言语治疗师或营养师确认您所照护之人适用的等级。',
      'reviews.eyebrow': '来自做过这些菜的人',
      'reviews.intro': '由做过本站食谱的人留下的心得——成品如何，以及在其标注的质地等级下表现怎样。',
      'guide.intro': '本站每道食谱都依照 IDDSI 框架评级——这是临床人员用来描述食物需要多软的通用标准。您可以据此为自己或家人挑选质地合适的食谱。',
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
    mixed: {
      'chicken-noodle-soup': '请将整锅汤搅打细滑，或将汤汁增稠至不再从面条与鸡肉间流走。',
      'chinese-egg-drop-soup': '蛋花漂浮在稀薄的汤中。请搅打细滑，或将汤汁增稠，使两者一同移动。',
      'korean-soft-tofu-soup': '豆腐与蔬菜浸在稀薄的汤中。请搅打细滑，或在食用前将汤汁增稠。',
      'lamb-stew-tomatoes': '请收汁或增稠，直到酱汁挂附在肉与蔬菜上，而不是在周围积成一滩。',
      'ground-beef-curry': '请将酱汁增稠至能裹住肉末与马铃薯，而不是分离出来。',
      'kimchi-ramen': '面条浸在稀薄的汤中。第 7 级以下，请将汤搅打细滑，或不要食用这一道。',
      'watermelon-sorbet': '雪葩在口中会融化成稀薄液体。凡需饮用增稠液体者，无论冷冻状态被评为哪一级，都不应食用。'
    },
    /* RECIPES:zh */
    recipes: {
      "apple-sauce": {
              "title": "自制苹果泥",
              "description": "用新鲜苹果熬煮而成的简单苹果泥，带着温润的香料气息——可做成细滑如丝，也可保留些许颗粒。",
              "ingredients": [
                      {
                              "amount": "1 个中等",
                              "item": "苹果",
                              "note": "约 155-170 克"
                      },
                      {
                              "amount": "3 汤匙",
                              "item": "清水"
                      },
                      {
                              "amount": "1/2 茶匙",
                              "item": "糖"
                      },
                      {
                              "amount": "1/8 茶匙",
                              "item": "肉桂粉"
                      }
              ],
              "instructions": [
                      "苹果去皮去核，切成小块。",
                      "在 1 夸脱的小锅中放入苹果块、清水、糖与肉桂粉。",
                      "中火加热至微滚，转中小火加盖煮 20-25 分钟，期间搅拌一两次防止粘底。苹果变软、用叉子可完全压碎即可。",
                      "离火。若要带颗粒的苹果泥，用叉子或土豆压泥器压碎；若要细滑的，用手持搅拌棒或倒入搅拌机打匀。",
                      "若成品过稀，可敞盖小火继续加热至变稠。"
              ],
              "servingTips": [
                      "凡是细泥或质地调整饮食，一律请做细滑版本——用手持搅拌棒打到不留任何颗粒。带颗粒的版本不适用于第 6 级以下。",
                      "苹果皮务必削净；残留的果皮坚韧，在短时间熬煮中不会化开。",
                      "这道苹果泥煮熟后天然柔软、极易打匀，是本站最简单的第 4 级甜点或配菜之一。",
                      "苹果泥常被用来帮助吞服其他食物或药物——与任何药物混合前，请先咨询药师或照护团队。"
              ],
              "dietaryNotes": "天然无麸质、无乳制品，适合纯素。上方营养数据为依据食材估算，因原方未提供。",
              "nutrition": {
                      "basis": "依所列食材按 2 份（共一个中等苹果）估算。此为估算值，并非实验室检测的营养标签。"
              }
      },
      "baked-cinnamon-apples": {
              "title": "烤肉桂苹果",
              "description": "温热软嫩的烤苹果，填入暖心的肉桂糖馅——天然柔软，是一道慰藉人心、易于入口的甜点。",
              "ingredients": [
                      {
                              "amount": "4 个大",
                              "item": "脆甜苹果",
                              "note": "蜜脆、富士或嘎啦苹果最合适"
                      },
                      {
                              "amount": "4 汤匙",
                              "item": "浅色红糖"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "肉桂粉"
                      },
                      {
                              "amount": "1/4 茶匙",
                              "item": "肉豆蔻粉"
                      },
                      {
                              "amount": "2 汤匙",
                              "item": "无盐黄油，软化"
                      },
                      {
                              "amount": "1/4 杯",
                              "item": "苹果酒或苹果汁"
                      }
              ],
              "instructions": [
                      "烤箱预热至 190°C。在 23×33 厘米的烤盘上薄薄抹一层油。",
                      "将苹果去核，底部保留约 1.2 厘米果肉以兜住馅料。用挖球器或勺子小心挖出果核，形成一个凹槽。",
                      "小碗中将红糖、肉桂粉、肉豆蔻粉与软化黄油拌成松散的碎粒状。",
                      "将肉桂糖馅填入每个苹果中，轻轻压实。",
                      "把苹果放入备好的烤盘，将苹果酒倒入苹果周围的盘底。",
                      "用锡纸紧密覆盖，烘烤 35 分钟。",
                      "揭去锡纸，继续烤 10-15 分钟，至苹果完全软透、用叉子可轻松戳入。果肉应呈半透明且柔软。",
                      "出炉后静置 10 分钟再食用。此时应当软到只用勺子即可取食，几乎无需咀嚼。",
                      "食用时将盘中汁液淋在表面，按喜好可搭配一勺打发奶油或香草冰淇淋。"
              ],
              "servingTips": [
                      "当叉子毫无阻力地插入、果皮轻易与果肉分离时，苹果即已烤好。",
                      "若为细泥饮食，请挖出烤好的果肉，压碎或搅打至细滑。",
                      "请选择烘烤时能保持形状的苹果品种——避免烤后化成糊状的软质品种。",
                      "食用前先用勺子试一下：苹果应能轻松舀起成柔软、易处理的小块。",
                      "这道甜点常见的坚果碎已被刻意略去。柔软的食物中混入坚硬酥脆的颗粒属于混合质地风险——两者所需的咀嚼程度截然不同，这种组合是最难安全处理的情形之一。"
              ],
              "dietaryNotes": "无麸质，并可做成无乳制品版本（使用植物黄油）。按原方不含坚果——略去常见坚果装饰的原因请见食用提示。",
              "nutrition": {
                      "basis": "依所列食材按 4 份（每份一个填馅苹果）估算。此为估算值，并非实验室检测的营养标签。"
              }
      },
      "banana-custard": {
              "title": "香蕉蛋奶布丁",
              "description": "熟透的香蕉打入细滑的香草蛋奶布丁中，过筛至完全无需咀嚼。三种食材，无需烹煮。",
              "ingredients": [
                      {
                              "amount": "半根中等",
                              "item": "熟香蕉",
                              "note": "60 克——越熟越好"
                      },
                      {
                              "amount": "3/4 杯",
                              "item": "现成的细滑香草蛋奶布丁",
                              "note": "180 克"
                      },
                      {
                              "amount": "1/4 茶匙",
                              "item": "香草精"
                      }
              ],
              "instructions": [
                      "将香蕉彻底压成泥。",
                      "将香蕉、蛋奶布丁与香草精搅打至完全细滑。",
                      "若仍有纤维残留，请过细筛。",
                      "冷藏，或按医嘱的温度食用；上桌前请检查质地。"
              ],
              "servingTips": [
                      "照片中的甜点表面装饰有香蕉片与巧克力碎。两者都不适用于第 3 级——该等级不应有任何需要咀嚼的东西。此处评级的是打匀后的蛋奶布丁本身。",
                      "香蕉带纤维，仅靠搅打未必能彻底解决。第 3 步正是让这道甜点真正达到第 3 级、而非接近第 3 级的关键，因此即便看起来已经细滑，也请过筛。",
                      "市售蛋奶布丁各品牌差异很大。第 3 级仍应能从勺上流下，请检查所用产品，若其堆叠成形，请用少许牛奶调稀。",
                      "冷藏后会变硬。若需冷藏，请在完全冷却后重新检查稠度，而非趁温热时判断。"
              ],
              "dietaryNotes": "视所用蛋奶布丁而定，含乳制品与鸡蛋。若需注意麸质，请查看蛋奶布丁成分；许多现成产品以小麦淀粉增稠。",
              "nutrition": {
                      "basis": "依所列食材按 2 份估算，使用标准现成香草蛋奶布丁。原始资料未提供营养数据，故此为估算值而非实验室检测标签。"
              }
      },
      "banana-smoothie": {
              "title": "香蕉香橙思慕雪",
              "description": "简单绵密的香蕉香橙思慕雪，加入希腊酸奶——细滑可倾倒，自带清甜。",
              "ingredients": [
                      {
                              "amount": "1 根",
                              "item": "香蕉"
                      },
                      {
                              "amount": "1/2 个",
                              "item": "橙子，去皮切块"
                      },
                      {
                              "amount": "1/3 杯",
                              "item": "希腊酸奶"
                      },
                      {
                              "amount": "1/4 杯",
                              "item": "清水或牛奶",
                              "note": "乳制或植物奶均可"
                      },
                      {
                              "amount": "1-2 茶匙",
                              "item": "蜂蜜或枫糖浆",
                              "note": "可选"
                      }
              ],
              "instructions": [
                      "将香蕉与橙块粗略切碎，与酸奶、清水（或牛奶）一同放入搅拌机。",
                      "开机搅打至绵密细滑。尝味后按需加蜂蜜调整。"
              ],
              "servingTips": [
                      "请比感觉需要的时间多打一会儿——橙瓣若未打透，会留下细小的纤维丝，这是这杯本应极细滑的饮品中主要的风险所在。",
                      "这杯思慕雪可顺畅倾倒、不保持形状，打好后天然符合第 3 级流质质地。",
                      "若需要可用勺舀起的更稠质地而非饮品，请增加酸奶用量或加入增稠剂，直至达到第 4 级稠度。",
                      "打好后请立即食用——思慕雪放置后会分层或进一步变稀。"
              ],
              "dietaryNotes": "素食。使用植物酸奶与植物奶即为无乳制品版本。",
              "nutrition": {
                      "basis": "每份计；本食谱可做 2 份。"
              }
      },
      "blueberry-smoothie": {
              "title": "蓝莓思慕雪",
              "description": "蓝莓与酸奶、牛奶一同打匀，滤去果皮后增稠至微稠饮品。",
              "ingredients": [
                      {
                              "amount": "1/2 杯",
                              "item": "蓝莓",
                              "note": "75 克"
                      },
                      {
                              "amount": "1/2 杯",
                              "item": "原味酸奶",
                              "note": "120 毫升"
                      },
                      {
                              "amount": "1/2 杯",
                              "item": "牛奶",
                              "note": "120 毫升"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "糖",
                              "note": "可选"
                      },
                      {
                              "amount": "按说明",
                              "item": "市售增稠剂",
                              "note": "仅在需要达到医嘱的第 2 级时使用"
                      }
              ],
              "instructions": [
                      "将蓝莓、酸奶、牛奶与糖一同搅打至细滑。",
                      "用细网筛过滤，滤去果皮。",
                      "仅在需要达到医嘱的第 2 级时，按产品说明加入增稠剂。",
                      "按说明静置，搅拌后检测稠度，再行食用。"
              ],
              "servingTips": [
                      "第 2 级指的是饮品的稠度，而非食物的质地。增稠剂的用量取决于所用产品以及医嘱的具体等级，请遵循厂商说明，而非固定的勺数。",
                      "请按增稠剂说明的时间静置后再判断稠度。多数产品会持续增稠数分钟，刚调好时看起来合适的饮品，端上桌时可能已经过稠。",
                      "请以实际食用温度，用 IDDSI 流动测试检测成品。加热或冷藏都会改变其流动性。",
                      "请先过滤再增稠。果籽、果皮与果肉纤维，正是增稠剂无法解决的东西。"
              ],
              "dietaryNotes": "含乳制品。天然无麸质。蓝莓果皮必须滤除；搅拌机无法将其打碎。",
              "nutrition": {
                      "basis": "依所列食材按 2 份估算，含可选的糖。此为估算值，并非实验室检测的营养标签。"
              }
      },
      "butternut-squash-bisque": {
              "title": "奶油南瓜浓汤",
              "description": "细滑如丝、自带甘甜的胡桃南瓜汤，加入淡奶油与温润香料提味——一碗纯粹的慰藉。",
              "ingredients": [
                      {
                              "amount": "900 克",
                              "item": "胡桃南瓜，去皮切块",
                              "note": "可使用预切南瓜以节省时间"
                      },
                      {
                              "amount": "1 个中等",
                              "item": "洋葱，切丁"
                      },
                      {
                              "amount": "2 瓣",
                              "item": "蒜，切末"
                      },
                      {
                              "amount": "4 杯",
                              "item": "低钠鸡汤或蔬菜汤"
                      },
                      {
                              "amount": "1/2 杯",
                              "item": "淡奶油",
                              "note": "无乳制品可用全脂椰浆替代"
                      },
                      {
                              "amount": "1/4 茶匙",
                              "item": "肉豆蔻粉"
                      },
                      {
                              "amount": "1/4 茶匙",
                              "item": "肉桂粉"
                      },
                      {
                              "amount": "1/4 茶匙",
                              "item": "白胡椒粉"
                      },
                      {
                              "amount": "2 汤匙",
                              "item": "黄油"
                      },
                      {
                              "amount": "1 汤匙",
                              "item": "枫糖浆",
                              "note": "可选，增添甜味"
                      }
              ],
              "instructions": [
                      "大锅中中火融化黄油，下洋葱与蒜末，炒至变软出香，约 5 分钟。",
                      "加入南瓜块翻炒，使其均匀裹上黄油。",
                      "倒入高汤煮沸，转小火加盖炖 25-30 分钟，至南瓜非常软烂、用叉子可轻易戳透。",
                      "离火，用手持搅拌棒将汤打至完全细滑如丝。也可分批用普通搅拌机处理，注意热液体的安全。",
                      "将打好的汤倒回锅中小火加热，拌入淡奶油、肉豆蔻、肉桂、白胡椒，如使用枫糖浆也一并加入。",
                      "小火加热并不时搅拌，至整锅热透。加入奶油后切勿煮沸。",
                      "试味并调整调味。汤应当完全细滑、毫无颗粒。如有需要，可再次搅打以确保彻底顺滑。",
                      "盛入温过的碗中，表面淋少许奶油画圈。细滑的质地让这道汤在吞咽困难时格外好入口。"
              ],
              "servingTips": [
                      "这道浓汤本身就很细滑，如需更极致的顺滑，可用细网筛过滤一遍。",
                      "汤放凉后会变稠。重新加热时可加些高汤调至理想稠度。",
                      "以温热而非滚烫的温度食用——过烫会造成烫伤并加重吞咽困难。",
                      "可按份量分装冷冻，方便日后加热食用。"
              ],
              "dietaryNotes": "无麸质，并可做成无乳制品版本。使用自制高汤时钠含量较低。质地极为细滑，适合吞咽困难者的饮食。",
              "nutrition": {
                      "basis": "依所列食材按 6 份估算，含可选的枫糖浆。此为估算值，并非实验室检测的营养标签。"
              }
      },
      "chicken-golden-soup": {
              "title": "金汤鸡肉星星面汤",
              "description": "一碗舒缓的金黄色鸡汤，配上星星造型的迷你意面，温和而滋养。",
              "ingredients": [
                      {
                              "amount": "450 克",
                              "item": "去骨去皮鸡胸肉"
                      },
                      {
                              "amount": "8 杯",
                              "item": "低钠鸡汤"
                      },
                      {
                              "amount": "1 杯",
                              "item": "星星面",
                              "note": "星形或其他小颗粒汤面"
                      },
                      {
                              "amount": "2 根中等",
                              "item": "胡萝卜，切极细丁"
                      },
                      {
                              "amount": "2 根",
                              "item": "芹菜，切极细丁"
                      },
                      {
                              "amount": "1 个小",
                              "item": "洋葱，切细丁"
                      },
                      {
                              "amount": "3 瓣",
                              "item": "蒜，切末"
                      },
                      {
                              "amount": "1/4 杯",
                              "item": "新鲜欧芹，切碎"
                      },
                      {
                              "amount": "1/4 茶匙",
                              "item": "姜黄粉",
                              "note": "增添金黄色泽并具抗炎作用"
                      },
                      {
                              "amount": "1 汤匙",
                              "item": "橄榄油"
                      }
              ],
              "instructions": [
                      "鸡胸肉以胡椒调味。大锅中以中火将鸡汤加热至微滚。",
                      "将整块鸡胸放入微滚的汤中，转小火加盖煮 15-20 分钟，至鸡肉熟透且非常软嫩。",
                      "取出鸡肉静置 10 分钟，用两把叉子撕成细小软嫩的肉丝。鸡肉应当毫不费力地散开。",
                      "同一锅中加橄榄油，中火加热，下洋葱、胡萝卜与芹菜，炒至非常软烂，约 8 分钟。",
                      "加入蒜末与姜黄粉，翻炒 1 分钟至出香。",
                      "倒入鸡汤煮沸，加入星星面，按包装说明煮 8-10 分钟，直至非常软烂。",
                      "将鸡肉丝放回锅中。此时面应当软到用叉子就能压碎。",
                      "拌入新鲜欧芹，试味并调整调味。这锅汤应当暖心且易于入口。",
                      "若吞咽困难，可直接食用，也可略微压碎，使面与鸡肉进一步融合。"
              ],
              "servingTips": [
                      "将面煮得比包装说明略久一些，可获得更柔软的质地。",
                      "蔬菜切得极细，使其完全无需咀嚼。",
                      "鸡肉应当软到在汤中一碰即散。",
                      "若为细泥饮食，请将整锅汤搅打至完全细滑后再食用。"
              ],
              "dietaryNotes": "可用米制意面或不放面，做成无麸质版本。使用自制高汤即为低钠版本。",
              "nutrition": {
                      "basis": "依所列食材按 4 份估算，并按方使用低钠高汤。此为估算值，并非实验室检测的营养标签。"
              }
      },
      "chicken-noodle-soup": {
              "title": "经典鸡汤面",
              "description": "从零开始熬制的鸡汤面，以慢火熬成的自制高汤为底，配上鸡肉丝与软嫩的鸡蛋面。",
              "ingredients": [
                      {
                              "amount": "2 汤匙",
                              "item": "植物油"
                      },
                      {
                              "amount": "4 茶匙",
                              "item": "粗盐，分次使用"
                      },
                      {
                              "amount": "900 克",
                              "item": "带骨带皮鸡块",
                              "note": "最好是鸡腿与鸡胸混合"
                      },
                      {
                              "amount": "8 杯",
                              "item": "低钠鸡高汤"
                      },
                      {
                              "amount": "4 杯",
                              "item": "冷水"
                      },
                      {
                              "amount": "2 枝",
                              "item": "百里香"
                      },
                      {
                              "amount": "1 片",
                              "item": "香叶"
                      },
                      {
                              "amount": "1 个小",
                              "item": "黄洋葱，粗切",
                              "note": "约 1.25 杯"
                      },
                      {
                              "amount": "2 根",
                              "item": "芹菜，切约 3 毫米薄片",
                              "note": "约 1.25 杯"
                      },
                      {
                              "amount": "1 根大",
                              "item": "胡萝卜，去皮切约 3 毫米薄片",
                              "note": "约 1 杯"
                      },
                      {
                              "amount": "170 克",
                              "item": "宽鸡蛋面",
                              "note": "下锅前先掰短，或改用星星面等小颗粒面型——长面条是这碗汤唯一真正的风险"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "现磨黑胡椒"
                      },
                      {
                              "amount": "1/4 杯",
                              "item": "新鲜欧芹，切细碎"
                      }
              ],
              "instructions": [
                      "大号深锅中中大火烧热油。鸡块四面以 2 茶匙盐调味，鸡皮朝下放入锅中，不翻动地煎至一面金黄，约 5 分钟。翻面再煎至另一面金黄，约 5 分钟。",
                      "加入高汤、清水、百里香与香叶。中大火加热至将滚未滚，转中小火慢煮，至即读式温度计插入鸡胸最厚处显示 74°C，约 20 至 30 分钟。",
                      "将鸡胸取出放至砧板。鸡腿等深色肉继续煮约 40 分钟后一并取出，全部静置至少 10 分钟。去除鸡皮与骨头后丢弃，将鸡肉撕成软嫩的小块。",
                      "同时取出百里香与香叶丢弃。放入洋葱、芹菜与胡萝卜，中小火保持将滚未滚的状态，不时搅拌，煮至刚刚变软，约 5 分钟。鸡蛋面下锅前先掰成短段，再放入锅中不时搅拌，煮至软烂——要比弹牙状态再多煮一两分钟。",
                      "拌入鸡肉与黑胡椒，按需以剩余的 2 茶匙盐调味。",
                      "分装入碗，撒上欧芹与少许黑胡椒。",
                      "可提前准备：不含面条的汤最多可提前 5 天做好，密封冷藏。食用时将汤在大锅中加热至微滚，下面条煮至弹牙，约 5 分钟。"
              ],
              "servingTips": [
                      "鸡蛋面保持原本的长条状时是真实的噎呛风险——第 6 级以下，请在碗中直接用厨房剪剪短，或改用星星面这类小颗粒面型。",
                      "若为第 5 级，请将鸡肉撕得极细、蔬菜切得极小。鸡胸肉在完全煮熟后，几乎不费力就能撕散。",
                      "若为第 3 至 4 级，请滤出汤汁，将蔬菜与鸡肉加少许高汤搅打细滑，并完全不放面条。",
                      "提前 5 天做好不含面条的汤底，是很好的批量备餐方式，之后再按各自的质地需求单独完成每一碗。"
              ],
              "dietaryNotes": "含麸质（鸡蛋面）；可改用无麸质面条或不放面条，做成无麸质版本。",
              "nutrition": {
                      "basis": "每份计；本食谱可做 8 份。",
                      "flag": "每份 1140 毫克，接近成人每日钠上限的一半。请使用真正低钠的高汤或自制高汤，并在加满 4 茶匙盐之前先尝味。"
              }
      },
      "chinese-egg-drop-soup": {
              "title": "中式蛋花汤",
              "description": "清甜温和的金黄高汤中漂着柔软的蛋花——以慢火熬制的鸡肉香菇高汤为底。",
              "ingredients": [
                      {
                              "amount": "1 只",
                              "item": "整鸡或鸡块",
                              "note": "用于熬汤；原方未注明重量"
                      },
                      {
                              "amount": "适量",
                              "item": "焯水用清水",
                              "note": "原方未注明焯水香料——清水即可"
                      },
                      {
                              "amount": "一小把",
                              "item": "干香菇",
                              "note": "用于香菇高汤；清水泡发 15–30 分钟。原方未注明用量"
                      },
                      {
                              "amount": "几片",
                              "item": "生姜"
                      },
                      {
                              "amount": "2-3 根",
                              "item": "葱",
                              "note": "整根，另备葱花装饰"
                      },
                      {
                              "amount": "几片",
                              "item": "白萝卜"
                      },
                      {
                              "amount": "少许",
                              "item": "绍兴酒"
                      },
                      {
                              "amount": "适量",
                              "item": "盐与白胡椒粉",
                              "note": "为成品蛋花汤调味"
                      },
                      {
                              "amount": "1/2 杯",
                              "item": "马铃薯淀粉",
                              "note": "用少量水调成芡汁；按需增减"
                      },
                      {
                              "amount": "3-4 个",
                              "item": "鸡蛋，打散",
                              "note": "原方未注明数量——按想要的蛋花量调整"
                      }
              ],
              "instructions": [
                      "将整鸡与焯水用的所有材料放入锅中，煮 5-10 分钟，倒掉汤水并冲净鸡身上的浮沫。",
                      "制作香菇高汤：干香菇加水浸泡 15-30 分钟。",
                      "将鸡肉放回干净的锅中，加入姜片、葱段与白萝卜。倒入泡香菇的汤汁、绍兴酒，再加清水没过所有材料。大火煮沸后转小火，慢炖 1-2 小时，至鸡肉完全软烂。炖好后过滤高汤。",
                      "制作蛋花汤：将过滤好的鸡汤倒入干净的锅中，加盐与白胡椒粉调味。",
                      "用马铃薯淀粉芡汁勾芡，先加约半杯调好的芡汁，想更浓稠可再添加。",
                      "将蛋液缓缓细流状淋入汤中，边淋边向前甩动，使其凝成柔软的薄蛋花。",
                      "趁热食用，撒上葱花。"
              ],
              "servingTips": [
                      "过滤之后，这道汤对多数质地等级都相当温和——汤体顺滑，蛋花本身柔软。",
                      "原方未注明香料用量与鸡蛋个数——请从少量开始，尝味后再调整，不要凭猜测大量添加。",
                      "第 4 级及以下，请将成品汤略微搅打，使蛋花与细小香菇碎完全细滑，并省略葱花装饰。",
                      "务必将高汤彻底过滤干净——细小的骨渣或姜丝若混入，是真实存在的危险。"
              ],
              "dietaryNotes": "天然不含乳制品。含鸡蛋；若需无麸质，请以日式溜酱油替代豆制调味料。上方营养数据为依据食材估算，因原方未提供。",
              "nutrition": {
                      "basis": "按成品汤 6 份估算。原方多处用量未定，此处假设使用 3 磅重的鸡、4 个鸡蛋，且高汤已过滤、鸡肉另行盛放而非留在汤中。仅供粗略参考。"
              }
      },
      "chinese-silken-tofu": {
              "title": "中式嫩豆腐淋热酱汁",
              "description": "冰镇嫩豆腐淋上香气四溢的温热酱油蒜香葱汁——几乎不需用勺，更谈不上咀嚼。",
              "ingredients": [
                      {
                              "amount": "300 克",
                              "item": "嫩豆腐",
                              "note": "软豆腐亦可"
                      },
                      {
                              "amount": "1.5 汤匙",
                              "item": "植物油",
                              "note": "或任何味道清淡的油"
                      },
                      {
                              "amount": "2/3 杯",
                              "item": "黄洋葱或白洋葱，切细丁"
                      },
                      {
                              "amount": "1/2 杯",
                              "item": "葱，切细末"
                      },
                      {
                              "amount": "3 瓣",
                              "item": "蒜，切末"
                      },
                      {
                              "amount": "3 汤匙",
                              "item": "生抽或普通酱油"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "白砂糖"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "焙香香油"
                      }
              ],
              "instructions": [
                      "揭开豆腐盒一角的塑封膜，保持膜不完全撕下，将盒子倒扣在水槽上方沥去多余水分。再在开口处盖上干净厨房纸，翻扣在平面上，让纸吸走表面水汽。",
                      "在豆腐盒四角各剪一个小口以便进气。将餐盘倒扣在豆腐上，连盘带盒一同小心翻转，让豆腐自然滑落到盘中。放入冰箱冷藏至充分冰凉。",
                      "小锅中加植物油，中火烧热。下洋葱、葱末与蒜末，翻炒 2-3 分钟，至洋葱变软透明。",
                      "转小火。将酱油、糖与香油直接倒入锅中，与炒香的洋葱蒜末拌匀，加热约 1 分钟。离火静置 1 分钟。",
                      "从冰箱取出冰镇嫩豆腐，将温热酱汁均匀淋在豆腐上——豆腐本身完全无需烹煮，开盒即是软嫩状态。"
              ],
              "servingTips": [
                      "嫩豆腐是最柔软的蛋白质来源之一——用勺子几乎不需用力即可压平，是现成的第 4 级基础食材。",
                      "原方中的芝麻与生葱装饰已略去。本食谱评定为第 4 级，而这两样都是细小、坚硬或带纤维的颗粒，不适用于细滑饮食。炒入酱汁中的葱则无妨——它在锅中已完全软化。",
                      "若需完全符合第 3 级，请将豆腐与酱汁一同压碎拌匀至可顺畅倾倒，而不是整块盛放。",
                      "酱汁应温热而非滚烫，直接淋在冰镇豆腐上——冷热对比正是这道菜的妙处，但滚烫的酱汁有烫伤风险。"
              ],
              "dietaryNotes": "素食，亦可做成纯素（请确认糖的来源）。使用日式溜酱油可做成无麸质版本。钠含量很高——若需限钠，请先参阅上方说明。",
              "nutrition": {
                      "basis": "每份计；本食谱可做 2 份。",
                      "flag": "每份含钠 1523 毫克，超过成人每日上限的一半，且几乎全部来自酱油——请选用低钠酱油，并从少于食谱用量开始。"
              }
      },
      "chinese-steamed-egg": {
              "title": "中式蒸蛋",
              "description": "细滑咸香的蒸蛋羹，淋上油亮的酱油香油汁——滑到几乎不需用勺，更谈不上咀嚼。",
              "ingredients": [
                      {
                              "amount": "2 个",
                              "item": "鸡蛋"
                      },
                      {
                              "amount": "3/4 杯",
                              "item": "清水"
                      },
                      {
                              "amount": "1/2 茶匙",
                              "item": "鸡粉"
                      },
                      {
                              "amount": "1/4 茶匙",
                              "item": "盐"
                      },
                      {
                              "amount": "1 汤匙",
                              "item": "酱油",
                              "note": "调酱汁用"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "香油",
                              "note": "调酱汁用"
                      },
                      {
                              "amount": "1/2 茶匙",
                              "item": "糖",
                              "note": "调酱汁用"
                      }
              ],
              "instructions": [
                      "将鸡蛋与清水、鸡粉、盐一同搅打均匀。",
                      "将蛋液过筛入碗中。确认不留任何气泡——若仍有，可用打火机燎破或用勺舀除。",
                      "盖上保鲜膜并戳几个小孔，蒸 15 分钟。蛋羹应刚刚凝固，中心轻轻颤动。",
                      "蒸制期间，用酱油、香油与糖调成简单的酱汁。",
                      "用小刀在蒸好的蛋羹表面划出纹路，淋上酱汁即可食用。"
              ],
              "servingTips": [
                      "这道菜通常会撒的葱花已被略去，因为蛋羹评定为第 4 级，而葱丝并不属于这一等级。若为不受限饮食的人加回配料，请先过滤酱汁，以免混入酥脆的辣椒油碎粒。",
                      "第 2 步过滤蛋液，正是成品蛋羹能够完全细滑的原因。请勿省略。",
                      "务必小火慢蒸。蒸过头的蛋羹会变得橡胶般韧，并析出水分，形成一层稀薄流动的液体，比蛋羹本身更难安全吞咽。",
                      "温热食用，不要滚烫——蛋羹很能保温，容易烫口。"
              ],
              "dietaryNotes": "若以日式溜酱油替代酱油，则天然无麸质。钠含量很高——在提供给需限钠者之前，请先参阅下方营养说明。",
              "nutrition": {
                      "basis": "每份计，依所列食材计算（本食谱可做 2 份）。假设酱汁全部食用。"
              }
      },
      "classic-meatloaf": {
              "title": "经典肉糕",
              "description": "湿润软嫩的肉糕，表面刷上酸甜番茄酱釉——家常、熟悉，且很容易进一步软化以适应更温和的饮食。",
              "ingredients": [
                      {
                              "amount": "2 个大",
                              "item": "鸡蛋"
                      },
                      {
                              "amount": "1 个中等",
                              "item": "黄洋葱，切成四块"
                      },
                      {
                              "amount": "1 根中等",
                              "item": "胡萝卜，去皮切大块",
                              "note": "切大块只因接下来要放入料理机——最终会被打得极细并混入肉糕中"
                      },
                      {
                              "amount": "1 根",
                              "item": "芹菜，切大块",
                              "note": "同样会被打细；成品中不会残留任何芹菜筋"
                      },
                      {
                              "amount": "1 瓣",
                              "item": "大蒜，去皮"
                      },
                      {
                              "amount": "680 克",
                              "item": "肉末",
                              "note": "最好是牛、猪、小牛肉混合，或 93/7 的火鸡肉末"
                      },
                      {
                              "amount": "3/4 杯",
                              "item": "干面包糠"
                      },
                      {
                              "amount": "1/4 杯",
                              "item": "新鲜欧芹，切碎",
                              "note": "可另留少量装饰"
                      },
                      {
                              "amount": "1/4 杯",
                              "item": "牛奶"
                      },
                      {
                              "amount": "1/4 杯",
                              "item": "番茄酱"
                      },
                      {
                              "amount": "1 汤匙",
                              "item": "伍斯特酱"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "粗盐"
                      },
                      {
                              "amount": "1/2 茶匙",
                              "item": "粗磨黑胡椒"
                      },
                      {
                              "amount": "1/4 杯",
                              "item": "番茄酱",
                              "note": "调酱釉用"
                      },
                      {
                              "amount": "2 汤匙",
                              "item": "红糖，压实",
                              "note": "调酱釉用"
                      },
                      {
                              "amount": "1 汤匙",
                              "item": "红酒醋",
                              "note": "调酱釉用"
                      }
              ],
              "instructions": [
                      "烤箱预热至 175°C。在 23×13 厘米的吐司模内喷上防粘油。",
                      "大碗中将两个鸡蛋略微打散。",
                      "将洋葱、芹菜、胡萝卜与大蒜放入料理机，打至极细碎——约 1 杯的量。倒入装有蛋液的碗中。",
                      "加入肉末、面包糠、欧芹、牛奶、番茄酱、伍斯特酱、盐与黑胡椒。用手拌匀即可，切勿过度搅拌。轻轻压入备好的模具中。",
                      "小碗中将番茄酱、红糖与红酒醋调成酱釉。在肉糕表面刷上一半酱釉，烘烤 35 分钟。",
                      "刷上剩余酱釉，再烤约 55 分钟，至中心温度达到 74°C 以上、整块肉糕完全软嫩。静置时内部温度还会略微上升。",
                      "出炉后静置 15 分钟，再脱模或切片。"
              ],
              "servingTips": [
                      "一份为两片。由于使用肉末，这道肉糕天然柔软，没有需要咀嚼的整条肌肉纤维——用叉子将一片压碎并拌入一勺额外酱釉，即可轻松达到第 5 级。",
                      "若想更快完成，可将肉馅做成 6 个迷你肉糕放在烤盘上，以 200°C 烤约 25 分钟，确认中心达到 74°C。",
                      "切勿过度搅拌肉馅——揉搓过度会让成品更紧实、更难压散，与柔软质地的目标背道而驰。",
                      "食用时在每片上多淋些酱釉或清淡的肉汁，保持湿润，更易吞咽。"
              ],
              "dietaryNotes": "可用任意单一肉末或混合肉末制作——上方营养数据按牛肉末计算。按原方非无麸质；可改用无麸质面包糠。",
              "nutrition": {
                      "basis": "每份（2 片）计，按牛肉末计算。本食谱共 5 份。"
              }
      },
      "congee": {
              "title": "粥（米粥）",
              "description": "一锅可塑性极强的米粥，小火慢熬至浓稠、绵密、细滑——是本站所有食谱中质地最温和的一道。",
              "ingredients": [
                      {
                              "amount": "1 杯",
                              "item": "白米",
                              "note": "中粒米或长粒米皆可——茉莉香米、寿司米或普通白米都行"
                      },
                      {
                              "amount": "8-10 杯",
                              "item": "清水或高汤",
                              "note": "水越多粥越稀；用高汤可增添风味与营养"
                      },
                      {
                              "amount": "适量",
                              "item": "盐"
                      },
                      {
                              "amount": "可选",
                              "item": "剩米饭",
                              "note": "用于快手做法——见下方快速方法"
                      },
                      {
                              "amount": "可选",
                              "item": "香料",
                              "note": "姜、蒜、葱根"
                      },
                      {
                              "amount": "可选",
                              "item": "根茎类蔬菜",
                              "note": "胡萝卜、芹菜、洋葱——熬高汤时使用"
                      },
                      {
                              "amount": "可选",
                              "item": "香草",
                              "note": "香菜梗、欧芹、香叶"
                      }
              ],
              "instructions": [
                      "将 1 杯生白米与 8-10 杯清水或自制高汤放入大锅中。",
                      "煮沸后转小火，保持稳定的微滚状态。期间不时搅拌，防止粘底。",
                      "敞盖熬煮 1-2 小时，直到米粒化开、释出淀粉，粥体彻底软烂绵密。若过于浓稠，可再加水。",
                      "在最后 20-30 分钟加入盐、姜片及任何想要的调味料。",
                      "当粥变得浓稠、绵密、细滑时即已煮好。可直接食用，也可搭配配料。",
                      "快手做法：将 4 杯剩米饭与 3 杯鸡高汤放入中号锅中，煮沸后小火煮 15-20 分钟，边煮边搅拌至米粒大致化开成粥。可按喜好加高汤调整稠度。"
              ],
              "servingTips": [
                      "经典比例是 1 份米配 8-10 份水或高汤——液体量取偏高值，并以小火慢熬，可得到最细滑、最适合第 4 级的成品。",
                      "全程不时搅拌；既能防止米粒粘底，也能让米粒更快化开。",
                      "若需完全细泥的第 4 级质地，请将煮好的粥搅打细滑。按原方慢熬的白粥，米粒软烂化开，天然更接近第 5 级。",
                      "质地调整饮食请保持配料简单柔软——炸葱酥、炸蒜与烤花生是常见的配粥小料，但不适用于第 6 级以下。淋少许酱油或香油则无妨。"
              ],
              "dietaryNotes": "按原方天然无麸质、无乳制品。改用高汤或加入肉丝，会改变上方的营养估算值。",
              "nutrition": {
                      "basis": "按基础做法估算（1 杯米、9 杯水、一小撮盐，不含任何可选配料），共 6 份。此为估算值，并非实验室检测或实物拍摄的营养标签。"
              }
      },
      "cream-of-mushroom-soup": {
              "title": "奶油蘑菇汤",
              "description": "丝绒般顺滑的蘑菇汤，融合浓郁奶香与咸鲜高汤——温暖、慰藉，质地天然柔软，易于入口。",
              "ingredients": [
                      {
                              "amount": "10 个",
                              "item": "褐菇",
                              "note": "用厨房布擦净"
                      },
                      {
                              "amount": "100 毫升",
                              "item": "淡奶油"
                      },
                      {
                              "amount": "150 毫升",
                              "item": "高汤",
                              "note": "任何种类皆可"
                      },
                      {
                              "amount": "1/2 个",
                              "item": "洋葱，切丁"
                      },
                      {
                              "amount": "2 瓣",
                              "item": "蒜"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "红椒粉"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "蒜粉"
                      },
                      {
                              "amount": "1 枝",
                              "item": "新鲜百里香"
                      },
                      {
                              "amount": "30 毫升",
                              "item": "白葡萄酒",
                              "note": "可选"
                      },
                      {
                              "amount": "2 汤匙",
                              "item": "玉米淀粉"
                      },
                      {
                              "amount": "2 汤匙",
                              "item": "黄油"
                      }
              ],
              "instructions": [
                      "用厨房布擦去蘑菇上的泥土，切片备用。",
                      "将洋葱与蒜切成细丁。",
                      "锅中放入黄油与百里香枝，加热至黄油吸收百里香香气后，取出百里香枝。",
                      "下蘑菇片、洋葱丁与蒜末，不时翻炒，煮至蘑菇中的水分完全蒸发、表面干爽。",
                      "倒入白葡萄酒刮起锅底精华，煮至酒液完全蒸发。",
                      "加入高汤煮沸，拌入红椒粉与蒜粉。",
                      "将玉米淀粉与等量清水调成芡汁，搅拌至完全无颗粒。",
                      "汤沸腾后加入芡汁，转小火慢煮至汤体变稠。",
                      "汤变稠后拌入淡奶油，温热食用。"
              ],
              "servingTips": [
                      "蘑菇切得越薄，成品质地越柔软，几乎不需咀嚼。",
                      "若想要更细滑的口感，可在加奶油之前将一半的汤搅打细滑。",
                      "汤放凉后会变稠，重新加热时可按需添加高汤。",
                      "以温热而非滚烫的温度食用，以免烫伤——吞咽困难时这一点尤为重要。"
              ],
              "dietaryNotes": "使用玉米淀粉时为无麸质。如需无乳制品版本，可用椰浆替代淡奶油。",
              "nutrition": {
                      "basis": "依所列食材按 3 份估算，含可选的白葡萄酒。此为估算值，并非实验室检测的营养标签。"
              }
      },
      "creamy-scrambled-eggs": {
              "title": "奶香炒蛋",
              "description": "小火慢炒、不停搅动而成的细嫩炒蛋，蛋花细小柔软——是最容易准备、也最温和的蛋白质之一。",
              "ingredients": [
                      {
                              "amount": "4 个大",
                              "item": "鸡蛋"
                      },
                      {
                              "amount": "1/8 茶匙",
                              "item": "粗盐",
                              "note": "可按口味增加"
                      },
                      {
                              "amount": "1/2 汤匙",
                              "item": "黄油或橄榄油"
                      },
                      {
                              "amount": "可选",
                              "item": "现磨黑胡椒与香葱碎",
                              "note": "食用时添加"
                      }
              ],
              "instructions": [
                      "将鸡蛋打入中号碗中，加盐，搅打至顺滑起泡。静置 5 至 10 分钟。",
                      "中小火在不粘锅中融化黄油。待黄油开始滋滋作响时，再将蛋液搅打一次后倒入锅中。立即用软质铲在锅中不停画小圈，直到蛋液略微变稠、开始形成极细小的蛋花，约 30 秒。",
                      "改为在锅中大幅度来回推拌，直到形成较大、绵软、用叉子即可压散的蛋花，约 20 秒。",
                      "当鸡蛋刚刚凝固、局部仍略显湿润时，将锅离火静置几秒让余温收尾。最后拌匀即可盛出，按喜好再撒少许盐、现磨黑胡椒与新鲜香草。"
              ],
              "servingTips": [
                      "小火慢炒、持续搅动，正是蛋花保持细小、柔软、湿润的关键——这天然就是全站最温和的蛋白质之一。",
                      "盛盘后用叉子将炒蛋轻轻压碎，即可轻松达到第 4 级。",
                      "第 4 级及以下请略去香葱碎与现磨黑胡椒——改为拌入少许额外的黄油或淡奶油以增加湿润度。",
                      "切勿将鸡蛋炒至完全定型或上色——过熟的炒蛋会变得干散易碎，反而更难处理。"
              ],
              "dietaryNotes": "无麸质。天然低碳水。以橄榄油替代黄油即为无乳制品版本。",
              "nutrition": {
                      "basis": "每份计（本食谱可做 2 份）。"
              }
      },
      "creamy-tomato-soup": {
              "title": "奶油番茄汤",
              "description": "番茄汤中加入淡奶油与番茄泥增稠，再搅打并过滤，直至不留任何籽与皮。",
              "ingredients": [
                      {
                              "amount": "1 杯",
                              "item": "低钠番茄汤",
                              "note": "240 毫升"
                      },
                      {
                              "amount": "2 汤匙",
                              "item": "淡奶油",
                              "note": "30 毫升"
                      },
                      {
                              "amount": "1 汤匙",
                              "item": "细滑番茄泥",
                              "note": "15 毫升"
                      },
                      {
                              "amount": "适量",
                              "item": "盐与调味料"
                      },
                      {
                              "amount": "按说明",
                              "item": "市售增稠剂",
                              "note": "仅在需要达到医嘱的第 3 级时使用"
                      }
              ],
              "instructions": [
                      "小火温热汤体，切勿煮沸。",
                      "拌入淡奶油与番茄泥。",
                      "如有需要，搅打至完全细滑，随后过滤，滤除所有籽与碎块。",
                      "若仍比医嘱的第 3 级更稀，请按产品说明增稠。",
                      "以实际食用温度检测稠度，确保成品细滑，无颗粒、无纤维。"
              ],
              "servingTips": [
                      "第 3 步强调过滤，原因全在番茄籽与番茄皮。它们经得住搅打，细小到容易被忽略，而这正是第 3 级要排除的东西。",
                      "照片中的罗勒与奶油花纹只是摆盘。第 3 级不适合使用香草；将奶油拌入汤中则无妨。",
                      "增稠剂是最后手段，而非食材。请先搅打与过滤，只有当汤仍稀于医嘱等级时，再按产品自身说明添加。",
                      "罐装番茄汤即便标注低钠，含钠量通常仍然偏高。自行加盐前请先尝味。"
              ],
              "dietaryNotes": "含乳制品。请查看罐装汤是否含麸质，麸质常被用作增稠剂。",
              "nutrition": {
                      "basis": "依所列食材按 2 份估算，使用低钠罐装汤。原始资料未提供营养数据，故此为估算值而非实验室检测标签。"
              }
      },
      "egg-salad": {
              "title": "鸡蛋沙拉",
              "description": "经典的奶香鸡蛋沙拉，加入芹菜、香葱与少许全粒芥末——柔软、湿润，易于用勺舀取。",
              "ingredients": [
                      {
                              "amount": "8 个",
                              "item": "水煮蛋，去壳"
                      },
                      {
                              "amount": "1/2 根",
                              "item": "芹菜，切极细丁",
                              "note": "约 1/3 杯——也可以不放；其纤维筋络是这道菜主要的质地风险"
                      },
                      {
                              "amount": "1/4 杯",
                              "item": "蛋黄酱"
                      },
                      {
                              "amount": "2 汤匙",
                              "item": "香葱，切细圈"
                      },
                      {
                              "amount": "2 茶匙",
                              "item": "鲜柠檬汁"
                      },
                      {
                              "amount": "2 茶匙",
                              "item": "全粒芥末酱"
                      },
                      {
                              "amount": "适量",
                              "item": "粗盐与现磨黑胡椒"
                      },
                      {
                              "amount": "可选",
                              "item": "红椒粉",
                              "note": "食用时撒上"
                      }
              ],
              "instructions": [
                      "将鸡蛋粗略切块后放入中号碗中，用叉子略微压碎，使蛋黄散开成柔软而带块状的质地。加入芹菜、蛋黄酱、香葱、柠檬汁与芥末酱，拌匀后以盐和胡椒调味。",
                      "盛入餐碗中，撒上红椒粉。"
              ],
              "servingTips": [
                      "通常搭配的饼干已被略去——饼干又硬又脆，与柔软的沙拉同食，正好构成最难处理的混合质地。请改用勺子食用。",
                      "用叉子或刀面将鸡蛋压得比普通鸡蛋沙拉更碎，直到不剩明显颗粒，即可轻松达到第 5 级。",
                      "若需第 4 级，请将成品沙拉连同一勺额外的蛋黄酱在料理机中短暂打匀至细滑。",
                      "芹菜务必切得极细，或干脆不放——其纤维筋络是这道菜中少数真正有风险的质地。"
              ],
              "dietaryNotes": "按原方即为无麸质。鸡蛋带来较高胆固醇——需要留意胆固醇摄入者请注意。",
              "nutrition": {
                      "basis": "每份计；本食谱可做 4 份。"
              }
      },
      "fluffy-pancakes": {
              "title": "松软松饼",
              "description": "用简单的自制面糊做成的经典松软松饼——一顿温和的早餐，很容易浸透糖浆以增加湿润度。",
              "ingredients": [
                      {
                              "amount": "2 杯",
                              "item": "中筋面粉"
                      },
                      {
                              "amount": "1/4 杯",
                              "item": "细砂糖或代糖"
                      },
                      {
                              "amount": "4 茶匙",
                              "item": "泡打粉"
                      },
                      {
                              "amount": "1/4 茶匙",
                              "item": "小苏打"
                      },
                      {
                              "amount": "1/2 茶匙",
                              "item": "盐"
                      },
                      {
                              "amount": "1.75 杯",
                              "item": "牛奶"
                      },
                      {
                              "amount": "1/4 杯",
                              "item": "黄油，融化后略微放凉"
                      },
                      {
                              "amount": "2 茶匙",
                              "item": "纯香草精"
                      },
                      {
                              "amount": "1 个大",
                              "item": "鸡蛋"
                      }
              ],
              "instructions": [
                      "大碗中混合面粉、糖（或代糖）、泡打粉、小苏打与盐。中间挖一个坑，倒入牛奶、融化黄油、香草精与鸡蛋。",
                      "先用打蛋器将湿性材料搅匀，再缓缓拌入粉类，混合至顺滑（略有小疙瘩无妨）。面糊应浓稠绵密——若稠到难以顺畅倒出，可分次加入少许牛奶调整。",
                      "将面糊静置，同时预热平底锅或煎板。",
                      "不粘锅或煎板以中小火加热，抹上少许黄油薄薄润锅。倒入 1/4 杯面糊，轻轻摊成圆形。",
                      "当底面金黄、表面开始冒泡时，用锅铲翻面，煎至另一面金黄。剩余面糊依此重复。",
                      "可搭配蜂蜜、枫糖浆、水果、冰淇淋或冻酸奶食用，也可直接享用。"
              ],
              "servingTips": [
                      "松饼这类蓬松海绵状的质地，对某些吞咽困难者而言其实比看起来更棘手——海绵结构会吸收唾液并膨胀。请让松饼充分浸透糖浆或稀薄的酱汁后再食用，不要干吃。",
                      "以更低的火候多煎一会儿，可得到更紧实、不那么蓬松的松饼，有些人会觉得更容易、也更安全地处理。",
                      "若需更柔软的质地，请将松饼撕成小块，在温热糖浆中浸泡一分钟后再食用，而不是整张端上。",
                      "评定在第 6 级以下者请完全避开松饼——蓬松的海绵质地不适用于细碎、细泥或流质饮食。"
              ],
              "dietaryNotes": "素食。按原方非无麸质；通常可用 1:1 无麸质面粉替代。",
              "nutrition": {
                      "basis": "每张松饼计（本食谱约可做 12 张；一般一份为 2 张）。"
              }
      },
      "ground-beef-curry": {
              "title": "牛肉末咖喱",
              "description": "一道浓郁快手的日式咖喱，以牛肉末、马铃薯与胡萝卜炖煮——用咖喱块勾芡，再加一小块黑巧克力增添层次。",
              "ingredients": [
                      {
                              "amount": "450 克",
                              "item": "牛肉末",
                              "note": "肥瘦比 90/10"
                      },
                      {
                              "amount": "5 瓣",
                              "item": "蒜，切细末"
                      },
                      {
                              "amount": "1 汤匙",
                              "item": "姜，切细末"
                      },
                      {
                              "amount": "半个大",
                              "item": "洋葱，切细丁"
                      },
                      {
                              "amount": "1 个中等",
                              "item": "马铃薯，去皮切约 1.2 厘米小丁",
                              "note": "切小丁才能在短时间炖煮中均匀熟透"
                      },
                      {
                              "amount": "1/2 杯",
                              "item": "胡萝卜，切细丁"
                      },
                      {
                              "amount": "2 块",
                              "item": "日式咖喱块",
                              "note": "原方使用 S&B 品牌"
                      },
                      {
                              "amount": "1.5 杯",
                              "item": "清水"
                      },
                      {
                              "amount": "1 汤匙",
                              "item": "黑巧克力"
                      }
              ],
              "instructions": [
                      "将蒜与姜切成细末，洋葱切丁，马铃薯切成约 1.2 厘米的小丁，全部备好待用。",
                      "锅中倒油，中火加热，下蒜末、姜末与洋葱，炒约两分钟至香气四溢、略微变软。",
                      "加入牛肉末，边炒边打散，炒至约八成熟。",
                      "放入马铃薯与胡萝卜，翻炒约一分钟，使其裹上香料。",
                      "加入咖喱块与清水，略微搅拌帮助咖喱块化开。加盖小火炖 10 分钟。",
                      "揭盖充分搅拌，最后加入黑巧克力，拌至完全融化融合。此时马铃薯与胡萝卜应已完全软烂。",
                      "可搭配米饭食用，亦可按喜好撒上葱花与香松。"
              ],
              "servingTips": [
                      "马铃薯与胡萝卜一开始就要切成小丁——块越小，在 10 分钟的炖煮中越能均匀地炖至完全软烂。",
                      "牛肉末没有需要咀嚼的肌肉纤维，因此蔬菜炖软之后，整道菜用叉子就能轻松压碎，达到第 5 级质地。",
                      "若需第 4 级，请将成品咖喱压碎或搅打——酱汁本身已浓稠细滑，很容易打匀。",
                      "质地调整饮食请略去香松与葱花装饰；两者都会带来细小、干燥或带纤维的颗粒。"
              ],
              "dietaryNotes": "含麸质（多数日式咖喱块以面糊为基底）与乳制品。请查看咖喱块品牌的过敏原说明；市面上有无麸质咖喱块。",
              "nutrition": {
                      "basis": "每份计。"
              }
      },
      "joel-robuchon-mashed-potatoes": {
              "title": "侯布雄土豆泥",
              "description": "传奇般极致丝滑的土豆泥，过细筛至如天鹅绒一般——比普通土豆泥更浓郁、更细腻。",
              "ingredients": [
                      {
                              "amount": "1 千克",
                              "item": "马铃薯"
                      },
                      {
                              "amount": "250 克",
                              "item": "无盐黄油，冷藏切丁"
                      },
                      {
                              "amount": "250 毫升",
                              "item": "全脂牛奶，加热"
                      },
                      {
                              "amount": "适量",
                              "item": "盐"
                      },
                      {
                              "amount": "可选",
                              "item": "白胡椒粉",
                              "note": "用于调味"
                      }
              ],
              "instructions": [
                      "将马铃薯洗净。",
                      "放入加盐的冷水锅中开始加热。",
                      "水沸后转小火保持微滚，继续煮至完全软烂、叉子可轻易戳透，约 20-30 分钟。",
                      "沥干水分，放入容器中并盖上布巾保温。",
                      "趁热去皮，放入另一个铺有保鲜膜（中间划一道口）的容器中，以便投入去皮马铃薯并保温。",
                      "用压泥器将马铃薯压入锅中。",
                      "中火加热并搅拌 3-5 分钟，蒸发多余水分。",
                      "用刮板将薯泥过细网筛——正是这一步让薯泥达到完全细滑。",
                      "放回中火，逐次加入冷的黄油丁，用打蛋器搅打使其乳化。",
                      "持续不停搅打，以防乳化状态破裂。",
                      "分次加入温牛奶，直至达到理想的绵密蓬松稠度。",
                      "以盐调味，按喜好可加一小撮白胡椒粉。"
              ],
              "servingTips": [
                      "请选择腊质马铃薯，如 Ratte 或育空黄金——它们能保持结构，吸收更多黄油而不会变黏。",
                      "先用压泥器、再过细网筛，是去除最后一丝颗粒的关键——细泥饮食者切勿省略过筛这一步。",
                      "这款薯泥黄油含量很高；若需达到第 3 级、能从勺上顺畅流下，可再加少许温牛奶调稀。",
                      "以温热而非滚烫的温度食用；经典的叉子旋纹只是摆盘，不影响每一口的细滑程度。"
              ],
              "dietaryNotes": "无麸质。这是一道非常浓郁、高脂肪的料理——若需更清爽的版本，可减少黄油用量，更多依靠温牛奶带来绵密口感。",
              "nutrition": {
                      "basis": "按原方提供的数据，每份计。原方未提供钠与胆固醇的细分数据。"
              }
      },
      "kimchi-ramen": {
              "title": "泡菜拉面",
              "description": "一碗快手的火辣拉面，汤底以泡菜提味，最后配上半熟蛋与葱花。",
              "ingredients": [
                      {
                              "amount": "100 毫升",
                              "item": "菜籽油"
                      },
                      {
                              "amount": "一小把",
                              "item": "韭菜，切段"
                      },
                      {
                              "amount": "150 克",
                              "item": "泡菜，切碎"
                      },
                      {
                              "amount": "200 毫升",
                              "item": "泡菜汁"
                      },
                      {
                              "amount": "200 毫升",
                              "item": "清水"
                      },
                      {
                              "amount": "20 克",
                              "item": "韩式辣椒粉（고춧가루）"
                      },
                      {
                              "amount": "1 包",
                              "item": "拉面"
                      },
                      {
                              "amount": "适量",
                              "item": "小葱，切细圈"
                      },
                      {
                              "amount": "1 个",
                              "item": "半熟蛋，对半切开"
                      }
              ],
              "instructions": [
                      "锅中倒入菜籽油，中火烧热。下韭菜与泡菜碎，翻炒 2 分钟。",
                      "倒入泡菜汁与清水，加入辣椒粉搅匀。大火煮沸后转小火，煮 5 分钟。",
                      "放入拉面，煮 58 秒。",
                      "盛入碗中，放上葱花与半熟蛋。"
              ],
              "servingTips": [
                      "长面条与整片泡菜叶存在真实的噎呛风险——本食谱按原方做法，建议仅限第 7 级（易咀嚼）或普通饮食。",
                      "若要向下调整，请在碗中直接用厨房剪将面条剪成 2-5 厘米的短段，并在下锅前把泡菜切得很细。",
                      "若需更紧实、不流动的质地，请将鸡蛋煮至全熟而非半熟，并切成小丁。",
                      "韩式辣椒粉辣度很高——请先少放，再按口味慢慢增加。"
              ],
              "dietaryNotes": "含麸质（拉面）与鸡蛋。可改用无麸质拉面。",
              "nutrition": {
                      "basis": "依原方营养表（原方未注明份数）。",
                      "flag": "泡菜、泡菜汁与韩式辣椒粉都很咸——若需控制钠摄入，可将泡菜略微冲洗，并改用含钠较低的拉面调味底料。"
              }
      },
      "korean-soft-tofu-soup": {
              "title": "韩式嫩豆腐汤（순두부찌개）",
              "description": "一锅暖身的韩式辣炖汤，以滑嫩的嫩豆腐为主角，配上炖软的蔬菜与一颗凝固的鸡蛋——可随意调整，暖意十足。",
              "ingredients": [
                      {
                              "amount": "约 3 根",
                              "item": "小葱",
                              "note": "切段，葱白与葱绿分开"
                      },
                      {
                              "amount": "2 瓣",
                              "item": "蒜，切末"
                      },
                      {
                              "amount": "2 茶匙",
                              "item": "韩式辣椒粉（고춧가루）",
                              "note": "细粉"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "香油"
                      },
                      {
                              "amount": "1 杯",
                              "item": "清水"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "鱼露"
                      },
                      {
                              "amount": "1/2 茶匙",
                              "item": "糖"
                      },
                      {
                              "amount": "1 杯",
                              "item": "茄子，去皮切细丁",
                              "note": "去皮很重要——茄子皮无论炖多久都依然坚韧带丝"
                      },
                      {
                              "amount": "2 棵",
                              "item": "小白菜，切碎",
                              "note": "白色粗梗部分要切得格外细"
                      },
                      {
                              "amount": "1 盒",
                              "item": "嫩豆腐或滑豆腐",
                              "note": "按喜好压碎成合适的大小"
                      },
                      {
                              "amount": "1 个",
                              "item": "鸡蛋",
                              "note": "可选——需煮至蛋黄完全凝固，不可溏心"
                      }
              ],
              "instructions": [
                      "韩式石锅（或普通汤锅）中倒入香油，中火加热。",
                      "油热后下蒜末、葱白与辣椒粉，炒至香气四溢、辣椒粉出香。",
                      "加入清水煮沸，再转小至中火保持微滚，加入糖与鱼露搅匀。",
                      "放入小白菜与茄子，煮至完全软烂、用叉子可轻松压碎，约 5 分钟——比常规做法的 2 分钟更久，因为这里需要的是软糯而非爽脆。",
                      "放入嫩豆腐。这一步最有趣——用勺子把豆腐压成你喜欢的柔软碎块。",
                      "如使用鸡蛋，将蛋打入锅中央后加盖，蒸 5-6 分钟，至蛋白与蛋黄完全凝固——溏心蛋黄会在食用过程中不可控地稀释汤体，因此务必煮透后拌匀。",
                      "撒上剩余葱绿即可享用。"
              ],
              "servingTips": [
                      "本版本略去了传统순두부찌개中的金针菇。其细长菌丝在口中不会断开，在锅里也无法切短，是这道菜中唯一值得直接去掉而非调整的食材。",
                      "茄子去皮与鸡蛋煮透出于同一个理由——茄子皮无论炖多久都坚韧带丝，而溏心蛋黄会在进食过程中稀释汤体。",
                      "若需更低的质地等级，请将豆腐在汤中压得更碎，小白菜切得更细。若需细泥质地，将成品汤搅打至完全细滑。",
                      "对辣味敏感者请减少辣椒粉用量——这锅汤的辣度上升得很快。"
              ],
              "dietaryNotes": "含鱼露与鸡蛋。天然无麸质；若需严格无麸质，请确认辣椒粉品牌。",
              "nutrition": {
                      "basis": "依原方营养计算器（2 份，每份 1.5 杯）。食谱本身约可做 4 份。",
                      "flag": "每份含钠 599 毫克，加之鱼露与韩式辣椒粉本身就咸，请选用低钠鱼露，并在额外加盐前先尝味。"
              }
      },
      "lamb-stew-tomatoes": {
              "title": "番茄炖羊肉",
              "description": "浓郁香料风味的炖羊肉，软嫩羊肉浸在醇厚的番茄汤汁中——慢炖至入口即散。",
              "ingredients": [
                      {
                              "amount": "900 克",
                              "item": "去骨羊腿肉",
                              "note": "切成约 2.5 厘米方块。此处务必坚持使用去骨肉——深色番茄酱汁中很难发现散落的碎骨"
                      },
                      {
                              "amount": "1 罐（800 克）",
                              "item": "番茄碎或整粒番茄"
                      },
                      {
                              "amount": "1 个大",
                              "item": "洋葱，切细丝"
                      },
                      {
                              "amount": "3 瓣",
                              "item": "新鲜大蒜，拍碎"
                      },
                      {
                              "amount": "3 汤匙",
                              "item": "蒜粉"
                      },
                      {
                              "amount": "4 汤匙",
                              "item": "卡宴辣椒粉",
                              "note": "按口味调整"
                      },
                      {
                              "amount": "3 汤匙",
                              "item": "盐"
                      },
                      {
                              "amount": "2 汤匙",
                              "item": "黑胡椒"
                      },
                      {
                              "amount": "10 毫升",
                              "item": "橄榄油"
                      },
                      {
                              "amount": "200 毫升",
                              "item": "高汤（任意种类）",
                              "note": "用清水亦可"
                      }
              ],
              "instructions": [
                      "将羊肉切成约 2.5 厘米的方块，按需修去多余肥油。比常规炖肉切得更小：这样炖煮时能更均匀地变软，且每块熟后大小已经便于处理。",
                      "碗中混合蒜粉、黑胡椒、盐与卡宴辣椒粉，加入橄榄油搅拌成顺滑的料糊。",
                      "将料糊充分抹在每一块羊肉上，确保均匀裹覆。如有多余可留作后用。",
                      "将三瓣大蒜拍碎，一半抹在羊肉上，另一半留作烹煮用。",
                      "洋葱切细丝，与剩余的蒜末拌在一起备用。",
                      "大锅或铸铁锅以大火烧热，将羊肉块各面煎至金黄。分批进行以免锅内过挤。煎好后盛出备用。",
                      "同一锅中放入洋葱与蒜，炒至变软并略微焦糖化，约 5 分钟。",
                      "将羊肉放回锅中，倒入整罐番茄与高汤。加盖小火炖 3-4 小时，或转入 190°C 烤箱烤 2-4 小时。",
                      "当羊肉完全软烂、轻易散开时即已炖好。用叉子按压测试——肉应当毫不费力即可分开。",
                      "炖至软烂后，在锅中用叉子将羊肉进一步压散——第 6 级时每块不应大于 1.5 厘米见方，且轻压即散。",
                      "转大火收汁，至汤汁变稠、能挂在勺背上。",
                      "趁热搭配面条或米饭食用。软嫩的羊肉应当几乎不需咀嚼。"
              ],
              "servingTips": [
                      "当叉子能毫无阻力地将肉撕开时即已炖好——请多检查几块，确保软烂程度均匀。",
                      "若吞咽困难，请将炖好的羊肉切成极小块，或连同汤汁略微压碎。",
                      "酱汁应浓稠到能挂在勺背上——可通过延长收汁或添加液体来调整。",
                      "这道炖菜冷藏可保存最多 3 天，风味会随时间继续融合。"
              ],
              "dietaryNotes": "无麸质。可减少卡宴辣椒粉以降低辣度。可搭配米饭或面条补充碳水。按原方钠含量极高——请参阅上方营养说明。",
              "nutrition": {
                      "basis": "依所列食材按 4 份估算，并计入全部香料糊，因其直接抹在肉上。此为估算值，并非实验室检测的营养标签。",
                      "flag": "香料糊中的 3 汤匙盐，折合每份约 5300 毫克钠——超过成人全日上限的两倍。请将盐减至总共约 1 茶匙，改为最后按口味调味；食谱依然成立，而这是在提供给需限钠者之前，最重要的一项调整。"
              }
      },
      "lobster-bisque": {
              "title": "龙虾浓汤",
              "description": "经典的奶油贝类浓汤，以自制龙虾高汤为底，搅打至完全无需咀嚼。",
              "ingredients": [
                      {
                              "amount": "4 汤匙",
                              "item": "黄油"
                      },
                      {
                              "amount": "1 个大",
                              "item": "黄洋葱，切丁"
                      },
                      {
                              "amount": "5 根",
                              "item": "芹菜，切丁"
                      },
                      {
                              "amount": "3 根中等",
                              "item": "胡萝卜，切丁"
                      },
                      {
                              "amount": "1 瓣",
                              "item": "蒜，切末"
                      },
                      {
                              "amount": "适量",
                              "item": "盐与白胡椒粉"
                      },
                      {
                              "amount": "1 枝",
                              "item": "新鲜龙蒿",
                              "note": "或 3/4 茶匙干龙蒿"
                      },
                      {
                              "amount": "3 汤匙",
                              "item": "番茄膏"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "红椒粉"
                      },
                      {
                              "amount": "1/8 茶匙",
                              "item": "卡宴辣椒粉"
                      },
                      {
                              "amount": "1/4 杯",
                              "item": "中筋面粉"
                      },
                      {
                              "amount": "1 杯",
                              "item": "干白葡萄酒"
                      },
                      {
                              "amount": "1/3 杯",
                              "item": "干雪利酒或奶油雪利酒"
                      },
                      {
                              "amount": "6 杯",
                              "item": "龙虾或贝类高汤",
                              "note": "可按下方做法自制，或使用市售品"
                      },
                      {
                              "amount": "1 枝",
                              "item": "新鲜百里香",
                              "note": "或 1/4 茶匙干百里香"
                      },
                      {
                              "amount": "1 片",
                              "item": "香叶"
                      },
                      {
                              "amount": "1 杯",
                              "item": "淡奶油"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "雪利酒醋",
                              "note": "或红/白葡萄酒醋"
                      },
                      {
                              "amount": "300 克",
                              "item": "熟龙虾肉",
                              "note": "盛碗前请先阅读第一条食用提示"
                      },
                      {
                              "amount": "可选",
                              "item": "香葱碎",
                              "note": "装饰用——第 3 级不适用"
                      },
                      {
                              "amount": "1 个大",
                              "item": "洋葱，对半切开",
                              "note": "熬高汤用"
                      },
                      {
                              "amount": "2 根",
                              "item": "芹菜，对半切开",
                              "note": "熬高汤用"
                      },
                      {
                              "amount": "1 根",
                              "item": "胡萝卜，对半切开",
                              "note": "熬高汤用"
                      },
                      {
                              "amount": "3 瓣",
                              "item": "蒜，拍碎",
                              "note": "熬高汤用"
                      },
                      {
                              "amount": "5 粒",
                              "item": "黑胡椒粒",
                              "note": "熬高汤用"
                      },
                      {
                              "amount": "4 枝",
                              "item": "百里香",
                              "note": "熬高汤用"
                      },
                      {
                              "amount": "2 片",
                              "item": "香叶",
                              "note": "熬高汤用"
                      },
                      {
                              "amount": "尽量多",
                              "item": "龙虾、虾或蟹壳",
                              "note": "熬高汤用——越多越好"
                      },
                      {
                              "amount": "没过食材",
                              "item": "清水",
                              "note": "熬高汤用"
                      }
              ],
              "instructions": [
                      "大号厚底锅或铸铁锅中以中火融化黄油。",
                      "下洋葱、芹菜、胡萝卜与蒜，以盐和白胡椒调味，不时翻炒至变软但不上色，约 8 分钟。",
                      "加入龙蒿、番茄膏、卡宴辣椒粉与红椒粉，拌匀至番茄膏完全化开。",
                      "加入面粉，拌至完全融合。",
                      "倒入白葡萄酒与雪利酒，转中大火，翻炒至汤汁收干。",
                      "加入高汤、百里香与香叶，以盐和白胡椒调味，加盖慢炖至蔬菜完全软烂，约 20 分钟。",
                      "取出百里香枝与香叶，用手持搅拌棒或分批用桌上搅拌机，将汤打至完全细滑。",
                      "持续搅打至舌尖完全感觉不到任何结块或颗粒感。所需时间往往远超预期。若搅拌机无法达到，请用细网筛过滤。",
                      "将汤倒回锅中以中小火加热，拌入淡奶油与雪利酒醋。",
                      "试味并调整调味。",
                      "盛出食用。第 3 级时碗中只盛浓汤本身——加入龙虾肉或香葱前，请先阅读第一条食用提示。",
                      "自制高汤做法：将对半切开的洋葱、芹菜、胡萝卜，拍碎的蒜、黑胡椒粒、百里香、香叶与虾蟹壳一并放入大汤锅，压实以减少空隙。",
                      "加水没过所有材料，煮沸后转小火慢炖 20-30 分钟。",
                      "过滤。出汤量视情况而定，冷冻可保存最长 6 个月。"
              ],
              "servingTips": [
                      "浓汤本身搅打后属于第 3 级，但这道菜通常搭配的龙虾肉与香葱并不属于。细滑汤体中浮着肉块，属于混合质地，是吞咽风险最高的情形之一。第 3 级时请将两者都不放入碗中，或在第 7 步将龙虾肉与汤一同搅打。",
                      "第 8 步决定了这道汤究竟是不是第 3 级。贝类与芹菜会留下短时间搅打无法打碎的纤维。若舌尖仍能感到颗粒，请过滤。",
                      "即便汤看起来已经细滑，搅打后仍请过滤。不透明的汤中很容易遗漏碎壳，而且入口之前很难察觉。",
                      "汤放凉后会变稠，冷藏后更甚。第 3 级仍应能从勺上流下，因此重新加热时请用少许高汤或牛奶调稀，并在食用前重新检测。"
              ],
              "dietaryNotes": "含贝类与乳制品。按原方非无麸质；面粉可用玉米淀粉替代。原方提供的营养数据另列：饱和脂肪 14 克、膳食纤维 3 克、糖 6 克、钾 687 毫克。",
              "nutrition": {
                      "basis": "每份计，数据随原方提供。本食谱可做 6 份，数值已包含龙虾肉。",
                      "flag": "每份 1146 毫克，约为成人每日上限的一半，而市售贝类高汤通常还会更高。请使用低钠或自制高汤，并在汤收浓之后最后调味。"
              }
      },
      "mango-jam-with-yogurt": {
              "title": "芒果酱配酸奶",
              "description": "细滑清甜的自制芒果酱拌入绵密酸奶——明亮爽口，一勺即成的甜点或小食。",
              "ingredients": [
                      {
                              "amount": "2 杯",
                              "item": "新鲜芒果，切块"
                      },
                      {
                              "amount": "1/2 杯",
                              "item": "糖"
                      },
                      {
                              "amount": "1 汤匙",
                              "item": "柠檬汁"
                      },
                      {
                              "amount": "可选",
                              "item": "一小撮盐或 1/4 茶匙香草精",
                              "note": "增添风味层次"
                      },
                      {
                              "amount": "食用时",
                              "item": "原味酸奶"
                      }
              ],
              "instructions": [
                      "芒果块放入小锅中，中火加热 5-7 分钟至软化，期间不时搅拌。用勺子或压泥器将芒果压至软烂成泥。",
                      "加入糖与柠檬汁（如使用盐或香草精也一并加入），充分搅匀。",
                      "小火慢煮 15-20 分钟，常搅拌，至浓稠如果酱。将果酱滴在冷勺或冷盘上能保持形状即可。",
                      "完全放凉后装入干净的玻璃瓶，冷藏保存。",
                      "取一勺拌入一杯酸奶中即可享用。"
              ],
              "servingTips": [
                      "第 1 步务必将芒果彻底压碎——靠近果核处的纤维丝是这道食谱主要的质地风险，食用前请仔细检查。",
                      "若需完全细滑、可倾倒的第 3 级质地，请在拌入酸奶前先将做好的果酱搅打一遍。",
                      "质地调整饮食请选用细滑、无果粒、未拌入格兰诺拉麦片的无糖酸奶。",
                      "果酱冷藏约可保存两周——可一次做好分装备用。"
              ],
              "dietaryNotes": "天然无麸质，适合素食。选用植物酸奶即可使整道甜点无乳制品。",
              "nutrition": {
                      "basis": "仅为芒果酱本身的每份计（不含搭配的酸奶）。"
              }
      },
      "mapo-tofu": {
              "title": "麻婆豆腐",
              "description": "嫩滑的软豆腐块在咸香浓郁的肉末酱汁中慢煨——一道快手家常菜，本身对口腔就很温和。",
              "ingredients": [
                      {
                              "amount": "90 克",
                              "item": "猪肉末"
                      },
                      {
                              "amount": "2 茶匙",
                              "item": "蒜末"
                      },
                      {
                              "amount": "1 包",
                              "item": "嫩豆腐",
                              "note": "切成约 1.2 厘米小块，或压碎拌入酱汁以获得更软的质地"
                      },
                      {
                              "amount": "1 包",
                              "item": "市售麻婆豆腐酱"
                      },
                      {
                              "amount": "适量",
                              "item": "葱花"
                      }
              ],
              "instructions": [
                      "炒锅中烧热少许油，下蒜末炒至香气四溢。",
                      "放入猪肉末翻炒至接近全熟。",
                      "打开麻婆豆腐酱，与肉末一同翻炒至熟透入味。",
                      "放入嫩豆腐，小火轻轻煨煮，至酱汁变稠、豆腐热透软嫩。",
                      "表面撒上葱花，配热米饭食用。"
              ],
              "servingTips": [
                      "这里的猪肉末与嫩豆腐本身就很柔软——按原方做法，这是本站较为温和的咸香主菜之一。",
                      "将豆腐切成更小的块，或轻轻压碎拌入酱汁，可使质地更接近第 4 级。",
                      "请查看市售酱料包的标签——这类酱料往往钠含量很高，有些还含有发酵豆瓣酱，辣度不低。",
                      "可搭配煮得软烂的白米饭食用；若需要更柔软的主食，可用土豆泥代替米饭。"
              ],
              "dietaryNotes": "含大豆与猪肉。上方营养数据为依据食材估算，因原方未提供——实际数值会因所用市售酱料而有显著差异。",
              "nutrition": {
                      "basis": "按 4 份估算，假设使用 300 克装嫩豆腐与一包约 60 克的麻婆豆腐酱。不含搭配的米饭。酱料包是最大的不确定因素——各品牌差异很大，请查看标签。",
                      "flag": "每份约 600 毫克，几乎全部来自市售酱料包。各品牌差异很大——请查看标签，若需控制钠摄入，可不用整包。"
              }
      },
      "peach-smoothie": {
              "title": "蜜桃思慕雪",
              "description": "糖水桃与酸奶、牛奶及香草一同打成丝滑的微稠饮品。",
              "ingredients": [
                      {
                              "amount": "1/2 杯",
                              "item": "罐装水浸桃，沥干",
                              "note": "120 克"
                      },
                      {
                              "amount": "1/2 杯",
                              "item": "原味酸奶",
                              "note": "120 毫升"
                      },
                      {
                              "amount": "1/2 杯",
                              "item": "牛奶",
                              "note": "120 毫升"
                      },
                      {
                              "amount": "1/2 茶匙",
                              "item": "香草精"
                      },
                      {
                              "amount": "按说明",
                              "item": "市售增稠剂",
                              "note": "仅在需要达到医嘱的第 2 级时使用"
                      }
              ],
              "instructions": [
                      "将桃、酸奶、牛奶与香草精搅打至丝滑细腻。",
                      "若仍有纤维残留，请过滤。",
                      "按产品说明用增稠剂调整至医嘱的第 2 级。",
                      "按说明静置足够时间，搅拌后确认稠度，再行食用。"
              ],
              "servingTips": [
                      "第 2 级指的是饮品的稠度，而非食物的质地。增稠剂的用量取决于所用产品以及医嘱的具体等级，请遵循厂商说明，而非固定的勺数。",
                      "请按增稠剂说明的时间静置后再判断稠度。多数产品会持续增稠数分钟，刚调好时看起来合适的饮品，端上桌时可能已经过稠。",
                      "请以实际食用温度，用 IDDSI 流动测试检测成品。加热或冷藏都会改变其流动性。",
                      "请先过滤再增稠。果籽、果皮与果肉纤维，正是增稠剂无法解决的东西。"
              ],
              "dietaryNotes": "含乳制品。天然无麸质。若使用糖浆浸渍的桃罐头，糖分会显著上升。",
              "nutrition": {
                      "basis": "依所列食材按 2 份估算，使用水浸而非糖浆浸的桃罐头。此为估算值，并非实验室检测的营养标签。"
              }
      },
      "pumpkin-soup": {
              "title": "南瓜汤",
              "description": "南瓜泥以高汤与奶油调稀，加肉桂温热后，搅打至完全细滑。",
              "ingredients": [
                      {
                              "amount": "1 杯",
                              "item": "南瓜泥",
                              "note": "240 克"
                      },
                      {
                              "amount": "3/4 杯",
                              "item": "低钠高汤",
                              "note": "180 毫升"
                      },
                      {
                              "amount": "1/4 杯",
                              "item": "奶油",
                              "note": "60 毫升"
                      },
                      {
                              "amount": "1/4 茶匙",
                              "item": "肉桂粉"
                      },
                      {
                              "amount": "一小撮",
                              "item": "盐"
                      },
                      {
                              "amount": "按说明",
                              "item": "市售增稠剂",
                              "note": "仅在需要达到医嘱的第 3 级时使用"
                      }
              ],
              "instructions": [
                      "将南瓜泥、高汤、奶油与调味料放入小锅中混合。",
                      "小火加热 5-7 分钟，期间常搅拌。",
                      "搅打至完全细滑。",
                      "仅在医嘱的第 3 级有需要时，按说明用增稠剂调整稠度。",
                      "食用前再次确认最终质地。"
              ],
              "servingTips": [
                      "请使用南瓜泥，而非罐装派馅。派馅已加糖加香料，且凝固后明显更稠，会使成品超出第 3 级。",
                      "这道汤通常会撒上的焙香南瓜籽，不适用于本站任何一个质地等级，请略去。",
                      "增稠剂是最后手段，而非食材。请先搅打与过滤，只有当汤仍稀于医嘱等级时，再按产品自身说明添加。",
                      "汤放凉后会明显变稠。第 3 级仍应能从勺上流下，因此请在达到食用温度后重新检测，而非刚离火时。"
              ],
              "dietaryNotes": "含乳制品。若高汤无麸质，则本品天然无麸质。使用植物奶油与蔬菜高汤即为无乳制品版本。",
              "nutrition": {
                      "basis": "依所列食材按 2 份估算，使用无糖南瓜泥与低钠高汤。原始资料未提供营养数据，故此为估算值而非实验室检测标签。"
              }
      },
      "rice-pudding": {
              "title": "经典米布丁",
              "description": "以牛奶慢煮而成的绵密米布丁，带着香草与肉桂的气息——一道温和、可用勺舀食的甜点。",
              "ingredients": [
                      {
                              "amount": "4.5 杯",
                              "item": "全脂牛奶",
                              "note": "1080 毫升"
                      },
                      {
                              "amount": "1/4 杯",
                              "item": "细砂糖",
                              "note": "50 克"
                      },
                      {
                              "amount": "一小撮",
                              "item": "盐"
                      },
                      {
                              "amount": "3/4 杯",
                              "item": "白米，生米",
                              "note": "短粒米，135 克"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "香草精"
                      },
                      {
                              "amount": "适量",
                              "item": "肉桂粉"
                      }
              ],
              "instructions": [
                      "大号厚底锅中放入牛奶、糖与盐搅匀，中大火煮沸，加入米搅拌。",
                      "转小火并半掩锅盖，不时搅拌，煮至米粒软烂、整体变稠，约 25 至 30 分钟。",
                      "按口味加入香草精与肉桂粉拌匀。继续加热至理想稠度——布丁放凉后会进一步变稠；若过稠可加少许牛奶调稀。",
                      "可温热食用，或放至室温后密封冷藏、冰凉食用。按喜好再撒些肉桂粉。"
              ],
              "servingTips": [
                      "经典米布丁中的葡萄干已被略去。软布丁中散落的耐嚼黏性颗粒，是吞咽困难者风险较高的质地之一；而且与大块蔬菜不同，它无法靠切小来降低风险。",
                      "若希望米粒进一步化开、更融入布丁，接近第 4 级质地，可再多煮一会儿，超过 30 分钟。",
                      "若需完全细滑的第 4 级，请将成品布丁搅打至绵密无颗粒。",
                      "布丁放凉后会明显变稠——若已稠到不易入口，食用前加少许温牛奶调稀即可。"
              ],
              "dietaryNotes": "素食。按原方含乳制品；可用无乳糖牛奶或植物奶替代。上方营养数据为依据食材估算，因原方未提供。",
              "nutrition": {
                      "basis": "依所列食材按 6 份估算。此为估算值，并非实验室检测的营养标签。"
              }
      },
      "stovetop-mac-and-cheese": {
              "title": "免烤芝士通心粉",
              "description": "锅上直接完成的浓郁芝士通心粉，以鸡蛋与切达芝士调成酱汁——无需进烤箱。",
              "ingredients": [
                      {
                              "amount": "3 杯",
                              "item": "通心粉或中号贝壳面"
                      },
                      {
                              "amount": "2 个",
                              "item": "鸡蛋"
                      },
                      {
                              "amount": "1 罐（340 克）",
                              "item": "淡炼乳"
                      },
                      {
                              "amount": "1/4 茶匙",
                              "item": "芥末粉"
                      },
                      {
                              "amount": "适量",
                              "item": "盐与胡椒"
                      },
                      {
                              "amount": "4 汤匙",
                              "item": "黄油"
                      },
                      {
                              "amount": "3 杯",
                              "item": "切达芝士，擦丝",
                              "note": "味道越浓越好"
                      }
              ],
              "instructions": [
                      "大锅中将 2 夸脱水烧开，下面条煮至接近软烂——比包装标注的弹牙时间多煮两分钟，口感更柔软。",
                      "同时将鸡蛋、一半淡炼乳、芥末粉、1/2 茶匙盐与 1/4 茶匙胡椒混合拌匀。",
                      "将面条沥干后倒回锅中，小火加热并拌入黄油至完全融化。",
                      "拌入蛋液混合物与一半切达芝士。继续小火加热，分次拌入剩余的炼乳与芝士，直至整体热透、绵密顺滑，约 5 分钟。",
                      "以盐和胡椒调味即可。"
              ],
              "servingTips": [
                      "刚做好时酱汁偏稀——可静置 10 分钟再食用，或直接盛入碗中用勺取食；放凉后酱汁会变稠，通心粉也会吸收部分汤汁。",
                      "面条比包装建议多煮两分钟，盛盘后将贝壳面切开或压碎，更易入口。",
                      "若需更低的质地等级，可将部分成品搅打至细滑——绵密的蛋奶芝士酱很容易打匀。",
                      "不要趁极烫时食用——芝士酱很能保温，容易烫口。"
              ],
              "dietaryNotes": "按原方非无麸质；可改用无麸质意面。素食。",
              "nutrition": {
                      "basis": "每份计；本食谱共 5 份。"
              }
      },
      "strawberry-yogurt-drink": {
              "title": "草莓酸奶饮",
              "description": "草莓与酸奶、牛奶打至细滑，过滤后增稠至微稠饮品。",
              "ingredients": [
                      {
                              "amount": "1/2 杯",
                              "item": "草莓，去蒂",
                              "note": "75 克"
                      },
                      {
                              "amount": "3/4 杯",
                              "item": "原味酸奶",
                              "note": "180 毫升"
                      },
                      {
                              "amount": "1/2 杯",
                              "item": "牛奶",
                              "note": "120 毫升"
                      },
                      {
                              "amount": "1 茶匙",
                              "item": "糖",
                              "note": "可选"
                      },
                      {
                              "amount": "按说明",
                              "item": "市售增稠剂",
                              "note": "仅在需要达到医嘱的第 2 级时使用"
                      }
              ],
              "instructions": [
                      "将草莓、酸奶、牛奶与糖一同搅打至完全细滑。",
                      "用细网筛过滤，滤去草莓籽。",
                      "若饮品稀于医嘱的第 2 级，请按产品说明加入增稠剂。",
                      "按增稠剂说明静置，再次搅拌，检测稠度后食用。"
              ],
              "servingTips": [
                      "第 2 级指的是饮品的稠度，而非食物的质地。增稠剂的用量取决于所用产品以及医嘱的具体等级，请遵循厂商说明，而非固定的勺数。",
                      "请按增稠剂说明的时间静置后再判断稠度。多数产品会持续增稠数分钟，刚调好时看起来合适的饮品，端上桌时可能已经过稠。",
                      "请以实际食用温度，用 IDDSI 流动测试检测成品。加热或冷藏都会改变其流动性。",
                      "请先过滤再增稠。果籽、果皮与果肉纤维，正是增稠剂无法解决的东西。"
              ],
              "dietaryNotes": "含乳制品。天然无麸质。增稠剂产品各不相同——请查看所用产品的过敏原说明。",
              "nutrition": {
                      "basis": "依所列食材按 2 份估算，含可选的糖。增稠剂所含热量可忽略不计。此为估算值，并非实验室检测的营养标签。"
              }
      },
      "vanilla-bean-custard": {
              "title": "香草籽蛋奶布丁",
              "description": "丝滑优雅的香草布丁，使用真正的香草荚——细腻顺滑、凝固适度，入口即化。",
              "ingredients": [
                      {
                              "amount": "4 个大",
                              "item": "鸡蛋"
                      },
                      {
                              "amount": "4 个大",
                              "item": "蛋黄"
                      },
                      {
                              "amount": "2/3 杯",
                              "item": "细砂糖"
                      },
                      {
                              "amount": "2 杯",
                              "item": "淡奶油"
                      },
                      {
                              "amount": "1 杯",
                              "item": "全脂牛奶"
                      },
                      {
                              "amount": "1 根",
                              "item": "香草荚，剖开刮籽",
                              "note": "或 2 茶匙香草精"
                      },
                      {
                              "amount": "1/4 茶匙",
                              "item": "细盐"
                      },
                      {
                              "amount": "1/4 茶匙",
                              "item": "肉豆蔻粉",
                              "note": "可选"
                      }
              ],
              "instructions": [
                      "烤箱预热至 165°C。将六个 180 毫升的烤盅放入大号烤盘中。",
                      "中号碗中将鸡蛋、蛋黄与糖搅打至顺滑、颜色略浅。",
                      "小锅中放入淡奶油、牛奶、香草籽与香草荚、盐，中火加热至刚开始冒热气、边缘出现小气泡。切勿煮沸。",
                      "将热奶液缓缓冲入蛋液中，边冲边不停搅打以调温。务必缓慢加入，以免蛋液结块。",
                      "将混合液过细网筛倒入大量杯中。此步可滤除任何熟蛋碎粒，确保绝对细滑。",
                      "将布丁液均匀分入各烤盅。如使用肉豆蔻，可在每盅表面撒上极少许。",
                      "向烤盘中注入热水，至烤盅一半高度。这个水浴能确保温和均匀地受热。",
                      "烘烤 40-45 分钟，至边缘凝固、轻晃时中心仍微微颤动。布丁应已完全熟透，但保持丝滑柔嫩。",
                      "将烤盅从水浴中取出，放至室温后冷藏至少 2 小时，至完全冰凉定型。",
                      "食用前用手指沿布丁边缘划一圈，应能轻松脱模。成品质地应当丝滑、颤巍巍、入口即化。"
              ],
              "servingTips": [
                      "判断布丁是否烤好，看晃动测试：轻敲时中心只应有小幅度的晃动。",
                      "烤过头的布丁会变得粗糙并出水——中心看起来还略显未熟时就该出炉。",
                      "需要细泥质地者，请将冷藏后的布丁搅打至完全细滑再食用。",
                      "以微凉或室温食用——冰凉的布丁在口中更易控制。"
              ],
              "dietaryNotes": "无麸质。可用 2% 低脂牛奶，或牛奶与奶油混合，做成更清爽的版本。",
              "nutrition": {
                      "basis": "依所列食材按 6 盅估算。此为估算值，并非实验室检测的营养标签。"
              }
      },
      "watermelon-sorbet": {
              "title": "西瓜雪葩",
              "description": "仅需四种材料的清爽西瓜雪葩，打匀后冷冻——明亮、简单，自带清甜。",
              "ingredients": [
                      {
                              "amount": "6 杯",
                              "item": "冷冻西瓜块"
                      },
                      {
                              "amount": "1 杯",
                              "item": "西瓜糖浆",
                              "note": "或糖水、龙舌兰糖浆、蜂蜜"
                      },
                      {
                              "amount": "1/2 杯",
                              "item": "清水"
                      },
                      {
                              "amount": "2 汤匙",
                              "item": "鲜青柠汁"
                      }
              ],
              "instructions": [
                      "将 3 杯西瓜、1/2 杯糖浆、1/4 杯清水与 1 汤匙青柠汁放入高速搅拌机，打至细滑；若刀头卡住，暂停并将材料压下。",
                      "将雪葩倒入金属吐司模或其他可冷冻的容器中，放入冷冻室。",
                      "用剩余材料重复一次，之后可立即食用，或密封冷冻保存最多 1 周。"
              ],
              "servingTips": [
                      "冷冻甜点存在一个容易被忽视的质地风险：雪葩在口中融化后会迅速变成稀薄、流速很快的液体，比看上去的冷冻球体更难控制。为第 4 级及以下者提供冷冻甜点前，请先咨询言语治疗师或营养师。",
                      "食用前请在室温下放置几分钟，使其变软成绵沙状而非冻得坚硬——更易舀取，也更安全吞咽。",
                      "请以小勺分次喂食，让每一口在口中稍微软化，而不是一次性提供一大球冷冻雪葩。",
                      "这道食谱不含乳制品、纤维也极少，在确认质地合适之后，是一款不错的冷食选择。"
              ],
              "dietaryNotes": "天然纯素、无麸质、无乳制品。食用前请先参阅上方关于冷冻质地与吞咽安全的说明。",
              "nutrition": {
                      "basis": "每份计；本食谱约可做 6 份。"
              }
      }
    }
    /* /RECIPES:zh */
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
