import { useState, useEffect, useRef } from "react";
import CalendarButton from "./CalendarButton";
import CalendarModal from "./CalendarModal";

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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={calendarRef}>
      <CalendarButton
        onClick={() => setOpenCalendar(!openCalendar)}
        startDate={selectionRange.startDate}
        endDate={selectionRange.endDate}
      />

      <CalendarModal
        selectionRange={selectionRange}
        onSelect={handleSelect}
        isOpen={openCalendar}
      />
    </div>
  );
};

export default Calendar;
