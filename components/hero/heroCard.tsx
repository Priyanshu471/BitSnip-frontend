import Image from "next/image";

const HeroCard = () => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <p className="max-w-2xl">
              <Image
                src={"/hero-1.svg"}
                width={600}
                height={200}
                alt="Hero image"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
