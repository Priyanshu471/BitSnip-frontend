"use client";
import HeroCard from "@/components/hero/heroCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { Link } from "react-scroll";
import { NavbarUserLinks } from "../navbar/navbar-user-links";

export default function Hero() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("https://github.com/Priyanshu471/BitSnip-frontend");
  };
  return (
    <>
      <div className="h-screen flex items-center scroll-mt-10 justify-center">
        <div className="container flex flex-col items-center gap-9 sm:gap-10 text-center">
          <Badge variant="outline" className="bg-meta-1">
            Shorter Links, Quicker Clicks!
          </Badge>
          <Badge className="space-x-4 font-normal text-xs md:text-sm ">
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
          <h1 className="max-w-4xl font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-meta-8">
            <span className="text-meta-7">urls</span> when the shorter, the
            <span className="text-meta-3"> better!</span>
          </h1>
          <HeroCard />
          <div className="space-x-4 space-y-2">
            <Link
              to="short"
              spy={true}
              smooth={true}
              // offset={-70}
              duration={500}
            >
              <Button size="lg" className="text-lg">
                Short it now!
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
            {/* <p className="text-center text-sm bg-red-600 -ml-4">Or</p> */}
            {/* <div className="sm:hidden flex justify-center flex-col space-y-1 p-2 border rounded-md">
              <p className="text-xs mr-4">* Get in to use full service</p>
              <NavbarUserLinks />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
