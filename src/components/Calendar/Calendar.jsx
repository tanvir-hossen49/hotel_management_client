import { useState, useRef } from "react";
import CalendarButton from "./CalendarButton";
import CalendarModal from "./CalendarModal";
import useOutsideClick from "../../hooks/useOutsideClick";

const Calendar = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
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

  const calendarRef = useRef(null);
  useOutsideClick(calendarRef, () => setOpenCalendar(false));

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
