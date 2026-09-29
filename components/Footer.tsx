"use client";

import React from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getMessages } from "@/lib/i18n";
import { pagePath, type Lang, type PageKey } from "@/lib/seo";

interface FooterProps {
  lang: Lang;
  page: PageKey;
}

export default function Footer({ lang, page }: FooterProps) {

  const t = getMessages(lang).footer;

  // Links
  const homeHref = pagePath("", lang);
  const servicesHref = pagePath("services", lang);
  const flotteHref = pagePath("flotte", lang);
  const contactHref = pagePath("contact", lang);
  const reservationHref = pagePath("reservation", lang);
  const cgvHref = pagePath("cgv", lang);
  const privacyHref = pagePath("politique-de-confidentialite", lang);
  const mentionsHref = pagePath("mentions-legales", lang);

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
                              src="/images/logo-one-chauffeur.webp"
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
                          <p>{t.tagline}</p>
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
                            {t.quickLinks}
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
                                <span className="elementor-icon-list-text">{t.services}</span>
                              </Link>
                            </li>
                            <li className="elementor-icon-list-item">
                              <Link href={flotteHref}>
                                <span className="elementor-icon-list-text">{t.fleet}</span>
                              </Link>
                            </li>
                            <li className="elementor-icon-list-item">
                              <Link href={contactHref}>
                                <span className="elementor-icon-list-text">{t.contact}</span>
                              </Link>
                            </li>
                            <li className="elementor-icon-list-item">
                              <Link href={reservationHref}>
                                <span className="elementor-icon-list-text">{t.booking}</span>
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
                            {t.legal}
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
                                  {t.termsOfSale}
                                </span>
                              </Link>
                            </li>
                            <li className="elementor-icon-list-item">
                              <Link href={privacyHref}>
                                <span className="elementor-icon-list-text">
                                  {t.privacyPolicy}
                                </span>
                              </Link>
                            </li>
                            <li className="elementor-icon-list-item">
                              <Link href={mentionsHref}>
                                <span className="elementor-icon-list-text">
                                  {t.legalNotice}
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
                            {t.phone}
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
                          <h3 className="elementor-heading-title elementor-size-default">WhatsApp</h3>
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
                              <a href="https://wa.me/33667520677" target="_blank" rel="noopener noreferrer">
                                <span className="elementor-icon-list-text">+33 (0)6 67 52 06 77</span>
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
                          <p>
                            {t.copyright}
                            <br />
                            31 boulevard Troussel – 78700 Conflans-Sainte-Honorine
                          </p>
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
                            <LanguageSwitcher lang={lang} page={page} placement="up" />
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
