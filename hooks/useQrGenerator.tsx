import { FileExtension } from "qr-code-styling";
import { create } from "zustand";

interface QrGeneratorState {
  color: string;
  imageUrl: string;
  dotStyle: string;
  cornerStyle: string;
  fileExt: FileExtension;
  setColor: (color: string) => void;
  setImageUrl: (imageUrl: string) => void;
  setDotStyle: (dotStyle: string) => void;
  setCornerStyle: (cornerStyle: string) => void;
  setFileExt: (fileExt: FileExtension) => void;
}

export const useQrGenerator = create<QrGeneratorState>((set) => ({
  color: "#016496",
  imageUrl: "",
  dotStyle: "square",
  cornerStyle: "square",
  fileExt: "png",
  setColor: (color) => set({ color }),
  setImageUrl: (imageUrl) => set({ imageUrl }),
  setDotStyle: (dotStyle) => set({ dotStyle }),
  setCornerStyle: (cornerStyle) => set({ cornerStyle }),
  setFileExt: (fileExt) => set({ fileExt }),
}));
