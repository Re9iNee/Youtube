"use client";

import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import Product from "@/types/product.type";

import { useState } from "react";

type Data = {
  total: number;
  products: Product[];
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Data | undefined>();

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 2) {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${value}`
      );

      const data = await res.json();
      setResult(data);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Input
        type="search"
        value={query}
        onChange={handleSearch}
        className="max-w-[375px] my-4"
        placeholder="Type to search..."
      />

      <div className="flex flex-col items-center p-6 space-y-6 bg-white">
        <h1 className="text-3xl font-bold">Results</h1>
        <div className="grid sm:grid-cols-3">
          {result?.products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <pre>Found {result?.total ?? 0}</pre>
    </div>
  );
}
