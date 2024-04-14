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
import { useRef } from "react";
import { toast } from "sonner";
import useLinkPreview from "@/hooks/useLinkPreview";
import { useLinkData } from "@/hooks/useLinkData";
import { useReload } from "@/hooks/useReload";

export default function ShortenerModal() {
  const shortner = useShortener();
  const inputRef = useRef<HTMLInputElement>(null);
  const { setLinkData, linkData } = useLinkData();
  const { setFetch } = useReload();
  const previewer = useLinkPreview();
  const handleShorten = async () => {
    if (!inputRef.current?.value) {
      toast.error("Url is required");
      return;
    }
    try {
      new URL(inputRef.current.value);
    } catch (_) {
      toast.error("Please enter a valid URL");
      return;
    }

    const longUrl = inputRef.current.value;
    const shortUrl = await shortner.shortenUrl(longUrl);
    if (shortUrl) {
      setFetch(true);
      navigator.clipboard.writeText(shortUrl);
      toast.success("Copied to clipboard!");
      onClose();
    } else {
      toast.error("Failed to shorten URL");
      onClose();
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
            Shorten
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
