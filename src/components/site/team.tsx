"use client";

import { useState } from "react";
import { useTenant } from "@/components/tenant/tenant-context";
import { useBooking } from "@/components/booking/booking-context";

export function Team() {
  const { barbers } = useTenant();
  const { openBooking } = useBooking();
  const [activePortfolio, setActivePortfolio] = useState<Record<string, number>>(
    {}
  );

  return (
    <section id="team" className="scroll-mt-24 border-t border-white/5 bg-[#0e0e0e] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brass">
            The Team
          </p>
          <h2 className="mt-2 font-display text-4xl text-offwhite sm:text-5xl">
            Stylists who know the craft
          </h2>
          <p className="mt-3 text-offwhite/60">
            Book with a specialist or let us seat you with the first open station.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {barbers.map((barber, i) => {
            const idx = activePortfolio[barber.id] ?? 0;
            return (
              <article
                key={barber.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-surface animate-rise"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={barber.photo}
                    alt={barber.name}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent p-4">
                    <h3 className="font-display text-2xl text-offwhite">
                      {barber.name}
                    </h3>
                    <p className="text-sm text-brass">{barber.title}</p>
                  </div>
                </div>
                <div className="space-y-4 p-5">
                  <p className="text-sm text-offwhite/65">
                    {barber.years}+ years · {barber.bio}
                  </p>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-wider text-offwhite/40">
                      Portfolio
                    </p>
                    <div className="flex gap-2">
                      {barber.portfolio.map((src, pIdx) => (
                        <button
                          key={src}
                          type="button"
                          onClick={() =>
                            setActivePortfolio((prev) => ({
                              ...prev,
                              [barber.id]: pIdx,
                            }))
                          }
                          className={`relative h-14 w-14 overflow-hidden rounded-lg border ${
                            idx === pIdx
                              ? "border-brass"
                              : "border-transparent opacity-70"
                          }`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={src}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                    <div className="mt-2 overflow-hidden rounded-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={barber.portfolio[idx]}
                        alt={`${barber.name} work`}
                        className="h-28 w-full object-cover"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openBooking({ barber })}
                    className="w-full rounded-full bg-brass py-2.5 text-sm font-medium text-charcoal transition hover:bg-amber"
                  >
                    Book with {barber.name.split(" ")[0]}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
