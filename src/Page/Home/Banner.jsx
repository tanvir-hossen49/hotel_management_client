import Calender from "../../components/Calender";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/src/assets/download.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="flex justify-center items-center"
    >
      <Calender />
    </div>
  );
};

export default Banner;
