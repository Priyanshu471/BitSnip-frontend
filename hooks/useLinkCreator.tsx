import { create } from "zustand";

interface LinkState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useLinkCreator = create<LinkState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
