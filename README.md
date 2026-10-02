# One Chauffeur

Site Next.js déployé sur Netlify. Six langues : le français à la racine (`/`), les autres sous leur préfixe (`/en/`, `/es/`, `/it/`, `/ar/`, `/zh/`).

```bash
npm run dev          # développement
npm run build        # build de production (vérifie d'abord les traductions)
npm run i18n:check   # vérifie seulement les traductions
npm run legal:check  # vérifie seulement les mentions légales
```

## Organisation

| Quoi | Où |
|---|---|
| Variables de design (couleurs, polices, largeur, espacements, arrondis), base et boutons | `app/globals.css` |
| Coordonnées de l'entreprise (nom, SIREN, siège, téléphone, e-mail, hébergeur) : saisies une seule fois | `data/company.json`, lues via `lib/site.ts` |
| Header (adaptatif) et menu plein écran | `components/Header.tsx` (textes) + `components/HeaderBar.tsx` (mise en page, menu) |
| Footer, sélecteur de langue, formulaires | `components/*.tsx` + leur `.module.css` |
| Sections réutilisables (hero, services, véhicules, étapes, à propos…) | `components/sections/` |
| Pages (assemblage des sections) | `components/pages/` |
| Icônes pleines d'origine | `components/icons.tsx` (les autres viennent de `lucide-react`) |

Le CSS n'utilise que des propriétés logiques (`margin-inline`, `inset-inline-start`, `text-align: start`…) : une langue écrite de droite à gauche (arabe) se met en miroir automatiquement avec `dir="rtl"` (défini par langue dans `LOCALES`). Les icônes à sens de lecture (flèches, chevrons) portent la classe `flip-rtl`.

## Traductions

Langues : français (par défaut, à la racine), anglais `/en/`, espagnol `/es/`, italien `/it/`, arabe `/ar/` (écriture de droite à gauche) et chinois traditionnel `/zh/`. Les URL de l'arabe et du chinois sont en lettres latines.

| Quoi | Où |
|---|---|
| Liste des langues, sens d'écriture, URL traduites | `LOCALES`, `DEFAULT_LANG` et `SLUGS` dans `lib/seo.ts` |
| Textes de l'interface et des pages | `messages/<langue>.json` |
| Mentions légales (confidentialité et cookies compris) : rubriques typées | `content/legal/fr.ts` et `content/legal/en.ts` |
| Conditions générales de vente | `content/legal/fr/cgv.tsx` et `content/legal/en/cgv.tsx` |
| Polices des écritures non latines : Tajawal pour l'arabe, polices système pour le chinois | `lib/fonts.ts` + règles `html[lang=…]` dans `app/globals.css` |
| Mise en page de chaque page (une seule version pour toutes les langues) | `components/pages/` |
| Route unique de toutes les pages | `app/[lang]/[[...slug]]/page.tsx` |

- La langue par défaut (français) est servie à la racine (`/flotte/`) grâce à une réécriture interne dans `next.config.ts` ; `/fr/…` redirige vers la racine.
- **Mentions légales** : modèle commun aux sites (introduction LCEN + 5 rubriques à ancre fixe : `#editeur`, `#hebergement`, `#propriete`, `#confidentialite`, `#cookies`). La politique de confidentialité est la rubrique `#confidentialite` ; les anciennes URL y redirigent (`PRIVACY_REDIRECTS` dans `lib/seo.ts`). Une valeur vide de `data/company.json` n'est pas affichée ; `scripts/check-legal.mjs` (avant chaque build) signale les champs obligatoires vides et bloque si les rubriques diffèrent entre langues. Aucun lien dans le contenu de la page.
- **Textes juridiques** : rédigés en français et en anglais seulement (`LEGAL_LANGS` dans `lib/seo.ts`). Dans les autres langues, la page existe dans la langue du visiteur (menu, bandeau, footer, sens de lecture) et affiche le texte anglais, précédé d'un avertissement (`legal.englishOnly`). Ces pages ont pour URL canonique la version anglaise et ne figurent ni dans le sitemap ni dans les hreflang (`isTranslated`, `legalTextLang`).
- `fr.json` est la référence : chaque autre langue doit avoir exactement les mêmes clés (build bloqué sinon, `npm run i18n:check`).
- `nav` (libellés du menu, repris par le header, le footer et la page 404), `common` (téléphone, retour à l'accueil) et `shared` contiennent les textes utilisés à plusieurs endroits : on ne les duplique pas dans une autre clé.
- Les liens internes passent toujours par `pagePath("flotte", lang)`, jamais par une URL écrite en dur.
- Formulaires : un seul formulaire Netlify par usage (`contact`, `reservation`) pour toutes les langues, champs et valeurs en français, champ caché `langue` ; l'objet de l'e-mail indique la langue si ce n'est pas le français. Les noms de champs doivent rester identiques à `public/form.html`. Anti-spam : champ piège `bot-field` (`data-netlify-honeypot`), invisible pour les visiteurs.

### Ajouter une langue

1. `lib/seo.ts` : ajouter la langue dans `LOCALES` (avec `dir: "rtl"` si elle s'écrit de droite à gauche) et ses URL dans `SLUGS`.
2. Créer `messages/<code>.json` (traduction de `fr.json`) et l'ajouter dans `lib/i18n.ts`.
3. Écriture non latine : ajouter sa police dans `lib/fonts.ts` (sans préchargement) et une règle `html[lang=…]` dans `app/globals.css`.

Aucun fichier de route à créer : les pages, le sitemap, les hreflang, le sélecteur de langue et la réécriture d'URL suivent automatiquement.

## Sécurité, SEO et performance

- En-têtes HTTP de sécurité (CSP, HSTS, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) : `SECURITY_HEADERS` dans `next.config.ts`. La CSP autorise `'unsafe-inline'` pour les scripts et styles, nécessaire au rendu statique de Next.js. Tout nouveau service externe (analytics, carte, chat…) doit y être ajouté, sinon le navigateur le bloque.
- Images : toujours via `next/image` (redimensionnement et format automatiques). L'image principale d'une page porte `preload` et `fetchPriority="high"`.
- Aperçu des liens partagés (Open Graph et X) : `public/images/one-chauffeur-og.jpg` (1200×630), déclarée dans `createPageMetadata` (`lib/seo.ts`).
- Header : la disposition est choisie en mesurant la place réelle (menu complet → logo + bouton de réservation + burger → logo + burger), jamais par des points de rupture figés ; le texte du bouton n'est jamais réduit. Le burger ouvre un menu plein écran en `<dialog>` modal.
- Polices : Manrope pour les titres, Inter pour le texte (`lib/fonts.ts`).
- Couleurs : utiliser les variables de `app/globals.css`. Pour du texte ou un lien doré sur fond clair, `--color-gold-text` (contraste AA) ; les autres dorés sont réservés aux fonds, bordures et icônes.
