"use client";
import Loader from "@/components/loader/loader";
import { Logo } from "@/components/logo";
import { SignUp } from "@clerk/nextjs";
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
    <main className="flex flex-col items-center justify-center h-screen space-y-8 my-10">
      <Logo full />
      <h2>Create an account to use Services</h2>
      <SignUp />
    </main>
  );
}
