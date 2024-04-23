"use client";
import MiniSpinner from "@/components/loader/miniSpinner";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useLinkData } from "@/hooks/useLinkData";
import { linkConstructor } from "@/lib/utils";
import { useState } from "react";

const SelectUrl = () => {
  const { linkData } = useLinkData();
  const [urlId, setUrlId] = useState("");
  const { getAnalytics, processing } = useAnalytics();
  const handleClick = async () => {
    await getAnalytics(urlId);
  };
  const handleSelect = (value: string) => {
    console.log(value);
    setUrlId(value);
  };
  return (
    <>
      <Select onValueChange={handleSelect}>
        <SelectTrigger className="h-10 text-lg bg-white shadow border border-meta-2 w-2/3 md:w-full">
          <SelectValue
            placeholder="Select Url"
            className="text-foreground/60 placeholder:text-foreground/20 placeholder-opacity-60 "
          />
        </SelectTrigger>
        <SelectContent className="">
          <SelectGroup>
            {linkData.map((link) => (
              <SelectItem
                key={link.urlId}
                value={link.urlId}
                className="text-foreground hover:bg-primary/10 cursor-pointer"
              >
                <span className="text-meta-3 font-medium text-base">
                  {linkConstructor(link.urlId)}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        className=" px-2 text-xs w-fit md:px-4 md:text-base"
        disabled={!urlId}
        onClick={handleClick}
      >
        {processing && (
          <div className="w-5 text-meta-10 relative mr-2">
            <MiniSpinner />
          </div>
        )}
        Get Analytics
      </Button>
    </>
  );
};

export default SelectUrl;
