import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { baseUrl } from "./static";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function linkConstructor(key: string) {
  return baseUrl + key;
}
