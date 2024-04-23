import Hero from "@/components/hero/hero";
import NewsLetter from "@/components/newsLetter/newsLetter";
import Shortener from "@/components/shortener/shortener";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-evenly">
        <Hero />
        <Separator className="bg-meta-4 w-3/4 h-0.5 mb-8" />
        <Shortener />
        <NewsLetter />
      </div>
    </>
  );
}
