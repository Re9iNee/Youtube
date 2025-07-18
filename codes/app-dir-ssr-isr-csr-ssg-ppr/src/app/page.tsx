import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import { Suspense } from "react";

export const experimental_ppr = true;

export default async function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>PPR</h1>
        <Suspense fallback={<p>Loading quote...</p>}>
          <HeroBanner />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
