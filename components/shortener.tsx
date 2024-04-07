import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Shortener = () => {
  return (
    <section
      id="short"
      className="flex justify-center items-center bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] min-h-screen w-full"
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-center text-meta-8">
          Make It Short!
        </h1>
        <p className="mt-2 text-sm text-center text-gray-600">
          Fast and simple website to create a shortened URL, easy to remember
          and share.
        </p>
        <div className="mt-8">
          <div className="flex items-center space-x-2">
            <Input className="flex-1" placeholder="https://www.example.com/" />
            <Button className=" text-white">Get Short URL</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shortener;
