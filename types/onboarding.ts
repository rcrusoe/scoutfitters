export type OnboardingData = {
  // Step 1: Basic info
  firstName: string;
  email: string;

  // Step 2: Measurements
  shirtSize: string;
  pantWaist: string;
  pantInseam: string;
  shoeSize: string;
  height: string;
  weight: string;

  // Step 3: Visual style quiz
  selectedStyleImages: string[];
  fitPreference: string;

  // Step 4: Budget & logistics
  budgetPerItem: string;
  bundleFrequency: string;
  additionalNotes: string;
};

export const INITIAL_ONBOARDING_DATA: OnboardingData = {
  firstName: "",
  email: "",
  shirtSize: "",
  pantWaist: "",
  pantInseam: "",
  shoeSize: "",
  height: "",
  weight: "",
  selectedStyleImages: [],
  fitPreference: "",
  budgetPerItem: "",
  bundleFrequency: "",
  additionalNotes: "",
};

export type StyleImage = {
  id: string;
  label: string;
  tags: string[];
  gradient: string;
  icon: string;
};

export const STYLE_IMAGES: StyleImage[] = [
  {
    id: "ivy-league",
    label: "Ivy League",
    tags: ["Classic / Preppy", "Navy", "Ralph Lauren", "Brooks Brothers"],
    gradient: "from-blue-950 via-blue-900 to-emerald-900",
    icon: "🏫",
  },
  {
    id: "raw-denim",
    label: "Raw Denim & Boots",
    tags: ["Workwear / Rugged", "Brown", "Levi's", "Filson"],
    gradient: "from-indigo-950 via-indigo-900 to-amber-950",
    icon: "👢",
  },
  {
    id: "earth-layers",
    label: "Earth Tone Layers",
    tags: ["Minimalist", "Olive", "Tan / Khaki", "Uniqlo"],
    gradient: "from-stone-700 via-amber-800 to-stone-600",
    icon: "🍂",
  },
  {
    id: "vintage-sport",
    label: "Vintage Sportswear",
    tags: ["Vintage / Retro", "Rust / Terracotta", "Nike", "New Balance"],
    gradient: "from-orange-900 via-red-900 to-amber-900",
    icon: "🏆",
  },
  {
    id: "monochrome",
    label: "Monochrome Clean",
    tags: ["Minimalist", "Black", "White", "Gray"],
    gradient: "from-neutral-900 via-neutral-700 to-neutral-500",
    icon: "◻️",
  },
  {
    id: "flannel-camp",
    label: "Flannel & Camp",
    tags: ["Outdoor / Gorpcore", "Forest Green", "Patagonia", "LL Bean"],
    gradient: "from-green-950 via-emerald-900 to-lime-950",
    icon: "🏕️",
  },
  {
    id: "city-street",
    label: "City Streetwear",
    tags: ["Streetwear", "Black", "Nike", "New Balance"],
    gradient: "from-zinc-900 via-zinc-800 to-purple-950",
    icon: "🌃",
  },
  {
    id: "coastal",
    label: "Coastal Casual",
    tags: ["Smart Casual", "Light Blue", "Cream", "J. Crew"],
    gradient: "from-sky-800 via-cyan-700 to-sky-500",
    icon: "🌊",
  },
  {
    id: "western",
    label: "Modern Western",
    tags: ["Americana", "Brown", "Tan / Khaki", "Levi's"],
    gradient: "from-amber-900 via-yellow-900 to-orange-950",
    icon: "🤠",
  },
  {
    id: "tech-shell",
    label: "Tech Shell",
    tags: ["Outdoor / Gorpcore", "Black", "Olive", "North Face", "Patagonia"],
    gradient: "from-slate-900 via-slate-700 to-teal-900",
    icon: "🧥",
  },
  {
    id: "thrift-eclectic",
    label: "Thrift Eclectic",
    tags: ["Vintage / Retro", "Burgundy", "Forest Green"],
    gradient: "from-fuchsia-950 via-violet-900 to-teal-900",
    icon: "🎨",
  },
  {
    id: "linen-summer",
    label: "Linen & Laidback",
    tags: ["Smart Casual", "Cream", "Tan / Khaki", "Banana Republic"],
    gradient: "from-amber-100 via-orange-100 to-stone-200",
    icon: "☀️",
  },
];

export const SHIRT_SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;

export const FIT_PREFERENCES = [
  "Slim / Tailored",
  "Regular",
  "Relaxed / Oversized",
] as const;

export const BUDGET_RANGES = [
  "Under $15 per item",
  "$15 – $30 per item",
  "$30 – $50 per item",
  "$50+ per item",
] as const;

export const BUNDLE_FREQUENCIES = [
  "Every 2 weeks",
  "Monthly",
  "Every 2 months",
  "Quarterly",
  "One-time to start",
] as const;
