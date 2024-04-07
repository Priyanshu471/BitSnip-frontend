import { NavbarMobile } from "@/components/navbar/navbar-mobile";
import { NavbarUserLinks } from "@/components/navbar/navbar-user-links";
import { buttonVariants } from "@/components/ui/button";
import { FishIcon, ScanTextIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Logo } from "../logo";

export const NavBar: FC = () => {
  return (
    <>
      <div className="animate-in fade-in w-full">
        <nav className="container px-6 md:px-8 py-4">
          <div className="flex items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Logo />
            </Link>
            <div className="hidden md:flex justify-between grow">
              <div>
                <Link href="#1" className={buttonVariants({ variant: "link" })}>
                  Item 1
                </Link>
                <Link href="#2" className={buttonVariants({ variant: "link" })}>
                  Item 2
                </Link>
                <Link href="#3" className={buttonVariants({ variant: "link" })}>
                  Item 3
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <NavbarUserLinks />
              </div>
            </div>
            <div className="grow md:hidden flex justify-end">
              <NavbarMobile />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
