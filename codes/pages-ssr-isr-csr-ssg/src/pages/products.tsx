import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Product from "@/types/product.type";
import Image from "next/image";
import React from "react";

// ISR - Incremental Static Regeneration
export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = await data.products;

  return {
    props: { products },
    revalidate: 60, // ISR every 60 seconds
  };
}

type Props = {
  products: Product[];
};
export default function ProductPage({ products }: Props) {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 bg-white">
      <h1 className="text-3xl font-bold">Product Showcase</h1>
      <div className="grid sm:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
