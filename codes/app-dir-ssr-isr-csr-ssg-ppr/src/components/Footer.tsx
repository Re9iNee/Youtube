import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="row-start-3 flex flex-col gap-[24px] flex-wrap items-center justify-center">
      <div className="gap-2">
        <Link href={"/weather"} className="hover:underline  p-2">
          Weather(SSR)
        </Link>
        <Link href={"/blog"} className="hover:underline p-2">
          Blog Posts(SSG)
        </Link>
        <Link href={"/products"} className="hover:underline p-2">
          Products(ISR)
        </Link>
        <Link href={"/search"} className="hover:underline p-2">
          Search(CSR)
        </Link>
      </div>
      <hr />

      <div className="flex gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.youtube.com/@RezaAttarCode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://2025-portfolio-ten.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to Reza Attar Website →
        </a>
      </div>
    </footer>
  );
}
