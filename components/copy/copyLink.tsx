import { Input } from "../ui/input";
import CopyButton from "./copyButton";

const CopyLink = ({ url }: { url: string }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-y-6">
      <div>
        <h1 className="text-2xl  lg:text-4xl  font-bold text-center text-meta-8">
          Your shortened URL!
        </h1>
        <p className="mt-2 text-sm md:text-lg text-center text-gray-600">
          Copy the short link and share it in messages, texts, posts, websites
          and other locations.
        </p>
      </div>
      <div className="flex shadow-sm items-center md:w-2/3">
        <Input
          value={url}
          readOnly
          className="min-h-16 my-2 text-meta-3 py-1 px-4 text-lg indent-1 rounded-l-lg rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 border-meta-0 bg-transparent"
          name="text"
          type="text"
        />
        <CopyButton url={url} />
      </div>
    </div>
  );
};

export default CopyLink;
