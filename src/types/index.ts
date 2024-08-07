export interface ProductImage {
    src: string;
  }
  
  export interface PriceRange {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  }
  
  export interface Product {
    id: string;
    title: string;
    description: string;
    images: {
      edges: {
        node: ProductImage;
      }[];
    };
    priceRange: PriceRange;
  }
  
  export interface ProductResponse {
    data: {
      products: {
        edges: {
          node: Product;
        }[];
      };
    };
  }
  