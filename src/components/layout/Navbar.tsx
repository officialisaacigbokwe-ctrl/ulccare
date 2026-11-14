
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services", dropdown: true },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  {
    label: "Home & Community Based Services (HCS)",
    href: "/hcs",
  },
  {
    label: "Texas Home Living (TxHmL)",
    href: "/txhml",
  },
  {
    label: "Assisted Living Homes",
    href: "/assisted-living",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* Top information bar */}
      <div className="hidden bg-[#1B365D] text-white md:block">
        <div className="container flex min-h-10 items-center justify-between text-xs">
          <p className="font-medium tracking-wide">
            We Stand Out Above The Rest
          </p>

          <div className="flex items-center gap-6">
            <a
              href="tel:+17134988039"
              className="flex items-center gap-2 transition hover:text-[#D99B26]"
            >
              <Phone size={13} />
              (713) 498-8039
            </a>

            <span className="text-white/40">|</span>

            <span>Serving communities across Texas</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.035)]">
        <div className="container flex min-h-[86px] items-center justify-between gap-5">

          {/* Official ULCC logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            aria-label="Universal Living Care Center homepage"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/images/ulcc-logo-transparent.png"
              alt="Universal Living Care Center — We Stand Out Above The Rest"
              width={244}
              height={112}
              priority
              className="h-[58px] w-auto max-w-[175px] object-contain sm:h-[66px] sm:max-w-[205px]"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-5 xl:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <div
                key={item.label}
                className="group relative"
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 py-8 text-[12px] font-semibold text-slate-700 transition hover:text-[#387C44] focus-visible:text-[#387C44]"
                >
                  {item.label}

                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    />
                  )}
                </Link>

                {item.dropdown && (
                  <div className="invisible absolute left-0 top-[68px] w-[290px] translate-y-2 border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 text-sm leading-6 text-slate-700 transition hover:bg-[#F7F8F5] hover:text-[#387C44] focus-visible:bg-[#F7F8F5] focus-visible:text-[#387C44]"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden shrink-0 xl:block">
            <Link
              href="/contact"
              className="primary-button min-h-[46px] px-5 text-xs"
            >
              Request Information
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setServicesOpen(false);
            }}
            className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 text-[#1B365D] transition hover:border-[#1B365D] hover:bg-[#F7F8F5] xl:hidden"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-100 bg-white py-4 shadow-lg xl:hidden"
          >
            <nav
              className="container flex flex-col"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-slate-100"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-slate-700"
                        aria-expanded={servicesOpen}
                      >
                        {item.label}

                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {servicesOpen && (
                        <div className="space-y-1 pb-3 pl-4">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={closeMobileMenu}
                              className="block border-l-2 border-[#D99B26] py-2 pl-4 text-sm leading-6 text-slate-600 transition hover:text-[#387C44]"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block py-4 text-sm font-semibold text-slate-700 transition hover:text-[#387C44]"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="primary-button mt-5 w-full"
              >
                Request Information
                <ArrowUpRight size={16} />
              </Link>

              <a
                href="tel:+17134988039"
                className="mt-4 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-[#1B365D]"
              >
                <Phone size={16} />
                (713) 498-8039
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
