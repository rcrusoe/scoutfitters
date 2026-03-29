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
  tall?: boolean;
};

export const STYLE_IMAGES: StyleImage[] = [
  {
    id: "preppy-blazer",
    src: "/styles/preppy-blazer.jpg",
    alt: "Man in navy blazer and chinos",
    tags: ["Classic / Preppy", "Smart Casual"],
    tall: true,
  },
  {
    id: "denim-jacket",
    src: "/styles/denim-jacket.jpg",
    alt: "White t-shirt with denim jacket",
    tags: ["Casual", "Americana"],
  },
  {
    id: "workwear-boots",
    src: "/styles/workwear-boots.jpg",
    alt: "Rugged workwear with leather boots",
    tags: ["Workwear / Rugged", "Americana"],
    tall: true,
  },
  {
    id: "streetwear-hoodie",
    src: "/styles/streetwear-hoodie.jpg",
    alt: "Streetwear hoodie and sneakers",
    tags: ["Streetwear", "Athleisure"],
  },
  {
    id: "flannel-layers",
    src: "/styles/flannel-layers.jpg",
    alt: "Layered flannel shirt look",
    tags: ["Outdoor / Gorpcore", "Workwear / Rugged"],
  },
  {
    id: "minimal-tee",
    src: "/styles/minimal-tee.jpg",
    alt: "Clean minimal t-shirt outfit",
    tags: ["Minimalist", "Casual"],
    tall: true,
  },
  {
    id: "leather-jacket",
    src: "/styles/leather-jacket.jpg",
    alt: "Black leather jacket look",
    tags: ["Streetwear", "Vintage / Retro"],
  },
  {
    id: "casual-chinos",
    src: "/styles/casual-chinos.jpg",
    alt: "Casual chinos with button-down shirt",
    tags: ["Smart Casual", "Classic / Preppy"],
    tall: true,
  },
  {
    id: "overcoat",
    src: "/styles/overcoat.jpg",
    alt: "Tailored overcoat winter look",
    tags: ["Smart Casual", "Classic / Preppy"],
  },
  {
    id: "vintage-corduroy",
    src: "/styles/vintage-corduroy.jpg",
    alt: "Vintage corduroy jacket outfit",
    tags: ["Vintage / Retro", "Workwear / Rugged"],
  },
  {
    id: "sneaker-style",
    src: "/styles/sneaker-style.jpg",
    alt: "Fresh sneakers closeup",
    tags: ["Streetwear", "Athleisure"],
  },
  {
    id: "outdoor-vest",
    src: "/styles/outdoor-vest.jpg",
    alt: "Puffer vest layered outdoor look",
    tags: ["Outdoor / Gorpcore", "Casual"],
    tall: true,
  },
  {
    id: "earth-tone-layers",
    src: "/styles/earth-tone-layers.jpg",
    alt: "Earth tone layered outfit",
    tags: ["Minimalist", "Smart Casual"],
  },
  {
    id: "smart-casual",
    src: "/styles/smart-casual.jpg",
    alt: "Smart casual sweater and slacks",
    tags: ["Smart Casual", "Minimalist"],
  },
  {
    id: "henley-rugged",
    src: "/styles/henley-rugged.jpg",
    alt: "Henley shirt rugged style",
    tags: ["Workwear / Rugged", "Casual"],
    tall: true,
  },
  {
    id: "bomber-jacket",
    src: "/styles/bomber-jacket.jpg",
    alt: "Bomber jacket street outfit",
    tags: ["Streetwear", "Vintage / Retro"],
  },
  {
    id: "knit-sweater",
    src: "/styles/knit-sweater.jpg",
    alt: "Chunky knit sweater look",
    tags: ["Classic / Preppy", "Casual"],
  },
  {
    id: "graphic-tee",
    src: "/styles/graphic-tee.jpg",
    alt: "Graphic tee casual outfit",
    tags: ["Streetwear", "Vintage / Retro"],
  },
  {
    id: "tailored-suit",
    src: "/styles/tailored-suit.jpg",
    alt: "Modern tailored suit",
    tags: ["Classic / Preppy", "Smart Casual"],
    tall: true,
  },
  {
    id: "joggers-casual",
    src: "/styles/joggers-casual.jpg",
    alt: "Joggers and sneakers casual look",
    tags: ["Athleisure", "Streetwear"],
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
