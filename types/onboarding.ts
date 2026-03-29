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

  // Step 3: Style preferences
  styleArchetypes: string[];
  favoriteColors: string[];
  avoidColors: string[];
  favoriteBrands: string[];
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
  styleArchetypes: [],
  favoriteColors: [],
  avoidColors: [],
  favoriteBrands: [],
  fitPreference: "",
  budgetPerItem: "",
  bundleFrequency: "",
  additionalNotes: "",
};

export const STYLE_ARCHETYPES = [
  "Classic / Preppy",
  "Streetwear",
  "Workwear / Rugged",
  "Minimalist",
  "Vintage / Retro",
  "Americana",
  "Athleisure",
  "Smart Casual",
  "Avant-Garde",
  "Outdoor / Gorpcore",
] as const;

export const COLORS = [
  "Black",
  "White",
  "Navy",
  "Gray",
  "Olive",
  "Tan / Khaki",
  "Brown",
  "Burgundy",
  "Forest Green",
  "Cream",
  "Light Blue",
  "Rust / Terracotta",
] as const;

export const BRANDS = [
  "Patagonia",
  "Carhartt",
  "Ralph Lauren",
  "J. Crew",
  "Levi's",
  "Nike",
  "New Balance",
  "North Face",
  "Pendleton",
  "Filson",
  "Brooks Brothers",
  "LL Bean",
  "Banana Republic",
  "Gap",
  "Uniqlo",
  "Other / Surprise Me",
] as const;

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
