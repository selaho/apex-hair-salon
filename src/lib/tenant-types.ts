export type ServiceCategory =
  | "Cuts & Styling"
  | "Color"
  | "Braiding & Protective"
  | "Treatments"
  | "Kids & Family";

export type Service = {
  id: string;
  title: string;
  description: string;
  duration: number;
  price: number;
  category: ServiceCategory;
};

/** Staff member — stylists, colorists, braiders */
export type Barber = {
  id: string;
  name: string;
  title: string;
  years: number;
  bio: string;
  photo: string;
  portfolio: string[];
};

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  tag: "Color" | "Cuts" | "Braids" | "Salon Vibe";
};

export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  source: "Google" | "Yelp" | "Booksy";
};

export type BillingPeriod = "daily" | "weekly" | "monthly";

export type RentalTierId = "flex" | "standard" | "prime";

export type RentalTier = {
  id: RentalTierId;
  name: string;
  blurb: string;
  prices: Record<BillingPeriod, number>;
  amenities: string[];
  badge?: string;
};

export type ChairStatus = "Available Now" | "Part-Time / Daily" | "Waitlist";

export type OpenChair = {
  id: string;
  name: string;
  location: string;
  status: ChairStatus;
  amenities: string[];
  preferredTier: RentalTierId;
  note: string;
};

export type TenantTheme = {
  charcoal: string;
  surface: string;
  mutedBarber: string;
  brass: string;
  amber: string;
  offwhite: string;
};

export type ShopInfo = {
  name: string;
  shortName: string;
  tagline: string;
  subtitle: string;
  phone: string;
  phoneHref: string;
  smsHref: string;
  email: string;
  address: string;
  mapsUrl: string;
  mapsEmbed: string;
  rating: number;
  reviewCount: number;
  instagram: string;
  facebook?: string;
  locationLabel: string;
  heroImage: string;
  heroEyebrow: string;
  badges: string[];
};

export type PartnerBrand = {
  name: string;
  tagline: string;
  url: string;
  blurb: string;
};

export type TenantFeatures = {
  braiding: boolean;
  rentals: boolean;
};

export type TenantBrand = {
  id: string;
  shop: ShopInfo;
  theme: TenantTheme;
  features: TenantFeatures;
  partner: PartnerBrand;
  hours: { day: string; open: string; close: string }[];
  services: Service[];
  serviceCategories: ServiceCategory[];
  braidingHighlights: { title: string; copy: string }[];
  barbers: Barber[];
  gallery: GalleryItem[];
  reviews: Review[];
  timeSlots: string[];
  rentalTiers: RentalTier[];
  openChairs: OpenChair[];
  meta: {
    title: string;
    description: string;
  };
  footerNote: string;
};
