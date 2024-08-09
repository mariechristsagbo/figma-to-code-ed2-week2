import { useEffect, useState } from 'react';
import { Product, ProductResponse } from '@/types/Product';
import { ALL_PRODUCTS_QUERY, COLLECTION_PRODUCTS_QUERY } from '@/queries/productQueries';

export function useProducts(category: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    const query = category === 'All' ? ALL_PRODUCTS_QUERY : COLLECTION_PRODUCTS_QUERY(category.toLowerCase());

    fetch('https://mock.shop/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
      .then(response => response.json())
      .then((data: ProductResponse) => {
        const productsData = category === 'All'
          ? data.data.products.edges
          : data.data.collectionByHandle?.products.edges || [];

        const usdProducts = productsData.map(({ node }: { node: Product }) => ({
          ...node,
          priceRange: {
            ...node.priceRange,
            minVariantPrice: {
              ...node.priceRange.minVariantPrice,
              currencyCode: 'USD',
            },
          },
        }));

        setProducts(usdProducts);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching products.');
        setLoading(false);
      });

  }, [category]);

  return { products, loading, error };
}
