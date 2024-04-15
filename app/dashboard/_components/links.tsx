import Image from "next/image";
import { ArrowRight, LineChart, Trash } from "lucide-react";
import Link from "next/link";
import { CustomTooltip } from "@/components/tooltip";
import { useLinkData } from "@/hooks/useLinkData";
import { CopyButton } from "@/components/copy/copyButton-small";
import { linkConstructor } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { UrlData } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { useDelete } from "@/hooks/useDelete";
import LinkMenu from "./linkMenu";

const Links = () => {
  const { linkData } = useLinkData();
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-4 gap-4 my-2">
        {linkData.map((link: UrlData) => (
          <div key={link.urlId} className="my-2">
            <Previewer
              key={link.urlId}
              url={link.longUrl}
              image={link.previewData.image}
              description={link.previewData.description}
              title={link.previewData.title}
              urlId={link.urlId}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Links;

interface PreviewerProps {
  url: string;
  image: string;
  description: string;
  title: string;
  urlId: string;
}
const Previewer = ({
  url,
  image,
  description,
  title,
  urlId,
}: PreviewerProps) => {
  const shortUrl = linkConstructor(urlId);
  const { onOpen } = useDelete();
  return (
    <>
      <div className="max-w-sm bg-meta-9 border border-gray-200 rounded-lg shadow h-[385px] sm:h-[420px]">
        <div className="object-cover bg-meta-1 rounded-t-lg">
          <Image
            src={image || "/image-placeholder.svg"}
            width={800}
            height={500}
            loader={({ src }) => src}
            alt="url preview image"
            className="rounded-t-lg h-26 sm:h-56"
          />
        </div>

        <div className="p-5 h-[200px] flex flex-col justify-between">
          <CustomTooltip text={title}>
            <h5 className="mb-2 text-sm sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate cursor-pointer">
              {title}
            </h5>
          </CustomTooltip>

          <CustomTooltip text={description}>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate cursor-pointer text-[10px] sm:text-sm">
              {description}
            </p>
          </CustomTooltip>
          <div className="flex flex-col justify-between gap-y-4">
            <div className="flex justify-between w-full">
              <Link href={shortUrl} target="_blank" className="w-full">
                <Input
                  defaultValue={shortUrl}
                  readOnly
                  className="text-sm sm:text-lg font-semibold text-meta-3 cursor-pointer hover:underline rounded-r-none"
                />
              </Link>
              <CopyButton urlId={shortUrl} />
            </div>
            <div className="flex justify-between w-full items-center">
              <Link
                href={url}
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-meta-0 rounded-lg hover:bg-meta-0/80 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Visit Site
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <LinkMenu>
                <Link href={"/dashboard/analytics"}>
                  <div className="hover:bg-foreground/5 cursor-pointer p-2 rounded-md flex items-center gap-x-2">
                    <LineChart size={16} className="" />
                    Analyse
                  </div>
                </Link>
                <div
                  className="hover:bg-foreground/5 cursor-pointer p-2 rounded-md flex items-center gap-x-2 text-meta-5"
                  onClick={() => {
                    onOpen(urlId);
                  }}
                >
                  <Trash size={16} className="text-meta-7" />
                  Delete
                </div>
              </LinkMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
