import type { TenantTheme } from "@/lib/tenant-types";

export type {
  Barber,
  BillingPeriod,
  ChairStatus,
  GalleryItem,
  OpenChair,
  RentalTier,
  RentalTierId,
  Review,
  Service,
  ServiceCategory,
  ShopInfo,
  TenantBrand,
  TenantFeatures,
  TenantTheme,
} from "@/lib/tenant-types";

export { getTenant, TENANTS, DEFAULT_TENANT_ID, resolveTenantId } from "@/tenants";

export const BILLING_LABELS: Record<"daily" | "weekly" | "monthly", string> = {
  daily: "Daily",
  weekly: "Weekly",
  monthly: "Monthly",
};

export function getTodayHoursStatus(
  hours: { day: string; open: string; close: string }[]
) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = days[new Date().getDay()];
  const entry = hours.find((h) => h.day === today)!;
  if (entry.open === "Closed") {
    return {
      today,
      label: "Closed today",
      open: false,
      closesAt: null as string | null,
    };
  }
  if (/24\s*hours?/i.test(entry.open) || entry.open === entry.close) {
    return {
      today,
      label: /24\s*hours?/i.test(entry.open)
        ? "Open Now • 24 hours"
        : `Open Now • ${entry.open}`,
      open: true,
      closesAt: null as string | null,
    };
  }
  return {
    today,
    label: `Open Now • Closes at ${entry.close}`,
    open: true,
    closesAt: entry.close,
  };
}

export function themeStyleVars(theme: TenantTheme): Record<string, string> {
  return {
    "--charcoal": theme.charcoal,
    "--surface": theme.surface,
    "--muted-barber": theme.mutedBarber,
    "--brass": theme.brass,
    "--amber": theme.amber,
    "--offwhite": theme.offwhite,
    "--background": theme.charcoal,
    "--foreground": theme.offwhite,
    "--card": theme.surface,
    "--card-foreground": theme.offwhite,
    "--popover": theme.surface,
    "--popover-foreground": theme.offwhite,
    "--primary": theme.brass,
    "--primary-foreground": theme.charcoal,
    "--secondary": theme.mutedBarber,
    "--secondary-foreground": theme.offwhite,
    "--muted": theme.mutedBarber,
    "--muted-foreground": "#a3a3a3",
    "--accent": theme.mutedBarber,
    "--accent-foreground": theme.offwhite,
    "--ring": theme.brass,
  };
}
