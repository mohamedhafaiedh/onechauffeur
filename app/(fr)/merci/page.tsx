import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("merci", "fr", { noindex: true });

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Phone, Mail, ArrowLeft } from "lucide-react";

export default function MerciPage() {
  return (
    <div className="onechauffeur-container min-h-screen bg-[#0b0d17] text-white flex flex-col justify-between">
      <Header lang="fr" page="merci" />

      <main className="flex-1 flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Ambient gold glow */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #EBBB60 0%, transparent 70%)", top: "20%", left: "50%", transform: "translateX(-50%)" }}
        />

        <div className="relative z-10 max-w-xl w-full bg-[#121526]/90 border border-[#EBBB60]/30 rounded-2xl p-8 sm:p-12 text-center shadow-2xl backdrop-blur-md">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#EBBB60]/10 border border-[#EBBB60]/40 mb-6 text-[#EBBB60]">
            <CheckCircle2 size={44} strokeWidth={2.2} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-white mb-4 font-serif">
            Merci pour votre demande
          </h1>

          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
            Votre message a bien été transmis à notre équipe. Un chauffeur privé One Chauffeur traitera votre demande et vous confirmera les détails dans les plus brefs délais.
          </p>

          {/* Quick contact box */}
          <div className="bg-[#191d32]/80 border border-slate-700/60 rounded-xl p-5 mb-8 text-left space-y-3">
            <p className="text-xs uppercase tracking-wider text-[#EBBB60] font-semibold">Une urgence ou un départ immédiat ?</p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-slate-200">
              <a href="tel:+33667520677" className="flex items-center gap-2 hover:text-[#EBBB60] transition">
                <Phone size={16} className="text-[#EBBB60]" />
                <span>+33 (0)6 67 52 06 77</span>
              </a>
              <a href="mailto:contact@onechauffeur.fr" className="flex items-center gap-2 hover:text-[#EBBB60] transition">
                <Mail size={16} className="text-[#EBBB60]" />
                <span>contact@onechauffeur.fr</span>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[#0b0d17] bg-gradient-to-r from-[#EBBB60] to-[#d49f3e] hover:shadow-[0_0_20px_rgba(235,187,96,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <ArrowLeft size={18} />
            <span>Retour à l&apos;accueil</span>
          </Link>
        </div>
      </main>

      <Footer lang="fr" page="merci" />
    </div>
  );
}
