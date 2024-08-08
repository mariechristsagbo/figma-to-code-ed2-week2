'use client'
import React, { useState } from 'react';
import { DetailedProduct } from '@/types/Product';
import Image from 'next/image';
import { colors, sizes } from '@/constants';

interface ProductDetailProps {
  product: DetailedProduct;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState('Green');
  const [selectedSize, setSelectedSize] = useState('XS');



  return (
    <div className="flex items-center gap-10 lg:flex-row flex-col font-archivo">
      <Image
        src={product.featuredImage.url}
        alt={product.title}
        width={579}
        height={600}
        className="object-cover rounded-32"
      />

      <div className="flex flex-col space-y-4 p-4">
        <h1 className="text-4xl font-semibold font-chillax">{product.title}</h1>
        <p className="font-medium text-3xl">{product.variants.edges[0].node.price.currencyCode} ${product.variants.edges[0].node.price.amount}</p>

        <div>
          <p className="text-2xl">Color: {selectedColor}</p>
          <div className="flex space-x-4">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`w-6 h-6 rounded-full border-2 my-3 ${selectedColor === color.name ? 'border-gray-500' : 'border-transparent'}`}
                style={{ backgroundColor: color.code }}
              />
            ))}
          </div>
        </div>

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

        <div className="flex items-center gap-4">
          <button className='px-8 py-3 rounded-full border border-b-black bg-b-black text-white w-1/2 sm:text-sm text-xs'>
            BUY NOW
          </button>

          <button className='px-8 py-3 rounded-full transition-colors border border-b-black hover:bg-b-black hover:text-white w-1/2 sm:text-sm text-[10px]'>
            ADD TO CART
          </button>
        </div>

        <div className="my-7">
          <p className="text-3xl font-chillax font-medium pb-3">Description</p>
          <p className="text-b-dark-gray">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
