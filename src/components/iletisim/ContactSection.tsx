"use client";

import { useState } from "react";
import { SITE_CONFIG, whatsappLink } from "@/lib/constants";
import Icon from "../Icon";

export default function ContactSection() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const subject = encodeURIComponent(
            `${formData.get("subject")} - ${formData.get("name")}`
        );
        const body = encodeURIComponent(
            `Ad Soyad: ${formData.get("name")}\nE-posta: ${formData.get("email")}\nKonu: ${formData.get("subject")}\n\nMesaj:\n${formData.get("message")}`
        );
        window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <section className="relative py-section-gap bg-surface-container-low overflow-hidden">
            <div className="absolute inset-0 industrial-overlay pointer-events-none" />
            <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
                    {/* Contact Info Column */}
                    <div className="lg:col-span-4 space-y-stack-lg">
                        <div className="bg-surface p-stack-lg border border-outline-variant shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
                            <h3 className="text-h3 font-semibold mb-stack-lg text-on-surface">
                                Merkez Ofis
                            </h3>

                            <div className="space-y-stack-md">
                                <div className="flex gap-stack-md">
                                    <Icon name="location_on" className="text-primary-container shrink-0" />
                                    <div>
                                        <p className="text-label-caps uppercase text-secondary mb-1">Adres</p>
                                        <p className="text-on-surface text-body-md">{SITE_CONFIG.address}</p>
                                    </div>
                                </div>

                                <div className="flex gap-stack-md">
                                    <Icon name="call" className="text-primary-container shrink-0" />
                                    <div>
                                        <p className="text-label-caps uppercase text-secondary mb-1">Telefon</p>
                                        <p className="text-on-surface text-body-md">{SITE_CONFIG.phone}</p>
                                    </div>
                                </div>

                                <div className="flex gap-stack-md">
                                    <Icon name="mail" className="text-primary-container shrink-0" />
                                    <div>
                                        <p className="text-label-caps uppercase text-secondary mb-1">E-Posta</p>

                                        <a href={`mailto:${SITE_CONFIG.email}`}
                                            className="text-on-surface text-body-md hover:text-primary-container break-all"
                                        >
                                            {SITE_CONFIG.email}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-stack-lg pt-stack-lg border-t border-outline-variant">
                                <p className="text-label-caps uppercase text-secondary mb-stack-md">
                                    Bizi Takip Edin
                                </p>
                                <div className="flex gap-stack-md">

                                    <a href="#"
                                        aria-label="Sosyal medya"
                                        className="w-10 h-10 flex items-center justify-center bg-on-secondary-fixed text-on-primary hover:bg-primary-container transition-colors"
                                    >
                                        <Icon name="share" />
                                    </a>

                                    <a href="#"
                                        aria-label="Facebook"
                                        className="w-10 h-10 flex items-center justify-center bg-on-secondary-fixed text-on-primary hover:bg-primary-container transition-colors"
                                    >
                                        <Icon name="groups" />
                                    </a>

                                    <a href="#"
                                        aria-label="Reklamlar"
                                        className="w-10 h-10 flex items-center justify-center bg-on-secondary-fixed text-on-primary hover:bg-primary-container transition-colors"
                                    >
                                        <Icon name="ads_click" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}

                        <a href={whatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between bg-[#25D366] text-white p-gutter text-button uppercase tracking-widest hover:brightness-95 transition-all"
                        >
                            <span className="flex items-center gap-stack-md">
                                <Icon name="chat" />
                                WhatsApp Destek Hattı
                            </span>
                            <Icon name="arrow_forward" />
                        </a>

                        {/* Yerli Üretim Badge */}
                        <div className="border border-outline-variant p-stack-md flex items-center gap-stack-md bg-white">
                            <div className="w-12 h-12 bg-primary-container flex items-center justify-center text-on-primary font-bold text-xs leading-none text-center p-2">
                                YERLİ<br />ÜRETİM
                            </div>
                            <p className="text-[10px] leading-tight text-secondary uppercase font-bold tracking-wide">
                                TÜM ÜRÜNLERİMİZ TÜRKİYE&apos;DEKİ TESİSLERİMİZDE ULUSLARARASI STANDARTLARDA ÜRETİLMEKTEDİR.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="lg:col-span-8">
                        <div className="bg-white p-stack-lg border border-outline-variant shadow-[8px_8px_0px_rgba(175,16,26,0.1)]">
                            <h3 className="text-h3 font-semibold mb-stack-lg text-on-surface">
                                Teklif ve Mesaj Formu
                            </h3>

                            {submitted ? (
                                <div className="bg-primary-fixed border-l-4 border-primary-container p-5 text-on-primary-fixed">
                                    <p className="font-bold mb-1">Mesajınız iletildi.</p>
                                    <p className="text-sm">E-posta uygulamanız üzerinden gönderim tamamlanacaktır.</p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg"
                                >
                                    <div className="space-y-1">
                                        <label htmlFor="name" className="text-label-caps uppercase text-on-surface block">
                                            AD SOYAD
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="Örn: Ahmet Yılmaz"
                                            className="w-full border border-on-secondary-fixed p-3 focus:border-primary-container outline-none transition-all placeholder:text-secondary-fixed-dim text-on-surface"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="email" className="text-label-caps uppercase text-on-surface block">
                                            E-POSTA ADRESİ
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="orn@firma.com"
                                            className="w-full border border-on-secondary-fixed p-3 focus:border-primary-container outline-none transition-all placeholder:text-secondary-fixed-dim text-on-surface"
                                        />
                                    </div>

                                    <div className="md:col-span-2 space-y-1">
                                        <label htmlFor="subject" className="text-label-caps uppercase text-on-surface block">
                                            KONU
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            className="w-full border border-on-secondary-fixed p-3 focus:border-primary-container outline-none transition-all appearance-none bg-white text-on-surface"
                                        >
                                            <option>Teklif Talebi</option>
                                            <option>Diğer</option>
                                        </select>
                                    </div>

                                    <div className="md:col-span-2 space-y-1">
                                        <label htmlFor="message" className="text-label-caps uppercase text-on-surface block">
                                            MESAJINIZ
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            required
                                            placeholder="Mesajınızı buraya yazınız..."
                                            className="w-full border border-on-secondary-fixed p-3 focus:border-primary-container outline-none transition-all placeholder:text-secondary-fixed-dim resize-none text-on-surface"
                                        />
                                    </div>

                                    <div className="md:col-span-2 flex items-start gap-stack-sm mb-stack-md">
                                        <input
                                            id="kvkk"
                                            name="kvkk"
                                            type="checkbox"
                                            required
                                            className="mt-1 border-on-secondary-fixed text-primary-container focus:ring-primary-container"
                                        />
                                        <label htmlFor="kvkk" className="text-[12px] text-secondary leading-relaxed">
                                            KVKK metnini okudum ve kabul ediyorum. Verilerinizin işlenmesi hakkında detaylı bilgi için Gizlilik Politikamızı inceleyebilirsiniz.
                                        </label>
                                    </div>

                                    <div className="md:col-span-2">
                                        <button
                                            type="submit"
                                            className="w-full bg-primary-container text-on-primary py-4 text-button uppercase tracking-widest hover:bg-primary transition-all duration-300 flex items-center justify-center gap-stack-md"
                                        >
                                            MESAJI GÖNDER
                                            <Icon name="send" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}