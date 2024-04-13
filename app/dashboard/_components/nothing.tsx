import Image from "next/image";

const imgData = [
  {
    pagename: "links",
    heading: "No links found",
    src: "/no-links.svg",
    alt: "No links found",
  },
  {
    pagename: "analytics",
    heading: "Create links to analyse them",
    src: "/analytics.svg",
    alt: "create links to view analytics",
  },
];
const Nothing = ({ pagename }: { pagename: string }) => {
  const pageData = imgData.find((data) => data.pagename === pagename);

  return (
    <div className="flex items-center justify-center flex-col gap-y-8">
      <h1 className="text-meta-3/75 font-semibold text-xl sm:text-2xl md:text-3xl">
        {pageData?.heading}
      </h1>
      <Image
        src={pageData?.src || "/error.svg"}
        priority
        alt={pageData?.alt || "error"}
        width={400}
        height={400}
        className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
      />
    </div>
  );
};

export default Nothing;
