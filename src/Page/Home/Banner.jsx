import { Navbar } from "../../components";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/src/assets/download.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Navbar />
    </div>
  );
};

export default Banner;
