import Image from "next/image";
import { Button } from "./ui/button";
import Product from "@/app/types/product.type";

function ProductCard({ title, images, description, price }: Product) {
  return (
    <div className="flex flex-col items-center space-y-4 max-w-[375px] border p-4 mb-8 rounded-2xl mx-4">
      <Image
        src={images[0]}
        alt="Product Image"
        className="w-full max-w-md"
        width="595"
        height="707"
        style={{ aspectRatio: "595/707", objectFit: "cover" }}
      />
      <div className="text-center">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-lg text-gray-600">{description}</p>
        <p className="mt-4 text-xl font-bold">${price}</p>
        <Button variant={"outline"} className="mt-4">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
