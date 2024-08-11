import { useState, useEffect } from 'react';
import { Product } from '@/types/Product';

export function useLatestProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `
          query {
    products(first: 8, sortKey: CREATED_AT, reverse: true) {
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

        const response = await fetch('https://mock.shop/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();
        const fetchedProducts = result.data.products.edges.map(({ node }: { node: Product }) => node);
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (err) {
        setError('Error fetching products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
