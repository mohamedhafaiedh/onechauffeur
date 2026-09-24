import os

PROJECT_DIR = r"C:\Users\moham\.gemini\antigravity-ide\scratch\01- Sites Web\onechauffeur"
GLOBALS_CSS = os.path.join(PROJECT_DIR, "app", "globals.css")

HEADER_CSS = """
/* ==========================================================================
   HEADER: EXACT 4-COLUMN ALIGNMENT & PIXEL-PERFECT POSITIONING (ORIGINAL PARITY)
   ========================================================================== */
@media (min-width: 1025px) {
  /* Container desktop principal (1140px, hauteur exacte d'origine : 88px, padding : 20px 10px) */
  .elementor-element.elementor-element-df26d30.header-desktop-row,
  .elementor-element-df26d30 {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: flex-start !important;
    width: 1140px !important;
    max-width: 1140px !important;
    padding: 20px 10px !important;
    min-height: 88px !important;
    height: 88px !important;
    box-sizing: border-box !important;
    margin: 0 auto !important;
  }

  /* Colonne 1 : Menu Principal (Largeur exacte : 373.67px) */
  .header-col-menu,
  .elementor-81 .elementor-element.elementor-element-d09ef3c,
  .elementor-element-d09ef3c {
    width: 373.67px !important;
    flex: 0 0 373.67px !important;
    max-width: 373.67px !important;
    margin: 0 !important;
    padding: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important;
    box-sizing: border-box !important;
  }
  .header-col-menu .elementor-element-4c17b7b,
  .elementor-element-d09ef3c .elementor-element-4c17b7b {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  .header-col-menu .jkit-menu-wrapper,
  .elementor-element-d09ef3c .jkit-menu-wrapper {
    margin: 0 !important;
    padding: 0 !important;
  }
  .header-col-menu .jkit-menu,
  .elementor-element-d09ef3c .jkit-menu {
    display: flex !important;
    flex-direction: row !important;
    margin: 0 !important;
    padding: 0 !important;
    list-style: none !important;
  }
  .header-col-menu .jkit-menu > li,
  .elementor-element-d09ef3c .jkit-menu > li {
    margin: 0 !important;
    padding: 0 !important;
    list-style: none !important;
  }
  .header-col-menu .jkit-menu > li > a,
  .elementor-element-d09ef3c .jkit-menu > li > a {
    margin: 0 !important;
    padding: 12px 15px !important;
    font-family: 'Poppins', sans-serif !important;
    font-size: 15px !important;
    font-weight: 500 !important;
    color: #1e1e1e !important;
    display: inline-block !important;
    box-sizing: border-box !important;
    transition: color 0.2s ease !important;
  }
  .header-col-menu .jkit-menu > li:hover > a,
  .elementor-element-d09ef3c .jkit-menu > li:hover > a,
  .header-col-menu .jkit-menu > li.current-menu-item > a,
  .elementor-element-d09ef3c .jkit-menu > li.current-menu-item > a {
    color: #e5a93c !important;
  }

  /* Colonne 2 : Logo (Largeur exacte : 320.43px) */
  .header-col-logo,
  .elementor-81 .elementor-element.elementor-element-c684195,
  .elementor-element-c684195 {
    width: 320.43px !important;
    flex: 0 0 320.43px !important;
    max-width: 320.43px !important;
    margin: 0 !important;
    padding: 0 10px !important;
    box-sizing: border-box !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .header-col-logo .elementor-element-84c9f81,
  .elementor-element-c684195 .elementor-element-84c9f81 {
    width: 280px !important;
    max-width: 280px !important;
  }
  .header-col-logo img,
  .elementor-element-c684195 img {
    width: 280px !important;
    height: auto !important;
    display: block !important;
    margin: 0 auto !important;
  }

  /* Colonne 3 : Sélecteur de Langue (Largeur exacte : 149.99px, dont 129.99px + 20px marge droite) */
  .header-col-lang,
  .elementor-81 .elementor-element.elementor-element-fc0ddae,
  .elementor-element-fc0ddae {
    width: 149.99px !important;
    flex: 0 0 149.99px !important;
    max-width: 149.99px !important;
    margin: 0 !important;
    padding: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important;
    box-sizing: border-box !important;
  }
  .header-col-lang > .elementor-widget-container,
  .elementor-element-fc0ddae > .elementor-widget-container {
    width: 129.99px !important;
    margin: 0 20px 0 0 !important;
    padding: 0 !important;
  }
  .header-col-lang .trp-language-switcher,
  .elementor-element-fc0ddae .trp-language-switcher {
    width: 129.99px !important;
    height: 48.17px !important;
    position: relative !important;
    background: transparent !important;
    border: none !important;
    box-sizing: border-box !important;
  }
  .header-col-lang .trp-ls-shortcode-current-language,
  .elementor-element-fc0ddae .trp-ls-shortcode-current-language {
    width: 129.99px !important;
    height: 48.17px !important;
    background-color: transparent !important;
    border: none !important;
    border-radius: 2px !important;
    padding: 0 24px 0 12px !important;
    box-sizing: border-box !important;
    display: flex !important;
    align-items: center !important;
    position: relative !important;
    cursor: pointer !important;
    background-image: url('/fonts/arrow-down-3101.svg') !important;
    background-repeat: no-repeat !important;
    background-position: calc(100% - 8px) center !important;
    background-size: 10px 10px !important;
  }
  .header-col-lang .trp-ls-shortcode-current-language::after,
  .elementor-element-fc0ddae .trp-ls-shortcode-current-language::after {
    display: none !important;
  }
  .header-col-lang .trp-ls-shortcode-current-language a,
  .elementor-element-fc0ddae .trp-ls-shortcode-current-language a {
    display: flex !important;
    align-items: center !important;
    color: #1e1e1e !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    text-decoration: none !important;
    font-family: 'Poppins', sans-serif !important;
    line-height: normal !important;
    padding: 0 !important;
    background: transparent !important;
  }
  .header-col-lang .trp-ls-shortcode-current-language a img,
  .elementor-element-fc0ddae .trp-ls-shortcode-current-language a img {
    margin: 0 8px 0 0 !important;
    display: inline-block !important;
    vertical-align: middle !important;
    width: 18px !important;
    height: 12px !important;
  }
  .header-col-lang .trp-ls-shortcode-language,
  .elementor-element-fc0ddae .trp-ls-shortcode-language {
    display: none !important;
    position: absolute !important;
    left: 0 !important;
    top: 100% !important;
    width: 129.99px !important;
    background-color: #ffffff !important;
    border: 1px solid rgba(0, 0, 0, 0.08) !important;
    border-radius: 4px !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12) !important;
    z-index: 9999 !important;
    padding: 4px 6px !important;
    box-sizing: border-box !important;
  }
  .header-col-lang .trp-language-switcher:hover .trp-ls-shortcode-language,
  .elementor-element-fc0ddae .trp-language-switcher:hover .trp-ls-shortcode-language {
    display: block !important;
  }
  .header-col-lang .trp-ls-shortcode-language a,
  .elementor-element-fc0ddae .trp-ls-shortcode-language a {
    display: flex !important;
    align-items: center !important;
    padding: 8px 10px !important;
    color: #1e1e1e !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    text-decoration: none !important;
    font-family: 'Poppins', sans-serif !important;
    border-radius: 3px !important;
    transition: background 0.15s ease !important;
    background: transparent !important;
  }
  .header-col-lang .trp-ls-shortcode-language a:hover,
  .elementor-element-fc0ddae .trp-ls-shortcode-language a:hover {
    background: #f5f5f5 !important;
  }
  .header-col-lang .trp-ls-shortcode-language a img,
  .elementor-element-fc0ddae .trp-ls-shortcode-language a img {
    margin: 0 8px 0 0 !important;
    display: inline-block !important;
    vertical-align: middle !important;
    width: 18px !important;
    height: 12px !important;
  }

  /* Colonne 4 : Bouton Réservation (Largeur exacte : 275.93px) */
  .header-col-btn,
  .elementor-81 .elementor-element.elementor-element-e71cdc2,
  .elementor-element-e71cdc2 {
    width: 275.93px !important;
    flex: 0 0 275.93px !important;
    max-width: 275.93px !important;
    margin: 0 !important;
    padding: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-end !important;
    box-sizing: border-box !important;
  }
  .header-col-btn .elementor-button-wrapper,
  .elementor-element-e71cdc2 .elementor-button-wrapper {
    display: flex !important;
    justify-content: flex-end !important;
    width: 100% !important;
  }
  .header-col-btn .elementor-button,
  .elementor-element-e71cdc2 .elementor-button {
    width: 245px !important;
    height: 48px !important;
    box-sizing: border-box !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin: 0 !important;
    font-family: 'Poppins', sans-serif !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    border-radius: 4px !important;
    background-color: #000000 !important;
    color: #ffffff !important;
    transition: background-color 0.2s ease, color 0.2s ease !important;
  }
  .header-col-btn .elementor-button:hover,
  .elementor-element-e71cdc2 .elementor-button:hover {
    background-color: #e5a93c !important;
    color: #000000 !important;
  }
}
"""

with open(GLOBALS_CSS, "r", encoding="utf-8") as f:
    existing = f.read()

# Remove old header 4-column block if exists
marker = "/* ==========================================================================\n   HEADER: EXACT 4-COLUMN ALIGNMENT"
if marker in existing:
    existing = existing[:existing.find(marker)].strip()

updated_css = existing + "\n\n" + HEADER_CSS.strip() + "\n"

with open(GLOBALS_CSS, "w", encoding="utf-8") as f:
    f.write(updated_css)

print("Updated 4-column header CSS with 88px height (20px vertical padding) in app/globals.css!")
