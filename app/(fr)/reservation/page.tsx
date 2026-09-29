import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("reservation", "fr");

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReservationForm from "@/components/ReservationForm";

export default function ReservationPage() {
  return (
    <div className="onechauffeur-container min-h-screen bg-[#0b0d17] text-white">
      <Header lang="fr" page="reservation" />
      <main className="site-main post-116 page type-page status-publish hentry" id="content">
        <div className="page-content">
          <div className="elementor elementor-116" data-elementor-id="116" data-elementor-post-type="page" data-elementor-type="wp-page">
            {/* Hero Header */}
            <section className="elementor-section elementor-top-section elementor-element elementor-element-1577f911 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="1577f911">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-58df5b4d" data-e-type="column" data-element_type="column" data-id="58df5b4d" data-settings='{"background_background":"classic"}'>
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-background-overlay"></div>
                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-4711a256 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="4711a256">
                      <div className="elementor-container elementor-column-gap-no">
                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-35ffe32a" data-e-type="column" data-element_type="column" data-id="35ffe32a">
                          <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-39676c81 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="39676c81" data-widget_type="heading.default">
                              <div className="elementor-widget-container">
                                <h1 className="elementor-heading-title elementor-size-default">Réservez votre chauffeur privé en ligne</h1>
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

            {/* Formulaire de réservation */}
            <section style={{ maxWidth: "860px", margin: "40px auto 80px", padding: "0 20px", width: "100%", boxSizing: "border-box" }}>
              <ReservationForm lang="fr" />
            </section>
          </div>
        </div>
      </main>
      <Footer lang="fr" page="reservation" />
    </div>
  );
}
