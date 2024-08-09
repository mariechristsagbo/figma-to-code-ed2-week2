import Image from 'next/image';
import { Product } from '@/types/Product';
import { useRouter } from 'next/navigation';

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  const handleClick = () => {
    const productId = product.id.split('/').pop();
    router.push(`/product/${productId}`);
  };

  return (
    <div className="flex flex-col mx-auto overflow-hidden rounded-lg p-4 max-w-xs" onClick={handleClick}>
      <div className="relative group">
        <Image
          src={product.images.edges[0].node.src}
          alt={product.title}
          width={322}
          height={405}
          className="object-cover sm:w-[322px] sm:h-[405px] rounded-32"
        />
        <div className="absolute inset-0 bg-b-black opacity-0 group-hover:opacity-50 transition-opacity rounded-32"></div>
        <span className="absolute top-2 left-2 bg-white text-black text-xs font-semibold px-2 py-2 rounded-full mt-3 mx-2 opacity-0 group-hover:opacity-100 transition-opacity">
          GET OFF 20%
        </span>
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center space-x-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="flex items-center font-jetbrains justify-center bg-white text-black text-xs font-extrabold py-3 px-4 rounded-full shadow-md">
            <img src="/icons/cart-1.svg" alt="Add to Cart" className="mr-2" />
            ADD TO CART
          </button>
          <button className="flex items-center border font-bold border-white text-white justify-center text-b-white text-xs py-3.5 px-5 rounded-full">
            BUY NOW
          </button>
        </div>
      </div>
      <div className="pt-4 text-left px-2">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-b-dark-gray mt-1 text-md font-semibold">
          ${product.priceRange.minVariantPrice.amount}
        </p>
      </div>
    </div>
  );
}
