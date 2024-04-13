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

export default function Dashboard() {
  const { isLoaded } = useUser();
  const { onOpen } = useLinkCreator();
  const shortener = useShortener();
  const { shortLinks } = useShortLinks();

  if (!isLoaded) {
    return (
      <div className="grid place-items-center h-full">
        <Loader />
      </div>
    );
  }
  return (
    <div className="">
      <div className="h-full flex flex-col relative tems-center justify-center">
        {shortLinks.urls.length === 0 && (
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
