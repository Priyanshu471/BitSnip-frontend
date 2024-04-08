import { Input } from "../ui/input";
import CopyButton from "./copyButton";

const CopyLink = () => {
  return (
    <div className="flex shadow-sm items-center">
      <Input
        value="https://bs/Tv1Z1"
        readOnly
        className="min-h-8 my-2 text-meta-3 py-1 indent-2 rounded-l-lg rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 border-meta-0 bg-transparent"
        name="text"
        type="text"
      />
      <CopyButton />
    </div>
  );
};

export default CopyLink;
