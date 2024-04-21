"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useDelete } from "@/hooks/useDelete";
import { Input } from "../ui/input";
import axios from "axios";
import { deleteUrl } from "@/lib/static";
import { toast } from "sonner";
import { useRef, useState } from "react";
import { useReload } from "@/hooks/useReload";
import MiniSpinner from "../loader/miniSpinner";

export function DeleteModal() {
  const { open, onClose, urlId } = useDelete();
  const inputRef = useRef<HTMLInputElement>(null);
  const [deleting, setDeleting] = useState<boolean>(false);
  const { setFetch } = useReload();
  const handleDelete = async () => {
    setDeleting(true);
    console.log("Deleting...");
    if (!inputRef.current?.value) {
      toast.error("Please type the url id to confirm.");
      setDeleting(false);
      return;
    }
    if (urlId === "") return;
    try {
      if (inputRef.current?.value !== urlId)
        throw new Error("Url id does not match.");
      const response = await axios.delete(`${deleteUrl}/${urlId}`);
      if (!response) {
        throw new Error("An error occurred while deleting the link.");
      }
      setFetch(true);
      setDeleting(false);
      onClose();
      toast.success("Link deleted successfully");
    } catch (error: any) {
      toast.error(error.message || "An error occurred. Please try again.");
      console.error(error);
      setDeleting(false);
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this link
            from our servers and this link will no longer be active.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Please type <strong className="text-meta-4">{urlId}</strong> to
          confirm.
          <Input ref={inputRef} placeholder="Type to confirm..." />
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setDeleting(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-meta-5 hover:bg-meta-7 flex items-center justify-center gap-x-2 relative"
            onClick={handleDelete}
          >
            {deleting && (
              <div className="w-5 text-meta-7 relative">
                <MiniSpinner />
              </div>
            )}
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
