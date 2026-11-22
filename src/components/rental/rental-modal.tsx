"use client";

import { Check, ChevronRight } from "lucide-react";
import { BILLING_LABELS } from "@/lib/data";
import { useTenant } from "@/components/tenant/tenant-context";
import { useRental } from "./rental-context";
import { cn } from "@/lib/utils";

export function RentalModal() {
  const { rentalTiers } = useTenant();
  const rental = useRental();
  if (!rental.open) return null;

  const tier = rentalTiers.find((t) => t.id === rental.form.tier)!;
  const canSubmit =
    rental.form.name.trim() &&
    rental.form.phone.trim() &&
    rental.form.email.trim() &&
    rental.form.licenseNote.trim() &&
    rental.form.startDate;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Close rental form"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={rental.closeRental}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="rental-title"
        className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-brass/30 bg-charcoal shadow-2xl animate-slide-up sm:rounded-2xl"
      >
        <div className="border-b border-white/10 px-5 py-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-brass">
                B2B · Chair Rental
              </p>
              <h2
                id="rental-title"
                className="font-display text-2xl text-offwhite"
              >
                {rental.confirmed ? "Request received" : "Request Chair / Tour"}
              </h2>
            </div>
            <button
              type="button"
              onClick={rental.closeRental}
              className="rounded-full border border-white/15 px-3 py-1 text-sm text-offwhite/70 hover:border-brass hover:text-brass"
            >
              Close
            </button>
          </div>
          {rental.selectedChair && (
            <p className="mt-2 text-sm text-offwhite/55">
              Interested in{" "}
              <span className="text-brass">
                {rental.selectedChair.name} — {rental.selectedChair.location}
              </span>
            </p>
          )}
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {rental.confirmed ? (
            <div className="space-y-5 text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-brass/15 text-brass animate-scale-in">
                <Check className="size-8" />
              </div>
              <div>
                <h3 className="font-display text-3xl text-offwhite">
                  We&apos;ll be in touch
                </h3>
                <p className="mt-2 text-offwhite/60">
                  Demo confirmation only — nothing was submitted to a live inbox.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-surface p-4 text-left text-sm">
                <Row label="Stylist" value={rental.form.name} />
                <Row label="Contact" value={`${rental.form.phone} · ${rental.form.email}`} />
                <Row label="Tier" value={tier.name} />
                <Row
                  label="Weekly rate"
                  value={`$${tier.prices.weekly}/week`}
                />
                {rental.selectedChair && (
                  <Row
                    label="Chair"
                    value={`${rental.selectedChair.name} — ${rental.selectedChair.location}`}
                  />
                )}
                <Row label="Start date" value={rental.form.startDate} last />
              </div>
              <div className="rounded-xl border border-brass/25 bg-brass/5 p-4 text-left text-sm text-offwhite/75">
                <p className="font-medium text-brass">Next steps (demo)</p>
                <ol className="mt-2 list-decimal space-y-1 pl-4">
                  <li>Shop owner reviews your license & portfolio</li>
                  <li>Schedule an in-person chair tour</li>
                  <li>Sign booth agreement and pick your start week</li>
                </ol>
              </div>
              <button
                type="button"
                onClick={() => {
                  rental.reset();
                  rental.closeRental();
                }}
                className="rounded-full bg-brass px-5 py-3 font-medium text-charcoal hover:bg-amber"
              >
                Done
              </button>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (canSubmit) rental.submit();
              }}
            >
              <label className="block space-y-1.5">
                <span className="text-sm text-offwhite/60">Stylist name</span>
                <input
                  required
                  value={rental.form.name}
                  onChange={(e) =>
                    rental.setForm({ ...rental.form, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/15 bg-surface px-3 py-2.5 text-offwhite outline-none focus:border-brass"
                  placeholder="Jordan Miles"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block space-y-1.5">
                  <span className="text-sm text-offwhite/60">Phone</span>
                  <input
                    required
                    type="tel"
                    value={rental.form.phone}
                    onChange={(e) =>
                      rental.setForm({ ...rental.form, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/15 bg-surface px-3 py-2.5 text-offwhite outline-none focus:border-brass"
                    placeholder="(404) 555-0142"
                  />
                </label>
                <label className="block space-y-1.5">
                  <span className="text-sm text-offwhite/60">Email</span>
                  <input
                    required
                    type="email"
                    value={rental.form.email}
                    onChange={(e) =>
                      rental.setForm({ ...rental.form, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/15 bg-surface px-3 py-2.5 text-offwhite outline-none focus:border-brass"
                    placeholder="you@email.com"
                  />
                </label>
              </div>
              <label className="block space-y-1.5">
                <span className="text-sm text-offwhite/60">
                  License / experience note
                </span>
                <textarea
                  required
                  rows={2}
                  value={rental.form.licenseNote}
                  onChange={(e) =>
                    rental.setForm({
                      ...rental.form,
                      licenseNote: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/15 bg-surface px-3 py-2.5 text-offwhite outline-none focus:border-brass"
                  placeholder="GA cosmetology license · 6 years · specialty in color / braids"
                />
              </label>
              <div>
                <p className="mb-2 text-sm text-offwhite/60">Preferred tier</p>
                <div className="grid gap-2">
                  {rentalTiers.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => rental.setSelectedTier(t.id)}
                      className={cn(
                        "rounded-xl border px-3 py-3 text-left transition",
                        rental.form.tier === t.id
                          ? "border-brass bg-brass/10"
                          : "border-white/10 bg-surface hover:border-brass/40"
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium text-offwhite">
                          {t.name}
                        </span>
                        <span className="text-sm text-brass">
                          ${t.prices.weekly}/{BILLING_LABELS.weekly.toLowerCase()}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <label className="block space-y-1.5">
                <span className="text-sm text-offwhite/60">Desired start date</span>
                <input
                  required
                  type="date"
                  value={rental.form.startDate}
                  onChange={(e) =>
                    rental.setForm({ ...rental.form, startDate: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/15 bg-surface px-3 py-2.5 text-offwhite outline-none focus:border-brass [color-scheme:dark]"
                />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm text-offwhite/60">
                  Portfolio or Instagram (optional)
                </span>
                <input
                  value={rental.form.portfolio}
                  onChange={(e) =>
                    rental.setForm({ ...rental.form, portfolio: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/15 bg-surface px-3 py-2.5 text-offwhite outline-none focus:border-brass"
                  placeholder="@yourcuts or portfolio URL"
                />
              </label>
              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass py-3 font-medium text-charcoal disabled:opacity-40 hover:bg-amber"
              >
                Submit request
                <ChevronRight className="size-4" />
              </button>
            </form>
          )}
        </div>
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
