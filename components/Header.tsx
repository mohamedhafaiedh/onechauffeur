"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileMenu from "@/components/MobileMenu";
import { getMessages } from "@/lib/i18n";
import { pagePath, type Lang, type PageKey } from "@/lib/seo";

interface HeaderProps {
  lang: Lang;
  page: PageKey;
}

export default function Header({ lang, page }: HeaderProps) {
  useEffect(() => {
    // Défilement doux vers les ancres de la page courante
    const handleHashClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (anchor && anchor.hash && anchor.pathname === window.location.pathname) {
        const el = document.querySelector(anchor.hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handleHashClick);
    return () => document.removeEventListener("click", handleHashClick);
  }, []);

  const t = getMessages(lang).header;

  // Links
  const homeHref = pagePath("", lang);
  const servicesHref = pagePath("services", lang);
  const flotteHref = pagePath("flotte", lang);
  const contactHref = pagePath("contact", lang);
  const reservationHref = pagePath("reservation", lang);

  // Labels
  const skipText = t.skipToContent;
  const homeText = t.home;
  const servicesText = t.services;
  const flotteText = t.fleet;
  const contactText = t.contact;
  const reservationBtnText = t.bookMyDriver;
  const reservationMenuText = t.booking;

  const isHomeActive = page === "";
  const isServicesActive = page === "services";
  const isFlotteActive = page === "flotte";
  const isContactActive = page === "contact";
  const isReservationActive = page === "reservation";

  return (
    <>
      <a className="skip-link screen-reader-text" href="#content">
        {skipText}
      </a>
      <header
        className="elementor elementor-81 elementor-location-header"
        data-elementor-id="81"
        data-elementor-post-type="elementor_library"
        data-elementor-type="header"
      >
        <div
          className="elementor-element elementor-element-b3dd95a e-flex e-con-boxed e-con e-parent"
          data-e-type="container"
          data-element_type="container"
          data-id="b3dd95a"
        >
          <div className="e-con-inner">
            {/* Desktop 4-Column Layout */}
            <div
              className="elementor-element elementor-element-df26d30 e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child header-desktop-row"
              data-e-type="container"
              data-element_type="container"
              data-id="df26d30"
            >
              {/* Colonne 1 : Menu Principal */}
              <div
                className="elementor-element elementor-element-d09ef3c e-con-full e-flex e-con e-child header-col-menu"
                data-e-type="container"
                data-element_type="container"
                data-id="d09ef3c"
              >
                <div
                  className="elementor-element elementor-element-4c17b7b elementor-widget elementor-widget-jkit_nav_menu"
                  data-e-type="widget"
                  data-element_type="widget"
                  data-id="4c17b7b"
                  data-widget_type="jkit_nav_menu.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      className="jeg-elementor-kit jkit-nav-menu break-point-tablet submenu-click-title jeg_module_98__6aae20c7d192c"
                      data-item-indicator='&lt;i aria-hidden="true" className="jki jki-chevron-down-light"&gt;&lt;/i&gt;'
                    >
                      <div className="jkit-menu-wrapper">
                        <div className="jkit-menu-container">
                          <ul
                            className="jkit-menu jkit-menu-direction-flex jkit-submenu-position-right"
                            id="menu-mainmenu"
                          >
                            <li
                              className={`menu-item menu-item-type-post_type menu-item-object-page ${
                                isHomeActive ? "current-menu-item page_item current_page_item" : ""
                              } menu-item-821`}
                              id="menu-item-821"
                            >
                              <Link aria-current={isHomeActive ? "page" : undefined} href={homeHref}>
                                {homeText}
                              </Link>
                            </li>
                            <li
                              className={`menu-item menu-item-type-post_type menu-item-object-page ${
                                isServicesActive ? "current-menu-item page_item current_page_item" : ""
                              } menu-item-168`}
                              id="menu-item-168"
                            >
                              <Link href={servicesHref}>{servicesText}</Link>
                            </li>
                            <li
                              className={`menu-item menu-item-type-post_type menu-item-object-page ${
                                isFlotteActive ? "current-menu-item page_item current_page_item" : ""
                              } menu-item-390`}
                              id="menu-item-390"
                            >
                              <Link href={flotteHref}>{flotteText}</Link>
                            </li>
                            <li
                              className={`menu-item menu-item-type-post_type menu-item-object-page ${
                                isContactActive ? "current-menu-item page_item current_page_item" : ""
                              } menu-item-167`}
                              id="menu-item-167"
                            >
                              <Link href={contactHref}>{contactText}</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colonne 2 : Logo */}
              <div
                className="elementor-element elementor-element-c684195 e-con-full e-flex e-con e-child header-col-logo"
                data-e-type="container"
                data-element_type="container"
                data-id="c684195"
              >
                <div
                  className="elementor-element elementor-element-84c9f81 elementor-widget elementor-widget-image"
                  data-e-type="widget"
                  data-element_type="widget"
                  data-id="84c9f81"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <Link href={homeHref}>
                      <img
                        alt="One Chauffeur"
                        className="attachment-full size-full wp-image-665"
                        height="140"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                        src="/images/logo-one-chauffeur.webp"
                        width="1000"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Colonne 3 : Sélecteur de Langue */}
              <div
                className="elementor-element elementor-element-fc0ddae elementor-widget__width-auto elementor-widget elementor-widget-shortcode header-col-lang"
                data-e-type="widget"
                data-element_type="widget"
                data-id="fc0ddae"
                data-widget_type="shortcode.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-shortcode">
                    <LanguageSwitcher lang={lang} page={page} />
                  </div>
                </div>
              </div>

              {/* Colonne 4 : Bouton Réservation */}
              <div
                className="elementor-element elementor-element-e71cdc2 elementor-align-right elementor-widget__width-auto elementor-widget elementor-widget-button header-col-btn"
                data-e-type="widget"
                data-element_type="widget"
                data-id="e71cdc2"
                data-widget_type="button.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link
                      className="elementor-button elementor-button-link elementor-size-sm"
                      href={reservationHref}
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">{reservationBtnText}</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile / Tablet Header */}
            <div
              className="elementor-element elementor-element-8f5b552 e-con-full elementor-hidden-desktop e-flex e-con e-child"
              data-e-type="container"
              data-element_type="container"
              data-id="8f5b552"
            >
              <div
                className="elementor-element elementor-element-701c163 e-con-full e-flex e-con e-child"
                data-e-type="container"
                data-element_type="container"
                data-id="701c163"
              >
                <div
                  className="elementor-element elementor-element-8a7ae2e elementor-widget elementor-widget-image"
                  data-e-type="widget"
                  data-element_type="widget"
                  data-id="8a7ae2e"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <Link href={homeHref}>
                      <img
                        alt="One Chauffeur"
                        className="attachment-full size-full wp-image-665"
                        height="140"
                        sizes="(max-width: 1000px) 100vw, 1000px"
                        src="/images/logo-one-chauffeur.webp"
                        width="1000"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-e8fe522 e-con-full e-flex e-con e-child"
                data-e-type="container"
                data-element_type="container"
                data-id="e8fe522"
              >
                <div
                  className="elementor-element elementor-element-ac16a39 elementor-widget__width-auto elementor-widget elementor-widget-shortcode"
                  data-e-type="widget"
                  data-element_type="widget"
                  data-id="ac16a39"
                  data-widget_type="shortcode.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                      <LanguageSwitcher lang={lang} page={page} />
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-83a8478 elementor-widget-tablet__width-auto elementor-widget elementor-widget-jkit_nav_menu"
                  data-e-type="widget"
                  data-element_type="widget"
                  data-id="83a8478"
                  data-widget_type="jkit_nav_menu.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      className="jeg-elementor-kit jkit-nav-menu break-point-tablet submenu-click-title jeg_module_98_1_6aae20c7d37b1"
                      data-item-indicator='&lt;i aria-hidden="true" className="jki jki-chevron-down-light"&gt;&lt;/i&gt;'
                    >
                      <MobileMenu
                        items={[
                          { href: homeHref, label: homeText, active: isHomeActive },
                          { href: servicesHref, label: servicesText, active: isServicesActive },
                          { href: flotteHref, label: flotteText, active: isFlotteActive },
                          { href: contactHref, label: contactText, active: isContactActive },
                          { href: reservationHref, label: reservationMenuText, active: isReservationActive },
                        ]}
                        homeHref={homeHref}
                        cta={{ href: reservationHref, label: reservationBtnText }}
                        phone={{ href: "tel:+33667520677", label: "+33 6 67 52 06 77" }}
                        labels={{ open: t.openMenu, close: t.closeMenu, home: t.homeLink, menu: t.menu }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
