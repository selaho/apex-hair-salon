import type { TenantBrand } from "@/lib/tenant-types";

const HERO =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80";
const STATION =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80";
const COLOR =
  "https://images.unsplash.com/photo-1521590832167-7bcbfaaae1c8?auto=format&fit=crop&w=1200&q=80";
const BRAIDS =
  "https://images.unsplash.com/photo-1633681926022-84c1235ec049?auto=format&fit=crop&w=1200&q=80";

export const apexTenant: TenantBrand = {
  id: "apex",
  shop: {
    name: "Apex Hair Studio",
    shortName: "Apex",
    tagline: "Color. Cut. Crown.",
    subtitle:
      "East Point reference salon for precision cuts, lived-in color, and protective styles — book in under a minute.",
    phone: "(404) 555-0144",
    phoneHref: "tel:+14045550144",
    smsHref: "sms:+14045550144",
    email: "book@apexhairstudio.com",
    address: "2900 Main St, East Point, GA 30344",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=2900+Main+St,+East+Point,+GA+30344",
    mapsEmbed:
      "https://maps.google.com/maps?q=East+Point,+GA+30344&t=&z=14&ie=UTF8&iwloc=&output=embed",
    rating: 4.9,
    reviewCount: 186,
    instagram: "@apexhairstudio",
    locationLabel: "East Point · 30344",
    heroImage: HERO,
    heroEyebrow: "East Point · Hair & Beauty",
    badges: ["Walk-ins Welcome", "Color Specialists", "5-Star Rated"],
  },
  theme: {
    charcoal: "#161218",
    surface: "#1f1a22",
    mutedBarber: "#2e2733",
    brass: "#c4788a",
    amber: "#e8b4bc",
    offwhite: "#faf7f8",
  },
  features: { braiding: true, rentals: true },
  partner: {
    name: "COTGI",
    tagline: "Check. Fix. Grow.",
    url: "https://www.cotgi.com/",
    blurb:
      "Reference salon prototype for COTGI — turnkey booking and local presence ready to brand for any hair salon lead.",
  },
  hours: [
    { day: "Monday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Tuesday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Wednesday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Thursday", open: "9:00 AM", close: "8:00 PM" },
    { day: "Friday", open: "9:00 AM", close: "8:00 PM" },
    { day: "Saturday", open: "8:00 AM", close: "6:00 PM" },
    { day: "Sunday", open: "Closed", close: "Closed" },
  ],
  services: [
    {
      id: "cut-style",
      title: "Cut & Style",
      description: "Consultation, precision cut, and finish for your everyday look.",
      duration: 60,
      price: 55,
      category: "Cuts & Styling",
    },
    {
      id: "blowout",
      title: "Blowout",
      description: "Wash, blow-dry, and polished finish.",
      duration: 45,
      price: 40,
      category: "Cuts & Styling",
    },
    {
      id: "balayage",
      title: "Balayage / Highlights",
      description: "Custom painted color with toning and style finish.",
      duration: 180,
      price: 185,
      category: "Color",
    },
    {
      id: "single-process",
      title: "Single-Process Color",
      description: "All-over color refresh with gloss and blowout.",
      duration: 120,
      price: 95,
      category: "Color",
    },
    {
      id: "box-braids",
      title: "Box Braids",
      description: "Protective box braids with clean parts — mid to waist options.",
      duration: 180,
      price: 160,
      category: "Braiding & Protective",
    },
    {
      id: "feed-ins",
      title: "Feed-In / Cornrows",
      description: "Feed-in braids or cornrows with lasting tension control.",
      duration: 90,
      price: 90,
      category: "Braiding & Protective",
    },
    {
      id: "treatment",
      title: "Deep Conditioning Treatment",
      description: "Moisture and repair treatment with style finish.",
      duration: 45,
      price: 45,
      category: "Treatments",
    },
    {
      id: "kids",
      title: "Kids Cut / Style",
      description: "Patient kids cuts and simple styles.",
      duration: 40,
      price: 35,
      category: "Kids & Family",
    },
  ],
  serviceCategories: [
    "Cuts & Styling",
    "Color",
    "Braiding & Protective",
    "Treatments",
    "Kids & Family",
  ],
  braidingHighlights: [
    {
      title: "Protective styles that last",
      copy: "Clean parts, controlled tension, and finishes that photograph as well as they wear.",
    },
    {
      title: "Color + braids under one roof",
      copy: "Book color, cuts, and protective styles in the same digital chair.",
    },
    {
      title: "Co-branded with COTGI",
      copy: "Turnkey salon booking experience ready for East Point outreach.",
    },
  ],
  barbers: [
    {
      id: "nia",
      name: "Nia",
      title: "Lead Stylist · Color",
      years: 11,
      bio: "Lived-in color and soft blends — the chair clients trust for dimension.",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      portfolio: [COLOR, HERO, STATION],
    },
    {
      id: "aya",
      name: "Aya",
      title: "Braiding Specialist",
      years: 9,
      bio: "Protective styles with lasting comfort and clean geometry.",
      photo:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
      portfolio: [BRAIDS, STATION, HERO],
    },
    {
      id: "jordan",
      name: "Jordan",
      title: "Stylist",
      years: 7,
      bio: "Precision cuts and blowouts for everyday polish.",
      photo:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
      portfolio: [STATION, HERO, COLOR],
    },
  ],
  gallery: [
    { id: "g1", src: HERO, alt: "Salon floor with styling stations", tag: "Salon Vibe" },
    { id: "g2", src: COLOR, alt: "Color and gloss finish", tag: "Color" },
    { id: "g3", src: STATION, alt: "Styling chair detail", tag: "Cuts" },
    { id: "g4", src: BRAIDS, alt: "Protective braid finish", tag: "Braids" },
    { id: "g5", src: HERO, alt: "Bright salon interior", tag: "Salon Vibe" },
    { id: "g6", src: COLOR, alt: "Dimensional color work", tag: "Color" },
  ],
  reviews: [
    {
      id: "r1",
      name: "East Point client",
      rating: 5,
      text: "Color came out exactly as we talked through — soft, dimensional, and healthy.",
      source: "Google",
    },
    {
      id: "r2",
      name: "Braids client",
      rating: 5,
      text: "Clean parts, no tightness headaches. Booking online was easy.",
      source: "Booksy",
    },
    {
      id: "r3",
      name: "Regular",
      rating: 5,
      text: "Cut and blowout that lasts all week. This is the reference salon demo for a reason.",
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
      name: "Daily / Flex Station",
      blurb: "Part-time or trial days on the Apex floor.",
      prices: { daily: 65, weekly: 300, monthly: 1050 },
      amenities: ["Station + mirror for the booked day", "Shared back bar", "Client Wi-Fi"],
    },
    {
      id: "standard",
      name: "Standard Weekly Station",
      blurb: "Your named station with a booking profile on the salon site.",
      prices: { daily: 55, weekly: 240, monthly: 875 },
      amenities: ["Dedicated station", "Online booking listing", "Drawer storage"],
      badge: "Most popular",
    },
    {
      id: "prime",
      name: "Prime Front Station",
      blurb: "High-visibility station with featured placement.",
      prices: { daily: 85, weekly: 350, monthly: 1250 },
      amenities: ["Front sightline", "Featured booking placement", "Extra storage"],
      badge: "High traffic",
    },
  ],
  openChairs: [
    {
      id: "s1",
      name: "Station #3",
      location: "Main Floor",
      status: "Available Now",
      amenities: ["Full station", "Mirror lights", "Storage"],
      preferredTier: "standard",
      note: "Best for weekly stylists in East Point.",
    },
    {
      id: "s2",
      name: "Flex Station",
      location: "Mid-week",
      status: "Part-Time / Daily",
      amenities: ["Day-rate flexible"],
      preferredTier: "flex",
      note: "Open for trial days.",
    },
    {
      id: "s3",
      name: "Booth Waitlist",
      location: "Front",
      status: "Waitlist",
      amenities: ["Prime sightline"],
      preferredTier: "prime",
      note: "Join the waitlist for the next opening.",
    },
  ],
  meta: {
    title: "Apex Hair Studio | East Point, GA",
    description:
      "COTGI reference hair salon demo — cuts, color, and protective styles with online booking.",
  },
  footerNote:
    "Reference prototype for COTGI salon outreach — a turnkey digital platform ready to brand for any hair salon lead.",
};
