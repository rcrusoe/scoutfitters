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
  src: string;
  alt: string;
  tags: string[];
};

export const STYLE_IMAGES: StyleImage[] = [
  {
    id: "wool-crewneck",
    src: "/styles/01-wool-crewneck.jpg",
    alt: "Brushed wool crewneck sweater over plaid shirt with khakis",
    tags: ["Classic / Preppy", "Smart Casual", "Knitwear"],
  },
  {
    id: "yohji-yamamoto",
    src: "/styles/02-graphic-design.jpg",
    alt: "Yohji Yamamoto oversized graphic shirt",
    tags: ["Avant-Garde", "Streetwear", "Designer"],
  },
  {
    id: "aime-leon-dore",
    src: "/styles/03-aime-leon-dore.jpg",
    alt: "Aimé Leon Dore colorblock puffer jacket with cap",
    tags: ["Streetwear", "Vintage / Retro", "Outerwear"],
  },
  {
    id: "sporty-casual",
    src: "/styles/04-sporty-casual.jpg",
    alt: "Chambray band-collar shirt with dark chinos",
    tags: ["Smart Casual", "Minimalist", "Clean"],
  },
  {
    id: "safari-smart",
    src: "/styles/05-safari-smart.jpg",
    alt: "Khaki field jacket with shirt and tie",
    tags: ["Smart Casual", "Workwear / Rugged", "Americana"],
  },
  {
    id: "tweed-layers",
    src: "/styles/06-tweed.jpg",
    alt: "Tweed blazer with knit waistcoat and pocket square",
    tags: ["Classic / Preppy", "Heritage", "Tailored"],
  },
  {
    id: "casual-layers",
    src: "/styles/07-outfit-layers.jpg",
    alt: "Tan suede jacket with white tee and jeans",
    tags: ["Casual", "Americana", "Vintage / Retro"],
  },
  {
    id: "summer-casual",
    src: "/styles/08-summer-looks.jpg",
    alt: "Oversized graphic tee with shorts and bucket hat",
    tags: ["Streetwear", "Casual", "Summer"],
  },
  {
    id: "brioni-spring",
    src: "/styles/09-brioni-spring.jpg",
    alt: "Brioni relaxed blue shirt with linen trousers",
    tags: ["Smart Casual", "Minimalist", "Italian"],
  },
  {
    id: "ralph-lauren-rrl",
    src: "/styles/10-ralph-lauren.jpg",
    alt: "Ralph Lauren RRL southwestern belted cardigan",
    tags: ["Americana", "Vintage / Retro", "Heritage"],
  },
  {
    id: "fall-dark",
    src: "/styles/11-fall-outfits.jpg",
    alt: "All-black trucker jacket with white sneakers",
    tags: ["Minimalist", "Smart Casual", "Monochrome"],
  },
  {
    id: "old-money",
    src: "/styles/12-old-money.jpg",
    alt: "Linen shirt and cream trousers in Venice",
    tags: ["Smart Casual", "Classic / Preppy", "Summer"],
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
