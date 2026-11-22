"use client";

import {
  createContext,
  useContext,
  type CSSProperties,
  type ReactNode,
} from "react";
import type { TenantBrand } from "@/lib/tenant-types";
import { themeStyleVars } from "@/lib/data";

const TenantContext = createContext<TenantBrand | null>(null);

export function TenantProvider({
  tenant,
  children,
}: {
  tenant: TenantBrand;
  children: ReactNode;
}) {
  return (
    <TenantContext.Provider value={tenant}>
      <div style={themeStyleVars(tenant.theme) as CSSProperties}>
        {children}
      </div>
    </TenantContext.Provider>
  );
}

export function useTenant(): TenantBrand {
  const tenant = useContext(TenantContext);
  if (!tenant) {
    throw new Error("useTenant must be used within TenantProvider");
  }
  return tenant;
}
