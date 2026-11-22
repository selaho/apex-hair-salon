import { DEMO_TENANT_IDS, TENANTS } from "@/tenants";

export const dynamic = "force-static";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://apex-hair-salon.vercel.app"
).replace(/\/$/, "");

/** Machine-readable demo catalog for the prospecting tool (and other COTGI apps). */
export function GET() {
  const demos = DEMO_TENANT_IDS.map((slug) => {
    const tenant = TENANTS[slug];
    const shop = tenant.shop;
    const aliases = Array.from(
      new Set(
        [shop.shortName, shop.name, slug.replace(/-/g, " ")].filter(Boolean).map((s) => s.trim()),
      ),
    );
    return {
      slug,
      shop_name: shop.name,
      short_name: shop.shortName,
      address: shop.address,
      location_label: shop.locationLabel,
      google_place_id: null as string | null,
      aliases,
      demo_url: `${SITE_URL}/demo/${slug}`,
    };
  });

  return Response.json({
    vertical: "hair_salon",
    label: "Hair salons",
    base_url: SITE_URL,
    path_template: "/demo/{slug}",
    keyword_hints: [
      "hair salon",
      "salon",
      "beauty salon",
      "hair stylist",
      "braiding",
      "color",
    ],
    count: demos.length,
    demos,
    updated_at: new Date().toISOString(),
  });
}
