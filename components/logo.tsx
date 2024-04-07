import Image from "next/image";
import { FC } from "react";

export const Logo: FC = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image src={"/logo.png"} width={35} height={35} alt={"Logo"} />{" "}
      <span className="text-xl font-semibold tracking-tighter text-meta-5 mr-6">
        Bit<span className="text-meta-3">Snip</span>
      </span>
    </div>
  );
};
