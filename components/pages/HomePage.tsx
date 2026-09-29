import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMessages } from "@/lib/i18n";
import { pagePath, type Lang } from "@/lib/seo";

export default function HomePage({ lang }: { lang: Lang }) {
  const { home: t, shared: s } = getMessages(lang);

  return (
    <div>
      <Header lang={lang} page="" />
      <main className="site-main post-98 page type-page status-publish hentry" id="content">
<div className="page-content">
<div className="elementor elementor-98" data-elementor-id="98" data-elementor-post-type="page" data-elementor-type="wp-page">
<section className="elementor-section elementor-top-section elementor-element elementor-element-32a261f elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="32a261f">
<div className="elementor-container elementor-column-gap-default">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-592bb145" data-e-type="column" data-element_type="column" data-id="592bb145" data-settings='{"background_background":"classic"}'>
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-background-overlay"></div>
<section className="elementor-section elementor-inner-section elementor-element elementor-element-7b1eae03 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="7b1eae03">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1624d06c" data-e-type="column" data-element_type="column" data-id="1624d06c">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-6e05cc72 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="6e05cc72" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h1 className="elementor-heading-title elementor-size-default">{t.yourChauffeurDrivenCar}</h1> </div>
</div>
<div className="elementor-element elementor-element-4479f09c elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="4479f09c" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>{t.withOneChauffeurYou}</p> </div>
</div>
<div className="elementor-element elementor-element-36b13f64 elementor-align-left elementor-widget__width-auto btndec elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="36b13f64" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href={pagePath("reservation", lang)}>
<span className="elementor-button-content-wrapper">
<span className="elementor-button-text">{s.getQuoteBook}</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a5f7365" data-e-type="column" data-element_type="column" data-id="a5f7365">
<div className="elementor-widget-wrap">
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</section>
<section className="elementor-section elementor-top-section elementor-element elementor-element-2d66c82b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="2d66c82b" data-settings='{"background_background":"classic"}'>
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-531ca06" data-e-type="column" data-element_type="column" data-id="531ca06" data-settings='{"background_background":"classic"}'>
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-1e7022d elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="1e7022d" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">{t.ourValues}</h2> </div>
</div>
<section className="elementor-section elementor-inner-section elementor-element elementor-element-5a6dad1 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="5a6dad1">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-60ee791 " data-e-type="column" data-element_type="column" data-id="60ee791" data-settings='{"animation":"fadeInUp","animation_delay":100}'>
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-2dc75f6 jkit-equal-height-enable elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="2dc75f6" data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation- jeg_module_98_2_6aae20c7d80c7"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><svg aria-hidden="true" className="e-font-icon-svg e-fas-user-tie" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></svg></div></div><div className="icon-box icon-box-body">
<h3 className="title">{t.professionalismDiscretion}</h3><p className="icon-box-description">{t.youAreDrivenBy}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-ff16c85 " data-e-type="column" data-element_type="column" data-id="ff16c85" data-settings='{"animation":"fadeInUp","animation_delay":300}'>
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-8b262ab jkit-equal-height-enable elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="8b262ab" data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation- jeg_module_98_3_6aae20c7d852c"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-car-light"></i></div></div><div className="icon-box icon-box-body">
<h3 className="title">{t.comfortRespectForThe}</h3><p className="icon-box-description">{t.ourVehiclesAreSelected}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-68d0443 " data-e-type="column" data-element_type="column" data-id="68d0443" data-settings='{"animation":"fadeInUp","animation_delay":500}'>
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-6dd9c51 jkit-equal-height-enable elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="6dd9c51" data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation- jeg_module_98_4_6aae20c7d8902"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><svg aria-hidden="true" className="e-font-icon-svg e-far-calendar-check" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"></path></svg></div></div><div className="icon-box icon-box-body">
<h3 className="title">{t.availabilityAndEfficiency}</h3><p className="icon-box-description">{t.weAreAvailable24}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-8054530 " data-e-type="column" data-element_type="column" data-id="8054530" data-settings='{"animation":"fadeInUp","animation_delay":700}'>
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-c6e5dc5 jkit-equal-height-enable elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="c6e5dc5" data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation- jeg_module_98_5_6aae20c7d8da0"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><svg aria-hidden="true" className="e-font-icon-svg e-fas-stopwatch" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"></path></svg></div></div><div className="icon-box icon-box-body">
<h3 className="title">{t.punctuality}</h3><p className="icon-box-description">{t.punctualityIsANon}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</section>
<div className="elementor-element elementor-element-b05822a e-con-full e-flex e-con e-parent" data-e-type="container" data-element_type="container" data-id="b05822a">
<div className="elementor-element elementor-element-3b3f552 elementor-widget elementor-widget-template" data-e-type="widget" data-element_type="widget" data-id="3b3f552" data-widget_type="template.default">
<div className="elementor-widget-container">
<div className="elementor-template">
<div className="elementor elementor-753" data-elementor-id="753" data-elementor-post-type="elementor_library" data-elementor-type="section">
<section className="elementor-section elementor-top-section elementor-element elementor-element-3f79dcc8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="3f79dcc8">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7afa80b7" data-e-type="column" data-element_type="column" data-id="7afa80b7">
<div className="elementor-widget-wrap elementor-element-populated">
<section className="elementor-section elementor-inner-section elementor-element elementor-element-672b9624 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="672b9624">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-56f2324d" data-e-type="column" data-element_type="column" data-id="56f2324d">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-284d3f50 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="284d3f50" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">{s.ourServices}</h2> </div>
</div>
</div>
</div>
</div>
</section>
<section className="elementor-section elementor-inner-section elementor-element elementor-element-55954735 elementor-section-full_width elementor-section-height-default elementor-section-height-default " data-e-type="section" data-element_type="section" data-id="55954735" data-settings='{"animation":"fadeInUp"}'>
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-27f7212f" data-e-type="column" data-element_type="column" data-id="27f7212f">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-72d4fafe jkit-equal-height-enable elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="72d4fafe" data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation- jeg_module_98_6_6aae20c7dab39"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-plane-departure-solid"></i></div></div><div className="icon-box icon-box-body">
<h3 className="title">{s.transfers}</h3><p className="icon-box-description">{s.airportTransfersTrainStation}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6ea79b7" data-e-type="column" data-element_type="column" data-id="6ea79b7">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-26c14379 jkit-equal-height-enable elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="26c14379" data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation- jeg_module_98_7_6aae20c7daeb4"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-clock1-light"></i></div></div><div className="icon-box icon-box-body">
<h3 className="title">{s.carHourlyDisposal}</h3><p className="icon-box-description">{s.aVehicleWithDriver}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-283611f0 elementor-hidden-tablet elementor-hidden-mobile" data-e-type="column" data-element_type="column" data-id="283611f0">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-6a8f6c6a jkit-equal-height-enable elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="6a8f6c6a" data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation- jeg_module_98_8_6aae20c7db1fd"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-team2-light"></i></div></div><div className="icon-box icon-box-body">
<h3 className="title">{s.cityTours}</h3><p className="icon-box-description">{s.packagesToHelpYou}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
</div>
</section>
<section className="elementor-section elementor-inner-section elementor-element elementor-element-6f82254b elementor-section-full_width elementor-hidden-desktop elementor-section-height-default elementor-section-height-default " data-e-type="section" data-element_type="section" data-id="6f82254b" data-settings='{"animation":"fadeInUp","animation_delay":200}'>
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7531b868" data-e-type="column" data-element_type="column" data-id="7531b868">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-41165d8 jkit-equal-height-enable elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="41165d8" data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation- jeg_module_98_9_6aae20c7db524"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-team2-light"></i></div></div><div className="icon-box icon-box-body">
<h3 className="title">{s.cityTours}</h3><p className="icon-box-description">{s.packagesToHelpYou}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-36da4a9f" data-e-type="column" data-element_type="column" data-id="36da4a9f">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-5da3eb6d jkit-equal-height-enable elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="5da3eb6d" data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation- jeg_module_98_10_6aae20c7db8a1"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-package-line"></i></div></div><div className="icon-box icon-box-body">
<h3 className="title">{s.businessTrips}</h3><p className="icon-box-description">{s.forYourTransportNeeds}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
</div>
</section>
<section className="elementor-section elementor-inner-section elementor-element elementor-element-74954f9f elementor-section-full_width elementor-section-height-default elementor-section-height-default " data-e-type="section" data-element_type="section" data-id="74954f9f" data-settings='{"animation":"fadeInUp","animation_delay":200}'>
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5ec1e4a elementor-hidden-tablet elementor-hidden-mobile" data-e-type="column" data-element_type="column" data-id="5ec1e4a">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-3c771d30 jkit-equal-height-enable elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="3c771d30" data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation- jeg_module_98_11_6aae20c7dbbe5"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-package-line"></i></div></div><div className="icon-box icon-box-body">
<h3 className="title">{s.businessTrips}</h3><p className="icon-box-description">{s.forYourTransportNeeds}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-747dcb6f" data-e-type="column" data-element_type="column" data-id="747dcb6f">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-7c313723 jkit-equal-height-enable elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="7c313723" data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation- jeg_module_98_12_6aae20c7dbf0f"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-calendar-solid"></i></div></div><div className="icon-box icon-box-body">
<h3 className="title">{s.longDistances}</h3><p className="icon-box-description">{s.forLongDistanceJourneys}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-fb4519a" data-e-type="column" data-element_type="column" data-id="fb4519a">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-787adf89 jkit-equal-height-enable elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="787adf89" data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation- jeg_module_98_13_6aae20c7dc21f"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-user-tie-solid"></i></div></div><div className="icon-box icon-box-body">
<h3 className="title">{s.privateEvents}</h3><p className="icon-box-description">{s.aServiceAdaptedTo}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</section>
<div className="elementor-element elementor-element-8d81614 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="8d81614">
<div className="e-con-inner">
<div className="elementor-element elementor-element-24260e6 elementor-align-center btndec elementor-widget elementor-widget-global elementor-global-582 elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="24260e6" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href={pagePath("reservation", lang)}>
<span className="elementor-button-content-wrapper">
<span className="elementor-button-text">{s.getQuoteBook}</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<section className="elementor-section elementor-top-section elementor-element elementor-element-3d6d870 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="3d6d870">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-388e8ac6" data-e-type="column" data-element_type="column" data-id="388e8ac6">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-23affedf elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="23affedf" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">{t.anEnjoyableTransportExperience}</h2> </div>
</div>
<div className="elementor-element elementor-element-47f5c112 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="47f5c112" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
									{t.atOneChauffeurWe}{" "}</div>
</div>
<section className="elementor-section elementor-inner-section elementor-element elementor-element-6f18719a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="6f18719a">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-abb4704" data-e-type="column" data-element_type="column" data-id="abb4704">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-425b2483 jkit-equal-height-disable  elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="425b2483" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_98_14_6aae20c7dccc4"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-check-light"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{t.freeCancellationUpTo}</p>
</div>
</div></div> </div>
</div>
<div className="elementor-element elementor-element-5d91358f jkit-equal-height-disable  elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="5d91358f" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_98_15_6aae20c7dd000"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-check-light"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{t.flexibleAndTailorMade}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5bae2fc0" data-e-type="column" data-element_type="column" data-id="5bae2fc0">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-6ab3d12e jkit-equal-height-disable  elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="6ab3d12e" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_98_16_6aae20c7dd31a"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-check-light"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{t.onlineOrOnBoard}</p>
</div>
</div></div> </div>
</div>
<div className="elementor-element elementor-element-31b607ff jkit-equal-height-disable  elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="31b607ff" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_98_17_6aae20c7dd628"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-check-light"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{t.pricesFixedInAdvance}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6702839d" data-e-type="column" data-element_type="column" data-id="6702839d">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-3df8bc0c elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="3df8bc0c" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-904" height="415" sizes="(max-width: 413px) 100vw, 413px" src="/images/tesla-model-3-profil.webp" width="413" /> </div>
</div>
</div>
</div>
</div>
</section>
<section className="elementor-section elementor-top-section elementor-element elementor-element-34eafbd elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="34eafbd">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6646738" data-e-type="column" data-element_type="column" data-id="6646738">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-2b88389 elementor-widget elementor-widget-template" data-e-type="widget" data-element_type="widget" data-id="2b88389" data-widget_type="template.default">
<div className="elementor-widget-container">
<div className="elementor-template">
<div className="elementor elementor-612" data-elementor-id="612" data-elementor-post-type="elementor_library" data-elementor-type="section">
<section className="elementor-section elementor-top-section elementor-element elementor-element-3117b993 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="3117b993">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-30e1eef" data-e-type="column" data-element_type="column" data-id="30e1eef">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-5a2b8434 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="5a2b8434" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">{s.chooseTheCarYou}</h2> </div>
</div>
<div className="elementor-element elementor-element-35ab96ec elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="35ab96ec" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>{s.aLargeFleetOf}</p> </div>
</div>
<section className="elementor-section elementor-inner-section elementor-element elementor-element-787fb325 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="787fb325">
<div className="elementor-container elementor-column-gap-default">
<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-1d022a37 " data-e-type="column" data-element_type="column" data-id="1d022a37" data-settings='{"background_background":"classic","animation":"fadeInUp"}'>
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-3a108442 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="3a108442" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">{s.sedan}</h3> </div>
</div>
<div className="elementor-element elementor-element-10a8e23e elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="10a8e23e" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<i aria-hidden="true" className="jki jki-users-light"></i> </span>
<span className="elementor-icon-list-text">{s.upTo3Passengers}</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<i aria-hidden="true" className="jki jki-suitcase-solid"></i> </span>
<span className="elementor-icon-list-text">{s.upTo3Bags}</span>
</li>
</ul>
</div>
</div>
<div className="elementor-element elementor-element-649c4e82 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="649c4e82" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-220" height="340" sizes="(max-width: 439px) 100vw, 439px" src="/images/tesla-model-3.webp" width="439" /> </div>
</div>
<div className="elementor-element elementor-element-2c32e641 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="2c32e641" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href={`${pagePath("flotte", lang)}#berline`}>
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<i aria-hidden="true" className="jki jki-angle-right-solid"></i> </span>
<span className="elementor-button-text">{s.details}</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-7d26e4d6 " data-e-type="column" data-element_type="column" data-id="7d26e4d6" data-settings='{"background_background":"classic","animation":"fadeInUp","animation_delay":200}'>
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-175dff3 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="175dff3" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">{s.businessSedan}</h3> </div>
</div>
<div className="elementor-element elementor-element-914d0f0 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="914d0f0" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<i aria-hidden="true" className="jki jki-users-light"></i> </span>
<span className="elementor-icon-list-text">{s.upTo3Passengers}</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<i aria-hidden="true" className="jki jki-suitcase-solid"></i> </span>
<span className="elementor-icon-list-text">{s.upTo3Bags}</span>
</li>
</ul>
</div>
</div>
<div className="elementor-element elementor-element-6a862db0 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="6a862db0" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-1136" height="340" sizes="(max-width: 439px) 100vw, 439px" src="/images/mercedes-classe-e.webp" width="439" /> </div>
</div>
<div className="elementor-element elementor-element-75922c2c elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="75922c2c" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href={`${pagePath("flotte", lang)}#business`}>
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<i aria-hidden="true" className="jki jki-angle-right-solid"></i> </span>
<span className="elementor-button-text">{s.details}</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-62d42bce " data-e-type="column" data-element_type="column" data-id="62d42bce" data-settings='{"background_background":"classic","animation":"fadeInUp","animation_delay":400}'>
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-33031531 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="33031531" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">{s.luxurySedan}</h3> </div>
</div>
<div className="elementor-element elementor-element-447aadd4 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="447aadd4" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<i aria-hidden="true" className="jki jki-users-light"></i> </span>
<span className="elementor-icon-list-text">{s.upTo3Passengers}</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<i aria-hidden="true" className="jki jki-suitcase-solid"></i> </span>
<span className="elementor-icon-list-text">{s.upTo3Bags}</span>
</li>
</ul>
</div>
</div>
<div className="elementor-element elementor-element-12c43a6a elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="12c43a6a" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-219" height="340" sizes="(max-width: 439px) 100vw, 439px" src="/images/mercedes-classe-s.webp" width="439" /> </div>
</div>
<div className="elementor-element elementor-element-26e4ba67 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="26e4ba67" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href={`${pagePath("flotte", lang)}#luxe`}>
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<i aria-hidden="true" className="jki jki-angle-right-solid"></i> </span>
<span className="elementor-button-text">{s.details}</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-98c9cb7 " data-e-type="column" data-element_type="column" data-id="98c9cb7" data-settings='{"background_background":"classic","animation":"fadeInUp","animation_delay":200}'>
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-8047b24 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="8047b24" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">{s.minivan}</h3> </div>
</div>
<div className="elementor-element elementor-element-0b02f42 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="0b02f42" data-widget_type="icon-list.default">
<div className="elementor-widget-container">
<ul className="elementor-icon-list-items">
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<i aria-hidden="true" className="jki jki-users-light"></i> </span>
<span className="elementor-icon-list-text">{s.upTo7Passengers}</span>
</li>
<li className="elementor-icon-list-item">
<span className="elementor-icon-list-icon">
<i aria-hidden="true" className="jki jki-suitcase-solid"></i> </span>
<span className="elementor-icon-list-text">{s.upTo7Bags}</span>
</li>
</ul>
</div>
</div>
<div className="elementor-element elementor-element-d9aaaea elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="d9aaaea" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-221" height="340" sizes="(max-width: 439px) 100vw, 439px" src="/images/mercedes-classe-v.webp" width="439"/> </div>
</div>
<div className="elementor-element elementor-element-d258320 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="d258320" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href={`${pagePath("flotte", lang)}#minivan`}>
<span className="elementor-button-content-wrapper">
<span className="elementor-button-icon">
<i aria-hidden="true" className="jki jki-angle-right-solid"></i> </span>
<span className="elementor-button-text">{s.details}</span>
</span>
</a>
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
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="elementor-section elementor-top-section elementor-element elementor-element-18a0f360 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="18a0f360">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e22b51f" data-e-type="column" data-element_type="column" data-id="e22b51f">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-d11ee36 elementor-widget elementor-widget-template" data-e-type="widget" data-element_type="widget" data-id="d11ee36" data-widget_type="template.default">
<div className="elementor-widget-container">
<div className="elementor-template">
<div className="elementor elementor-586" data-elementor-id="586" data-elementor-post-type="elementor_library" data-elementor-type="section">
<section className="elementor-section elementor-top-section elementor-element elementor-element-1197299e elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="1197299e">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7ab2e7c2" data-e-type="column" data-element_type="column" data-id="7ab2e7c2" data-settings='{"background_background":"classic"}'>
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-background-overlay"></div>
<section className="elementor-section elementor-inner-section elementor-element elementor-element-7c697440 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="7c697440">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5da4e66" data-e-type="column" data-element_type="column" data-id="5da4e66">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-28f492b9 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="28f492b9" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">{s.simpleStepsToBook}{" "}</h2> </div>
</div>
<div className="elementor-element elementor-element-bfb7cf0 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="bfb7cf0" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-element elementor-element-37c3103 e-flex e-con-boxed e-con e-parent" data-core-v316-plus="true" data-element_type="container" data-id="37c3103" data-settings='{"content_width":"boxed"}'><div className="e-con-inner"><div className="elementor-element elementor-element-980bf8e elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="980bf8e" data-widget_type="text-editor.default"><div className="elementor-widget-container" style={{textAlign: 'center'}}>{s.toBookYourCar}</div></div></div></div> </div>
</div>
<div className="elementor-element elementor-element-163abd74 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="163abd74" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="" src="/images/icone-contact.png"/></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">{s.n1ContactUs}</h3><p className="elementor-image-box-description">{s.emailTelephoneContactForm}</p></div></div> </div>
</div>
<div className="elementor-element elementor-element-53dd77de elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="53dd77de" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="" src="/images/icone-livraison.png"/></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">{s.n2ConfirmYourBooking}</h3><p className="elementor-image-box-description">{s.tellUsAboutYour}</p></div></div> </div>
</div>
<div className="elementor-element elementor-element-133b0930 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="133b0930" data-widget_type="image-box.default">
<div className="elementor-widget-container">
<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img alt="" src="/images/icone-reservation.png"/></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">{s.n3YourDriverWill}</h3></div></div> </div>
</div>
<div className="elementor-element elementor-element-1347e8ae elementor-align-center btndec elementor-widget elementor-widget-global elementor-global-582 elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="1347e8ae" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href={pagePath("reservation", lang)}>
<span className="elementor-button-content-wrapper">
<span className="elementor-button-text">{s.getQuoteBook}</span>
</span>
</a>
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
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="elementor-section elementor-top-section elementor-element elementor-element-f15224e elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="f15224e">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5ca6b1c" data-e-type="column" data-element_type="column" data-id="5ca6b1c">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-41e17a0 elementor-widget elementor-widget-template" data-e-type="widget" data-element_type="widget" data-id="41e17a0" data-widget_type="template.default">
<div className="elementor-widget-container">
<div className="elementor-template">
<div className="elementor elementor-559" data-elementor-id="559" data-elementor-post-type="elementor_library" data-elementor-type="section">
<section className="elementor-section elementor-top-section elementor-element elementor-element-2008558d elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="2008558d">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2c49a855" data-e-type="column" data-element_type="column" data-id="2c49a855">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-6163ddef elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="6163ddef" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-905" height="2048" sizes="(max-width: 1317px) 100vw, 1317px" src="/images/tesla-model-3-calandre.webp" width="1317"/> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a77b92e" data-e-type="column" data-element_type="column" data-id="a77b92e">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-172443d2 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="172443d2" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">{s.aboutOneChauffeur}</h2> </div>
</div>
<div className="elementor-element elementor-element-697eb3a3 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="697eb3a3" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>{s.byOfferingATailor}</p><p>{s.theVehiclesWeProvide}</p> </div>
</div>
<div className="elementor-element elementor-element-dce0415 elementor-align-center btndec elementor-widget elementor-widget-global elementor-global-582 elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="dce0415" data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper">
<a className="elementor-button elementor-button-link elementor-size-sm" href={pagePath("reservation", lang)}>
<span className="elementor-button-content-wrapper">
<span className="elementor-button-text">{s.getQuoteBook}</span>
</span>
</a>
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
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
      <Footer lang={lang} page="" />
    </div>
  );
}
