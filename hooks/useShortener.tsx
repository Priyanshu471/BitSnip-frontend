import { apiUrl, baseUrl } from "@/lib/static";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export interface ShortenUrlResponse {
  processing: boolean;
  shortenUrl: (url: string) => Promise<string | null>;
  error: string;
}

const useShortener = () => {
  const [processing, setProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { user } = useUser();
  //   if (!user) {
  //     return null;
  //   }
  const shortenUrl = async (url: string) => {
    setProcessing(true);
    setError("");
    try {
      //       console.log("user", user?.id);
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl: url }),
      });
      setProcessing(false);
      const data = await response.json();
      if (response.ok) {
        const shortUrl = baseUrl + data.urlId;
        return shortUrl;
      }
    } catch (err: any) {
      setError(err.message);
      setProcessing(false);
      return null;
    }
  };

  return {
    processing: processing,
    shortenUrl: shortenUrl,
    error: error,
  } as ShortenUrlResponse;
};

export default useShortener;
