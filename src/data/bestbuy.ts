import { Product } from "@/components/product-card";

const API_KEY = process.env.bestbuy;
const BASE_URL = "https://api.bestbuy.com/v1/products";

interface BestBuyProduct {
  sku: number;
  name: string;
  regularPrice: number;
  salePrice: number;
  customerReviewAverage: number;
  customerReviewCount: number;
  largeImage: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  thumbnailImage: string;
}



export interface BestBuyQuery {
  category?: string;
  page?: number;
  pageSize?: number;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
}

export interface BestBuyPagedResponse {
  products: Product[];
  currentPage: number;
  totalPages: number;
  total: number;
}

export async function getBestBuyProducts({
  category = "abcat0900000",
  page = 1,
  pageSize = 10,
  minPrice,
  maxPrice,
  rating,
}: BestBuyQuery = {}): Promise<BestBuyPagedResponse> {
  if (!API_KEY) {
    console.error("Best Buy API Key is missing");
    return { products: [], currentPage: 1, totalPages: 1, total: 0 };
  }

  try {
    // Build query parts
    const conditions = [`categoryPath.id=${category}`];
    
    if (minPrice !== undefined) conditions.push(`salePrice>=${minPrice}`);
    if (maxPrice !== undefined) conditions.push(`salePrice<=${maxPrice}`);
    if (rating !== undefined) conditions.push(`customerReviewAverage>=${rating}`);

    // Join with & and wrap in separate parentheses if needed, but Best Buy syntax is usually ((condition1)&(condition2))
    // Actually, syntax is ((condition1)&(condition2)) or (condition1&condition2)
    // Let's use individual parentheses for safety: (condition1)&(condition2)
    // And wrap the whole thing: ((condition1)&(condition2))
    
    // Example from docs: (categoryPath.id=abcat0502000&salePrice<500)
    // Let's try joining with & inside one set of outer parens first, which seems standard.
    // Actually, complex queries often look like: ((categoryPath.id=...)&(salePrice>=...))
    
    const query = `(${conditions.join('&')})`;

    const show = "sku,name,regularPrice,salePrice,customerReviewAverage,customerReviewCount,largeImage,image,shortDescription,thumbnailImage";
    const url = `${BASE_URL}(${query})?apiKey=${API_KEY}&sort=bestSellingRank.asc&show=${show}&pageSize=${pageSize}&page=${page}&format=json`;

    const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour

    if (!response.ok) {
        throw new Error(`Best Buy API error: ${response.statusText}`);
    }

    const data: { products: BestBuyProduct[]; currentPage: number; totalPages: number; total: number } = await response.json();

    const products = data.products.map((item: BestBuyProduct) => ({
      id: item.sku.toString(),
      name: item.name,
      description: item.shortDescription || item.name,
      price: item.salePrice,
      originalPrice: item.regularPrice > item.salePrice ? item.regularPrice : undefined,
      rating: item.customerReviewAverage || 0,
      reviewsCount: item.customerReviewCount || 0,
      imageLight: item.largeImage || item.image || item.thumbnailImage,
      imageDark: undefined,
      discountBadge: item.salePrice < item.regularPrice ? "Oferta" : undefined,
      images: [item.largeImage, item.image].filter(Boolean),
    }));

    return {
      products,
      currentPage: data.currentPage,
      totalPages: data.totalPages,
      total: data.total
    };

  } catch (error) {
    console.error("Failed to fetch Best Buy products:", error);
    return { products: [], currentPage: 1, totalPages: 1, total: 0 };
  }
}
