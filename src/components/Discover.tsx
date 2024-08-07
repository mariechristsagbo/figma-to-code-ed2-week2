'use client'
import { useState } from "react";
import { filters_categories } from "@/constants";
import { ProductCard } from "./ProductCard";
import { useProducts } from "@/hooks/useProduct";
import { Loader } from "@/components/Loader";
import Button from "./Button";

export default function Discover() {
  const [selected, setSelected] = useState('All');
  const { products, loading, error } = useProducts();

  if (error) return <p className="text-red-500 text-center py-10">{error}</p>;

  return (
    <section className='font-archivo my-10'>
      <h1 className="text-b-black text-3xl font-chillax font-bold text-center py-16">
        Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer shirts.
      </h1>
      <div className='pb-5 sm:flex sm:space-x-4 sm:justify-center'>
        {filters_categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelected(category.name)}
            className={`px-4 py-2.5 rounded-full m-2 transition-colors ${selected === category.name
              ? 'bg-b-black text-white'
              : 'text-b-black border border-b-black hover:bg-b-black hover:text-white'
              }`}>
            <p className='text-lg'>
              {category.name} <span className='text-sm'>{category.count}</span>
            </p>
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto py-10">
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center font-semibold">
        <Button>
          View more
        </Button>
      </div>
    </section>
  );
}
