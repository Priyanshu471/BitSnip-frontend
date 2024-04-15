import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDelete } from "@/hooks/useDelete";
import { EllipsisVertical, LineChart, Menu, Trash2 } from "lucide-react";
import { ReactNode } from "react";

const LinkMenu = ({ children }: { children: ReactNode }) => {
  return (
    <Popover>
      <PopoverTrigger className="py-2 px-2 hover:bg-muted-foreground/20 rounded-md flex items-center">
        <button>
          <EllipsisVertical size={20} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-1">{children}</PopoverContent>
    </Popover>
  );
};

export default LinkMenu;
