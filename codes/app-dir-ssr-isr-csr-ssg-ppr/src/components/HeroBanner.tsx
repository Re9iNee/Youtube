export default async function HeroBanner() {
  const [quote] = await Promise.all([fetchQuote(), wait()]);

  return <p>{quote}</p>;
}

async function wait() {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

async function fetchQuote(): Promise<string> {
  const res = await fetch("https://dummyjson.com/quotes/random", {
    cache: "no-store",
  });
  const data = await res.json();
  const quote = data.quote;

  return quote;
}
