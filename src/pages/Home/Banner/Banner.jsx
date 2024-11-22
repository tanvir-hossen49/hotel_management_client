import bannerImg from "../../../assets/download.webp";
import BannerContent from "./BannerContent";
import CheckAvailability from "./CheckAvailability";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)), url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex h-[650px] flex-col justify-center items-center"
    >
      <div className="container">
        <BannerContent />
        <CheckAvailability />
      </div>
    </div>
  );
};

export default Banner;
