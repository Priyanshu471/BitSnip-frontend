import { AllLinks } from "@/lib/constants";
import { create } from "zustand";

interface ShortLinkState {
  shortLinks: AllLinks;
  setShortLinks: (data: AllLinks) => void;
}

export const useShortLinks = create<ShortLinkState>((set) => ({
  shortLinks: { urls: [] },
  setShortLinks: (data) => set({ shortLinks: data }),
}));
