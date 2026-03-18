export type CategorySlug = 'sayur' | 'buah' | 'daging';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: CategorySlug;
  description: string;
  image: string;
  unit: string;
  tag?: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Bayam Hijau Segar",
    slug: "bayam-hijau-segar",
    category: "sayur",
    description: "Dipetik pagi hari, daun segar tanpa lubang.",
    image: "/assets/images/products/spinach.png",
    unit: "Min. 1 Kg",
    tag: "Organik"
  },
  {
    id: "p2",
    name: "Wortel Berastagi",
    slug: "wortel-berastagi",
    category: "sayur",
    description: "Warna oranye cerah, manis, ukuran import.",
    image: "/assets/images/products/carrot.png",
    unit: "Min. 5 Kg"
  },
  {
    id: "p3",
    name: "Apel Fuji Merah",
    slug: "apel-fuji-merah",
    category: "buah",
    description: "Renyah, manis, dan segar. Cocok untuk juice.",
    image: "/assets/images/products/apple.png",
    unit: "Min. 1 Kg",
    tag: "Premium"
  },
  {
    id: "p4",
    name: "Daging Sapi Tenderloin",
    slug: "daging-sapi-tenderloin",
    category: "daging",
    description: "Potongan tenderloin sapi lokal segar, tekstur empuk untuk restoran modern.",
    image: "/assets/images/products/soup_kit.png", // Reuse the soup kit image or user can replace later
    unit: "Min. 5 Kg",
    tag: "Best Seller"
  }
];

export const getProductsByCategory = (category: CategorySlug): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};
