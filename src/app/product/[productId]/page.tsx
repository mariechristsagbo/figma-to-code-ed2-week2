'use client';

import { useState, useEffect } from 'react';
import ProductDetail from '@/components/ProductDetail';
import { DetailedProduct } from '@/types/Product';
import { Loader } from '@/components/Loader';
import Suggestions from '@/components/Suggestions';

function ProductPage({ params }: { params: { productId: string } }) {
  const [product, setProduct] = useState<DetailedProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductById = async (productId: string): Promise<DetailedProduct> => {
      const query = `
        query {
          product(id: "gid://shopify/Product/${productId}") {
            id
            title
            description
            featuredImage {
              url
            }
            variants(first: 5) {
              edges {
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

      try {
        const response = await fetch('https://mock.shop/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();
        return result.data.product as DetailedProduct;
      } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
      }
    };

    fetchProductById(params.productId)
      .then((data) => setProduct(data))
      .catch((error) => console.error("Failed to fetch product:", error))
      .finally(() => setLoading(false));
  }, [params.productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[800px]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {product && <ProductDetail product={product} />}
      <Suggestions />
    </div>
  );
}

export default ProductPage;
