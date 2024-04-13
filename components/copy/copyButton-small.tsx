"use client";

import { cn } from "@/lib/utils";
import { Check, Copy, LucideIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
// import { Copy, Tick } from "./icons";

export function CopyButton({ urlId }: { urlId: string }) {
  const [copied, setCopied] = useState(false);
  const Comp = Copy;
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setCopied(true);
        navigator.clipboard.writeText(urlId).then(() => {
          toast.success("Copied to clipboard!");
        });
        setTimeout(() => setCopied(false), 3000);
      }}
      className={cn(
        "group rounded-lg bg-gray-100 p-1.5 transition-all duration-75 hover:scale-105 hover:bg-blue-100 active:scale-95"
      )}
    >
      <span className="sr-only">Copy</span>
      {copied ? (
        <Check className="text-meta-3 transition-all group-hover:text-meta-0" />
      ) : (
        <Comp className="text-meta-3 transition-all group-hover:text-meta-0" />
      )}
    </button>
  );
}
