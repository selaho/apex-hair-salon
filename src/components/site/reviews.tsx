"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Instagram, Star } from "lucide-react";
import { useTenant } from "@/components/tenant/tenant-context";

export function Reviews() {
  const { shop, reviews, gallery } = useTenant();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, [reviews.length]);

  const review = reviews[index];

  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-t border-white/5 bg-[#0e0e0e] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brass">
              Social Proof
            </p>
            <h2 className="mt-2 font-display text-4xl text-offwhite sm:text-5xl">
              Trusted in East Point
            </h2>

            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-brass/30 bg-brass/10 px-5 py-4">
              <div className="font-display text-4xl text-brass">{shop.rating}</div>
              <div>
                <div className="flex gap-0.5 text-brass">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-brass" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-offwhite/70">
                  Google & Booksy · {shop.reviewCount}+ reviews
                </p>
              </div>
            </div>

            <div className="relative mt-8 min-h-[180px] rounded-2xl border border-white/10 bg-surface p-6">
              <div className="flex gap-0.5 text-brass">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-brass" />
                ))}
              </div>
              <p className="mt-4 font-display text-2xl leading-snug text-offwhite">
                “{review.text}”
              </p>
              <p className="mt-4 text-sm text-offwhite/55">
                {review.name} · {review.source}
              </p>
              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={() =>
                    setIndex((i) => (i - 1 + reviews.length) % reviews.length)
                  }
                  className="rounded-full border border-white/15 p-2 text-offwhite/70 hover:border-brass hover:text-brass"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={() => setIndex((i) => (i + 1) % reviews.length)}
                  className="rounded-full border border-white/15 p-2 text-offwhite/70 hover:border-brass hover:text-brass"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2 text-offwhite/70">
              <Instagram className="size-4 text-brass" />
              <span className="text-sm">Live feed · {shop.instagram}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className="aspect-square overflow-hidden rounded-lg border border-white/10"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
