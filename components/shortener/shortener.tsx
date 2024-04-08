"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { valuePoints } from "@/lib/constants";
import { useRef, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import Loader from "../loader/loader";
import CopyLink from "../copy/copyLink";
import { apiUrl, baseUrl } from "@/lib/static";

const Shortener = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [shortenedUrl, setShortenedUrl] = useState<string>("");
  const [fetching, setFetching] = useState<boolean>(false);
  const handleShorten = async () => {
    setFetching(true);
    console.log("Shorten Clicked");
    if (!inputRef.current?.value) {
      toast.warning(
        <p className="text-lg font-medium">Please enter a URL to shorten.</p>
      );
      setFetching(false);
      return;
    }

    // Your logic to shorten the URL
    const longUrl = inputRef.current.value;
    console.log("Long URL: ", longUrl);

    try {
      const res = await axios.post(apiUrl, { longUrl });
      setShortenedUrl(baseUrl + res.data.urlId);
      toast.success(
        <p className="text-lg font-medium">URL shortened successfully!</p>
      );
      setTimeout(() => {
        setFetching(false);
      }, 1000);
    } catch (error) {
      console.error("Error: ", error);
      toast.error(
        <p className="text-lg font-medium">
          Something went wrong! Please try again.
        </p>
      );
      setFetching(false);
    }
  };
  return (
    <section
      id="short"
      className="flex flex-col justify-center items-center min-h-screen w-full space-y-10"
    >
      <h1 className="text-meta-5 text-5xl font-semibold">
        Bit<span className="text-meta-3">Snip</span>
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-xl mx-4 md:w-2/3 md:h-72 flex flex-col justify-center items-center">
        {fetching ? (
          <Loader />
        ) : (
          <>
            {shortenedUrl ? (
              <CopyLink url={shortenedUrl} />
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
