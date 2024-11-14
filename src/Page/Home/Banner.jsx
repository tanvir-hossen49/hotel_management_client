import { CheckAvailability } from "../../components/index";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/src/assets/download.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="flex justify-center items-center container"
    >
      <CheckAvailability />
    </div>
  );
};

export default Banner;