"use client";
import { Button } from "@/components/ui/button";
import {
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useLinkCreator } from "@/hooks/useLinkCreator";
import { Globe, Link, Tag } from "lucide-react";
import TagSelect from "../multiSelect";
import { Separator } from "../ui/separator";
import { useShortener } from "@/hooks/useShortener";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useLinkData } from "@/hooks/useLinkData";
import { useReload } from "@/hooks/useReload";
import MiniSpinner from "../loader/miniSpinner";

export default function ShortenerModal() {
  const shortner = useShortener();
  const inputRef = useRef<HTMLInputElement>(null);
  const [shortening, setShortening] = useState<boolean>(false);
  const { setFetch } = useReload();
  const handleShorten = async () => {
    setShortening(true);
    if (!inputRef.current?.value) {
      toast.error("Url is required");
      setShortening(false);
      return;
    }
    try {
      new URL(inputRef.current.value);
    } catch (_) {
      toast.error("Please enter a valid URL");
      setShortening(false);
      return;
    }

    const longUrl = inputRef.current.value;
    const shortUrl = await shortner.shortenUrl(longUrl);
    if (shortUrl) {
      setShortening(false);
      onClose();
      setFetch(true);
      navigator.clipboard.writeText(shortUrl);
      toast.success("Copied to clipboard!");
    } else {
      toast.error("Failed to shorten URL");
      onClose();
      setShortening(false);
    }
  };
  const { isOpen, onClose } = useLinkCreator();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm lg:max-w-lg">
        <DialogHeader className="flex flex-col md:flex-row justify-center">
          <DialogTitle className="flex text-meta-4 items-center gap-x-4">
            <Globe className="w-8 h-8 border-4 border-meta-2 rounded-full" />
            Create a short link
          </DialogTitle>
        </DialogHeader>
        <Separator />
        <div className="space-y-2">
          <div className="flex flex-col items-center justify-center space-y-2 w-full mb-4">
            <Label
              className="w-full text-base flex items-center gap-x-2 text-meta-4"
              htmlFor="slug"
            >
              <Link size={15} />
              Destination Url <span className="-ml-1 text-meta-7">*</span>
            </Label>
            <Input
              className=""
              ref={inputRef}
              placeholder="https://bit-snip.vercel.app/what-is-bit-snip"
              type="url"
            />
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 w-full">
            <Label
              className="w-full text-base flex items-center gap-x-2 text-meta-4"
              htmlFor="slug"
            >
              <Tag size={15} />
              Select tag
            </Label>
            <TagSelect />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleShorten}>
            {shortening && (
              <div className="w-5 text-meta-3 relative mr-2">
                <MiniSpinner />
              </div>
            )}
            Shorten
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
