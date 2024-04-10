import Image from "next/image";

export const Logo = ({ full }: { full: boolean }) => {
  return (
    <div className="flex items-center gap-x-2">
      {full && (
        <>
          <Image src={"/logo.png"} width={35} height={35} alt={"Logo"} />{" "}
          <span className="text-xl font-semibold tracking-tighter text-meta-5 mr-6">
            Bit<span className="text-meta-3">Snip</span>
          </span>
        </>
      )}
      {!full && (
        <div className="rounded-full bg-slate-100 p-1 border border-meta-4">
          <Image src={"/logo.png"} width={35} height={35} alt={"Logo"} />
        </div>
      )}
    </div>
  );
};
