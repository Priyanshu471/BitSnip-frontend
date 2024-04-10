"use client";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Loader from "@/components/loader/loader";

export default function Dashboard() {
  const { isLoaded, user } = useUser();
  if (!isLoaded) {
    return (
      <div className="grid place-items-center h-full">
        <Loader />
      </div>
    );
  }
  return (
    <>
      {isLoaded && user && (
        <div className="flex flex-col items-center">
          <h1 className="text-lg">This is the Link shortener page</h1>
          <p>This is feature is under development!</p>
        </div>
      )}
    </>
  );
}
