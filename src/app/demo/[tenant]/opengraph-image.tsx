import { ImageResponse } from "next/og";
import { TENANTS } from "@/tenants";

export const alt = "Hair salon demo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return Object.keys(TENANTS).map((tenant) => ({ tenant }));
}

type Props = { params: Promise<{ tenant: string }> };

export default async function TenantOpenGraphImage({ params }: Props) {
  const { tenant: id } = await params;
  const tenant = TENANTS[id];
  const accent = tenant?.theme.brass ?? "#e85d04";
  const charcoal = tenant?.theme.charcoal ?? "#121212";
  const name = tenant?.shop.shortName ?? "Shop Demo";
  const tagline = tenant?.shop.tagline ?? "COTGI Hair Salon Demo";
  const location = tenant?.shop.locationLabel ?? "East Point · 30344";
  const initial = name.trim().charAt(0).toUpperCase() || "C";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: charcoal,
          padding: 64,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 88,
              height: 88,
              borderRadius: 22,
              background: accent,
              color: charcoal,
              fontSize: 48,
              fontWeight: 700,
            }}
          >
            {initial}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 6,
            }}
          >
            <div
              style={{
                display: "flex",
                color: accent,
                fontSize: 20,
                letterSpacing: 4,
                textTransform: "uppercase",
                fontFamily: "sans-serif",
              }}
            >
              COTGI demo
            </div>
            <div
              style={{
                display: "flex",
                color: "rgba(249,250,251,0.55)",
                fontSize: 20,
                fontFamily: "sans-serif",
              }}
            >
              {location}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              color: "#f9fafb",
              fontSize: 72,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            {name}
          </div>
          <div
            style={{
              display: "flex",
              color: accent,
              fontSize: 36,
              maxWidth: 980,
            }}
          >
            {tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "sans-serif",
            fontSize: 22,
            color: "rgba(249,250,251,0.45)",
          }}
        >
          <div style={{ display: "flex" }}>
            Bookable co-brand · powered by COTGI
          </div>
          <div style={{ display: "flex", color: accent }}>cotgi.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
