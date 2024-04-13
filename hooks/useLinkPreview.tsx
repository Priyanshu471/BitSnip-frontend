import { useState } from "react";
import axios, { AxiosError, Method } from "axios";
import { toast } from "sonner";

export interface PreviewData {
  author?: string | null;
  date?: string;
  description: string;
  image: string;
  title: string;
  logo?: string;
  publisher?: string;
  url: string;
}
interface LinkPreviewer {
  loading: boolean;
  fetchLinkPreview: (url: string) => Promise<PreviewData | null>;
  preview: PreviewData | null;
  error: string;
}

const apiToken = process.env.LINK_PREVIEW_TOKEN || "pWqdROUCTlopOpLK";
const linkPreviewApi = `https://v1.nocodeapi.com/priyanshu471/link_preview/${apiToken}`;
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const requestOptions = {
  method: "get",
  headers: myHeaders,
};

const useLinkPreview = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [preview, setPreview] = useState<PreviewData | null>(null);

  const fetchLinkPreview = async (url: string) => {
    setLoading(true);
    setError("");
    console.log("sending request for preview ....");

    try {
      const response = await fetch(
        `${linkPreviewApi}?url=${url}`,
        requestOptions
      );

      const data = await response.json();
      if (response) {
        console.log(data);
        setPreview(data);
        setLoading(false);
        return data;
      }
    } catch (err: AxiosError | any) {
      console.log("error", err.message);
      setError(err.message);
      setLoading(false);
      toast.error("Error fetching preview");
      return null;
    }
  };

  return {
    loading: loading,
    fetchLinkPreview: fetchLinkPreview,
    preview: preview,
    error: error,
  } as LinkPreviewer;
};

export default useLinkPreview;
