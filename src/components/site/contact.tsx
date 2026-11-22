"use client";

import { Clock, MapPin, MessageSquare, Navigation, Phone } from "lucide-react";
import { getTodayHoursStatus } from "@/lib/data";
import { useTenant } from "@/components/tenant/tenant-context";

export function Contact() {
  const { shop, hours } = useTenant();
  const status = getTodayHoursStatus(hours);

  return (
    <section id="contact" className="scroll-mt-24 bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brass">
            Visit Us
          </p>
          <h2 className="mt-2 font-display text-4xl text-offwhite sm:text-5xl">
            {shop.locationLabel} storefront
          </h2>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/10 px-3 py-1.5 text-sm text-brass">
            <Clock className="size-3.5" />
            {status.label}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title={`${shop.name} map`}
              src={shop.mapsEmbed}
              className="h-72 w-full grayscale contrast-125 sm:h-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6 rounded-2xl border border-white/10 bg-surface p-6">
            <div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 text-brass" />
                <div>
                  <p className="font-medium text-offwhite">{shop.address}</p>
                  <a
                    href={shop.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm text-brass hover:text-amber"
                  >
                    <Navigation className="size-3.5" />
                    Get turn-by-turn directions
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={shop.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-brass px-4 py-2.5 text-sm font-medium text-charcoal hover:bg-amber"
              >
                <Phone className="size-4" />
                Call {shop.phone}
              </a>
              <a
                href={shop.smsHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm text-offwhite hover:border-brass hover:text-brass"
              >
                <MessageSquare className="size-4" />
                Text us
              </a>
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-offwhite/40">
                Hours
              </p>
              <ul className="space-y-2">
                {hours.map((row) => {
                  const isToday = row.day === status.today;
                  return (
                    <li
                      key={row.day}
                      className={`flex justify-between gap-4 text-sm ${
                        isToday ? "text-brass" : "text-offwhite/65"
                      }`}
                    >
                      <span className={isToday ? "font-medium" : ""}>
                        {row.day}
                        {isToday ? " · Today" : ""}
                      </span>
                      <span>
                        {row.open === "Closed"
                          ? "Closed"
                          : /24\s*hours?/i.test(row.open) ||
                              row.open === row.close
                            ? row.open
                            : `${row.open} – ${row.close}`}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
