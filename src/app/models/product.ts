import { ProductCategory } from "./product-category";
import { ProductFeature } from "./product-feature";

export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    fullPrice: number;
    discountPercent: number;
    category: ProductCategory;
    features: ProductFeature[];
}
