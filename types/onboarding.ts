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
  fitPreference: string;

  // Step 3: Visual style quiz
  selectedStyleImages: string[];

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
  fitPreference: "",
  selectedStyleImages: [],
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
  {
    id: "ald-denim",
    src: "/styles/13-tumblr-layers.jpg",
    alt: "ALD denim overshirt with graphic knit sweater and cap",
    tags: ["Streetwear", "Americana", "Outerwear"],
  },
  {
    id: "tweed-denim-combo",
    src: "/styles/14-casual-fit.jpg",
    alt: "Tweed blazer over chambray shirt with olive chinos",
    tags: ["Classic / Preppy", "Heritage", "Smart Casual"],
  },
  {
    id: "relaxed-sweatshirt",
    src: "/styles/15-earth-tones.jpg",
    alt: "Mauve sweatshirt with relaxed jeans and sneakers",
    tags: ["Casual", "Streetwear", "Relaxed"],
  },
  {
    id: "chunky-knit",
    src: "/styles/16-saintmarc.jpg",
    alt: "Chunky cream knit sweater with green cap",
    tags: ["Casual", "Knitwear", "Minimalist"],
  },
  {
    id: "denim-workwear",
    src: "/styles/17-minimal-look.jpg",
    alt: "Denim trucker jacket with olive cargo pants and boots",
    tags: ["Workwear / Rugged", "Americana", "Vintage / Retro"],
  },
  {
    id: "street-graphic",
    src: "/styles/18-amazon-picks.jpg",
    alt: "Graphic tee with wide brown trousers and cap",
    tags: ["Streetwear", "Casual", "Relaxed"],
  },
  {
    id: "chore-coat",
    src: "/styles/19-style-inspo.jpg",
    alt: "Light denim chore coat with striped tee and chinos",
    tags: ["Workwear / Rugged", "Casual", "Americana"],
  },
  {
    id: "ald-pattern-cardi",
    src: "/styles/20-ald-fw21.jpg",
    alt: "ALD patterned red cardigan with plaid trousers and beanie",
    tags: ["Streetwear", "Vintage / Retro", "Knitwear"],
  },
  {
    id: "ald-camel-cardi",
    src: "/styles/21-ald-queens.jpg",
    alt: "Camel mohair cardigan with houndstooth bucket hat",
    tags: ["Smart Casual", "Knitwear", "Classic / Preppy"],
  },
  {
    id: "relaxed-wide",
    src: "/styles/22-relaxed-fit.jpg",
    alt: "White camp collar shirt with olive wide-leg pants and red sneakers",
    tags: ["Streetwear", "Casual", "Summer"],
  },
  {
    id: "olive-flares",
    src: "/styles/23-olive-flares.jpg",
    alt: "Dark olive flared pants with cream top",
    tags: ["Vintage / Retro", "Streetwear", "Bold"],
  },
  {
    id: "vintage-denim",
    src: "/styles/24-vintage-denim.jpg",
    alt: "Vintage-wash denim and earth tones layered",
    tags: ["Vintage / Retro", "Workwear / Rugged", "Casual"],
  },
  {
    id: "street-tee",
    src: "/styles/25-street-casual.jpg",
    alt: "Vintage track tee with wide trousers and loafers",
    tags: ["Vintage / Retro", "Streetwear", "Smart Casual"],
  },
  {
    id: "levis-casual",
    src: "/styles/26-levis-jeans.jpg",
    alt: "Grey sweatshirt with light wash Levi's and ball cap",
    tags: ["Casual", "Americana", "Relaxed"],
  },
  {
    id: "striped-open",
    src: "/styles/27-striped-shirt.jpg",
    alt: "Striped open shirt over white tee with jeans",
    tags: ["Casual", "Smart Casual", "Summer"],
  },
  {
    id: "layered-earth",
    src: "/styles/28-layered-look.jpg",
    alt: "Layered earth-tone outfit with structured pieces",
    tags: ["Smart Casual", "Minimalist", "Tailored"],
  },
  {
    id: "daily-casual",
    src: "/styles/29-daily-fashion.jpg",
    alt: "Casual daily look with cap and relaxed fit",
    tags: ["Casual", "Streetwear", "Relaxed"],
  },
  {
    id: "neutral-layers",
    src: "/styles/30-neutral-outfit.jpg",
    alt: "Neutral toned outfit with layered textures",
    tags: ["Minimalist", "Smart Casual", "Clean"],
  },
  {
    id: "casual-layers-2",
    src: "/styles/31-casual-layers.jpg",
    alt: "Casual layered look with mixed textures",
    tags: ["Casual", "Vintage / Retro", "Relaxed"],
  },
  {
    id: "vintage-modern",
    src: "/styles/32-vintage-modern.jpg",
    alt: "Modern vintage blend with structured silhouette",
    tags: ["Vintage / Retro", "Smart Casual", "Heritage"],
  },
  {
    id: "workwear-heritage",
    src: "/styles/33-workwear-heritage.jpg",
    alt: "Heritage workwear with rugged boots and watch details",
    tags: ["Workwear / Rugged", "Heritage", "Americana"],
  },
  {
    id: "military-layers",
    src: "/styles/34-americana-work.jpg",
    alt: "Olive field jacket layered over chambray and cream chinos",
    tags: ["Workwear / Rugged", "Americana", "Casual"],
  },
  {
    id: "checkers-cardi",
    src: "/styles/35-checkers-cardi.jpg",
    alt: "Checkered knit cardigan on boat in Positano",
    tags: ["Smart Casual", "Italian", "Knitwear"],
  },
  {
    id: "outdoor-knit",
    src: "/styles/36-outdoor-casual.jpg",
    alt: "Green wool sweater with khakis and boots on fence",
    tags: ["Outdoor / Gorpcore", "Heritage", "Knitwear"],
  },
  {
    id: "french-sweater",
    src: "/styles/37-french-sweater.jpg",
    alt: "1940s French army sweater replica in olive wool",
    tags: ["Heritage", "Vintage / Retro", "Knitwear"],
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

export type BundleFrequency = {
  id: string;
  label: string;
  price: number;
};

export const BUNDLE_FREQUENCIES: BundleFrequency[] = [
  { id: "once", label: "Just Once", price: 40 },
  { id: "monthly", label: "Monthly", price: 40 },
  { id: "quarterly", label: "Quarterly", price: 40 },
];
