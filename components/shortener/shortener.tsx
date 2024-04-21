"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { valuePoints } from "@/lib/constants";
import { useRef, useState } from "react";
import { toast } from "sonner";
import Loader from "../loader/loader";
import CopyLink from "../copy/copyLink";
import { useShortener } from "@/hooks/useShortener";
import { RotateCcw } from "lucide-react";
const Shortener = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [shortenedUrl, setShortenedUrl] = useState<string>("");
  const shortner = useShortener();
  const handleShorten = async () => {
    if (!inputRef.current?.value) {
      toast.error("Please enter a URL to shorten");
      return;
    }
    const longUrl = inputRef.current.value;
    try {
      new URL(longUrl);
    } catch (_) {
      toast.error("Please enter a valid URL");
      return;
    }
    if (shortner) {
      const shortUrl = await shortner.shortenUrl(longUrl);
      if (shortUrl) {
        console.log("shortUrl", shortUrl);
        setShortenedUrl(shortUrl);
        toast.success("URL shortened successfully");
      } else {
        toast.error("Failed to shorten URL");
      }
    }
  };
  return (
    <section
      id="short"
      className="flex flex-col justify-center items-center min-h-screen w-full space-y-10 mb-10"
    >
      <h1 className="text-meta-5 text-5xl font-semibold">
        Bit<span className="text-meta-3">Snip</span>
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-xl mx-4 md:w-2/3 md:h-72 flex flex-col justify-center items-center">
        {shortner?.processing ? (
          <Loader />
        ) : (
          <>
            {shortenedUrl ? (
              <>
                <CopyLink url={shortenedUrl} />
                <Button
                  className="gap-x-2"
                  onClick={() => {
                    setShortenedUrl("");
                  }}
                >
                  Reset <RotateCcw size={15} />
                </Button>
              </>
            ) : (
              <>
                <h1 className="text-2xl  lg:text-4xl  font-bold text-center text-meta-8">
                  Make It Short!
                </h1>
                <p className="mt-2 text-sm text-center text-gray-600">
                  Paste your long URL below and get a short URL in seconds.
                </p>

                <div className="flex items-center mt-8 md:w-2/3">
                  <Input
                    type="text"
                    ref={inputRef}
                    placeholder="https://example.com/"
                    className="min-h-12 px-4 text-lg text-meta-4 border-meta-0 rounded-l-lg rounded-r-none bg-transparent ring-1"
                  />
                  <Button
                    className="min-h-12 py-2 px-4 text-lg rounded-r-lg rounded-l-none bg-meta-0 text-white font-medium ring-1 focus:ring-meta-0"
                    value="Subscribe"
                    type="submit"
                    onClick={handleShorten}
                  >
                    Get
                  </Button>
                </div>
                <p className="mt-4 md:text-base text-sm text-center text-meta-4 md:w-2/3 ">
                  It is a free tool to shorten URLs and generate short links. It
                  allows to create a shortened link making it easy to share
                </p>
              </>
            )}
          </>
        )}
      </div>
      <div className="grid grid-cols-3 max-w-[80%] gap-8">
        {valuePoints.map((point, i) => (
          <div
            className="bg-transparent flex flex-col items-center justify-center p-6 md:w-80"
            key={point.name}
          >
            <point.icon size={48} className="text-meta-4" />
            <h2 className="text-xl font-semibold text-meta-3">{point.name}</h2>
            <p className="text-center text-meta-8 hidden md:block">
              {point.des}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shortener;
