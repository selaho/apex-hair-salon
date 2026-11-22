import type { TenantBrand } from "@/lib/tenant-types";

const HERO =
  "https://images.unsplash.com/photo-1633681926022-84c1235ec049?auto=format&fit=crop&w=2000&q=80";
const CUT =
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80";
const COLOR =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80";
const VIBE =
  "https://images.unsplash.com/photo-1521590832167-7bcbfaaae1c8?auto=format&fit=crop&w=1200&q=80";

export const strandAtelierTenant: TenantBrand = {
  id: "strand-atelier",
  shop: {
    name: "Strand Atelier",
    shortName: "Strand",
    tagline: "Soft Color. Sharp Cut.",
    subtitle:
      "Boutique East Point salon for lived-in color, silk presses, and appointment-first styling near 30344.",
    phone: "(404) 555-0192",
    phoneHref: "tel:+14045550192",
    smsHref: "sms:+14045550192",
    email: "hello@strandatelier.com",
    address: "1515 Cleveland Ave, East Point, GA 30344",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=1515+Cleveland+Ave,+East+Point,+GA+30344",
    mapsEmbed:
      "https://maps.google.com/maps?q=1515+Cleveland+Ave,+East+Point,+GA+30344&t=&z=15&ie=UTF8&iwloc=&output=embed",
    rating: 4.8,
    reviewCount: 94,
    instagram: "@strandatelier",
    locationLabel: "East Point · 30344",
    heroImage: HERO,
    heroEyebrow: "Cleveland Ave · Co-branded with COTGI",
    badges: ["Appointments", "Color Specialists", "Silk Press"],
  },
  theme: {
    charcoal: "#12151a",
    surface: "#1a1e26",
    mutedBarber: "#2a3140",
    brass: "#8fa8c4",
    amber: "#c5d4e8",
    offwhite: "#f4f6f9",
  },
  features: { braiding: false, rentals: true },
  partner: {
    name: "COTGI",
    tagline: "Check. Fix. Grow.",
    url: "https://www.cotgi.com/",
    blurb:
      "Strand Atelier × COTGI — turnkey salon booking, local presence, and health-check care for East Point.",
  },
  hours: [
    { day: "Monday", open: "Closed", close: "Closed" },
    { day: "Tuesday", open: "10:00 AM", close: "7:00 PM" },
    { day: "Wednesday", open: "10:00 AM", close: "7:00 PM" },
    { day: "Thursday", open: "10:00 AM", close: "8:00 PM" },
    { day: "Friday", open: "10:00 AM", close: "8:00 PM" },
    { day: "Saturday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Sunday", open: "Closed", close: "Closed" },
  ],
  services: [
    {
      id: "cut-style",
      title: "Cut & Style",
      description: "Consultation, cut, and polished finish.",
      duration: 60,
      price: 65,
      category: "Cuts & Styling",
    },
    {
      id: "silk-press",
      title: "Silk Press",
      description: "Wash, press, and smooth finish with heat protection.",
      duration: 90,
      price: 85,
      category: "Cuts & Styling",
    },
    {
      id: "balayage",
      title: "Balayage",
      description: "Hand-painted dimension with custom tone.",
      duration: 180,
      price: 200,
      category: "Color",
    },
    {
      id: "gloss",
      title: "Gloss / Toner",
      description: "Refresh tone and shine between full color services.",
      duration: 45,
      price: 55,
      category: "Color",
    },
    {
      id: "treatment",
      title: "Bond / Moisture Treatment",
      description: "Repair-focused treatment with style finish.",
      duration: 50,
      price: 55,
      category: "Treatments",
    },
    {
      id: "kids",
      title: "Kids Style",
      description: "Simple kids cuts and finish.",
      duration: 40,
      price: 40,
      category: "Kids & Family",
    },
  ],
  serviceCategories: ["Cuts & Styling", "Color", "Treatments", "Kids & Family"],
  braidingHighlights: [],
  barbers: [
    {
      id: "lena",
      name: "Lena",
      title: "Owner · Colorist",
      years: 12,
      bio: "Soft dimension and healthy color — appointment-first boutique energy.",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
      portfolio: [COLOR, HERO, VIBE],
    },
    {
      id: "mira",
      name: "Mira",
      title: "Stylist",
      years: 6,
      bio: "Silk presses and clean cuts that hold shape through the week.",
      photo:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      portfolio: [CUT, VIBE, HERO],
    },
    {
      id: "sam",
      name: "Sam",
      title: "Junior Stylist",
      years: 3,
      bio: "Blowouts and gloss days — precise, calm, and detail-oriented.",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      portfolio: [VIBE, CUT, COLOR],
    },
  ],
  gallery: [
    { id: "g1", src: HERO, alt: "Strand Atelier salon atmosphere", tag: "Salon Vibe" },
    { id: "g2", src: COLOR, alt: "Color consultation finish", tag: "Color" },
    { id: "g3", src: CUT, alt: "Cut and style detail", tag: "Cuts" },
    { id: "g4", src: VIBE, alt: "Salon station lighting", tag: "Salon Vibe" },
    { id: "g5", src: COLOR, alt: "Gloss and tone work", tag: "Color" },
    { id: "g6", src: CUT, alt: "Blowout finish", tag: "Cuts" },
  ],
  reviews: [
    {
      id: "r1",
      name: "Color client",
      rating: 5,
      text: "Balayage looks expensive in the best way — soft and natural.",
      source: "Google",
    },
    {
      id: "r2",
      name: "Silk press",
      rating: 5,
      text: "Smooth without damage. Booking online made the whole visit easy.",
      source: "Google",
    },
    {
      id: "r3",
      name: "Regular",
      rating: 5,
      text: "Quiet boutique vibe and consistent results every visit.",
      source: "Yelp",
    },
  ],
  timeSlots: [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM",
  ],
  rentalTiers: [
    {
      id: "flex",
      name: "Daily / Flex Station",
      blurb: "Trial days in the boutique suite.",
      prices: { daily: 70, weekly: 320, monthly: 1100 },
      amenities: ["Station for the day", "Shared retail wall"],
    },
    {
      id: "standard",
      name: "Weekly Station",
      blurb: "Named station with salon booking profile.",
      prices: { daily: 60, weekly: 260, monthly: 950 },
      amenities: ["Dedicated station", "Online listing"],
      badge: "Most popular",
    },
    {
      id: "prime",
      name: "Window Station",
      blurb: "Front glass energy with featured placement.",
      prices: { daily: 90, weekly: 380, monthly: 1350 },
      amenities: ["Window visibility", "Featured booking"],
      badge: "High traffic",
    },
  ],
  openChairs: [
    {
      id: "s1",
      name: "Station B",
      location: "Main suite",
      status: "Available Now",
      amenities: ["Full station", "Storage"],
      preferredTier: "standard",
      note: "Best for weekly stylists.",
    },
    {
      id: "s2",
      name: "Flex Day",
      location: "Tue–Thu",
      status: "Part-Time / Daily",
      amenities: ["Day-rate flexible"],
      preferredTier: "flex",
      note: "Open mid-week for trials.",
    },
    {
      id: "s3",
      name: "Window Waitlist",
      location: "Front",
      status: "Waitlist",
      amenities: ["Prime sightline"],
      preferredTier: "prime",
      note: "Join the waitlist.",
    },
  ],
  meta: {
    title: "Strand Atelier | East Point, GA",
    description:
      "Co-branded COTGI demo for Strand Atelier — boutique color and styling on Cleveland Ave.",
  },
  footerNote:
    "Co-branded pitch demo for Strand Atelier × COTGI. Sample booking — not the salon’s live production system until connected.",
};
