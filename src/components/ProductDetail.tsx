'use client';

import React, { useState, useEffect } from 'react';
import { DetailedProduct } from '@/types/Product';
import Image from 'next/image';
import { sizes } from '@/constants';
import { useRouter } from 'next/navigation';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
interface ProductDetailProps {
  product: DetailedProduct;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('XS');
  const [selectedVariant, setSelectedVariant] = useState(product.variants.edges[0]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { cart, addToCart } = useShoppingCart();
  const router = useRouter();

  useEffect(() => {
    const existsInCart = cart.some((item) => item.id === selectedVariant.node.id);
    setIsAddedToCart(existsInCart);
  }, [cart, selectedVariant]);

  const handleColorChange = (variant: any) => {
    setSelectedVariant(variant);
  };

  const getColorFromTitle = (title: string) => {
    const parts = title.split(" / ");
    return parts.length > 1 ? parts[1].toLowerCase() : null;
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: selectedVariant.node.id,
      name: product.title,
      image: selectedVariant.node.image.url,
      description: selectedVariant.node.title.split(" / ")[1] || "N/A",
      price: parseFloat(selectedVariant.node.price.amount),
      quantity: 1,
      size: selectedSize,
    };

    addToCart(productToAdd);
    setIsAddedToCart(true);
  };

  const handleViewCart = () => {
    router.push('/cart');
  };

  const colorVariants = product.variants.edges.filter(variant => getColorFromTitle(variant.node.title));

  return (
    <div className="flex items-center gap-10 lg:flex-row flex-col font-archivo">
      <Image
        src={selectedVariant.node.image.url}
        alt={product.title}
        width={579}
        height={600}
        className="object-cover rounded-32"
      />

      <div className="flex flex-col space-y-4 p-4">
        <h1 className="text-4xl font-semibold font-chillax">{product.title}</h1>
        <p className="font-medium text-3xl">{selectedVariant.node.price.currencyCode} ${selectedVariant.node.price.amount}</p>
        {colorVariants.length > 0 ? (
          <div>
            <p className="text-2xl">Color: {selectedVariant.node.title.split(" / ")[1] || "N/A"}</p>
            <div className="flex space-x-4">
              {colorVariants.map((variant) => (
                <button
                  key={variant.node.id}
                  onClick={() => handleColorChange(variant)}
                  className={`w-6 h-6 rounded-full border-2 my-3 ${selectedVariant.node.id === variant.node.id ? 'border-gray-500' : 'border-gray-200'}`}
                  style={{ backgroundColor: getColorFromTitle(variant.node.title) || '#ccc' }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div>
          <p className="text-2xl mb-3">Size:</p>
          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-7 py-3 rounded-full transition-colors 
                  ${selectedSize === size
                    ? 'bg-b-black text-white'
                    : 'text-b-black border border-b-black hover:bg-b-black hover:text-white'
                  }`}>
                <p className='text-lg'>
                  {size}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 py-2">
          <button className='px-8 py-3 rounded-full border border-b-black bg-b-black text-white w-1/2 sm:text-sm text-xs'>
            BUY NOW
          </button>

          <button
            className='px-8 py-3 rounded-full transition-colors border border-b-black hover:bg-b-black hover:text-white w-1/2 sm:text-sm text-[10px]'
            onClick={isAddedToCart ? handleViewCart : handleAddToCart}
          >
            {isAddedToCart ? 'VIEW CART' : 'ADD TO CART'}
          </button>
        </div>

        <div className="py-5">
          <p className="text-3xl font-chillax font-medium pb-3">Description</p>
          <p className="text-b-dark-gray">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
