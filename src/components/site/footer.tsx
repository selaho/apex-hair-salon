"use client";

import { Instagram } from "lucide-react";
import { useTenant } from "@/components/tenant/tenant-context";

export function Footer() {
  const { shop, partner, footerNote } = useTenant();

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] pb-28 pt-12 lg:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl text-offwhite">{shop.name}</p>
          <p className="mt-2 max-w-sm text-sm text-offwhite/50">{footerNote}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-offwhite/60">
            <a
              href={
                shop.instagram.startsWith("http")
                  ? shop.instagram
                  : `https://instagram.com/${shop.instagram.replace("@", "")}`
              }
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-brass"
            >
              <Instagram className="size-4" />
              {shop.instagram}
            </a>
            {shop.facebook ? (
              <a
                href={shop.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brass"
              >
                Facebook
              </a>
            ) : null}
            <a href={shop.phoneHref} className="hover:text-brass">
              {shop.phone}
            </a>
          </div>
        </div>

        <a
          href={partner.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-brass/25 bg-brass/5 px-4 py-3 transition hover:border-brass/50"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-brass">
            Co-branded with
          </p>
          <p className="mt-1 font-medium text-offwhite">{partner.name}</p>
          <p className="text-xs text-offwhite/50">{partner.tagline}</p>
          <p className="mt-1 text-xs text-brass/90">
            {partner.url.replace("https://", "")}
          </p>
        </a>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-xs text-offwhite/35 sm:px-6">
        © {new Date().getFullYear()} {shop.name}. {partner.blurb}
      </p>
    </footer>
  );
}
