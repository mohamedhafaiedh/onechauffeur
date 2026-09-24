import os
import re
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup, Comment

PROJECT_DIR = r"C:\Users\moham\.gemini\antigravity-ide\scratch\01- Sites Web\onechauffeur"
IMAGES_DIR = os.path.join(PROJECT_DIR, "public", "images")
GLOBALS_CSS = os.path.join(PROJECT_DIR, "app", "globals.css")
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
            req = urllib.request.Request(url_clean, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req) as resp, open(dest, "wb") as f:
                f.write(resp.read())
            print(f"Downloaded missing image: {filename}")
        except Exception as e:
            print(f"Error downloading {url_clean}: {e}")
    return f"/images/{filename}"

def extract_and_append_css(soup):
    """Downloads any page-specific post-XXX.css and appends to globals.css if not already present."""
    with open(GLOBALS_CSS, "r", encoding="utf-8") as f:
        existing_css = f.read()

    appended_any = False
    for link in soup.find_all("link", rel="stylesheet"):
        href = link.get("href")
        if not href or "elementor/css/post-" not in href:
            continue
        post_id_match = re.search(r'post-(\d+)\.css', href)
        if not post_id_match:
            continue
        post_id = post_id_match.group(1)
        marker = f"/* Source: post-{post_id}.css */"
        if marker in existing_css:
            continue

        try:
            req = urllib.request.Request(href, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req) as resp:
                css_content = resp.read().decode("utf-8")
            # clean relative urls in css
            css_content = re.sub(r'url\([\'"]?([^\)\'"]+)[\'"]?\)', lambda m: f"url('/images/{os.path.basename(m.group(1).split('?')[0])}')" if ('uploads' in m.group(1) or 'images' in m.group(1)) else m.group(0), css_content)
            
            with open(GLOBALS_CSS, "a", encoding="utf-8") as f:
                f.write(f"\n\n{marker}\n{css_content}\n")
            existing_css += f"\n\n{marker}\n{css_content}\n"
            print(f"Appended post-{post_id}.css to globals.css")
            appended_any = True
        except Exception as e:
            print(f"Error fetching CSS {href}: {e}")

    return appended_any

def clean_tag(tag, is_en=False):
    if not tag:
        return ""

    for s in tag.find_all(["script", "style", "noscript"]):
        s.decompose()
    for comment in tag.find_all(text=lambda t: isinstance(t, Comment)):
        comment.extract()

    # Clean images
    for img in tag.find_all("img"):
        src = img.get("data-src") or img.get("src") or ""
        if src.startswith("http"):
            download_image_if_missing(src)
            img["src"] = f"/images/{os.path.basename(urllib.parse.urlparse(src.split('?')[0]).path)}"
        elif not src.startswith("/images/") and not src.startswith("data:"):
            fn = os.path.basename(src.split("?")[0])
            if fn:
                img["src"] = f"/images/{fn}"

        for attr in ["data-src", "data-srcset", "data-lazyloaded", "loading", "decoding", "fetchpriority"]:
            if attr in img.attrs:
                del img[attr]
        if "srcset" in img.attrs:
            del img["srcset"]

    # Inline background images
    for el in tag.find_all(style=True):
        st = el["style"]
        matches = re.findall(r'url\([\'"]?(https?://[^)\'"]+)[\'"]?\)', st)
        for m in matches:
            download_image_if_missing(m)
            fn = os.path.basename(urllib.parse.urlparse(m.split('?')[0]).path)
            st = st.replace(m, f"/images/{fn}")
        el["style"] = st

    # Update links
    for a in tag.find_all("a", href=True):
        href = a["href"]
        if href.startswith("https://onechauffeur.fr/en/") or href.startswith("http://onechauffeur.fr/en/"):
            path = href.split("onechauffeur.fr/en")[1]
            if not path or path == "/":
                a["href"] = "/en/"
            else:
                a["href"] = f"/en{path}"
        elif href.startswith("https://onechauffeur.fr/") or href.startswith("http://onechauffeur.fr/"):
            path = href.split("onechauffeur.fr")[1]
            a["href"] = path if path else "/"
        elif href == "https://onechauffeur.fr" or href == "http://onechauffeur.fr":
            a["href"] = "/"

    # Update language switcher
    for ls in tag.find_all("div", class_="trp-language-switcher"):
        curr = ls.find("div", class_="trp-ls-shortcode-current-language")
        drop = ls.find("div", class_="trp-ls-shortcode-language")
        if is_en:
            if curr:
                curr.clear()
                curr_soup = BeautifulSoup('<a class="trp-ls-shortcode-disabled-language trp-ls-disabled-language" href="#" title="English"><img alt="en_US" class="trp-flag-image" height="12" src="/images/en_US.png" title="English" width="18"/> EN</a>', 'html.parser')
                curr.append(curr_soup)
            if drop:
                drop.clear()
                drop_soup = BeautifulSoup('<a href="/" title="French"><img alt="fr_FR" class="trp-flag-image" height="12" src="/images/fr_FR.png" title="French" width="18"/> FR</a>', 'html.parser')
                drop.append(drop_soup)
        else:
            if curr:
                curr.clear()
                curr_soup = BeautifulSoup('<a class="trp-ls-shortcode-disabled-language trp-ls-disabled-language" href="#" title="French"><img alt="fr_FR" class="trp-flag-image" height="12" src="/images/fr_FR.png" title="French" width="18"/> FR</a>', 'html.parser')
                curr.append(curr_soup)
            if drop:
                drop.clear()
                drop_soup = BeautifulSoup('<a href="/en/" title="English"><img alt="en_US" class="trp-flag-image" height="12" src="/images/en_US.png" title="English" width="18"/> EN</a>', 'html.parser')
                drop.append(drop_soup)

    html = str(tag)

    # React JSX attribute replacements
    html = re.sub(r'\bclass=', 'className=', html)
    html = re.sub(r'\bfor=', 'htmlFor=', html)
    html = re.sub(r'\btabindex=', 'tabIndex=', html)
    html = re.sub(r'\bautocomplete=', 'autoComplete=', html)
    html = re.sub(r'\bviewbox=', 'viewBox=', html)
    html = re.sub(r'\bxmlns:xlink=', 'xmlnsXlink=', html)
    html = re.sub(r'\bclip-path=', 'clipPath=', html)
    html = re.sub(r'\bfill-rule=', 'fillRule=', html)
    html = re.sub(r'\bclip-rule=', 'clipRule=', html)

    # Self-closing void tags
    void_tags = ['img', 'input', 'br', 'hr', 'source', 'area', 'meta', 'link', 'path', 'circle', 'rect', 'polygon', 'line', 'ellipse', 'polyline']
    for vt in void_tags:
        pattern = rf'<({vt}\b[^>]*?)(?<!/)>'
        html = re.sub(pattern, r'<\1 />', html)

    # Style conversions
    def style_repl(match):
        st_content = match.group(1)
        rules = [r.strip() for r in st_content.split(';') if r.strip()]
        obj_props = []
        for r in rules:
            if ':' in r:
                k, v = r.split(':', 1)
                k = k.strip()
                v = v.strip().replace('"', '\\"')
                k_camel = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
                obj_props.append(f'"{k_camel}": "{v}"')
        return 'style={{ ' + ', '.join(obj_props) + ' }}'

    html = re.sub(r'style="([^"]*)"', style_repl, html)

    return html

def build_page_from_url(url, output_rel_path, is_en=False, component_name="Page"):
    print(f"\n--- Building {output_rel_path} from {url} ---")
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        raw_html = resp.read().decode("utf-8")

    soup = BeautifulSoup(raw_html, "html.parser")
    extract_and_append_css(soup)

    header = soup.find("header")
    main = soup.find("div", {"data-elementor-type": "wp-page"}) or soup.find("main") or soup.find("article")
    footer = soup.find("footer")

    clean_header = clean_tag(header, is_en=is_en)
    clean_main = clean_tag(main, is_en=is_en)
    clean_footer = clean_tag(footer, is_en=is_en)

    skip_text = "Skip to content" if is_en else "Aller au contenu"

    tsx_content = f'''"use client";

import React, {{ useEffect }} from "react";

export default function {component_name}() {{
  useEffect(() => {{
    const hamburger = document.querySelectorAll(".jkit-hamburger-menu");
    const closeBtns = document.querySelectorAll(".jkit-close-menu");
    const overlays = document.querySelectorAll(".jkit-overlay");
    const menuWrappers = document.querySelectorAll(".jkit-menu-wrapper");

    const openMenu = () => {{
      menuWrappers.forEach((el) => el.classList.add("is-active"));
      overlays.forEach((el) => el.classList.add("is-active"));
    }};

    const closeMenu = () => {{
      menuWrappers.forEach((el) => el.classList.remove("is-active"));
      overlays.forEach((el) => el.classList.remove("is-active"));
    }};

    hamburger.forEach((btn) => btn.addEventListener("click", openMenu));
    closeBtns.forEach((btn) => btn.addEventListener("click", closeMenu));
    overlays.forEach((ov) => ov.addEventListener("click", closeMenu));

    const handleHashClick = (e: MouseEvent) => {{
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.hash && anchor.pathname === window.location.pathname) {{
        const el = document.querySelector(anchor.hash);
        if (el) {{
          e.preventDefault();
          el.scrollIntoView({{ behavior: "smooth" }});
          closeMenu();
        }}
      }}
    }};
    document.addEventListener("click", handleHashClick);

    return () => {{
      hamburger.forEach((btn) => btn.removeEventListener("click", openMenu));
      closeBtns.forEach((btn) => btn.removeEventListener("click", closeMenu));
      overlays.forEach((ov) => ov.removeEventListener("click", closeMenu));
      document.removeEventListener("click", handleHashClick);
    }};
  }}, []);

  return (
    <div className="onechauffeur-container min-h-screen bg-[#0b0d17] text-white">
      <a className="skip-link screen-reader-text" href="#content">{skip_text}</a>
      {clean_header}
      {clean_main}
      {clean_footer}
    </div>
  );
}}
'''

    out_file = os.path.join(PROJECT_DIR, output_rel_path)
    os.makedirs(os.path.dirname(out_file), exist_ok=True)
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(tsx_content)
    print(f"Successfully generated {out_file}")

if __name__ == "__main__":
    # Test with /en/
    build_page_from_url("https://onechauffeur.fr/en/", "app/en/page.tsx", is_en=True, component_name="EnglishHomePage")
