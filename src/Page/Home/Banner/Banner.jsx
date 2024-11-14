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
        width: "100vw",
        height: "650px",
      }}
      className="flex flex-col justify-center items-center"
    >
      <BannerContent />
      <AvailabilityChecker />
    </div>
  );
};

export default Banner;
