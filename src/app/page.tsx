import Link from "next/link";
import { getDemoTenants } from "@/tenants";

export default function DemoHub() {
  const demos = getDemoTenants();

  return (
    <main className="min-h-svh bg-charcoal text-offwhite">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 20% -10%, rgb(196 120 138 / 28%), transparent), radial-gradient(ellipse 50% 40% at 90% 10%, rgb(232 180 188 / 18%), transparent)",
        }}
      />
      <div className="relative mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-4 py-16 sm:px-6">
        <p className="text-xs uppercase tracking-[0.35em] text-brass">
          COTGI · Hair salon outreach demos
        </p>
        <h1 className="mt-3 font-display text-5xl text-offwhite sm:text-6xl">
          Salon demos with separate URLs
        </h1>
        <p className="mt-4 max-w-2xl text-offwhite/65">
          One template, many brand packs. Each card opens that salon’s demo in a
          new window — stable URLs you can share in a pitch.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {demos.map((tenant) => (
            <Link
              key={tenant.id}
              href={`/demo/${tenant.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-surface transition hover:border-brass/50"
            >
              <div
                className="h-40 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${tenant.shop.heroImage})`,
                }}
              />
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-brass">
                  {tenant.shop.locationLabel}
                </p>
                <h2 className="mt-1 font-display text-3xl text-offwhite group-hover:text-brass">
                  {tenant.shop.shortName}
                </h2>
                <p className="mt-2 text-sm text-offwhite/55">
                  {tenant.shop.tagline}
                </p>
                <p className="mt-1 text-xs text-offwhite/40">
                  {tenant.shop.address}
                </p>
                <p className="mt-4 flex items-center justify-between gap-3 text-xs text-offwhite/40">
                  <span>/demo/{tenant.id}</span>
                  <span className="text-brass group-hover:underline">
                    Open demo ↗
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm text-offwhite/45">
          Co-branded with{" "}
          <a
            href="https://www.cotgi.com/"
            className="text-brass hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            COTGI
          </a>{" "}
          · Check. Fix. Grow.
        </p>
      </div>
    </main>
  );
}
