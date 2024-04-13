"use client";
import { useUser } from "@clerk/nextjs";
import Loader from "@/components/loader/loader";
import Nothing from "./_components/nothing";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useLinkCreator } from "@/hooks/useLinkCreator";
import { useShortener } from "@/hooks/useShortener";
import Links from "./_components/links";
import Sidebar from "./_components/sidebar";
import { useShortLinks } from "@/hooks/useShortLinks";
import useLinkPreview, { PreviewData } from "@/hooks/useLinkPreview";
import { useLinkData } from "@/hooks/useLinkData";
import { useEffect, useState } from "react";
import { AllLinks } from "@/lib/constants";
import { toast } from "sonner";

export default function Dashboard() {
  const { isLoaded, user } = useUser();
  const { onOpen } = useLinkCreator();
  const previewer = useLinkPreview();
  const shortener = useShortener();
  const { setLinkData, linkData } = useLinkData();
  const { setShortLinks, shortLinks } = useShortLinks();
  const [linkFetched, setLinkFetched] = useState<boolean>(false);
  useEffect(() => {
    if (shortLinks.urls.length === 0) {
      console.log("Fetching your links ....");
      handleFetchLinks();
    }
    if (linkData.length === 0 && linkFetched === true) {
      console.log("Fetching previews ....");
      handlePreview();
    }
  }, [linkFetched, linkData, shortLinks.urls]);
  async function handlePreview() {
    console.log("requesting for ....");

    const data = await Promise.all(
      shortLinks.urls.map(async (link) => {
        const previewData = await previewer.fetchLinkPreview(link.longUrl);
        return previewData;
      })
    );
    const filteredData = data.filter((item) => item !== null) as PreviewData[];
    if (filteredData) {
      console.log("setting preview data ....", filteredData);
      setLinkData(filteredData);
      toast.success("Fetched all your previews");
    }
  }
  async function handleFetchLinks() {
    const data: AllLinks = { urls: [] };
    const fetchedData = await shortener.fetchShortenedUrls(user?.id || "");
    if (fetchedData) {
      data.urls = fetchedData;
      console.log("setting data ....", data);
      console.log("Fetched all your links");
    }
    setShortLinks(data);
    setLinkFetched(true);
    toast.success("Fetched all your links");
  }
  if (previewer.loading)
    return (
      <div className="h-full justify-center items-center">
        <Loader />
      </div>
    );
  return (
    <div className="">
      <div className="h-full flex relative tems-center justify-center">
        {isLoaded && shortLinks.urls.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full">
            <Nothing pagename="links" />
            <Button className="gap-x-2" onClick={onOpen}>
              Create <PlusCircle className="hidden md:flex w-5 h-5" />
            </Button>
          </div>
        )}
        {shortLinks.urls.length !== 0 && (
          <>
            <Sidebar />
            <Links />
          </>
        )}
      </div>
    </div>
  );
}
