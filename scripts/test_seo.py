import urllib.request
from bs4 import BeautifulSoup

BASE = "http://localhost:3005"

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None

opener = urllib.request.build_opener(NoRedirect)

def test_redirects():
    print("=== 1. REDIRECTIONS TEST ===")
    legacy_urls = [
        ("/a-propos/", "/services/"),
        ("/a-propos", "/services/"),
        ("/author/oncmoudir/", "/contact/"),
        ("/author/oncmoudir", "/contact/"),
        ("/boutique/", "/flotte/"),
        ("/boutique", "/flotte/"),
        ("/category/uncategorized/", "/services/"),
        ("/category/uncategorized", "/services/"),
        ("/commander/", "/reservation/"),
        ("/commander", "/reservation/"),
        ("/devis/", "/reservation/"),
        ("/devis", "/reservation/"),
        ("/hello-world/", "/services/"),
        ("/hello-world", "/services/"),
        ("/mon-compte/", "/reservation/"),
        ("/mon-compte", "/reservation/"),
        ("/paiement-recu/", "/merci/"),
        ("/paiement-recu", "/merci/"),
        ("/panier/", "/reservation/"),
        ("/panier", "/reservation/"),
        ("/reservation-recue/", "/merci/"),
        ("/reservation-recue", "/merci/"),
    ]

    for path, expected in legacy_urls:
        url = f"{BASE}{path}"
        try:
            resp = opener.open(url)
            print(f"FAIL: {path} returned {resp.status} instead of redirect")
        except urllib.error.HTTPError as e:
            loc = e.headers.get("Location", "")
            print(f"OK: {path} -> {e.code} -> {loc} (expected destination: {expected})")

def test_trailing_slash():
    print("\n=== 2. TRAILING SLASH TEST ===")
    slash_tests = ["/flotte", "/services", "/contact", "/reservation"]
    for path in slash_tests:
        url = f"{BASE}{path}"
        try:
            resp = opener.open(url)
            print(f"FAIL: {path} returned {resp.status}")
        except urllib.error.HTTPError as e:
            loc = e.headers.get("Location", "")
            print(f"OK: {path} -> {e.code} -> {loc}")

    # Now verify trailing slash responds 200
    for path in ["/flotte/", "/services/", "/contact/", "/reservation/"]:
        req = urllib.request.Request(f"{BASE}{path}", headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req) as resp:
            print(f"OK: {path} -> {resp.status}")

def test_html_lang_and_metadata():
    print("\n=== 3. HTML LANG, CANONICAL, HREFLANG, TITLE, META DESC, JSON-LD ===")
    pages = [
        ("/", "fr-FR"),
        ("/services/", "fr-FR"),
        ("/flotte/", "fr-FR"),
        ("/contact/", "fr-FR"),
        ("/reservation/", "fr-FR"),
        ("/cgv/", "fr-FR"),
        ("/mentions-legales/", "fr-FR"),
        ("/politique-de-confidentialite/", "fr-FR"),
        ("/en/", "en-US"),
        ("/en/services/", "en-US"),
        ("/en/flotte/", "en-US"),
        ("/en/contact/", "en-US"),
        ("/en/reservation/", "en-US"),
        ("/en/cgv/", "en-US"),
        ("/en/mentions-legales/", "en-US"),
        ("/en/politique-de-confidentialite/", "en-US"),
    ]

    seen_titles = set()
    seen_descs = set()

    for path, expected_lang in pages:
        req = urllib.request.Request(f"{BASE}{path}", headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode("utf-8")

        soup = BeautifulSoup(html, "html.parser")
        html_tag = soup.find("html")
        actual_lang = html_tag.get("lang") if html_tag else "NO_HTML"

        title_tag = soup.find("title")
        title = title_tag.text.strip() if title_tag else "NO_TITLE"

        desc_tag = soup.find("meta", attrs={"name": "description"})
        desc = desc_tag.get("content", "").strip() if desc_tag else "NO_DESC"

        canonical_tag = soup.find("link", attrs={"rel": "canonical"})
        canonical = canonical_tag.get("href") if canonical_tag else "NO_CANONICAL"

        hreflang_fr = soup.find("link", attrs={"rel": "alternate", "hreflang": "fr-FR"})
        hreflang_en = soup.find("link", attrs={"rel": "alternate", "hreflang": "en-US"})
        hreflang_def = soup.find("link", attrs={"rel": "alternate", "hreflang": "x-default"})

        has_json_ld = bool(soup.find("script", attrs={"type": "application/ld+json"}))

        lang_ok = actual_lang == expected_lang
        canon_ok = canonical.startswith("https://onechauffeur.fr") and canonical.endswith("/")
        href_ok = bool(hreflang_fr and hreflang_en and hreflang_def)

        print(f"\n--- Page: {path} ---")
        print(f"  Lang: {actual_lang} (expected: {expected_lang}) -> {'PASS' if lang_ok else 'FAIL'}")
        print(f"  Title: {title}")
        print(f"  Meta Desc: {desc[:60]}...")
        print(f"  Canonical: {canonical} -> {'PASS' if canon_ok else 'FAIL'}")
        print(f"  Hreflang: FR={bool(hreflang_fr)}, EN={bool(hreflang_en)}, x-default={bool(hreflang_def)} -> {'PASS' if href_ok else 'FAIL'}")
        print(f"  JSON-LD LocalBusiness: {'PASS' if has_json_ld else 'FAIL'}")

        if title in seen_titles:
            print(f"  WARNING: Duplicate title! {title}")
        seen_titles.add(title)

        if desc in seen_descs:
            print(f"  WARNING: Duplicate description! {desc}")
        seen_descs.add(desc)

if __name__ == "__main__":
    test_redirects()
    test_trailing_slash()
    test_html_lang_and_metadata()
