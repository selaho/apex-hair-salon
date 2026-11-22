"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { useBooking } from "@/components/booking/booking-context";
import { useTenant } from "@/components/tenant/tenant-context";
import { cn } from "@/lib/utils";

export function Header() {
  const { shop, features, partner } = useTenant();
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = useMemo(() => {
    return [
      { href: "#services", label: "Services" },
      ...(features.braiding
        ? [{ href: "#braiding", label: "Braiding" }]
        : []),
      { href: "#team", label: "Team" },
      ...(features.rentals
        ? [{ href: "#rent-a-chair", label: "Rent a Station" }]
        : []),
      { href: "#gallery", label: "Gallery" },
      { href: "#reviews", label: "Reviews" },
      { href: "#contact", label: "Contact" },
    ];
  }, [features.braiding, features.rentals]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-charcoal/95 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="group max-w-[60%] sm:max-w-none">
          <p className="font-display text-xl tracking-wide text-offwhite sm:text-3xl">
            {shop.shortName}
          </p>
          <p className="text-[10px] uppercase tracking-[0.28em] text-brass">
            {shop.locationLabel}
            <span className="text-offwhite/35"> · </span>
            <span className="text-offwhite/55">× {partner.name}</span>
          </p>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-offwhite/70 transition hover:text-brass"
            >
              {link.label}
            </a>
          ))}
          {features.rentals ? (
            <a
              href="#rent-a-chair"
              className="text-sm text-offwhite/55 transition hover:text-brass"
            >
              For Stylists
            </a>
          ) : null}
          <button
            type="button"
            onClick={() => openBooking()}
            className="rounded-full bg-brass px-4 py-2 text-sm font-medium text-charcoal transition hover:bg-amber"
          >
            Book Appointment
          </button>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-white/15 p-2 text-offwhite lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-charcoal px-4 py-4 lg:hidden animate-fade-in">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2 text-offwhite/80 hover:bg-white/5 hover:text-brass"
              >
                {link.label}
              </a>
            ))}
            {features.rentals ? (
              <a
                href="#rent-a-chair"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2 text-sm text-offwhite/55 hover:bg-white/5 hover:text-brass"
              >
                For Stylists · Rent a Station
              </a>
            ) : null}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                openBooking();
              }}
              className="mt-1 rounded-full bg-brass px-4 py-3 font-medium text-charcoal"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
