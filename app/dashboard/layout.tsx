import { Footer } from "@/components/footer/footer";
import { ReactNode } from "react";
import Navbar from "./_components/navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen animate-in fade-in">
      <Navbar />
      <div className="flex flex-col grow h-full mt-[150px]">{children}</div>
    </div>
  );
}
