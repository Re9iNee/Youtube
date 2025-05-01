import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DynamicHeroContent = dynamic(() => import("../components/HeroBanner"), {
  loading: () => <p>Loading personalized hero...</p>,
  ssr: false, // forces client-side rendering (CSR)
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>PPR - Simulated (Not Fully Supported in Pages dir)</h1>
        <DynamicHeroContent />
      </main>
      <Footer />
    </div>
  );
}
