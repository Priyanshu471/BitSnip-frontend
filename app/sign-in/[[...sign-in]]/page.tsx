"use client";
import Loader from "@/components/loader/loader";
import { Logo } from "@/components/logo";
import { SignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading)
    return (
      <div className="flex items-center justify-center h-screen my-auto">
        <Loader />
      </div>
    );
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-6 my-5">
      <Logo full />
      <h2>Enter details to get access</h2>
      <SignIn />
    </main>
  );
}
