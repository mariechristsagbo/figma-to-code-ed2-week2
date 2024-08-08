import { useState, useEffect } from 'react';
import { DetailedProduct } from '@/types/Product';

const SINGLE_PRODUCT_QUERY = `
{
  product(id: "gid://shopify/Product/7982905098262") {
    id
    title
    description
    featuredImage {
      id
      url
    }
    variants(first: 3) {
      edges {
        cursor
        node {
          id
          title
          image {
            url
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`;

interface UseProductDetailReturn {
  product: DetailedProduct | null;
  loading: boolean;
  error: string | null;
}

export function useProductDetail(): UseProductDetailReturn {
  const [product, setProduct] = useState<DetailedProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://mock.shop/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: SINGLE_PRODUCT_QUERY,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setProduct(data.data.product);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching product: ' + error.message);
        setLoading(false);
      });
  }, []);

  return { product, loading, error };
}
