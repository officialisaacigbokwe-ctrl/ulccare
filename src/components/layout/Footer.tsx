
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Printer,
  ArrowUpRight,
} from "lucide-react";

type FooterProps = {
  variant?: "full" | "compact";
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Home & Community-Based Services (HCS)", href: "/hcs" },
  { label: "Texas Home Living (TxHmL)", href: "/txhml" },
  { label: "Assisted Living Homes", href: "/assisted-living" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Terms of Use", href: "/terms" },
];

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=15722+Amapola+Drive+Houston+TX+77083";

function LegalBar() {
  return (
    <div className="border-t border-white/10 pt-6">
      <div className="flex flex-col gap-6">
        {/* LEGAL LINKS */}
        <nav
          aria-label="Legal links"
          className="flex flex-nowrap items-center justify-between gap-3 sm:justify-start sm:gap-7"
        >
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[10px] text-white/55 transition hover:text-[#D99B26] sm:text-xs"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CONTACT AND LOCATION LINKS */}
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white transition hover:text-[#D99B26]"
          >
            Get in Touch <ArrowUpRight size={14} />
          </Link>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white transition hover:text-[#D99B26]"
          >
            Find Us <MapPin size={14} />
          </a>
        </div>

        {/* COPYRIGHT — ALWAYS LAST */}
        <p className="border-t border-white/10 pt-5 text-xs leading-6 text-white/45">
          © 2026 Universal Living Care Center. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default function Footer({ variant = "full" }: FooterProps) {
  if (variant === "compact") {
    return (
      <footer className="bg-[#102541] text-white">
        <div className="container py-8 md:py-9">
          <div className="mb-7 grid grid-cols-2 gap-x-5 gap-y-5 sm:flex sm:items-center sm:justify-between">
            <div className="col-span-2 sm:col-span-1">
              <Link href="/" className="inline-block">
                <p className="text-sm font-extrabold tracking-tight">
                  UNIVERSAL LIVING CARE CENTER
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#D99B26]">
                  We Stand Out Above The Rest
                </p>
              </Link>
            </div>

            <a
              href="tel:+17134988039"
              className="inline-flex items-center gap-2 text-xs text-white/65 transition hover:text-white"
            >
              <Phone size={15} className="text-[#D99B26]" />
              (713) 498-8039
            </a>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-white/65 transition hover:text-white"
            >
              <MapPin size={15} className="text-[#D99B26]" />
              Find Our Office
            </a>
          </div>

          <LegalBar />
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#102541] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-[1.15fr_0.8fr_1.1fr_1.2fr] lg:gap-8">
          {/* ABOUT */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <p className="text-lg font-extrabold tracking-tight">
                UNIVERSAL LIVING
              </p>
              <p className="text-lg font-extrabold tracking-tight text-[#D99B26]">
                CARE CENTER
              </p>
            </Link>

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#D99B26]">
              We Stand Out Above The Rest
            </p>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
              Supporting independence, dignity and quality care through
              community-based services and assisted living support.
            </p>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#D99B26]"
            >
              Learn more about us <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block w-fit text-sm text-white/60 transition hover:text-[#D99B26]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Our Services
            </h3>

            <div className="mt-6 space-y-4">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block max-w-[230px] text-sm leading-6 text-white/60 transition hover:text-[#D99B26]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/resources"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#D99B26]"
            >
              Eligibility & Resources <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Contact Information
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-1 shrink-0 text-[#D99B26]" />
                <p className="text-sm leading-6 text-white/60">
                  15722 Amapola Drive,
                  <br />
                  Houston, TX 77083
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-1 shrink-0 text-[#D99B26]" />
                <a
                  href="tel:+17134988039"
                  className="text-sm text-white/60 hover:text-white"
                >
                  (713) 498-8039
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Printer size={16} className="mt-1 shrink-0 text-[#D99B26]" />
                <p className="text-sm text-white/60">
                  Fax: (281) 561-7592
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-1 shrink-0 text-[#D99B26]" />
                <a
                  href="mailto:ojiakucl09@yahoo.com"
                  className="break-all text-sm text-white/60 hover:text-white"
                >
                  ojiakucl09@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* LEGAL LINKS AND FINAL COPYRIGHT */}
        <div className="mt-14">
          <LegalBar />
        </div>
      </div>
    </footer>
  );
}
