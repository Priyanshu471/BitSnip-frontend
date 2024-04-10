import { create } from "zustand";

interface WorkspaceState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useWorkspace = create<WorkspaceState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
