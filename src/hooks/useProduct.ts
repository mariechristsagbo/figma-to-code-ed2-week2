import { useEffect, useState } from 'react';
import { Product, ProductResponse } from '@/types';
import { PRODUCTS_QUERY } from '@/queries/productQueries';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://mock.shop/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: PRODUCTS_QUERY,
      }),
    })
      .then(response => response.json())
      .then((data: ProductResponse) => {
        setProducts(data.data.products.edges.map(edge => edge.node));
        setLoading(false);
      })
      .catch(error => {
        setError('Erreur lors de la récupération des produits.');
        setLoading(false);
        console.error('Erreur lors de la récupération des produits :', error);
      });
  }, []);

  return { products, loading, error };
}
