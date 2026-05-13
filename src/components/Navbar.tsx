"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import Icon from "./Icon";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.15)] h-[72px]">
      <div className="max-w-[1280px] mx-auto px-gutter flex justify-between items-center h-full">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt={SITE_CONFIG.name}
            width={200}
            height={60}
            priority
            className="h-22 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-stack-lg">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className={`text-button uppercase tracking-wider text-black pb-1 transition-all duration-200 ease-in-out border-b-2 ${isActive(item.href)
                  ? "border-primary-container"
                  : "border-transparent  hover:border-primary-container"
                  } ${item.dropdown ? "inline-flex items-center gap-1" : ""}`}
              >
                {item.label}
                {item.dropdown && <Icon name="expand_more" size={16} />}
              </Link>

              {/* Dropdown */}
              {item.dropdown && (
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-on-primary border-t-2 border-primary-container shadow-[2px_4px_0_rgba(0,0,0,0.15)] min-w-[280px] py-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-5 py-3 text-body-md text-on-surface hover:bg-surface-container-low hover:text-primary-container border-l-2 border-transparent hover:border-primary-container transition-all"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-stack-md">

          <a href={SITE_CONFIG.pdfCatalog}
            download
            className="hidden lg:block bg-primary-container text-on-primary text-button uppercase px-6 py-3 hover:bg-primary transition-colors duration-200"
          >
            2026 Fiyat Listesi PDF
          </a>
          <button
            className="md:hidden text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute top-full left-0 right-0">
          <ul className="py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="border-b border-gray-200 last:border-0">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="w-full flex items-center justify-between px-5 py-4 text-button uppercase text-black"
                    >
                      {item.label}
                      <Icon
                        name="expand_more"
                        size={20}
                        className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileProductsOpen && (
                      <ul className="bg-gray-50">
                        {item.dropdown.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-8 py-3 text-body-md text-gray-700 hover:text-primary-fixed"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-5 py-4 text-button uppercase text-black"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="p-4">

              <a href={SITE_CONFIG.pdfCatalog}
                download
                className="flex items-center justify-center bg-primary-container text-on-primary text-button uppercase px-6 py-3"
              >
                2026 Fiyat Listesi PDF
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}