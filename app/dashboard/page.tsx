"use client";
import { useUser } from "@clerk/nextjs";
import Nothing from "./_components/nothing";
import { Button } from "@/components/ui/button";
import { Plus, PlusCircle } from "lucide-react";
import { useLinkCreator } from "@/hooks/useLinkCreator";
import { useShortener } from "@/hooks/useShortener";
import Links from "./_components/links";
import Sidebar from "./_components/sidebar";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Spinner from "@/components/loader/spinner";
import { useReload } from "@/hooks/useReload";
import { useLinkData } from "@/hooks/useLinkData";

export default function Dashboard() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { onOpen } = useLinkCreator();
  const { fetch } = useReload();
  const { linkData } = useLinkData();
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const shortener = useShortener();
  useEffect(() => {
    if (fetch && isSignedIn) {
      shortener.fetchShortenedUrls(user?.id);
    }
  }, [fetch, isSignedIn]);
  return (
    <div className="h-full min-h-fit flex relative items-center">
      <Sidebar showPreview={showPreview} setShowPreview={setShowPreview} />

      <div className="flex flex-col items-center w-full h-full">
        {shortener.processing ? (
          <div className="absolute sm:top-1/3">
            <Spinner />
          </div>
        ) : linkData.length === 0 ? (
          <>
            <Nothing pagename="links" />
            <Button className="gap-x-2" onClick={onOpen}>
              Create <Plus className="hidden md:flex w-5 h-5" />
            </Button>
          </>
        ) : (
          <Links showPreview={showPreview} />
        )}
        {shortener.error && toast.error(shortener.error)}
      </div>
    </div>
  );
}
