import Hero from "@/components/hero/hero";
import Nothing from "../_components/nothing";
import CtrChart from "../_components/ctrChart";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <pre className="text-meta-5">This page is under development</pre>
      {/* <Nothing pagename="analytics" /> */}
      <CtrChart data={[5, 8, 2, 3, 9, 6, 4, 7, 1, 10, 5, 3]} />
    </div>
  );
  <p>Analytics</p>;
}
