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
    collectionByHandle?: CollectionByHandle;  // Marqué comme optionnel
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
