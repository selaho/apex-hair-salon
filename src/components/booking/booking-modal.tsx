"use client";

import { useMemo } from "react";
import {
  CalendarPlus,
  Check,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Scissors,
  User,
} from "lucide-react";
import { useTenant } from "@/components/tenant/tenant-context";
import { useBooking, type BookingStep } from "./booking-context";
import { cn } from "@/lib/utils";

const STEPS: { id: BookingStep; label: string }[] = [
  { id: "services", label: "Services" },
  { id: "staff", label: "Stylist" },
  { id: "datetime", label: "When" },
  { id: "details", label: "Details" },
  { id: "confirm", label: "Done" },
];

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function nextDates(
  hours: { day: string; open: string; close: string }[],
  count = 14
) {
  const dates: { value: string; label: string; weekday: string }[] = [];
  const now = new Date();
  for (let i = 0; i < count + 7 && dates.length < count; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const dayName = WEEKDAYS[d.getDay()];
    const entry = hours.find((h) => h.day === dayName);
    if (!entry || entry.open === "Closed") continue;
    const value = d.toISOString().slice(0, 10);
    dates.push({
      value,
      weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
      label: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    });
  }
  return dates;
}

function googleCalendarUrl(opts: {
  title: string;
  details: string;
  date: string;
  time: string;
  duration: number;
}) {
  const parse = (date: string, time: string) => {
    const [hPart, rest] = time.split(" ");
    const [hh, mm] = hPart.split(":").map(Number);
    let hour = hh;
    if (rest === "PM" && hour !== 12) hour += 12;
    if (rest === "AM" && hour === 12) hour = 0;
    const start = new Date(`${date}T00:00:00`);
    start.setHours(hour, mm, 0, 0);
    const end = new Date(start.getTime() + opts.duration * 60_000);
    const fmt = (d: Date) =>
      d
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.\d{3}/, "");
    return { start: fmt(start), end: fmt(end) };
  };
  const { start, end } = parse(opts.date, opts.time);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: opts.title,
    details: opts.details,
    dates: `${start}/${end}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function BookingModal() {
  const { services, barbers, timeSlots, hours, shop } = useTenant();
  const booking = useBooking();
  const dates = useMemo(() => nextDates(hours), [hours]);

  if (!booking.open) return null;

  const stepIndex = STEPS.findIndex((s) => s.id === booking.step);
  const barberName =
    booking.selectedBarber === "any"
      ? "Any Available Stylist"
      : booking.selectedBarber?.name ?? "—";

  const canContinue =
    (booking.step === "services" && booking.selectedServices.length > 0) ||
    (booking.step === "staff" && booking.selectedBarber !== null) ||
    (booking.step === "datetime" && booking.date && booking.time) ||
    (booking.step === "details" &&
      booking.details.name.trim() &&
      booking.details.phone.trim() &&
      booking.details.email.trim());

  const goNext = () => {
    if (booking.step === "services") booking.setStep("staff");
    else if (booking.step === "staff") booking.setStep("datetime");
    else if (booking.step === "datetime") booking.setStep("details");
    else if (booking.step === "details") booking.setStep("confirm");
  };

  const goBack = () => {
    if (booking.step === "staff") booking.setStep("services");
    else if (booking.step === "datetime") booking.setStep("staff");
    else if (booking.step === "details") booking.setStep("datetime");
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Close booking"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={booking.closeBooking}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-brass/30 bg-charcoal shadow-2xl animate-slide-up sm:rounded-2xl"
      >
        <div className="border-b border-white/10 px-5 py-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-brass">
                Book Appointment
              </p>
              <h2
                id="booking-title"
                className="font-display text-2xl text-offwhite"
              >
                {STEPS[stepIndex]?.label}
              </h2>
            </div>
            <button
              type="button"
              onClick={booking.closeBooking}
              className="rounded-full border border-white/15 px-3 py-1 text-sm text-offwhite/70 hover:border-brass hover:text-brass"
            >
              Close
            </button>
          </div>
          <div className="mt-4 flex gap-1.5">
            {STEPS.map((s, i) => (
              <div
                key={s.id}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors",
                  i <= stepIndex ? "bg-brass" : "bg-white/10"
                )}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {booking.step === "services" && (
            <div className="grid gap-3">
              {services.map((service) => {
                const selected = booking.selectedServices.some(
                  (s) => s.id === service.id
                );
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => booking.toggleService(service)}
                    className={cn(
                      "flex items-start justify-between gap-3 rounded-xl border p-4 text-left transition",
                      selected
                        ? "border-brass bg-brass/10"
                        : "border-white/10 bg-surface hover:border-brass/40"
                    )}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <Scissors className="size-4 text-brass" />
                        <p className="font-medium text-offwhite">
                          {service.title}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-offwhite/60">
                        {service.description}
                      </p>
                      <p className="mt-2 text-xs text-offwhite/45">
                        {service.duration} mins
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-xl text-brass">
                        ${service.price}
                      </p>
                      {selected && (
                        <Check className="ml-auto mt-2 size-4 text-brass" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {booking.step === "staff" && (
            <div className="grid gap-3">
              <button
                type="button"
                onClick={() => booking.setSelectedBarber("any")}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-4 text-left transition",
                  booking.selectedBarber === "any"
                    ? "border-brass bg-brass/10"
                    : "border-white/10 bg-surface hover:border-brass/40"
                )}
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-muted-barber text-brass">
                  <User className="size-5" />
                </div>
                <div>
                  <p className="font-medium text-offwhite">
                    Any Available Stylist
                  </p>
                  <p className="text-sm text-offwhite/55">
                    Fastest open chair for your time
                  </p>
                </div>
              </button>
              {barbers.map((barber) => (
                <button
                  key={barber.id}
                  type="button"
                  onClick={() => booking.setSelectedBarber(barber)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border p-4 text-left transition",
                    booking.selectedBarber !== "any" &&
                      booking.selectedBarber?.id === barber.id
                      ? "border-brass bg-brass/10"
                      : "border-white/10 bg-surface hover:border-brass/40"
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={barber.photo}
                    alt={barber.name}
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-offwhite">{barber.name}</p>
                    <p className="text-sm text-offwhite/55">{barber.title}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {booking.step === "datetime" && (
            <div className="space-y-5">
              <div>
                <p className="mb-2 text-sm text-offwhite/60">Select a date</p>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {dates.map((d) => (
                    <button
                      key={d.value}
                      type="button"
                      onClick={() => booking.setDate(d.value)}
                      className={cn(
                        "min-w-[72px] rounded-xl border px-3 py-3 text-center transition",
                        booking.date === d.value
                          ? "border-brass bg-brass text-charcoal"
                          : "border-white/10 bg-surface text-offwhite hover:border-brass/40"
                      )}
                    >
                      <div className="text-[11px] uppercase tracking-wide opacity-70">
                        {d.weekday}
                      </div>
                      <div className="font-medium">{d.label}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm text-offwhite/60">
                  Available 30-min slots
                </p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      disabled={!booking.date}
                      onClick={() => booking.setTime(slot)}
                      className={cn(
                        "rounded-lg border px-2 py-2 text-sm transition disabled:opacity-40",
                        booking.time === slot
                          ? "border-brass bg-brass text-charcoal"
                          : "border-white/10 bg-surface text-offwhite hover:border-brass/40"
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {booking.step === "details" && (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                goNext();
              }}
            >
              <label className="block space-y-1.5">
                <span className="text-sm text-offwhite/60">Full name</span>
                <input
                  required
                  value={booking.details.name}
                  onChange={(e) =>
                    booking.setDetails({
                      ...booking.details,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/15 bg-surface px-3 py-2.5 text-offwhite outline-none focus:border-brass"
                  placeholder="James Carter"
                />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm text-offwhite/60">Phone</span>
                <input
                  required
                  type="tel"
                  value={booking.details.phone}
                  onChange={(e) =>
                    booking.setDetails({
                      ...booking.details,
                      phone: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/15 bg-surface px-3 py-2.5 text-offwhite outline-none focus:border-brass"
                  placeholder="(404) 555-0199"
                />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm text-offwhite/60">Email</span>
                <input
                  required
                  type="email"
                  value={booking.details.email}
                  onChange={(e) =>
                    booking.setDetails({
                      ...booking.details,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/15 bg-surface px-3 py-2.5 text-offwhite outline-none focus:border-brass"
                  placeholder="you@email.com"
                />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm text-offwhite/60">
                  Special requests
                </span>
                <textarea
                  rows={3}
                  value={booking.details.notes}
                  onChange={(e) =>
                    booking.setDetails({
                      ...booking.details,
                      notes: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/15 bg-surface px-3 py-2.5 text-offwhite outline-none focus:border-brass"
                  placeholder="Fade preference, beard notes, accessibility needs…"
                />
              </label>
            </form>
          )}

          {booking.step === "confirm" && (
            <div className="space-y-5 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-brass/15 text-brass animate-scale-in">
                <Check className="size-8" />
              </div>
              <div>
                <h3 className="font-display text-3xl text-offwhite">
                  You&apos;re booked
                </h3>
                <p className="mt-2 text-offwhite/60">
                  Confirmation sent to {booking.details.email}
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-surface p-4 text-left text-sm">
                <Row
                  label="Services"
                  value={booking.selectedServices
                    .map((s) => s.title)
                    .join(", ")}
                />
                <Row label="Stylist" value={barberName} />
                <Row
                  label="When"
                  value={`${booking.date} · ${booking.time}`}
                />
                <Row
                  label="Duration"
                  value={`${booking.totalDuration} mins`}
                />
                <Row label="Total" value={`$${booking.totalPrice}`} last />
              </div>
              <div className="rounded-xl border border-brass/25 bg-brass/5 p-4 text-left">
                <div className="mb-2 flex items-center gap-2 text-brass">
                  <MessageSquare className="size-4" />
                  <span className="text-sm font-medium">SMS preview</span>
                </div>
                <p className="text-sm text-offwhite/75">
                  {shop.name}: Hi {booking.details.name.split(" ")[0]}, your
                  appointment is confirmed for {booking.date} at {booking.time}{" "}
                  with {barberName}. Reply STOP to cancel.
                </p>
              </div>
              <a
                href={googleCalendarUrl({
                  title: `${shop.name} — ${booking.selectedServices.map((s) => s.title).join(", ")}`,
                  details: `With ${barberName}. Total $${booking.totalPrice}.`,
                  date: booking.date,
                  time: booking.time,
                  duration: booking.totalDuration || 45,
                })}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brass px-5 py-3 font-medium text-charcoal transition hover:bg-amber"
              >
                <CalendarPlus className="size-4" />
                Add to Google Calendar
              </a>
            </div>
          )}
        </div>

        {booking.step !== "confirm" && (
          <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
            <button
              type="button"
              onClick={goBack}
              disabled={booking.step === "services"}
              className="inline-flex items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-sm text-offwhite/70 disabled:opacity-30"
            >
              <ChevronLeft className="size-4" /> Back
            </button>
            <div className="text-sm text-offwhite/55">
              {booking.selectedServices.length > 0 && (
                <span>
                  ${booking.totalPrice} · {booking.totalDuration}m
                </span>
              )}
            </div>
            <button
              type="button"
              disabled={!canContinue}
              onClick={goNext}
              className="inline-flex items-center gap-1 rounded-full bg-brass px-4 py-2 text-sm font-medium text-charcoal disabled:opacity-40 hover:bg-amber"
            >
              {booking.step === "details" ? "Confirm" : "Continue"}
              <ChevronRight className="size-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex justify-between gap-4 py-2",
        !last && "border-b border-white/8"
      )}
    >
      <span className="text-offwhite/50">{label}</span>
      <span className="text-right text-offwhite">{value}</span>
    </div>
  );
}
