import Image from 'next/image';
import { Product } from '@/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col mx-auto overflow-hidden rounded-lg px-4">
      <Image 
        src={product.images.edges[0].node.src} 
        alt={product.title} 
        width={322}
        height={405}
        className="object-cover rounded-32 max-w-xs w-[322px] h-[405px]"
      />
      <div className="p-4">
        <h2 className="lg:text-2xl sm:text-xl text-lg font-semibold">{product.title}</h2>
        <p className="text-b-dark-gray mt-2 lg:text-xl sm:text-lg text-md font-semibold">
          {product.priceRange.minVariantPrice.amount} {product.priceRange.minVariantPrice.currencyCode}
        </p>
      </div>
    </div>
  );
}
