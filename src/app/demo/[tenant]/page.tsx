import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteShell } from "@/components/site/shell";
import { TenantProvider } from "@/components/tenant/tenant-context";
import { SITE_URL } from "@/lib/site";
import { TENANTS } from "@/tenants";

type Props = { params: Promise<{ tenant: string }> };

export function generateStaticParams() {
  return Object.keys(TENANTS).map((tenant) => ({ tenant }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tenant: id } = await params;
  const tenant = TENANTS[id];
  if (!tenant) return { title: "Shop demo" };

  const url = `${SITE_URL}/demo/${id}`;
  const title = tenant.meta.title;
  const description = tenant.meta.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/demo/${id}`,
    },
    openGraph: {
      type: "website",
      url,
      siteName: "COTGI Hair Salon Demos",
      title: tenant.shop.name,
      description,
      images: [
        {
          url: `/demo/${id}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: tenant.shop.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: tenant.shop.name,
      description,
      images: [`/demo/${id}/twitter-image`],
    },
  };
}

export default async function DemoShopPage({ params }: Props) {
  const { tenant: id } = await params;
  const tenant = TENANTS[id];
  if (!tenant) notFound();

  return (
    <TenantProvider tenant={tenant}>
      <div className="border-b border-white/10 bg-black/40 px-4 py-2 text-center text-xs text-offwhite/55">
        COTGI demo ·{" "}
        <a href="/" className="text-brass hover:underline">
          All shops
        </a>
        {" · "}
        <span className="text-offwhite/80">{tenant.shop.name}</span>
      </div>
      <SiteShell />
    </TenantProvider>
  );
}
