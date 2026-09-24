import os
import shutil
import re

APP_DIR = r"C:\Users\moham\.gemini\antigravity-ide\scratch\01- Sites Web\onechauffeur\app"
FR_DIR = os.path.join(APP_DIR, "(fr)")
EN_DIR = os.path.join(APP_DIR, "en")

# List of French pages to move to (fr)/
FR_PAGES = [
    ("", "page.tsx"),
    ("services", "services/page.tsx"),
    ("flotte", "flotte/page.tsx"),
    ("reservation", "reservation/page.tsx"),
    ("contact", "contact/page.tsx"),
    ("cgv", "cgv/page.tsx"),
    ("mentions-legales", "mentions-legales/page.tsx"),
    ("politique-de-confidentialite", "politique-de-confidentialite/page.tsx"),
    ("merci", "merci/page.tsx"),
]

# Move French pages to (fr)
for slug, rel_path in FR_PAGES:
    src_file = os.path.join(APP_DIR, rel_path)
    dst_file = os.path.join(FR_DIR, rel_path)
    
    if os.path.exists(src_file):
        os.makedirs(os.path.dirname(dst_file), exist_ok=True)
        # Read source
        with open(src_file, "r", encoding="utf-8") as f:
            content = f.read()
            
        # Clean "use client";
        content = re.sub(r'^"use client";\s*', '', content)
        
        # Add metadata imports and export
        meta_call = f'export const metadata: Metadata = createPageMetadata("{slug}", "fr"{", { noindex: true }" if slug == "merci" else ""});\n'
        imports = 'import type { Metadata } from "next";\nimport { createPageMetadata } from "@/lib/seo";\n\n'
        
        new_content = imports + meta_call + "\n" + content
        
        with open(dst_file, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Moved and updated FR page: {rel_path} -> (fr)/{rel_path}")
        
        # If not root page.tsx (we will remove it after), remove old folder if in app/
        if rel_path != "page.tsx":
            old_folder = os.path.join(APP_DIR, os.path.dirname(rel_path))
            if os.path.exists(old_folder) and os.path.isdir(old_folder):
                shutil.rmtree(old_folder)
                print(f"Removed old folder: {old_folder}")

# Remove original app/page.tsx and app/layout.tsx
if os.path.exists(os.path.join(APP_DIR, "page.tsx")):
    os.remove(os.path.join(APP_DIR, "page.tsx"))
    print("Removed original app/page.tsx")

if os.path.exists(os.path.join(APP_DIR, "layout.tsx")):
    os.remove(os.path.join(APP_DIR, "layout.tsx"))
    print("Removed original app/layout.tsx")

# Now update English pages
EN_PAGES = [
    ("", "page.tsx"),
    ("services", "services/page.tsx"),
    ("flotte", "flotte/page.tsx"),
    ("reservation", "reservation/page.tsx"),
    ("contact", "contact/page.tsx"),
    ("cgv", "cgv/page.tsx"),
    ("mentions-legales", "mentions-legales/page.tsx"),
    ("politique-de-confidentialite", "politique-de-confidentialite/page.tsx"),
    ("merci", "merci/page.tsx"),
]

for slug, rel_path in EN_PAGES:
    target_file = os.path.join(EN_DIR, rel_path)
    if os.path.exists(target_file):
        with open(target_file, "r", encoding="utf-8") as f:
            content = f.read()
            
        content = re.sub(r'^"use client";\s*', '', content)
        # Avoid duplicate imports if already present
        if "createPageMetadata" not in content:
            meta_call = f'export const metadata: Metadata = createPageMetadata("{slug}", "en"{", { noindex: true }" if slug == "merci" else ""});\n'
            imports = 'import type { Metadata } from "next";\nimport { createPageMetadata } from "@/lib/seo";\n\n'
            content = imports + meta_call + "\n" + content
            
        with open(target_file, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated EN page: en/{rel_path}")

print("SEO setup and reorganization complete!")
