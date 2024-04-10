import { NavbarUserLinks } from "@/components/navbar/navbar-user-links";
import Link from "next/link";
import { FC } from "react";
import { Logo } from "../logo";

export const NavBar: FC = () => {
  return (
    <>
      <div className="animate-in fade-in w-full">
        <nav className=" px-6 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Logo full />
            </Link>
            <div className="hidden sm:flex">
              <NavbarUserLinks />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
