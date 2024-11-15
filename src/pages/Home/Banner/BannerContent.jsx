import { useEffect, useState } from "react";
import Icon from "../../../components/Icon/Icon";

const BannerContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`mb-8 text-[#649dc1] transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <h1 className="md:text-5xl sm:text-4xl text-2xl font-semibold">
        Welcome to Hotel Al Farah
      </h1>
      <p className="flex justify-center sm:text-base text-sm text-center mt-[2px]">
        <Icon name="location" />
        Maijdee, Noakhali
      </p>
    </div>
  );
};

export default BannerContent;
