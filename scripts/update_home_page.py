with open("app/page.tsx", "r", encoding="utf-8") as f:
    code = f.read()

header_start = code.find('<a className="skip-link')
header_end = code.find('<main className="site-main')
footer_start = code.find('<footer className="elementor elementor-84')
footer_end = code.rfind('</div>')

print("Header start:", header_start, "end:", header_end)
print("Footer start:", footer_start, "end:", footer_end)

if header_start != -1 and header_end != -1 and footer_start != -1:
    main_content = code[header_end:footer_start].strip()
    new_code = f'''"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {{
  return (
    <div className="onechauffeur-container min-h-screen bg-[#0b0d17] text-white">
      <Header lang="fr" currentPath="/" />
      {main_content}
      <Footer lang="fr" currentPath="/" />
    </div>
  );
}}
'''
    with open("app/page.tsx", "w", encoding="utf-8") as f:
        f.write(new_code)
    print("Successfully updated app/page.tsx!")
else:
    print("Failed to find boundaries in app/page.tsx")
