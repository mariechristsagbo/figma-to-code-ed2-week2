import { ProductCard } from "./ProductCard";
import { useProducts } from "@/hooks/useProduct";
import { Loader } from "@/components/Loader";

export default function Suggestions() {

  const { products, loading, error } = useProducts();

  return (
    
    <section className='font-archivo py-20 border'>
      <h1 className='text-3xl font-semibold font-chillax'>You may also like</h1>

      <div className="lg:max-w-7xl max-w-2xl mx-auto py-10">
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
