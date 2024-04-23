import { Footer } from "@/components/footer/footer";
import { ReactNode } from "react";
import Navbar from "./_components/navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen animate-in fade-in">
      <Navbar />
      <div className="flex flex-col grow h-scneen mt-[137px]">{children}</div>
    </div>
  );
}
