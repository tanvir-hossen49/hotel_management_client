import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Icon } from "../index";

const Calendar = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = ranges => {
    setSelectionRange({
      ...selectionRange,
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
    });
    setOpenCalendar(false);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => setOpenCalendar(!openCalendar)}
          className="flex gap-3"
        >
          <span>
            <Icon name="calendar"></Icon>
          </span>
          <span> Check-In / Check-Out</span>
        </button>

        {openCalendar && (
          <DateRange
            ranges={[selectionRange]}
            onChange={handleSelect}
            months={2}
            direction="horizontal"
            minDate={new Date()}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
