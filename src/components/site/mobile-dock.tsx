"use client";

import { CalendarCheck, MapPinned, Phone } from "lucide-react";
import { useTenant } from "@/components/tenant/tenant-context";
import { useBooking } from "@/components/booking/booking-context";

export function MobileDock() {
  const { shop } = useTenant();
  const { openBooking } = useBooking();

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-charcoal/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md lg:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => openBooking()}
          className="flex flex-col items-center gap-1 rounded-xl bg-brass py-2.5 text-charcoal"
        >
          <CalendarCheck className="size-5" />
          <span className="text-[11px] font-semibold">Book Now</span>
        </button>
        <a
          href={shop.phoneHref}
          className="flex flex-col items-center gap-1 rounded-xl border border-white/15 py-2.5 text-offwhite"
        >
          <Phone className="size-5 text-brass" />
          <span className="text-[11px] font-medium">Call</span>
        </a>
        <a
          href={shop.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 rounded-xl border border-white/15 py-2.5 text-offwhite"
        >
          <MapPinned className="size-5 text-brass" />
          <span className="text-[11px] font-medium">Directions</span>
        </a>
      </div>
    </nav>
  );
}
