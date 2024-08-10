export const ALL_PRODUCTS_QUERY = `
  query {
    products(first: 9) {
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

export const COLLECTION_PRODUCTS_QUERY = (handle: string) => `
  query {
    collectionByHandle(handle: "${handle}") {
      title
      products(first: 9) {
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
  }
`;
