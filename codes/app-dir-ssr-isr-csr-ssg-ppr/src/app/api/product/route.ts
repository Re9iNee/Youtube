import { revalidatePath } from "next/cache";

export const POST = async () => {
  // logic behind creating a product

  revalidatePath("/products");
};
