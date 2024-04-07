"use client";

import { UserNav } from "@/components/navbar/user-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
// import { useUser } from "reactfire";

export const NavbarUserLinks: FC = () => {
  // const { data, hasEmitted } = useUser();

  return (
    <>
      <Link href="/login" className={`${buttonVariants()} gap-x-2 text-base`}>
        Get In <ArrowRight size={20} />
      </Link>
    </>
  );
};
