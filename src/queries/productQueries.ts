export const PRODUCTS_QUERY = `
query {
  products(first: 6) {
    edges {
      node {
        id
        title
        description
        images(first: 1) {
          edges {
            node {
              src
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`;
