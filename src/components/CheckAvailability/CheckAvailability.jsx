import Calendar from "./Calendar";
import Search from "./Search";
import Guest from "./Guest";

const CheckAvailability = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-4 md:gap-x-8 lg:gap-x-16 bg-white text-black p-5 rounded-3xl">
      <Calendar />
      <Guest />
      <Search />
    </div>
  );
};

export default CheckAvailability;
