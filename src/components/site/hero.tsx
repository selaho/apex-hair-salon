"use client";

import type { ReactNode } from "react";
import { Star, Users, DoorOpen, Sparkles } from "lucide-react";
import { useBooking } from "@/components/booking/booking-context";
import { useTenant } from "@/components/tenant/tenant-context";

const BADGE_ICONS: Record<string, ReactNode> = {
  "Walk-ins Welcome": <DoorOpen className="size-4" />,
  Appointments: <DoorOpen className="size-4" />,
  "Color Specialists": <Sparkles className="size-4 text-brass" />,
  "Braiding Specialists": <Users className="size-4" />,
  "Kids Welcome": <Users className="size-4" />,
  "Silk Press": <Sparkles className="size-4 text-brass" />,
  "5-Star Rated": <Star className="size-4 fill-brass text-brass" />,
};

export function Hero() {
  const { shop, features } = useTenant();
  const { openBooking } = useBooking();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-28 pt-28 sm:items-center sm:pb-20"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${shop.heroImage})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-transparent to-charcoal/50" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl animate-rise">
          <p className="mb-3 font-display text-3xl text-offwhite sm:text-4xl">
            {shop.shortName}
          </p>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-brass">
            {shop.heroEyebrow}
          </p>
          <h1 className="font-display text-5xl leading-[0.95] text-offwhite sm:text-6xl md:text-7xl">
            {shop.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base text-offwhite/70 sm:text-lg">
            {shop.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openBooking()}
              className="rounded-full bg-brass px-6 py-3 font-medium text-charcoal transition hover:bg-amber"
            >
              Book an Appointment
            </button>
            <a
              href="#services"
              className="rounded-full border border-white/25 px-6 py-3 font-medium text-offwhite transition hover:border-brass hover:text-brass"
            >
              View Services
            </a>
            {features.rentals ? (
              <a
                href="#rent-a-chair"
                className="text-sm text-offwhite/55 underline-offset-4 transition hover:text-brass hover:underline"
              >
                Rent a Station
              </a>
            ) : null}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {shop.badges.map((label) => (
              <Badge
                key={label}
                icon={
                  BADGE_ICONS[label] ?? (
                    <Star className="size-4 fill-brass text-brass" />
                  )
                }
                label={label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-offwhite/80 backdrop-blur">
      {icon}
      {label}
    </span>
  );
}
