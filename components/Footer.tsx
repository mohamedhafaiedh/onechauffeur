"use client";

import React from "react";
import Link from "next/link";

interface FooterProps {
  lang: "fr" | "en";
  currentPath: string;
}

export default function Footer({ lang, currentPath }: FooterProps) {
  const isEn = lang === "en";

  // Target URL for language switcher
  let targetLangUrl = "/";
  if (isEn) {
    if (currentPath === "/en/" || currentPath === "/en") {
      targetLangUrl = "/";
    } else {
      targetLangUrl = currentPath.replace(/^\/en\/?/, "/");
      if (!targetLangUrl.endsWith("/") && !targetLangUrl.includes("#")) {
        targetLangUrl += "/";
      }
    }
  } else {
    if (currentPath === "/" || currentPath === "") {
      targetLangUrl = "/en/";
    } else {
      const clean = currentPath.replace(/^\//, "");
      targetLangUrl = `/en/${clean}`;
      if (!targetLangUrl.endsWith("/") && !targetLangUrl.includes("#")) {
        targetLangUrl += "/";
      }
    }
  }

  // Links
  const homeHref = isEn ? "/en/" : "/";
  const servicesHref = isEn ? "/en/services/" : "/services/";
  const flotteHref = isEn ? "/en/flotte/" : "/flotte/";
  const contactHref = isEn ? "/en/contact/" : "/contact/";
  const reservationHref = isEn ? "/en/reservation/" : "/reservation/";
  const cgvHref = isEn ? "/en/cgv/" : "/cgv/";
  const privacyHref = isEn ? "/en/politique-de-confidentialite/" : "/politique-de-confidentialite/";
  const mentionsHref = isEn ? "/en/mentions-legales/" : "/mentions-legales/";

  return (
    <footer
      className="elementor elementor-84 elementor-location-footer"
      data-elementor-id="84"
      data-elementor-post-type="elementor_library"
      data-elementor-type="footer"
    >
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-7210bb04 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-e-type="section"
        data-element_type="section"
        data-id="7210bb04"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4126285"
            data-e-type="column"
            data-element_type="column"
            data-id="4126285"
            data-settings='{"background_background":"classic"}'
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-19c7875c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-e-type="section"
                data-element_type="section"
                data-id="19c7875c"
              >
                <div className="elementor-container elementor-column-gap-no">
                  <div
                    className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-1ac7c317"
                    data-e-type="column"
                    data-element_type="column"
                    data-id="1ac7c317"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-4ef653ea elementor-widget elementor-widget-image"
                        data-e-type="widget"
                        data-element_type="widget"
                        data-id="4ef653ea"
                        data-widget_type="image.default"
                      >
                        <div className="elementor-widget-container">
                          <Link href={homeHref}>
                            <img
                              alt="One Chauffeur"
                              className="attachment-full size-full wp-image-665"
                              height="140"
                              sizes="(max-width: 1000px) 100vw, 1000px"
                              src="/images/logo-one-chauffeur.png"
                              width="1000"
                            />
                          </Link>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-15957718 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor"
                        data-e-type="widget"
                        data-element_type="widget"
                        data-id="15957718"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          {isEn ? (
                            <p>
                              Your private driver in Paris and the Île-de-France region for all your transfers
                              (airports, train stations, or within the city), business trips, long-distance journeys,
                              hourly disposal and city tours.
                            </p>
                          ) : (
                            <p>
                              Votre chauffeur privé à Paris et en Île-de-France pour tous vos transferts (aéroports,
                              gares ou en ville) déplacements professionnels, trajets longues distances, mises à
                              disposition, visites touristiques.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-63a3a415"
                    data-e-type="column"
                    data-element_type="column"
                    data-id="63a3a415"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-2db76102 elementor-widget elementor-widget-heading"
                        data-e-type="widget"
                        data-element_type="widget"
                        data-id="2db76102"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">
                            {isEn ? "Quick Links" : "Liens rapides"}
                          </h3>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-407997b3 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-e-type="widget"
                        data-element_type="widget"
                        data-id="407997b3"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <Link href={servicesHref}>
                                <span className="elementor-icon-list-text">Services</span>
                              </Link>
                            </li>
                            <li className="elementor-icon-list-item">
                              <Link href={flotteHref}>
                                <span className="elementor-icon-list-text">{isEn ? "Fleet" : "Flotte"}</span>
                              </Link>
                            </li>
                            <li className="elementor-icon-list-item">
                              <Link href={contactHref}>
                                <span className="elementor-icon-list-text">Contact</span>
                              </Link>
                            </li>
                            <li className="elementor-icon-list-item">
                              <Link href={reservationHref}>
                                <span className="elementor-icon-list-text">{isEn ? "Booking" : "Réservation"}</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-38926f36"
                    data-e-type="column"
                    data-element_type="column"
                    data-id="38926f36"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-67cc8b6a elementor-widget elementor-widget-heading"
                        data-e-type="widget"
                        data-element_type="widget"
                        data-id="67cc8b6a"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">
                            {isEn ? "Legal" : "Légal"}
                          </h3>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-732f3619 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-e-type="widget"
                        data-element_type="widget"
                        data-id="732f3619"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <Link href={cgvHref}>
                                <span className="elementor-icon-list-text">
                                  {isEn ? "Terms of Sales" : "Conditions générales de vente"}
                                </span>
                              </Link>
                            </li>
                            <li className="elementor-icon-list-item">
                              <Link href={privacyHref}>
                                <span className="elementor-icon-list-text">
                                  {isEn ? "Privacy Policy" : "Politique de confidentialité"}
                                </span>
                              </Link>
                            </li>
                            <li className="elementor-icon-list-item">
                              <Link href={mentionsHref}>
                                <span className="elementor-icon-list-text">
                                  {isEn ? "Legal Notes" : "Mentions légales"}
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-eb05fbb"
                    data-e-type="column"
                    data-element_type="column"
                    data-id="eb05fbb"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-4f5a4f5d elementor-widget elementor-widget-heading"
                        data-e-type="widget"
                        data-element_type="widget"
                        data-id="4f5a4f5d"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">
                            {isEn ? "Phone" : "Téléphone"}
                          </h3>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-946000c elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-e-type="widget"
                        data-element_type="widget"
                        data-id="946000c"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <a href="tel:+33667520677">
                                <span className="elementor-icon-list-text">+33 (0)6 67 52 06 77</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-5b847aa5 elementor-widget elementor-widget-heading"
                        data-e-type="widget"
                        data-element_type="widget"
                        data-id="5b847aa5"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">E-mail</h3>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-6633c884 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-e-type="widget"
                        data-element_type="widget"
                        data-id="6633c884"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <a href="mailto:contact@onechauffeur.fr">
                                <span className="elementor-icon-list-text">contact@onechauffeur.fr</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div
                className="elementor-element elementor-element-1f1274aa elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                data-e-type="widget"
                data-element_type="widget"
                data-id="1f1274aa"
                data-widget_type="divider.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator"></span>
                  </div>
                </div>
              </div>
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-31b1ef94 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-e-type="section"
                data-element_type="section"
                data-id="31b1ef94"
              >
                <div className="elementor-container elementor-column-gap-no">
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6c9b8bd8"
                    data-e-type="column"
                    data-element_type="column"
                    data-id="6c9b8bd8"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-7f30323b elementor-widget elementor-widget-text-editor"
                        data-e-type="widget"
                        data-element_type="widget"
                        data-id="7f30323b"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          {isEn ? (
                            <p>
                              All rights reserved - One Chauffeur
                              <br />
                              31 boulevard Troussel – 78700 Conflans-Sainte-Honorine
                            </p>
                          ) : (
                            <p>
                              © Tous droits réservés · One Chauffeur
                              <br />
                              31 boulevard Troussel – 78700 Conflans-Sainte-Honorine
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8445cde"
                    data-e-type="column"
                    data-element_type="column"
                    data-id="8445cde"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-708414d elementor-widget__width-auto elementor-widget elementor-widget-shortcode"
                        data-e-type="widget"
                        data-element_type="widget"
                        data-id="708414d"
                        data-widget_type="shortcode.default"
                        id="gp"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-shortcode">
                            <div className="trp_language_switcher_shortcode">
                              <div
                                className="trp-language-switcher trp-language-switcher-container"
                                data-no-translation=""
                              >
                                {isEn ? (
                                  <>
                                    <div className="trp-ls-shortcode-current-language">
                                      <a
                                        className="trp-ls-shortcode-disabled-language trp-ls-disabled-language"
                                        href="#"
                                        title="English"
                                      >
                                        <img
                                          alt="en_US"
                                          className="trp-flag-image"
                                          height="12"
                                          src="/images/en_US.png"
                                          title="English"
                                          width="18"
                                        />{" "}
                                        EN
                                      </a>
                                    </div>
                                    <div className="trp-ls-shortcode-language">
                                      <Link href={targetLangUrl} title="French">
                                        <img
                                          alt="fr_FR"
                                          className="trp-flag-image"
                                          height="12"
                                          src="/images/fr_FR.png"
                                          title="French"
                                          width="18"
                                        />{" "}
                                        FR
                                      </Link>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="trp-ls-shortcode-current-language">
                                      <a
                                        className="trp-ls-shortcode-disabled-language trp-ls-disabled-language"
                                        href="#"
                                        title="French"
                                      >
                                        <img
                                          alt="fr_FR"
                                          className="trp-flag-image"
                                          height="12"
                                          src="/images/fr_FR.png"
                                          title="French"
                                          width="18"
                                        />{" "}
                                        FR
                                      </a>
                                    </div>
                                    <div className="trp-ls-shortcode-language">
                                      <Link href={targetLangUrl} title="English">
                                        <img
                                          alt="en_US"
                                          className="trp-flag-image"
                                          height="12"
                                          src="/images/en_US.png"
                                          title="English"
                                          width="18"
                                        />{" "}
                                        EN
                                      </Link>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
