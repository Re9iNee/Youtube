// components/HeroContent.tsx
import { useEffect, useState } from "react";

export default function HeroContent() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    async function fetchQuote() {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();
      setQuote(data.quote);
    }
    fetchQuote();
  }, []);

  return <p>{quote ? `"${quote}"` : "Loading quote..."}</p>;
}
