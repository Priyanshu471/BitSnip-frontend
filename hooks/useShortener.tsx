import { allUrls, apiUrl, baseUrl } from "@/lib/static";
import { linkConstructor } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import axios, { AxiosError } from "axios";

export interface ShortenUrlResponse {
  processing: boolean;
  shortenUrl: (url: string) => Promise<string | null>;
  fetchShortenedUrls: (userId: string) => Promise<[] | null>;
  links: [] | null;
  error: string;
}

export interface LinkData {
  urlId: string;
  longUrl: string;
}
export const useShortener = () => {
  const [processing, setProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [links, setLinks] = useState<LinkData[]>([]);
  const { user } = useUser();

  const shortenUrl = async (url: string) => {
    setProcessing(true);
    setError("");
    let body = JSON.stringify({ longUrl: url, userId: "temp_user_id" });
    if (user) {
      body = JSON.stringify({ longUrl: url, userId: user.id });
    }
    console.log("body", body);
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await response.json();
      if (response.ok) {
        const shortUrl = linkConstructor(data.urlId);
        setProcessing(false);
        return shortUrl;
      }
    } catch (err: any) {
      setError(err.message);
      setProcessing(false);
      return null;
    }
  };
  const fetchShortenedUrls = async (userId: string) => {
    try {
      const response = await axios.get(allUrls + userId);
      const data = await response.data;
      if (response) {
        setLinks(data.urls);
        return data.urls;
      }
    } catch (err: AxiosError | any) {
      setError(err.message);
      return null;
    }
  };
  return {
    processing: processing,
    shortenUrl: shortenUrl,
    fetchShortenedUrls: fetchShortenedUrls,
    links: links,
    error: error,
  } as ShortenUrlResponse;
};
