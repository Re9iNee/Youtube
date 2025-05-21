// ISR - Incremental Static Regeneration
import ProductCard from "@/components/ProductCard";
import Product from "../types/product.type";

export const revalidate = 60;

export default async function ProductPage() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
    next: { revalidate: 60 },
  });
  const data = await res.json();
  const products: Product[] = await data.products;

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
