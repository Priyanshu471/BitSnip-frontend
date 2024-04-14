import { create } from "zustand";

interface State {
  fetch: boolean;
  setFetch: (fetch: boolean) => void;
}

export const useReload = create<State>((set) => ({
  fetch: true,
  setFetch: (fetch) => set({ fetch }),
}));
