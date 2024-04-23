import Image from "next/image";

const HeroCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full justify-around gap-x-4 my-8 md:mb-5 md:-mt-2">
      <Image
        src={"/hero.svg"}
        width={300}
        height={100}
        alt="Hero image"
        className="w-40 md:w-80"
      />
      <Image
        src={"/hero-2.svg"}
        width={350}
        height={100}
        alt="Hero image"
        className="w-44 md:w-96"
      />
    </div>
  );
};

export default HeroCard;
