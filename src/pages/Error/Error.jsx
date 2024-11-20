import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="px-10 w-full h-screen flex items-center flex-col justify-center py-20 bg-[#00543A]">
      <img
        src="https://i.ibb.co/LvLq6d3/Group-29.png"
        alt="illustration"
        className="w-full lg:w-[400px]"
      />
      <p className="text-[#fff] text-[1.2rem] w-full lg:w-[55%] text-center">
        The page cannot be found. The requested URL was not found on this
        server.
      </p>

      <button className="py-3 px-6 sm:px-8 rounded-full bg-[#fff] text-black mt-4 flex items-center gap-[10px]">
        <Link to="/">Back to home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
