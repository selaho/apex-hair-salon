"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import type { ServiceCategory } from "@/lib/data";
import { useBooking } from "@/components/booking/booking-context";
import { useTenant } from "@/components/tenant/tenant-context";
import { cn } from "@/lib/utils";

export function Services() {
  const { services, serviceCategories } = useTenant();
  const { openBooking } = useBooking();
  const [category, setCategory] = useState<ServiceCategory>(
    serviceCategories[0] ?? "Cuts & Styling"
  );
  const items = services.filter((s) => s.category === category);

  return (
    <section id="services" className="scroll-mt-24 bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brass">
            Service Menu
          </p>
          <h2 className="mt-2 font-display text-4xl text-offwhite sm:text-5xl">
            Pricing that respects your time
          </h2>
          <p className="mt-3 text-offwhite/60">
            Choose a service to pre-fill the booking flow — stack multiple if
            you want the full treatment.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {serviceCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                category === cat
                  ? "border-brass bg-brass text-charcoal"
                  : "border-white/15 text-offwhite/70 hover:border-brass/50 hover:text-brass"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((service, i) => (
            <article
              key={service.id}
              className="group rounded-2xl border border-white/10 bg-surface p-5 transition hover:border-brass/40 animate-rise"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-offwhite">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-offwhite/60">
                    {service.description}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-offwhite/45">
                    <Clock className="size-3.5" />
                    {service.duration} mins
                  </p>
                </div>
                <p className="font-display text-3xl text-brass">
                  ${service.price}
                </p>
              </div>
              <button
                type="button"
                onClick={() => openBooking({ service })}
                className="mt-5 w-full rounded-full border border-brass/40 py-2.5 text-sm font-medium text-brass transition group-hover:bg-brass group-hover:text-charcoal"
              >
                Book Service
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
