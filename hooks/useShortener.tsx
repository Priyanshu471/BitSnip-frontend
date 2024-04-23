import { allUrls, apiUrl, baseUrl } from "@/lib/static";
import { linkConstructor } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { AllLinksWithPreview } from "@/lib/constants";
import { AllLinksData } from "@/lib/types";
import { useReload } from "./useReload";
import { useLinkData } from "./useLinkData";

export interface ShortenUrlResponse {
  processing: boolean;
  shortenUrl: (url: string) => Promise<string | null>;
  fetchShortenedUrls: (userId: string) => Promise<[] | null>;
  links: AllLinksWithPreview[] | null;
  error: string;
}

export interface LinkData {
  urlId: string;
  longUrl: string;
}

export const useShortener = () => {
  const [processing, setProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [links, setLinks] = useState<AllLinksData[]>([]);
  const { setLinkData } = useLinkData();
  const { fetch, setFetch } = useReload();
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
      const response = await axios.post(apiUrl, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.data;
      if (response.status === 201) {
        setFetch(false);
        const shortUrl = linkConstructor(data.urlId);
        setProcessing(false);
        return shortUrl;
      }
    } catch (err: any) {
      console.log("error for shortening url", err.message);
      setError(err.message);
      setProcessing(false);
      return null;
    }
  };
  const fetchShortenedUrls = async (userId: string) => {
    try {
      setProcessing(true);
      setError("");
      const response = await axios.get(allUrls + userId);
      const data = await response.data;

      if (response) {
        setLinks(data.urls);
        setLinkData(data.urls);
        setFetch(false);
        setProcessing(false);
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
