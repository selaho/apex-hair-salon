import type { TenantBrand } from "@/lib/tenant-types";
import { apexTenant } from "@/tenants/apex";
import { bloomBraidsTenant } from "@/tenants/bloom-braids";
import { strandAtelierTenant } from "@/tenants/strand-atelier";

export const TENANTS: Record<string, TenantBrand> = {
  apex: apexTenant,
  "strand-atelier": strandAtelierTenant,
  "bloom-braids": bloomBraidsTenant,
};

/** Demo salons shown on the hub (exclude internal Apex reference template). */
export const DEMO_TENANT_IDS = ["strand-atelier", "bloom-braids"] as const;

export const DEFAULT_TENANT_ID = "strand-atelier";

export function resolveTenantId(raw?: string | null): string {
  const id = (raw || DEFAULT_TENANT_ID).trim().toLowerCase();
  return TENANTS[id] ? id : DEFAULT_TENANT_ID;
}

export function getTenant(raw?: string | null): TenantBrand {
  return TENANTS[resolveTenantId(raw)];
}

export function getDemoTenants(): TenantBrand[] {
  return DEMO_TENANT_IDS.map((id) => TENANTS[id]);
}
