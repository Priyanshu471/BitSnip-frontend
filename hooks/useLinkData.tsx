import { create } from "zustand";
import { UrlData } from "@/lib/types";

interface LinkState {
  linkData: UrlData[];
  setLinkData: (data: UrlData[]) => void;
}
export const useLinkData = create<LinkState>((set) => ({
  linkData: [],
  setLinkData: (data) => set({ linkData: data }),
}));
