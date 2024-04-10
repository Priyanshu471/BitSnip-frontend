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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { colorCodes } from "@/lib/constants";
import { Logo } from "../logo";
import { Separator } from "../ui/separator";
import { useWorkspace } from "@/hooks/useWorkspace";

export default function WorkspaceModal() {
  const { isOpen, onClose, onOpen } = useWorkspace();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm bg-[#e9e9e9]">
        <DialogHeader className="flex justify-center items-center ">
          <Logo full={false} />
          <DialogTitle>Create a new workspace</DialogTitle>
          <pre className="text-meta-7">coming soon</pre>
        </DialogHeader>
        <Separator className="h-0.5" />
        <div className="space-y-2">
          <Label htmlFor="workspace-name">Workspace Name</Label>
          <Input id="workspace-name" placeholder="Enter workspace name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="workspace-name">Choose Color</Label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select a color" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {colorCodes.map((item) => (
                  <SelectItem value={item.name} key={item.color}>
                    <div className="flex items-center gap-x-2">
                      <div
                        className={`w-4 h-4 rounded-lg inline-block`}
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={onClose}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
