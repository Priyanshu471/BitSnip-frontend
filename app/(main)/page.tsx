import Hero from "@/components/hero/hero";
import Shortener from "@/components/shortener";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-evenly">
        <Hero />
        <Shortener />
      </div>
    </>
  );
}
