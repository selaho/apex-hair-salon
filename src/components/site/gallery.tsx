"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useTenant } from "@/components/tenant/tenant-context";
import { cn } from "@/lib/utils";

export function Gallery() {
  const { gallery } = useTenant();
  const filters = [
    "All",
    ...Array.from(new Set(gallery.map((g) => g.tag))),
  ] as const;
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<(typeof gallery)[number] | null>(
    null
  );
  const items =
    filter === "All" ? gallery : gallery.filter((g) => g.tag === filter);

  return (
    <section id="gallery" className="scroll-mt-24 bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-brass">
              Portfolio
            </p>
            <h2 className="mt-2 font-display text-4xl text-offwhite sm:text-5xl">
              Looks that turn heads
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm transition",
                  filter === f
                    ? "border-brass bg-brass text-charcoal"
                    : "border-white/15 text-offwhite/65 hover:border-brass/40"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightbox(item)}
              className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-brass animate-rise"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover transition duration-500 hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            aria-label="Close lightbox"
            onClick={() => setLightbox(null)}
          />
          <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-brass/30 animate-scale-in">
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-charcoal/80 p-2 text-offwhite"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[90vh] w-full object-contain"
            />
            <p className="bg-charcoal px-4 py-3 text-sm text-offwhite/70">
              {lightbox.alt} · {lightbox.tag}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
