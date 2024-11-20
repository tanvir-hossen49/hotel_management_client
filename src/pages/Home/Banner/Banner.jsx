import bannerImg from "../../../assets/download.webp";
import AvailabilityChecker from "./AvailabilityChecker";
import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)), url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex h-[650px] w-full flex-col justify-center items-center"
    >
      <BannerContent />
      <AvailabilityChecker />
    </div>
  );
};

export default Banner;
