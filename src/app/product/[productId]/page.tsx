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
            variants(first: 1) {
              edges {
                node {
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

      const response = await fetch('https://mock.shop/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      return result.data.product as DetailedProduct;
    };

    fetchProductById(params.productId)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [params.productId]);

 

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <Loader />
        </div>
      ) : (
        <div>
          {product && <ProductDetail product={product} />}
        </div>
      )}

      <Suggestions />
    </div>
  );
}

export default ProductPage;
