import { useState, useEffect, useRef } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Icon } from "../index";

const Calendar = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const calendarRef = useRef(null);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = ranges => {
    setSelectionRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
    });
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setOpenCalendar(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Formatting the dates to display
  const formatDate = date => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="relative" ref={calendarRef}>
      <button
        onClick={() => setOpenCalendar(!openCalendar)}
        className="flex gap-3 items-center p-2 border rounded-md md:flex-row md:gap-4 md:p-4"
      >
        <span>
          <Icon name="calendar" />
        </span>
        <span className="text-sm md:text-base">
          {`${formatDate(selectionRange.startDate)} - ${formatDate(
            selectionRange.endDate
          )}`}
        </span>
      </button>

      {openCalendar && (
        <div className="absolute top-full left-0 z-50 w-full md:w-auto transition-transform">
          <DateRange
            ranges={[selectionRange]}
            onChange={handleSelect}
            months={window.innerWidth < 768 ? 1 : 2}
            direction={window.innerWidth < 768 ? "vertical" : "horizontal"}
            minDate={new Date()}
          />
        </div>
      )}
    </div>
  );
};

export default Calendar;
