import Image from 'next/image';
import { Product } from '@/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="overflow-hidden rounded-lg">
      <Image 
        src={product.images.edges[0].node.src} 
        alt={product.title} 
        width={500}
        height={400}
        className="object-cover rounded-32"
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
