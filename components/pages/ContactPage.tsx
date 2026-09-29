import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { getMessages } from "@/lib/i18n";
import { type Lang } from "@/lib/seo";

export default function ContactPage({ lang }: { lang: Lang }) {
  const { contact: t } = getMessages(lang);

  return (
    <div>
      <Header lang={lang} page="contact" />
      <main className="site-main post-112 page type-page status-publish hentry" id="content">
<div className="page-content">
<div className="elementor elementor-112" data-elementor-id="112" data-elementor-post-type="page" data-elementor-type="wp-page">
<section className="elementor-section elementor-top-section elementor-element elementor-element-73083ad elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="73083ad">
<div className="elementor-container elementor-column-gap-default">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b1c6fba" data-e-type="column" data-element_type="column" data-id="b1c6fba" data-settings='{"background_background":"classic"}'>
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-background-overlay"></div>
<section className="elementor-section elementor-inner-section elementor-element elementor-element-b5705ae elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="b5705ae">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-cf37339" data-e-type="column" data-element_type="column" data-id="cf37339">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-320d1d6 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="320d1d6" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h1 className="elementor-heading-title elementor-size-default">{t.contact}</h1> </div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</section>
<section className="elementor-section elementor-top-section elementor-element elementor-element-3a71aae7 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="3a71aae7">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-295df7e1" data-e-type="column" data-element_type="column" data-id="295df7e1">
<div className="elementor-widget-wrap elementor-element-populated">
<section className="elementor-section elementor-inner-section elementor-element elementor-element-52125b6f elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="52125b6f">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-47dcb7cb" data-e-type="column" data-element_type="column" data-id="47dcb7cb">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-72ed004f jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="72ed004f" data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-phone-solid"></i></div></div><div className="icon-box icon-box-body">
<h3 className="title">{t.phone}</h3><p className="icon-box-description"><a href="tel:+33667520677">+33 (0)6 67 52 06 77</a></p>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ca9e61a" data-e-type="column" data-element_type="column" data-id="ca9e61a">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-256b5bfb jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="256b5bfb" data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><svg aria-hidden="true" viewBox="0 0 448 512" width="0.77em" height="0.88em" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg></div></div><div className="icon-box icon-box-body">
<h3 className="title">{t.whatsapp}</h3><p className="icon-box-description"><a href="https://wa.me/33667520677" target="_blank" rel="noopener noreferrer">+33 (0)6 67 52 06 77</a></p>
</div>
</div></div> </div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-31654c54" data-e-type="column" data-element_type="column" data-id="31654c54" data-settings='{"background_background":"classic"}'>
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-4dec8b90 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="4dec8b90" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">{t.leaveAMessageHere}</h3> </div>
</div>
<div className="elementor-element elementor-element-43d6ca9 elementor-button-align-stretch elementor-widget elementor-widget-form" data-e-type="widget" data-element_type="widget" data-id="43d6ca9" data-settings='{"step_next_label":"Suivant","step_previous_label":"Pr\u00e9c\u00e9dent","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}' data-widget_type="form.default">
<div className="elementor-widget-container">
<ContactForm lang={lang} />
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
      <Footer lang={lang} page="contact" />
    </div>
  );
}
