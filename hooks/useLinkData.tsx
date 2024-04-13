import { create } from "zustand";
import { PreviewData } from "./useLinkPreview";

interface LinkState {
  linkData: PreviewData[];
  setLinkData: (data: PreviewData[]) => void;
}
export const useLinkData = create<LinkState>((set) => ({
  linkData: [],
  setLinkData: (data) => set({ linkData: data }),
}));
