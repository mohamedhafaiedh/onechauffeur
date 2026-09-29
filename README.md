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
| Liste des langues, langue par défaut, URL traduites | `LOCALES`, `DEFAULT_LANG` et `SLUGS` dans `lib/seo.ts` |
| Textes de l'interface et des pages | `messages/<langue>.json` |
| Textes juridiques (CGV, mentions, confidentialité) | `content/legal/<langue>/` : un document complet par langue |
| Mise en page de chaque page (une seule version pour toutes les langues) | `components/pages/` |
| Route unique de toutes les pages | `app/[lang]/[[...slug]]/page.tsx` |

- La langue par défaut (français) est servie à la racine (`/flotte/`) grâce à une réécriture interne dans `next.config.ts` ; les autres langues ont leur préfixe (`/en/fleet/`). `/fr/…` redirige vers la racine.
- `fr.json` est la référence : chaque autre langue doit avoir exactement les mêmes clés (build bloqué sinon, `npm run i18n:check`).
- `shared` contient les textes répétés sur plusieurs pages.
- Les liens internes passent toujours par `pagePath("flotte", lang)`, jamais par une URL écrite en dur.
- Formulaires : un seul formulaire Netlify par usage (`contact`, `reservation`) pour toutes les langues, champs en français et champ caché `langue`. Les noms de champs doivent rester identiques à `public/form.html`.

### Ajouter une langue

1. `lib/seo.ts` : ajouter la langue dans `LOCALES` et ses URL traduites dans `SLUGS`.
2. Créer `messages/<code>.json` (traduction de `fr.json`) et l'ajouter dans `lib/i18n.ts`.
3. Créer les trois textes juridiques dans `content/legal/<code>/` et les déclarer dans `content/legal/index.ts`.

Aucun fichier de route à créer : les pages, le sitemap, les hreflang et le sélecteur de langue suivent automatiquement.
