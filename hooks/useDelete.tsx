import { create } from "zustand";

interface State {
  urlId: string;
  open: boolean;
  onOpen: (urlId: string) => void;
  onClose: () => void;
}

export const useDelete = create<State>((set) => ({
  urlId: "",

  open: false,
  onOpen: (urlId: string) =>
    set({
      open: true,
      urlId: urlId,
    }),
  onClose: () =>
    set({
      open: false,
      urlId: "",
    }),
}));
