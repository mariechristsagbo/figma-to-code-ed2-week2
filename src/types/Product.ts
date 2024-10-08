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
  name: string;
  image: string;
  price: number;
  quantity: number;
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

export interface CollectionByHandle {
  title: string;
  products: {
    edges: {
      node: Product;
    }[];
  };
}

export interface ProductResponse {
  data: {
    collectionByHandle?: CollectionByHandle; 
    products: {
      edges: {
        node: Product;
      }[];
    };
  };
}

export interface Image {
  id: string;
  url: string;
}

export interface Price {
  amount: string;
  currencyCode: string;
}

export interface Variant {
  [x: string]: any;
  id: string;
  title: string;
  image: Image;
  price: Price;
}

export interface DetailedProduct {
  id: string;
  title: string;
  description: string;
  featuredImage: Image;
  variants: {
    edges: {
      cursor: string;
      node: Variant;
    }[];
  };
}
