import bannerImg from "../../../assets/download.webp";
import AvailabilityChecker from "./AvailabilityChecker";
import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex h-[100vh] w-full flex-col items-center relative"
    >
      <div className="absolute md:top-48 top-20">
        <BannerContent />
      <AvailabilityChecker />
      </div>
    </div>
  );
};

export default Banner;
