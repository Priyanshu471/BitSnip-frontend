"use client";
import { UserNav } from "@/components/navbar/user-nav";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { FC } from "react";

export const NavbarUserLinks: FC = () => {
  const { isSignedIn, user } = useUser();
  return (
    <>
      {!isSignedIn && (
        <div className="flex items-center justify-center gap-2">
          <Link href="/sign-in">
            <Button
              className={`gap-x-2 flex items-center w-12 h-6 md:w-24 md:h-10 text-xs md:text-base`}
            >
              Log In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button
              variant="outline"
              className={`flex w-12 h-6 md:w-24 md:h-10 text-xs md:text-base  text-meta-4 items-center gap-x-2 border-2 border-meta-0 hover:bg-meta-0/80 hover:text-white`}
            >
              Sign In
            </Button>
          </Link>
        </div>
      )}
      {isSignedIn && user && <UserNav />}
    </>
  );
};
