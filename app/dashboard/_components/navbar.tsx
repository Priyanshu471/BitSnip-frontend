"use client";
import { Logo } from "@/components/logo";
import { UserNav } from "@/components/navbar/user-nav";
import WorkspaceName from "@/components/workspaceName";
import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import NavTabs from "./navTabs";

const Navbar = () => {
  const scrolled = useScrollTop();
  const { isSignedIn, isLoaded, user } = useUser();
  return (
    <div
      className={cn(
        "z-[999] bg-background fixed w-full flex flex-col border-b-2",
        scrolled && "border-b shadow"
      )}
    >
      <div className="flex justify-end items-center w-full gap-x-2 p-6">
        <div className="flex items-center w-full pb-0 gap-x-2">
          <Link href={"/"}>
            <Logo full={false} />
          </Link>
          <span className="text-4xl font-light text-meta-2">/</span>
          <div className="w-full flex items-center gap-x-2">
            <WorkspaceName />
          </div>
        </div>
        <div className="flex text-lg font-medium w-52 items-center justify-around">
          {isSignedIn && (
            <>
              <p className="text-meta-4 underline">Hi! {user.firstName}</p>
              <UserNav />
            </>
          )}
        </div>
      </div>
      <NavTabs />
    </div>
  );
};

export default Navbar;
