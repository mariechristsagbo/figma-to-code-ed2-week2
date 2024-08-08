'use client'
import React from 'react';
import { useProductDetail } from '@/hooks/useProductDetail';
import ProductDetail from '@/components/ProductDetail';
import Suggestions from '@/components/Suggestions';
import { Loader } from '@/components/Loader';

const ProductPage: React.FC = () => {
  const { product, loading, error } = useProductDetail();

  if (error) return <div className="flex justify-center items-center h-64">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto py-10">
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
