import type { TenantBrand } from "@/lib/tenant-types";

const HERO =
  "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=2000&q=80";
const BRAIDS =
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=80";
const STYLE =
  "https://images.unsplash.com/photo-1595475884564-0738dde6d077?auto=format&fit=crop&w=1200&q=80";
const VIBE =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80";

export const bloomBraidsTenant: TenantBrand = {
  id: "bloom-braids",
  shop: {
    name: "Bloom Braids & Beauty",
    shortName: "Bloom",
    tagline: "Protective Styles. Soft Hands.",
    subtitle:
      "East Point braiding and beauty studio for box braids, feed-ins, kids styles, and walk-in friendly appointments.",
    phone: "(404) 555-0177",
    phoneHref: "tel:+14045550177",
    smsHref: "sms:+14045550177",
    email: "book@bloombraids.com",
    address: "2783 Washington Rd, East Point, GA 30344",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=2783+Washington+Rd,+East+Point,+GA+30344",
    mapsEmbed:
      "https://maps.google.com/maps?q=2783+Washington+Rd,+East+Point,+GA+30344&t=&z=15&ie=UTF8&iwloc=&output=embed",
    rating: 4.7,
    reviewCount: 142,
    instagram: "@bloombraids",
    locationLabel: "East Point · 30344",
    heroImage: HERO,
    heroEyebrow: "Washington Rd · Co-branded with COTGI",
    badges: ["Braiding Specialists", "Kids Welcome", "Walk-ins Welcome"],
  },
  theme: {
    charcoal: "#14110f",
    surface: "#1f1a16",
    mutedBarber: "#322820",
    brass: "#d4a017",
    amber: "#f0c75e",
    offwhite: "#faf6ef",
  },
  features: { braiding: true, rentals: true },
  partner: {
    name: "COTGI",
    tagline: "Check. Fix. Grow.",
    url: "https://www.cotgi.com/",
    blurb:
      "Bloom Braids & Beauty × COTGI — turnkey booking and local presence for protective-style salons.",
  },
  hours: [
    { day: "Monday", open: "10:00 AM", close: "7:00 PM" },
    { day: "Tuesday", open: "10:00 AM", close: "7:00 PM" },
    { day: "Wednesday", open: "10:00 AM", close: "7:00 PM" },
    { day: "Thursday", open: "10:00 AM", close: "8:00 PM" },
    { day: "Friday", open: "10:00 AM", close: "8:00 PM" },
    { day: "Saturday", open: "9:00 AM", close: "6:00 PM" },
    { day: "Sunday", open: "12:00 PM", close: "5:00 PM" },
  ],
  services: [
    {
      id: "box-braids",
      title: "Box Braids",
      description: "Mid to waist box braids with clean parts and sealed ends.",
      duration: 180,
      price: 150,
      category: "Braiding & Protective",
    },
    {
      id: "knotless",
      title: "Knotless Braids",
      description: "Soft knotless install with controlled tension.",
      duration: 210,
      price: 180,
      category: "Braiding & Protective",
    },
    {
      id: "feed-ins",
      title: "Feed-Ins / Stitch",
      description: "Feed-in or stitch braids for lasting style.",
      duration: 120,
      price: 100,
      category: "Braiding & Protective",
    },
    {
      id: "cut-style",
      title: "Trim & Style",
      description: "Shape-up trim and simple finish between installs.",
      duration: 45,
      price: 40,
      category: "Cuts & Styling",
    },
    {
      id: "treatment",
      title: "Scalp Oil Treatment",
      description: "Scalp care and moisture between protective styles.",
      duration: 30,
      price: 30,
      category: "Treatments",
    },
    {
      id: "kids-braids",
      title: "Kids Braids",
      description: "Patient kids braiding with gentle tension.",
      duration: 90,
      price: 75,
      category: "Kids & Family",
    },
  ],
  serviceCategories: [
    "Braiding & Protective",
    "Cuts & Styling",
    "Treatments",
    "Kids & Family",
  ],
  braidingHighlights: [
    {
      title: "Soft hands, clean parts",
      copy: "Protective styles built for comfort and longevity.",
    },
    {
      title: "Kids welcome",
      copy: "Family chairs with patience built into the bookable day.",
    },
    {
      title: "Co-branded with COTGI",
      copy: "Same turnkey booking shell as our other East Point salon demos.",
    },
  ],
  barbers: [
    {
      id: "bloom",
      name: "Keisha",
      title: "Lead Braider",
      years: 10,
      bio: "Knotless and box braids with soft tension — the Washington Rd specialist.",
      photo:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
      portfolio: [BRAIDS, HERO, STYLE],
    },
    {
      id: "tia",
      name: "Tia",
      title: "Braider",
      years: 6,
      bio: "Kids styles and feed-ins that stay neat without the headache.",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      portfolio: [STYLE, BRAIDS, VIBE],
    },
    {
      id: "nia-b",
      name: "Nia",
      title: "Beauty Stylist",
      years: 5,
      bio: "Trims, scalp care, and finish work between installs.",
      photo:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
      portfolio: [VIBE, STYLE, HERO],
    },
  ],
  gallery: [
    { id: "g1", src: HERO, alt: "Bloom studio atmosphere", tag: "Salon Vibe" },
    { id: "g2", src: BRAIDS, alt: "Fresh protective braid install", tag: "Braids" },
    { id: "g3", src: STYLE, alt: "Style finish detail", tag: "Cuts" },
    { id: "g4", src: VIBE, alt: "Salon stations", tag: "Salon Vibe" },
    { id: "g5", src: BRAIDS, alt: "Clean parts and rows", tag: "Braids" },
    { id: "g6", src: STYLE, alt: "Beauty finish", tag: "Cuts" },
  ],
  reviews: [
    {
      id: "r1",
      name: "Knotless client",
      rating: 5,
      text: "Soft install, neat parts, and I could still sleep that night.",
      source: "Google",
    },
    {
      id: "r2",
      name: "Mom",
      rating: 5,
      text: "Great with my daughter — patient and still finished on time.",
      source: "Booksy",
    },
    {
      id: "r3",
      name: "Regular",
      rating: 5,
      text: "Book online, walk in looking right. East Point staple energy.",
      source: "Google",
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
      name: "Daily / Flex Chair",
      blurb: "Part-time braiding days on the Bloom floor.",
      prices: { daily: 60, weekly: 280, monthly: 980 },
      amenities: ["Chair for the day", "Shared back bar"],
    },
    {
      id: "standard",
      name: "Weekly Station",
      blurb: "Named station with salon booking profile.",
      prices: { daily: 50, weekly: 220, monthly: 800 },
      amenities: ["Dedicated station", "Online listing"],
      badge: "Most popular",
    },
    {
      id: "prime",
      name: "Prime Booth",
      blurb: "High-visibility booth with featured placement.",
      prices: { daily: 80, weekly: 340, monthly: 1200 },
      amenities: ["Featured booking", "Extra storage"],
      badge: "High traffic",
    },
  ],
  openChairs: [
    {
      id: "s1",
      name: "Station 2",
      location: "Main Floor",
      status: "Available Now",
      amenities: ["Full station", "Storage"],
      preferredTier: "standard",
      note: "Best for weekly braiders.",
    },
    {
      id: "s2",
      name: "Flex Chair",
      location: "Weekdays",
      status: "Part-Time / Daily",
      amenities: ["Day-rate flexible"],
      preferredTier: "flex",
      note: "Open for trial days.",
    },
    {
      id: "s3",
      name: "Booth Waitlist",
      location: "Rear",
      status: "Waitlist",
      amenities: ["Extra storage"],
      preferredTier: "prime",
      note: "Join the waitlist.",
    },
  ],
  meta: {
    title: "Bloom Braids & Beauty | East Point, GA",
    description:
      "Co-branded COTGI demo for Bloom — protective styles and beauty booking on Washington Rd.",
  },
  footerNote:
    "Co-branded pitch demo for Bloom Braids & Beauty × COTGI. Sample booking — not the salon’s live production system until connected.",
};
