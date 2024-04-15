"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ElementRef, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronsLeft, MenuIcon, PlusCircle } from "lucide-react";
import { useLinkCreator } from "@/hooks/useLinkCreator";

const Sidebar = () => {
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isMobile, setIsMobile] = useState(true);
  const [isClosed, setIsClosed] = useState(false);
  const [isRestting, setIsResetting] = useState(false);
  const { onOpen } = useLinkCreator();
  useEffect(() => {
    const checkIfMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setIsClosed(true);
      } else {
        setIsMobile(false);
      }
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [isMobile]);

  const handleClose = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsClosed(true);
      setIsResetting(true);
      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");
    }
  };
  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsClosed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? `100%` : `20%`;
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "0" : "20%");
      setTimeout(() => {
        setIsResetting(false);
      }, 300);
    }
  };
  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "h-full group/sidebar bg-[#f2f2f2] border-r overflow-y-auto relative flex w-[350px] flex-col items-center z-[99] mt-[0px]",
          isRestting && "transition-all duration-300 ease-in-out",
          isMobile && "w-0 absolute"
        )}
      >
        <div className="flex items-center justify-between w-full space-x-2 px-8 py-4 border-b">
          <Label htmlFor="create-link">Create Link</Label>
          <Button size={"sm"} onClick={onOpen}>
            <PlusCircle className="flex w-5 h-5" />
          </Button>
        </div>
        <div
          role="button"
          onClick={handleClose}
          className={cn(
            "hidden z-10 h-6 w-6 text-meta-4 rounded-sm hover:bg-meta-1  absolute top-3 right-2 opacity-0 transition",
            isMobile && "flex opacity-100"
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>

        <div className="flex flex-col space-y-2 bg-meta-1/30 w-full px-8 py-4 border-b">
          <pre className="text-meta-7">Coming soon</pre>
          <h1 className="font-semibold">Filter Links</h1>
          <Input placeholder="Search" />
        </div>

        <div className="flex flex-col w-full space-y-2 px-8 py-4 border-b">
          <h1 className="font-semibold">Sort by</h1>
          <div className="flex flex-col items-start w-full">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="date" id="r1" />
                <Label htmlFor="r1">Date</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="name" id="r2" />
                <Label htmlFor="r2">Name</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="last" id="r3" />
                <Label htmlFor="r3">Last visited</Label>
              </div>
            </RadioGroup>
          </div>
          <Button size={"sm"}>Submit</Button>
        </div>
        <div className="flex items-center bg-meta-1/30 justify-between w-full space-x-2 px-8 py-4 border-b">
          <Label htmlFor="airplane-mode">Show Preview</Label>
          <Switch id="preview-mode" />
        </div>
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[10] w-[calc(100%-240px)]",
          isRestting && "transition-all duration-300 ease-in-out",
          isMobile && "w-full left-0"
        )}
      >
        {isClosed && (
          <MenuIcon
            onClick={resetWidth}
            role="button"
            className="h-6 w-6 text-meta-4"
          />
        )}
      </div>
    </>
  );
};

export default Sidebar;
