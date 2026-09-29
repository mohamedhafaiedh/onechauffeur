# One Chauffeur

Site Next.js déployé sur Netlify. Le français est à la racine (`/`), l'anglais sous `/en/`.

```bash
npm run dev          # développement
npm run build        # build de production (vérifie d'abord les traductions)
npm run i18n:check   # vérifie seulement les traductions
```

## Traductions

| Quoi | Où |
|---|---|
| Textes de l'interface et des pages | `messages/fr.json` et `messages/en.json` |
| Textes juridiques (CGV, mentions, confidentialité) | `content/legal/fr/` et `content/legal/en/` : un document complet par langue |
| Mise en page de chaque page (une seule version pour les deux langues) | `components/pages/` |
| URL de chaque page dans chaque langue | `EN_SLUGS` dans `lib/seo.ts` |

- `fr.json` est la référence. `en.json` doit avoir exactement les mêmes clés : une clé manquante fait échouer le build.
- `messages/*.json` → `shared` contient les textes répétés sur plusieurs pages (services, flotte, étapes de réservation, « À propos »).
- Les liens internes passent toujours par `pagePath("flotte", lang)`, jamais par une URL écrite en dur.
- Les noms des formulaires et des champs Netlify (`FORM_CONFIG` dans les composants de formulaire) doivent rester identiques à `public/form.html`.

### Ajouter une langue

1. Ajouter la langue dans `LOCALES` et ses slugs dans `lib/seo.ts`.
2. Créer `messages/<langue>.json` (copie traduite de `fr.json`) et l'ajouter dans `lib/i18n.ts` et `scripts/check-i18n.mjs`.
3. Créer les dossiers de route `app/<langue>/…` (avec son `layout.tsx`) sur le modèle de `app/en/`, et les textes juridiques dans `content/legal/<langue>/`.
