"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ColorCodes, colorCodes } from "@/lib/constants";
import { ChevronsUpDown, Eye, Key } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useWorkspace } from "@/hooks/useWorkspace";

const WorkspaceName = () => {
  const [activeWorkspace, setActiveWorkspace] = useState<ColorCodes>({
    color: "#5DB9FF",
    name: "Blue",
  });
  const { onOpen } = useWorkspace();
  return (
    <Popover>
      <PopoverTrigger className="p-1 rounded-md hover:bg-muted-foreground/10">
        <div className="flex justify-center items-center gap-x-2">
          <div
            className="w-8 h-8 rounded-full text-white flex justify-center items-center p-1 text-sm"
            style={{ backgroundColor: activeWorkspace.color }}
          >
            {activeWorkspace.name.slice(0, 2).toUpperCase()}
          </div>
          <p className="text-meta-4 text-sm font-medium">
            {activeWorkspace.name}
          </p>
          <ChevronsUpDown size={16} className="text-muted-foreground" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-1 w-fit">
        {colorCodes.map((item) => (
          <div
            className="flex items-center gap-x-2 p-2 hover:bg-muted rounded-md cursor-pointer"
            key={item.name}
            onClick={() => setActiveWorkspace(item)}
          >
            <div
              className="w-8 h-8 rounded-full text-white flex justify-center items-center p-2 text-sm"
              style={{ backgroundColor: item.color }}
            >
              {item.name.slice(0, 2).toUpperCase()}
            </div>
            <p className="text-meta-4 text-sm font-medium">{item.name}</p>

            {activeWorkspace.name === item.name && (
              <Eye size={16} className="text-meta-4" />
            )}
          </div>
        ))}
        <div className="p-1">
          <Button onClick={onOpen}>Create New</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default WorkspaceName;
