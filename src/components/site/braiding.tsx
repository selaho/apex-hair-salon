"use client";

import { Clock, Sparkles } from "lucide-react";
import type { Service } from "@/lib/data";
import { useBooking } from "@/components/booking/booking-context";
import { useTenant } from "@/components/tenant/tenant-context";

export function Braiding() {
  const { services, braidingHighlights } = useTenant();
  const { openBooking } = useBooking();
  const braids = services.filter((s) => s.category === "Braiding & Protective");

  return (
    <section
      id="braiding"
      className="scroll-mt-24 relative overflow-hidden border-t border-white/5 bg-charcoal py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center opacity-30 lg:block"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1400&q=80)",
        }}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-transparent via-charcoal/40 to-charcoal lg:block" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brass">
            Braiding & Protective
          </p>
          <h2 className="mt-2 font-display text-4xl text-offwhite sm:text-5xl">
            Protective styles that stay soft
          </h2>
          <p className="mt-3 text-offwhite/60">
            Box braids, knotless, feed-ins, and kids styles — booked the same way
            as a cut, with specialists who respect your hair and your time.
          </p>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {braidingHighlights.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-surface/80 p-4 animate-rise"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="mb-2 inline-flex size-8 items-center justify-center rounded-full bg-brass/15 text-brass">
                <Sparkles className="size-4" />
              </div>
              <h3 className="font-medium text-offwhite">{item.title}</h3>
              <p className="mt-1 text-sm text-offwhite/55">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {braids.map((service, i) => (
            <BraidCard
              key={service.id}
              service={service}
              delay={i * 70}
              onBook={() => openBooking({ service })}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => openBooking({ service: braids[0] })}
            className="rounded-full bg-brass px-5 py-3 text-sm font-medium text-charcoal transition hover:bg-amber"
          >
            Book Braiding
          </button>
          <a
            href="#services"
            className="rounded-full border border-white/20 px-5 py-3 text-sm text-offwhite transition hover:border-brass hover:text-brass"
          >
            See full menu
          </a>
        </div>
      </div>
    </section>
  );
}

function BraidCard({
  service,
  delay,
  onBook,
}: {
  service: Service;
  delay: number;
  onBook: () => void;
}) {
  return (
    <article
      className="group rounded-2xl border border-white/10 bg-surface p-5 transition hover:border-brass/40 animate-rise"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl text-offwhite">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-offwhite/60">{service.description}</p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-offwhite/45">
            <Clock className="size-3.5" />
            {service.duration} mins
          </p>
        </div>
        <p className="font-display text-3xl text-brass">${service.price}</p>
      </div>
      <button
        type="button"
        onClick={onBook}
        className="mt-5 w-full rounded-full border border-brass/40 py-2.5 text-sm font-medium text-brass transition group-hover:bg-brass group-hover:text-charcoal"
      >
        Book Service
      </button>
    </article>
  );
}
