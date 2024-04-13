import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { LinkData } from "@/hooks/useShortener";
import { useShortener } from "@/hooks/useShortener";
import useLinkPreview, { PreviewData } from "@/hooks/useLinkPreview";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CustomTooltip } from "@/components/tooltip";
import { AllLinks, allLinks } from "@/lib/constants";
import { useLinkData } from "@/hooks/useLinkData";
import { CopyButton } from "@/components/copy/copyButton-small";
import { useShortLinks } from "@/hooks/useShortLinks";
import { linkConstructor } from "@/lib/utils";
import Loader from "@/components/loader/loader";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

const Links = () => {
  const { isLoaded, user } = useUser();
  const previewer = useLinkPreview();
  const shortener = useShortener();
  const { setLinkData, linkData } = useLinkData();
  const { setShortLinks, shortLinks } = useShortLinks();
  const [linkFetched, setLinkFetched] = useState<boolean>(false);
  useEffect(() => {
    if (shortLinks.urls.length === 0) {
      console.log("Fetching your links ....");
      handleFetchLinks();
    }
    if (linkData.length === 0 && linkFetched === true) {
      console.log("Fetching previews ....");
      handlePreview();
    }
  }, [linkFetched, linkData, shortLinks.urls]);
  async function handlePreview() {
    console.log("requesting for ....");

    const data = await Promise.all(
      shortLinks.urls.map(async (link) => {
        const previewData = await previewer.fetchLinkPreview(link.longUrl);
        return previewData;
      })
    );
    const filteredData = data.filter((item) => item !== null) as PreviewData[];
    if (filteredData) {
      console.log("setting preview data ....", filteredData);
      setLinkData(filteredData);
      toast.success("Fetched all your previews");
    }
  }
  async function handleFetchLinks() {
    const data: AllLinks = { urls: [] };
    const fetchedData = await shortener.fetchShortenedUrls(user?.id || "");
    if (fetchedData) {
      data.urls = fetchedData;
      console.log("setting data ....", data);
      console.log("Fetched all your links");
    }
    setShortLinks(data);
    setLinkFetched(true);
    toast.success("Fetched all your links");
  }
  if (previewer.loading)
    return (
      <div>
        <Loader />
      </div>
    );
  return (
    <>
      {!previewer.loading && linkData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-4 gap-4 my-4">
          {linkData.map((data, i) => (
            <div key={i} className="my-2">
              {shortLinks.urls[i] && ( // Add conditional check here
                <Previewer
                  url={data.url}
                  image={data.image}
                  description={data.description}
                  title={data.title}
                  urlId={shortLinks.urls[i].urlId}
                />
              )}
            </div>
          ))}
        </div>
      )}
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
  return (
    <>
      {url && (
        <div className="max-w-sm bg-meta-9 border border-gray-200 rounded-lg shadow h-[420px]">
          <div className="object-cover bg-meta-1 rounded-t-lg">
            {image && (
              <Image
                src={image}
                width={800}
                height={500}
                loader={({ src }) => src}
                alt="url preview image"
                className="rounded-t-lg h-56"
              />
            )}
            {!image && (
              <Image
                src="/image-not-found.svg"
                width={800}
                height={500}
                loader={({ src }) => src}
                alt="url preview image not found"
                className="rounded-t-lg h-56  object-contain"
              />
            )}
          </div>

          <div className="p-5 h-[200px] flex flex-col justify-between">
            <CustomTooltip text={title}>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate cursor-pointer">
                {title}
              </h5>
            </CustomTooltip>

            <CustomTooltip text={description}>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate cursor-pointer text-xs">
                {description}
              </p>
            </CustomTooltip>
            <div className="flex flex-col justify-between gap-y-4">
              <div className="flex justify-between w-full">
                <Link href={shortUrl} target="_blank" className="w-full">
                  <Input
                    defaultValue={shortUrl}
                    readOnly
                    className="text-lg font-semibold text-meta-3 cursor-pointer hover:underline"
                  />
                </Link>
                <CopyButton urlId={shortUrl} />
              </div>
              <Link
                href={url}
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-meta-0 rounded-lg hover:bg-meta-0/80 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Visit Site
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
