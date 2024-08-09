import { ProductCard } from "./ProductCard";
import { useProducts } from "@/hooks/useProduct";
import { Loader } from "@/components/Loader";

export default function Suggestions() {
  const { products, loading } = useProducts();

  return (
    <section className='font-archivo py-20'>
      <h1 className='text-3xl font-semibold font-chillax px-2'>You may also like</h1>

      <div className="lg:max-w-full max-w-2xl mx-auto py-10">
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <Loader />
          </div>
        ) : (
          <div className="flex overflow-x-auto lg:overflow-x-scroll lg:scrollbar space-x-6">
            {products.map(product => (
              <div key={product.id} className="flex-shrink-0 w-80 md:w-96 lg:w-1/4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
