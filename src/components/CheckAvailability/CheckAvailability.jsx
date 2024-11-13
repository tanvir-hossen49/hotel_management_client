import Calendar from "./Calendar";
import Guest from "./Guest";
import Search from "./Search";

const CheckAvailability = () => {
  return (
    <div className="sm:w-2/3 md:w-auto flex flex-col md:flex-row justify-between md:items-center select-none gap-y-4 md:gap-x-8 lg:gap-x-16 bg-white text-black p-5 rounded-3xl">
      <Calendar />
      <Guest />
      <Search />
    </div>
  );
};

export default CheckAvailability;
