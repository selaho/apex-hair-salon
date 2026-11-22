import type { TenantBrand } from "@/lib/tenant-types";
import { apexTenant } from "@/tenants/apex";
import { carolAndBettysTenant } from "@/tenants/carol-and-bettys";

export const TENANTS: Record<string, TenantBrand> = {
  apex: apexTenant,
  "carol-and-bettys": carolAndBettysTenant,
};

/** Demo salons shown on the hub (exclude internal Apex reference template). */
export const DEMO_TENANT_IDS = ["carol-and-bettys"] as const;

export const DEFAULT_TENANT_ID = "carol-and-bettys";

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
