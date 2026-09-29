import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMessages } from "@/lib/i18n";
import { pagePath, type Lang } from "@/lib/seo";

export default function FleetPage({ lang }: { lang: Lang }) {
  const { fleet: t, shared: s } = getMessages(lang);

  return (
    <div className="onechauffeur-container min-h-screen bg-[#0b0d17] text-white">
      <Header lang={lang} page="flotte" />
      <main className="site-main post-110 page type-page status-publish hentry" id="content">
<div className="page-content">
<div className="elementor elementor-110" data-elementor-id="110" data-elementor-post-type="page" data-elementor-type="wp-page">
<section className="elementor-section elementor-top-section elementor-element elementor-element-22d39bd elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="22d39bd">
<div className="elementor-container elementor-column-gap-default">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-36bc74a" data-e-type="column" data-element_type="column" data-id="36bc74a" data-settings='{"background_background":"classic"}'>
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-background-overlay"></div>
<section className="elementor-section elementor-inner-section elementor-element elementor-element-41d1cca elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="41d1cca">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-15cf86c" data-e-type="column" data-element_type="column" data-id="15cf86c">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-9342668 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="9342668" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h1 className="elementor-heading-title elementor-size-default">{t.ourFleet}</h1> </div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</section>
<section className="elementor-section elementor-top-section elementor-element elementor-element-249449e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="249449e" id="berline">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a08711a" data-e-type="column" data-element_type="column" data-id="a08711a">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-984d623 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="984d623" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">{s.sedan}{" "}</h2> </div>
</div>
<div className="elementor-element elementor-element-3216101 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="3216101" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>{t.aStylishSedanCombining}</p> </div>
</div>
<section className="elementor-section elementor-inner-section elementor-element elementor-element-f5420a2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="f5420a2">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-49694a7" data-e-type="column" data-element_type="column" data-id="49694a7">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-b7a12a1 jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="b7a12a1" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_2_6aae8c55a39a7"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-User-light"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{" "}{s.upTo3Passengers}</p>
</div>
</div></div> </div>
</div>
<div className="elementor-element elementor-element-a8d72aa jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="a8d72aa" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_3_6aae8c55a3d71"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-suitcase-solid"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{s.upTo3Bags}</p>
</div>
</div></div> </div>
</div>
<div className="elementor-element elementor-element-8243a13 jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="8243a13" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_4_6aae8c55a4155"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-baby-solid"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{t.childSeats}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-1e3dce6" data-e-type="column" data-element_type="column" data-id="1e3dce6">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-f92afcc jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="f92afcc" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_5_6aae8c55a4523"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-wifi-light"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{t.wiFi}</p>
</div>
</div></div> </div>
</div>
<div className="elementor-element elementor-element-f8fb563 jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="f8fb563" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_6_6aae8c55a4861"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><svg aria-hidden="true" className="e-font-icon-svg e-fas-water" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z" /></svg></div></div><div className="icon-box icon-box-body">
<p className="title">{t.refreshments}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8b6946d" data-e-type="column" data-element_type="column" data-id="8b6946d">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-eaab21f elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="eaab21f" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-220" height="340" sizes="(max-width: 439px) 100vw, 439px" src="/images/tesla-model-3.webp" width="439" /> </div>
</div>
</div>
</div>
</div>
</section>
<section className="elementor-section elementor-top-section elementor-element elementor-element-ce28998 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="ce28998" id="business">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0aabc54" data-e-type="column" data-element_type="column" data-id="0aabc54">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-2dfbb3d elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="2dfbb3d" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-1136" height="340" sizes="(max-width: 439px) 100vw, 439px" src="/images/mercedes-classe-e.webp" width="439" /> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2c2ca21" data-e-type="column" data-element_type="column" data-id="2c2ca21">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-1a12063 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="1a12063" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">{s.businessSedan}</h2> </div>
</div>
<div className="elementor-element elementor-element-c29821e elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="c29821e" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>{t.moreComfortMoreElegance}</p> </div>
</div>
<section className="elementor-section elementor-inner-section elementor-element elementor-element-fe5b683 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="fe5b683">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ec6743a" data-e-type="column" data-element_type="column" data-id="ec6743a">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-d3585f8 jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="d3585f8" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_7_6aae8c55a4d82"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-User-light"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{" "}{s.upTo3Passengers}</p>
</div>
</div></div> </div>
</div>
<div className="elementor-element elementor-element-7e0ad68 jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="7e0ad68" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_8_6aae8c55a50b3"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-suitcase-solid"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{s.upTo3Bags}</p>
</div>
</div></div> </div>
</div>
<div className="elementor-element elementor-element-cfe200c jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="cfe200c" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_9_6aae8c55a53c8"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-baby-solid"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{t.childSeats}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d25124c" data-e-type="column" data-element_type="column" data-id="d25124c">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-5e43c08 jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="5e43c08" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_10_6aae8c55a56d6"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-wifi-light"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{t.wiFi}</p>
</div>
</div></div> </div>
</div>
<div className="elementor-element elementor-element-76b48df jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="76b48df" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_11_6aae8c55a59f3"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><svg aria-hidden="true" className="e-font-icon-svg e-fas-water" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z" /></svg></div></div><div className="icon-box icon-box-body">
<p className="title">{t.refreshments}</p>
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
<section className="elementor-section elementor-top-section elementor-element elementor-element-a9a28a1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="a9a28a1" id="luxe">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-438be46" data-e-type="column" data-element_type="column" data-id="438be46">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-c035065 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="c035065" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">{s.luxurySedan}</h2> </div>
</div>
<div className="elementor-element elementor-element-23b3db4 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="23b3db4" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>{t.toGetIntoThe}</p> </div>
</div>
<section className="elementor-section elementor-inner-section elementor-element elementor-element-0f769af elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="0f769af">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2193069" data-e-type="column" data-element_type="column" data-id="2193069">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-4a15d2c jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="4a15d2c" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_12_6aae8c55a5ec7"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-User-light"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{" "}{s.upTo3Passengers}</p>
</div>
</div></div> </div>
</div>
<div className="elementor-element elementor-element-1c17eee jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="1c17eee" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_13_6aae8c55a61dd"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-suitcase-solid"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{s.upTo3Bags}</p>
</div>
</div></div> </div>
</div>
<div className="elementor-element elementor-element-6ba1b47 jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="6ba1b47" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_14_6aae8c55a64e0"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-baby-solid"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{t.childSeats}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-37152e8" data-e-type="column" data-element_type="column" data-id="37152e8">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-160f569 jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="160f569" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_15_6aae8c55a67e3"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-wifi-light"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{t.wiFi}</p>
</div>
</div></div> </div>
</div>
<div className="elementor-element elementor-element-60df488 jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="60df488" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_16_6aae8c55a6b26"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><svg aria-hidden="true" className="e-font-icon-svg e-fas-water" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z" /></svg></div></div><div className="icon-box icon-box-body">
<p className="title">{t.refreshments}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e6ba2a6" data-e-type="column" data-element_type="column" data-id="e6ba2a6">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-af26357 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="af26357" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-219" height="340" sizes="(max-width: 439px) 100vw, 439px" src="/images/mercedes-classe-s.webp" width="439" /> </div>
</div>
</div>
</div>
</div>
</section>
<section className="elementor-section elementor-top-section elementor-element elementor-element-c5a0ae2 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="c5a0ae2" id="minivan">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c7dd150" data-e-type="column" data-element_type="column" data-id="c7dd150">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-321f786 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="321f786" data-widget_type="image.default">
<div className="elementor-widget-container">
<img alt="" className="attachment-full size-full wp-image-221" height="340" sizes="(max-width: 439px) 100vw, 439px" src="/images/mercedes-classe-v.webp" width="439" /> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-75f4d30" data-e-type="column" data-element_type="column" data-id="75f4d30">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-5060b62 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="5060b62" data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">{s.minivan}</h2> </div>
</div>
<div className="elementor-element elementor-element-87f6674 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="87f6674" data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<p>{t.theFamousMercedesV}</p> </div>
</div>
<section className="elementor-section elementor-inner-section elementor-element elementor-element-c47eb82 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="c47eb82">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4dc8de1" data-e-type="column" data-element_type="column" data-id="4dc8de1">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-61ade7d jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="61ade7d" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_17_6aae8c55a7037"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-User-light"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{" "}{s.upTo7Passengers}</p>
</div>
</div></div> </div>
</div>
<div className="elementor-element elementor-element-bfd3cf2 jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="bfd3cf2" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_18_6aae8c55a7361"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-suitcase-solid"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{s.upTo7Bags}</p>
</div>
</div></div> </div>
</div>
<div className="elementor-element elementor-element-df76620 jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="df76620" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_19_6aae8c55a7663"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-baby-solid"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{t.childSeats}</p>
</div>
</div></div> </div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7f38443" data-e-type="column" data-element_type="column" data-id="7f38443">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-17ebc36 jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="17ebc36" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_20_6aae8c55a795f"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><i aria-hidden="true" className="jki jki-wifi-light"></i></div></div><div className="icon-box icon-box-body">
<p className="title">{t.wiFi}</p>
</div>
</div></div> </div>
</div>
<div className="elementor-element elementor-element-4098685 jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box" data-e-type="widget" data-element_type="widget" data-id="4098685" data-settings='{"_animation":"fadeInUp","_animation_delay":100}' data-widget_type="jkit_icon_box.default">
<div className="elementor-widget-container">
<div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_110_21_6aae8c55a7c58"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-"><div className="icon style-color"><svg aria-hidden="true" className="e-font-icon-svg e-fas-water" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z" /></svg></div></div><div className="icon-box icon-box-body">
<p className="title">{t.refreshments}</p>
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
<section className="elementor-section elementor-top-section elementor-element elementor-element-223b16f elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="223b16f">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-176d0f2" data-e-type="column" data-element_type="column" data-id="176d0f2">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-bdb8bd1 elementor-widget elementor-widget-template" data-e-type="widget" data-element_type="widget" data-id="bdb8bd1" data-widget_type="template.default">
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
<div className="elementor-element elementor-element-37c3103 e-flex e-con-boxed e-con e-parent" data-core-v316-plus="true" data-element_type="container" data-id="37c3103" data-settings='{"content_width":"boxed"}'><div className="e-con-inner"><div className="elementor-element elementor-element-980bf8e elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="980bf8e" data-widget_type="text-editor.default"><div className="elementor-widget-container" style={{ "textAlign": "center" }}>{s.toBookYourCar}</div></div></div></div> </div>
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
<section className="elementor-section elementor-top-section elementor-element elementor-element-68ea9b2 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="68ea9b2">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-010b178" data-e-type="column" data-element_type="column" data-id="010b178">
<div className="elementor-widget-wrap elementor-element-populated">
<div className="elementor-element elementor-element-d638377 elementor-widget elementor-widget-template" data-e-type="widget" data-element_type="widget" data-id="d638377" data-widget_type="template.default">
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
      <Footer lang={lang} page="flotte" />
    </div>
  );
}
