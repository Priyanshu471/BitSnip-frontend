import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { valuePoints } from "@/lib/constants";

const Shortener = () => {
  return (
    <section
      id="short"
      className="flex flex-col justify-center items-center min-h-screen w-full space-y-10"
    >
      <h1 className="text-meta-5 text-5xl font-semibold">
        Bit<span className="text-meta-3">Snip</span>
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-xl mx-4">
        <h1 className="text-2xl  lg:text-4xl  font-bold text-center text-meta-8">
          Make It Short!
        </h1>
        <p className="mt-2 text-sm text-center text-gray-600">
          Paste your long URL below and get a short URL in seconds.
        </p>

        <div className="flex items-center mt-8">
          <Input
            type="text"
            className="min-h-12 px-4 text-lg text-meta-4 border-meta-0 rounded-l-lg rounded-r-none bg-transparent ring-1"
            id="Email"
            name="Email"
            placeholder="https://example.com/"
          />
          <Button
            className="min-h-12 py-2 px-4 text-lg rounded-r-lg rounded-l-none bg-meta-0 text-white font-medium ring-1 focus:ring-meta-0"
            value="Subscribe"
            type="submit"
          >
            Get
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 max-w-[80%] gap-8">
        {valuePoints.map((point, i) => (
          <div
            className="bg-transparent flex flex-col items-center justify-center p-6 md:w-80"
            key={point.name}
          >
            <point.icon size={48} className="text-meta-4" />
            <h2 className="text-xl font-semibold text-meta-3">{point.name}</h2>
            <p className="text-center text-meta-8 hidden md:block">
              {point.des}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shortener;
