import { SuggestionProductCard } from "./SuggestionProductCard";
import { useLatestProducts } from "@/hooks/useLatestProducts";

export default function Suggestions() {
  const { products, error } = useLatestProducts();

  // if (error) return <p className="text-b-black font-semibold font-chillax text-center py-10">{error}</p>;

  return (
    <section className='font-archivo py-20'>
      <h1 className='text-3xl font-semibold font-chillax px-2'>You may also like</h1>

      <div className="lg:max-w-full max-w-2xl mx-auto py-10">
          <div className="flex overflow-x-auto no-scrollbar space-x-6">
            {products.map(product => (
              <div key={product.id} className="flex-shrink-0 w-80 md:w-96 lg:w-1/4">
                <SuggestionProductCard product={product} />
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}