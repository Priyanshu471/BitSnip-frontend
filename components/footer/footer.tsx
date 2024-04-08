import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image src={"/logo.png"} width={35} height={35} alt={"Logo"} />
          <p className="text-center text-sm leading-loose md:text-left">
            Made with ❤️ by{" "}
            <Link
              href="https://github.com/Priyanshu471"
              target="_blank"
              className="font-medium underline underline-offset-4"
            >
              Priyanshu
            </Link>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};
