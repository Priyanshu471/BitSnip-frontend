import Image from "next/image";
import Link from "next/link";
import { Logo } from "../logo";

const icons = [
  "/twitter.svg",
  "/linkedin.svg",
  "/notion.svg",
  "/cv.svg",
  "/github.svg",
  "/facebook.svg",
];
export const Footer = () => {
  return (
    <footer className="container flex flex-col md:flex-row w-full items-center justify-between gap-2 py-10 md:h-24 md:py-0">
      <div className="flex items-center gap-4 px-8 flex-col md:flex-row md:gap-2 md:px-0 w-1/2">
        <Logo full={true} />
        <p className="text-center text-xs md:text-sm  leading-3 md:leading-loose md:text-left">
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

      <div className="container flex flex-col justify-center items-end gap-4 my-4 md:w-1/2 -mr-10">
        <div className="flex items-center gap-4 justify-center">
          {icons.map((icon, index) => (
            <Link
              className="rounded-lg flex h-8 items-center justify-center w-8 border "
              href="#"
              key={index}
            >
              <Image
                src={icon}
                alt={"social icon" + index}
                width={25}
                height={25}
              />
            </Link>
          ))}
        </div>
        <div className="flex items-center text-xs text-gray-500 mb-2 -ml-16">
          © 2024 BitSnip. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
