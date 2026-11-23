"use client";

import { useState } from "react";
import {
  Armchair,
  Check,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  BILLING_LABELS,
  type BillingPeriod,
  type ChairStatus,
} from "@/lib/data";
import { useRental } from "@/components/rental/rental-context";
import { useTenant } from "@/components/tenant/tenant-context";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<ChairStatus, string> = {
  "Available Now": "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  "Part-Time / Daily": "border-brass/40 bg-brass/10 text-brass",
  Waitlist: "border-white/20 bg-white/5 text-offwhite/60",
};

export function Rentals() {
  const { rentalTiers, openChairs } = useTenant();
  const { openRental } = useRental();
  const [period, setPeriod] = useState<BillingPeriod>("weekly");

  return (
    <section
      id="rent-a-chair"
      className="scroll-mt-24 border-t border-white/5 bg-[#0e0e0e] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-brass">
              B2B · Salon owners & stylists
            </p>
            <h2 className="mt-2 font-display text-4xl text-offwhite sm:text-5xl">
              Rent a Station / Join Our Team
            </h2>
            <p className="mt-3 text-offwhite/60">
              Atlanta-area booth rates for independent stylists — keep client
              bookings on the same platform while you rent a station.
            </p>
            <p className="mt-2 text-xs text-offwhite/40">
              Sample rental benchmarks for the COTGI demo — not a live lease.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openRental()}
            className="self-start rounded-full border border-brass/50 px-5 py-2.5 text-sm font-medium text-brass transition hover:bg-brass hover:text-charcoal"
          >
            Request Chair / Tour
          </button>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <p className="text-sm text-offwhite/50">Compare pricing</p>
          <div className="inline-flex rounded-full border border-white/15 p-1">
            {(Object.keys(BILLING_LABELS) as BillingPeriod[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setPeriod(key)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm transition",
                  period === key
                    ? "bg-brass text-charcoal"
                    : "text-offwhite/65 hover:text-brass"
                )}
              >
                {BILLING_LABELS[key]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {rentalTiers.map((tier, i) => (
            <article
              key={tier.id}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-surface p-5 animate-rise",
                tier.id === "standard"
                  ? "border-brass/50 shadow-[0_0_0_1px_rgba(212,175,55,0.15)]"
                  : "border-white/10"
              )}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-5 inline-flex items-center gap-1 rounded-full bg-brass px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-charcoal">
                  <Sparkles className="size-3" />
                  {tier.badge}
                </span>
              )}
              <h3 className="font-display text-2xl text-offwhite">{tier.name}</h3>
              <p className="mt-2 text-sm text-offwhite/60">{tier.blurb}</p>
              <p className="mt-4 font-display text-4xl text-brass">
                ${tier.prices[period]}
                <span className="ml-1 text-base text-offwhite/45">
                  /{BILLING_LABELS[period].toLowerCase()}
                </span>
              </p>
              <ul className="mt-4 flex-1 space-y-2">
                {tier.amenities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-offwhite/70"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-brass" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => openRental({ tier: tier.id })}
                className="mt-5 w-full rounded-full bg-brass py-2.5 text-sm font-medium text-charcoal transition hover:bg-amber"
              >
                Request {tier.name.split(" ")[0]}
              </button>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <div className="mb-6 flex items-center gap-2">
            <Armchair className="size-5 text-brass" />
            <h3 className="font-display text-3xl text-offwhite">
              Open chairs & stations
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {openChairs.map((chair, i) => (
              <article
                key={chair.id}
                className="rounded-2xl border border-white/10 bg-charcoal/60 p-5 animate-rise"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="font-display text-2xl text-offwhite">
                      {chair.name}
                    </h4>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-offwhite/55">
                      <MapPin className="size-3.5 text-brass" />
                      {chair.location}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-1 text-xs font-medium",
                      STATUS_STYLES[chair.status]
                    )}
                  >
                    {chair.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-offwhite/60">{chair.note}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {chair.amenities.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-offwhite/55"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => openRental({ chair })}
                  className="mt-4 w-full rounded-full border border-brass/40 py-2.5 text-sm font-medium text-brass transition hover:bg-brass hover:text-charcoal"
                >
                  Request Chair / Tour
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
