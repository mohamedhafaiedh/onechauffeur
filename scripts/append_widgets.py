import urllib.request
import re

urls = [
    'https://onechauffeur.fr/wp-content/plugins/elementor-pro/assets/css/widget-form.min.css',
    'https://onechauffeur.fr/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css',
    'https://onechauffeur.fr/wp-content/plugins/jeg-elementor-kit/lib/jeg-framework/assets/css/jeg-dynamic-styles.css'
]

appended = []
for u in urls:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            css = resp.read().decode('utf-8')
        css = re.sub(r'[^{}]*\{\s*\}', '', css)
        fn = u.split('/')[-1]
        marker = f"/* Source: {fn} */"
        appended.append(f"\n\n{marker}\n{css}")
        print(f"Fetched {fn}")
    except Exception as e:
        print(f"Error {u}: {e}")

if appended:
    with open('app/globals.css', 'a', encoding='utf-8') as f:
        f.write(''.join(appended))
    print("Appended missing widget stylesheets to globals.css")
