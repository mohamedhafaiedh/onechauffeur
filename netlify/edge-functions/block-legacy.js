// Bloque les URLs héritées du piratage WordPress avant qu'elles n'atteignent le site
const JUNK_QUERY = /(^|&)(item|p|cat|attachment_id|author|feed)(\/|=|$)/i;

export default async (request) => {
  const url = new URL(request.url);

  // Sur la page d'accueil, on ne bloque que les URLs du type /?item...
  if (url.pathname === "/" && !JUNK_QUERY.test(url.search.slice(1))) return;

  return new Response("Gone", {
    status: 410,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=86400",
      "netlify-cdn-cache-control": "public, max-age=31536000",
    },
  });
};

export const config = {
  cache: "manual",
  pattern: [
    "^/$",                 // accueil : filtrée par JUNK_QUERY ci-dessus
    "^/items?.*",          // /item, /items, /item/xxx...
    "^.*\\.php(/.*)?$",    // /index.php, /wp-login.php...
    "^/wp-(admin|content|includes|login).*",
  ],
};
