"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <Image
        src="/not-found.svg"
        alt="error"
        width={300}
        height={300}
        className=""
      />

      <h2 className="text-xl font-medium text-meta-7">
        Oops! this link is no more active{" "}
      </h2>
      <Button asChild>
        <Link href="/">Go back</Link>
      </Button>
    </div>
  );
}
