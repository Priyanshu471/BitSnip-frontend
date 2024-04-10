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
    <footer className="flex flex-col md:flex-row w-full items-center justify-between space-y-8 p-10 pb-2  md:h-24 md:py-0 border-t bg-muted-foreground/15">
      <div className="flex items-center gap-4 px-8 flex-col md:flex-row md:gap-2 md:px-0 md:w-1/2">
        <div>
          <Logo full={true} />
          <p className="text-xs text-muted-foreground">
            Snip. Share. Simplify.
          </p>
        </div>
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

      <div className="flex flex-col justify-center items-end gap-4 my-4 md:w-1/2">
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
        <h1 className="flex items-center text-xs text-meta-8 mr-8 md:mr-4 pb-2">
          © 2024 BitSnip. All rights reserved.
        </h1>
      </div>
    </footer>
  );
};
