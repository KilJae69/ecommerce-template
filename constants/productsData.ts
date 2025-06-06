// /constants/productsData.ts

/**
 * A single “color variant” of a base shoe model.
 */
export interface ProductVariant {
  /**  
   * A human‐readable label for this color‐way (e.g. "Core Black / White", "Signal Pink / White"). 
   */
  color: string;

  /** Stock Keeping Unit (unique per color‐way) */
  sku: string;

  /**  
   * Image URLs for this color.  
   * The first image is the “featured” photo for that color.  
   */
  images: string[];

  /**  
   * Inventory per size for THIS variant.  
   * E.g. { "7": 12, "8": 0, "9": 5, … }  
   */
  stockBySize: Record<string, number>;

  /** (Optional) If this color is currently on sale, you could override price here. */
  salePrice?: number;
}

/**
 * A single “shoe model” which can have multiple color variants.  
 */
export interface Product {
  /** Unique model identifier (UUID or “model code”) */
  id: string;

  /** URL slug for the model page (e.g. "ultra-boost-21") */
  slug: string;

  /** Model name (common to all variants) */
  name: string;

  /** Brand: one of your four shoe brands or “other” */
  brand: "adidas" | "nike" | "under-armour" | "new-balance" | string;

  /** Category (running, casual, training, etc.) */
  category: string;

  /** Gender orientation (men, women, unisex) */
  gender: "men" | "women" | "unisex";

  /**  
   * Base MSRP or “list price” (often the same across all variants, unless some colors 
   * carry a different premium— in that case, individual variants can override below). 
   */
  originalPrice: number;

  /**  
   * Base “current” price (unless overridden per-variant via `salePrice`).  
   */
  price: number;

  /** Currency code (e.g. "USD") */
  currency: string;

  /**  
   * All available sizes for this model *across all variants*.  
   * (Individual variants may have zero stock in some of those sizes.)  
   */
  availableSizes: number[];

  /**  
   * Shared short description—shown on category/list pages.  
   */
  shortDescription: string;

  /**  
   * Shared long description—shown on the product detail page. Could be HTML/Markdown.  
   */
  longDescription: string;

  /**  
   * Bullet‐point features applicable to all colorways of this model.  
   */
  features: string[];

  /** Material composition, shared across all variants */
  material: string;

  /** Weight in grams, if you want to show it in specs */
  weightInGrams?: number;

  /** Release date (ISO string), typically same for all colorways */
  releaseDate: string;

  /** Aggregate rating data (could be shared across all variants) */
  ratingAverage: number;
  ratingCount: number;

  /** Tags or badges (e.g. ["best-seller", "new-arrival"]) */
  tags: string[];

  /**  
   * Whether this entire model should be “featured” on homepage or a banner.  
   * You could also store a per‐variant “isFeatured” if only certain colors get highlighted.  
   */
  isFeatured: boolean;

  /**  
   * The key difference: a list of all color variants.  
   */
  variants: ProductVariant[];

  /** Optional SEO fields */
  metaTitle?: string;
  metaDescription?: string;
}
