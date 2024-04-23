import { create } from "zustand";

interface UrlIdState {
  urlId: string;
  get: boolean;
  setGet: (get: boolean) => void;
  setUrlId: (urlId: string) => void;
}

export const useUrlId = create<UrlIdState>((set) => ({
  urlId: "",
  get: false,
  setGet: (get) => set({ get }),
  setUrlId: (urlId) => set({ urlId }),
}));
