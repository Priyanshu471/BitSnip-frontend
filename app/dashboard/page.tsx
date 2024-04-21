"use client";
import { useUser } from "@clerk/nextjs";
import Nothing from "./_components/nothing";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useLinkCreator } from "@/hooks/useLinkCreator";
import { useShortener } from "@/hooks/useShortener";
import Links from "./_components/links";
import Sidebar from "./_components/sidebar";
import { useEffect } from "react";
import { toast } from "sonner";
import Spinner from "@/components/loader/spinner";
import { useReload } from "@/hooks/useReload";
import { useLinkData } from "@/hooks/useLinkData";

export default function Dashboard() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { onOpen } = useLinkCreator();
  const { fetch } = useReload();
  const { linkData } = useLinkData();

  const shortener = useShortener();
  useEffect(() => {
    if (fetch && isSignedIn) {
      shortener.fetchShortenedUrls(user?.id);
    }
  }, [fetch, isSignedIn]);
  return (
    <div className="h-full flex relative items-center">
      <Sidebar />

      <div className="flex flex-col items-center w-full h-full">
        {shortener.processing && (
          <div className="absolute sm:top-1/3">
            <Spinner />
          </div>
        )}
        {shortener.error && toast.error(shortener.error)}
        {!shortener.processing && linkData.length === 0 && (
          <>
            <Nothing pagename="links" />
            <Button className="gap-x-2" onClick={onOpen}>
              Create <PlusCircle className="hidden md:flex w-5 h-5" />
            </Button>
          </>
        )}
        {linkData.length !== 0 && <Links />}
      </div>
    </div>
  );
}
