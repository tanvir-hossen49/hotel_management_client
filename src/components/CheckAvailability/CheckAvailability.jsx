import Calendar from "./Calendar";
import Search from "./Search";
import Guest from "./Guest";

const CheckAvailability = () => {
  return (
    <div className="bg-white text-black p-5 rounded-3xl flex justify-between items-center gap-x-16">
      <Calendar />
      <Guest />
      <Search />
    </div>
  );
};

export default CheckAvailability;
