"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("İletişim Talebi");
    const body = encodeURIComponent(`E-posta: ${email}\n\nMesaj:\n`);
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-section-gap bg-surface-container">
      <div className="max-w-4xl mx-auto px-gutter text-center space-y-stack-md">
        <span className="text-label-caps text-primary-container uppercase">
          Bize Ulaşın
        </span>
        <h2 className="text-h2 font-bold text-on-surface">
          Projeniz için En İyi Çözümü Sunalım
        </h2>
        <p className="text-body-md text-secondary-container max-w-2xl mx-auto">
          Büyük ölçekli projeler, özel üretim talepleri ve bayilik başvuruları için
          profesyonel ekibimiz size destek vermeye hazır.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-stack-sm"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="E-posta adresiniz"
            className="bg-white border-2 border-outline-variant px-6 py-3 sm:min-w-[300px] focus:border-primary-container outline-none transition-all text-on-surface"
          />
          <button
            type="submit"
            className="bg-primary-container text-on-primary text-button uppercase px-8 py-4 hover:bg-primary transition-all"
          >
            İletişime Geçin
          </button>
        </form>
      </div>
    </section>
  );
}
