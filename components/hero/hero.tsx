"use client";
import HeroCard from "@/components/hero/heroCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { Link } from "react-scroll";

export default function Hero() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("https://github.com/Priyanshu471/BitSnip-frontend");
  };
  return (
    <>
      <section className="h-screen flex items-center -mt-10 justify-center">
        <div className="container flex flex-col items-center gap-8 text-center">
          <Badge variant="secondary">Shorter Links, Quicker Clicks!</Badge>
          <Badge className="space-x-4 font-normal text-sm">
            <p>
              <span className="font-bold">Quick </span>Links
            </p>
            <p>
              <span className="font-bold">Easy </span>Share
            </p>
            <p>
              <span className="font-bold">Track </span>Performance
            </p>
            <p>
              <span className="font-bold">No </span>Expiry
            </p>
          </Badge>
          <h1 className="max-w-4xl font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-meta-8">
            <span className="text-meta-7">urls</span> when the shorter, the
            <span className="text-meta-3"> better!</span>
          </h1>
          <HeroCard />
          <div className="space-x-4">
            <Link
              to="short"
              spy={true}
              smooth={true}
              // offset={-70}
              duration={500}
            >
              <Button size="lg" className="text-lg">
                Make it short!
              </Button>
            </Link>

            <Button
              size="lg"
              variant="link"
              className="text-lg"
              onClick={handleRedirect}
            >
              Spread the love <Star className="w-5 h-5 ml-2 fill-yellow-200" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
