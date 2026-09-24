import os
import re
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup, Comment

PROJECT_DIR = r"C:\Users\moham\.gemini\antigravity-ide\scratch\01- Sites Web\onechauffeur"
IMAGES_DIR = os.path.join(PROJECT_DIR, "public", "images")
os.makedirs(IMAGES_DIR, exist_ok=True)

def download_image_if_missing(url):
    if not url or url.startswith("data:"):
        return None
    url_clean = url.split("?")[0]
    filename = os.path.basename(urllib.parse.urlparse(url_clean).path)
    if not filename:
        return None
    dest = os.path.join(IMAGES_DIR, filename)
    if not os.path.exists(dest):
        try:
            req = urllib.request.Request(url_clean, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
            with urllib.request.urlopen(req) as resp, open(dest, "wb") as f:
                f.write(resp.read())
            print(f"Downloaded image: {filename}")
        except Exception as e:
            print(f"Error downloading {url_clean}: {e}")
    return f"/images/{filename}"

def clean_html_to_jsx(main_tag, is_en=False):
    if not main_tag:
        return "<main></main>"

    # 1. Remove unwanted tags and comments
    for s in main_tag.find_all(["script", "style", "noscript"]):
        s.decompose()
    for comment in main_tag.find_all(string=lambda t: isinstance(t, Comment)):
        comment.extract()

    # 2. Process images
    for img in main_tag.find_all("img"):
        src = img.get("data-src") or img.get("src") or ""
        if src.startswith("http"):
            download_image_if_missing(src)
            fn = os.path.basename(urllib.parse.urlparse(src.split("?")[0]).path)
            img["src"] = f"/images/{fn}"
        elif not src.startswith("/images/") and not src.startswith("data:"):
            fn = os.path.basename(src.split("?")[0])
            if fn:
                img["src"] = f"/images/{fn}"

        for attr in ["data-src", "data-srcset", "data-lazyloaded", "loading", "decoding", "fetchpriority", "srcset"]:
            if attr in img.attrs:
                del img[attr]

    # 3. Process inline background images
    for el in main_tag.find_all(style=True):
        st = el["style"]
        matches = re.findall(r'url\([\'"]?(https?://[^)\'"]+)[\'"]?\)', st)
        for m in matches:
            download_image_if_missing(m)
            fn = os.path.basename(urllib.parse.urlparse(m.split("?")[0]).path)
            st = st.replace(m, f"/images/{fn}")
        el["style"] = st

    # 4. Update links
    for a in main_tag.find_all("a", href=True):
        href = a["href"]
        if href.startswith("https://onechauffeur.fr/en/") or href.startswith("http://onechauffeur.fr/en/"):
            path = href.split("onechauffeur.fr/en")[1]
            a["href"] = f"/en{path}" if (path and path != "/") else "/en/"
        elif href.startswith("https://onechauffeur.fr/") or href.startswith("http://onechauffeur.fr/"):
            path = href.split("onechauffeur.fr")[1]
            a["href"] = path if path else "/"
        elif href in ["https://onechauffeur.fr", "http://onechauffeur.fr"]:
            a["href"] = "/"
        elif href in ["https://onechauffeur.fr/en", "http://onechauffeur.fr/en"]:
            a["href"] = "/en/"

    # Serialize tag to string
    html = str(main_tag)

    # 5. JSX Attribute conversions
    attr_replacements = [
        (r'\bclass=', 'className='),
        (r'\bfor=', 'htmlFor='),
        (r'\btabindex=', 'tabIndex='),
        (r'\bautocomplete=', 'autoComplete='),
        (r'\bautofocus=', 'autoFocus='),
        (r'\breadonly=', 'readOnly='),
        (r'\bmaxlength=', 'maxLength='),
        (r'\bminlength=', 'minLength='),
        (r'\bcolspan=', 'colSpan='),
        (r'\browspan=', 'rowSpan='),
        (r'\bviewbox=', 'viewBox='),
        (r'\bxmlns:xlink=', 'xmlnsXlink='),
        (r'\bxlink:href=', 'xlinkHref='),
        (r'\bclip-path=', 'clipPath='),
        (r'\bfill-rule=', 'fillRule='),
        (r'\bclip-rule=', 'clipRule='),
        (r'\bstroke-width=', 'strokeWidth='),
        (r'\bstroke-linecap=', 'strokeLinecap='),
        (r'\bstroke-linejoin=', 'strokeLinejoin='),
        (r'\bstroke-miterlimit=', 'strokeMiterlimit='),
        (r'\bnovalidate=', 'noValidate='),
        (r'\bcharset=', 'charSet='),
    ]
    for pat, rep in attr_replacements:
        html = re.sub(pat, rep, html)

    # 6. Convert HTML boolean and numeric attributes for JSX
    html = re.sub(r'\brequired=["\'](?:required|true|)?["\']', 'required={true}', html)
    html = re.sub(r'\breadOnly=["\'](?:readOnly|readonly|true|)?["\']', 'readOnly={true}', html)
    html = re.sub(r'\bdisabled=["\'](?:disabled|true|)?["\']', 'disabled={true}', html)
    html = re.sub(r'\bmultiple=["\'](?:multiple|true|)?["\']', 'multiple={true}', html)
    
    # Numeric attributes in JSX
    html = re.sub(r'\bsize=["\'](\d+)["\']', r'size={\1}', html)
    html = re.sub(r'\brows=["\'](\d+)["\']', r'rows={\1}', html)
    html = re.sub(r'\bcols=["\'](\d+)["\']', r'cols={\1}', html)
    html = re.sub(r'\btabIndex=["\'](\d+)["\']', r'tabIndex={\1}', html)
    html = re.sub(r'\bmaxLength=["\'](\d+)["\']', r'maxLength={\1}', html)
    html = re.sub(r'\bminLength=["\'](\d+)["\']', r'minLength={\1}', html)
    html = re.sub(r'\bcolSpan=["\'](\d+)["\']', r'colSpan={\1}', html)
    html = re.sub(r'\browSpan=["\'](\d+)["\']', r'rowSpan={\1}', html)

    # 7. Void tags cleanup (remove closing tags like </img>, </input>, </br>, </hr>)
    void_tags = [
        'img', 'input', 'br', 'hr', 'source', 'area', 'meta', 'link',
        'path', 'circle', 'rect', 'polygon', 'line', 'ellipse', 'polyline'
    ]
    for vt in void_tags:
        html = re.sub(rf'</{vt}\s*>', '', html, flags=re.IGNORECASE)
        pattern = rf'<({vt}\b[^>]*?)(?<!/)>'
        html = re.sub(pattern, r'<\1 />', html, flags=re.IGNORECASE)

    # 8. Convert style="..." attributes to style={{ ... }}
    def style_repl(match):
        st_content = match.group(1).strip()
        if not st_content:
            return ""
        rules = [r.strip() for r in st_content.split(';') if r.strip()]
        props = []
        for r in rules:
            if ':' in r:
                k, v = r.split(':', 1)
                k = k.strip()
                v = v.strip().replace('"', '\\"')
                if not k.startswith('--'):
                    k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
                props.append(f'"{k}": "{v}"')
        return 'style={{ ' + ', '.join(props) + ' }}'

    html = re.sub(r'style="([^"]*)"', style_repl, html)

    # 9. Escape raw curly braces in text nodes
    parts = re.split(r'(<[^>]+>)', html)
    for i in range(len(parts)):
        if not parts[i].startswith('<'):
            parts[i] = parts[i].replace('{', '&#123;').replace('}', '&#125;')
    html = ''.join(parts)

    return html

def build_page(url, output_file, lang, current_path, component_name):
    print(f"\n=======================================================")
    print(f"Building {component_name} -> {output_file}")
    print(f"Source URL: {url}")
    print(f"=======================================================")

    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    with urllib.request.urlopen(req) as resp:
        raw_html = resp.read().decode("utf-8")

    soup = BeautifulSoup(raw_html, "html.parser")
    main = soup.find("main") or soup.find("div", {"data-elementor-type": "wp-page"}) or soup.find("article")
    if not main:
        print(f"ERROR: Could not find main container for {url}")
        return

    is_en = (lang == "en")
    jsx_main = clean_html_to_jsx(main, is_en=is_en)

    page_code = f'''"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function {component_name}() {{
  return (
    <div className="onechauffeur-container min-h-screen bg-[#0b0d17] text-white">
      <Header lang="{lang}" currentPath="{current_path}" />
      {jsx_main}
      <Footer lang="{lang}" currentPath="{current_path}" />
    </div>
  );
}}
'''

    full_output_path = os.path.join(PROJECT_DIR, output_file)
    os.makedirs(os.path.dirname(full_output_path), exist_ok=True)
    with open(full_output_path, "w", encoding="utf-8") as f:
        f.write(page_code)
    print(f"Successfully generated: {full_output_path}")

PAGES = [
    # English Home
    {
        "url": "https://onechauffeur.fr/en/",
        "file": "app/en/page.tsx",
        "lang": "en",
        "path": "/en/",
        "comp": "EnglishHomePage"
    },
    # French Sub-pages
    {
        "url": "https://onechauffeur.fr/services/",
        "file": "app/services/page.tsx",
        "lang": "fr",
        "path": "/services/",
        "comp": "ServicesPage"
    },
    {
        "url": "https://onechauffeur.fr/flotte/",
        "file": "app/flotte/page.tsx",
        "lang": "fr",
        "path": "/flotte/",
        "comp": "FlottePage"
    },
    {
        "url": "https://onechauffeur.fr/contact/",
        "file": "app/contact/page.tsx",
        "lang": "fr",
        "path": "/contact/",
        "comp": "ContactPage"
    },
    {
        "url": "https://onechauffeur.fr/reservation/",
        "file": "app/reservation/page.tsx",
        "lang": "fr",
        "path": "/reservation/",
        "comp": "ReservationPage"
    },
    {
        "url": "https://onechauffeur.fr/mentions-legales/",
        "file": "app/mentions-legales/page.tsx",
        "lang": "fr",
        "path": "/mentions-legales/",
        "comp": "MentionsLegalesPage"
    },
    {
        "url": "https://onechauffeur.fr/politique-de-confidentialite/",
        "file": "app/politique-de-confidentialite/page.tsx",
        "lang": "fr",
        "path": "/politique-de-confidentialite/",
        "comp": "PolitiquePage"
    },
    {
        "url": "https://onechauffeur.fr/cgv/",
        "file": "app/cgv/page.tsx",
        "lang": "fr",
        "path": "/cgv/",
        "comp": "CgvPage"
    },
    # English Sub-pages
    {
        "url": "https://onechauffeur.fr/en/services/",
        "file": "app/en/services/page.tsx",
        "lang": "en",
        "path": "/en/services/",
        "comp": "EnglishServicesPage"
    },
    {
        "url": "https://onechauffeur.fr/en/flotte/",
        "file": "app/en/flotte/page.tsx",
        "lang": "en",
        "path": "/en/flotte/",
        "comp": "EnglishFlottePage"
    },
    {
        "url": "https://onechauffeur.fr/en/contact/",
        "file": "app/en/contact/page.tsx",
        "lang": "en",
        "path": "/en/contact/",
        "comp": "EnglishContactPage"
    },
    {
        "url": "https://onechauffeur.fr/en/reservation/",
        "file": "app/en/reservation/page.tsx",
        "lang": "en",
        "path": "/en/reservation/",
        "comp": "EnglishReservationPage"
    },
    {
        "url": "https://onechauffeur.fr/en/mentions-legales/",
        "file": "app/en/mentions-legales/page.tsx",
        "lang": "en",
        "path": "/en/mentions-legales/",
        "comp": "EnglishMentionsPage"
    },
    {
        "url": "https://onechauffeur.fr/en/politique-de-confidentialite/",
        "file": "app/en/politique-de-confidentialite/page.tsx",
        "lang": "en",
        "path": "/en/politique-de-confidentialite/",
        "comp": "EnglishPolitiquePage"
    },
    {
        "url": "https://onechauffeur.fr/en/cgv/",
        "file": "app/en/cgv/page.tsx",
        "lang": "en",
        "path": "/en/cgv/",
        "comp": "EnglishCgvPage"
    },
]

def main():
    for p in PAGES:
        build_page(p["url"], p["file"], p["lang"], p["path"], p["comp"])
    print("\nAll pages generated successfully!")

if __name__ == "__main__":
    main()
