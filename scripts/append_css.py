import urllib.request
import urllib.parse
import os
import re

PROJECT_DIR = r"C:\Users\moham\.gemini\antigravity-ide\scratch\01- Sites Web\onechauffeur"
IMAGES_DIR = os.path.join(PROJECT_DIR, "public", "images")
GLOBALS_CSS = os.path.join(PROJECT_DIR, "app", "globals.css")

def download_image(url):
    if not url or url.startswith("data:"):
        return
    clean_url = url.split("?")[0]
    filename = os.path.basename(urllib.parse.urlparse(clean_url).path)
    if not filename:
        return
    dest = os.path.join(IMAGES_DIR, filename)
    if not os.path.exists(dest):
        try:
            req = urllib.request.Request(clean_url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req) as resp, open(dest, "wb") as f:
                f.write(resp.read())
            print(f"Downloaded image: {filename}")
        except Exception as e:
            print(f"Failed {clean_url}: {e}")

def main():
    with open(GLOBALS_CSS, "r", encoding="utf-8") as f:
        css_content = f.read()

    pids = [108, 110, 112, 116, 120, 3, 118]
    appended_css = []

    for pid in pids:
        marker = f"/* Source: post-{pid}.css */"
        if marker in css_content:
            print(f"post-{pid}.css already in globals.css")
            continue
        url = f"https://onechauffeur.fr/wp-content/uploads/elementor/css/post-{pid}.css"
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req) as resp:
                raw = resp.read().decode("utf-8")

            # Download images referenced in CSS
            for img_url in re.findall(r"url\(['\"]?(https?://[^)'\"]+)['\"]?\)", raw):
                download_image(img_url)

            # Rewrite url paths to /images/<filename>
            def rewrite_url(match):
                path = match.group(1).split("?")[0]
                fn = os.path.basename(path)
                return f"url('/images/{fn}')"

            clean = re.sub(r"url\(['\"]?(https?://[^)'\"]+)['\"]?\)", rewrite_url, raw)

            # Remove empty selectors
            clean = re.sub(r"[^{}]*\{\s*\}", "", clean)

            appended_css.append(f"\n\n{marker}\n{clean}")
            print(f"Prepared post-{pid}.css (length: {len(clean)})")
        except Exception as e:
            print(f"Error fetching post-{pid}.css: {e}")

    if appended_css:
        with open(GLOBALS_CSS, "a", encoding="utf-8") as f:
            f.write("".join(appended_css))
        print("Successfully appended CSS!")

if __name__ == "__main__":
    main()
