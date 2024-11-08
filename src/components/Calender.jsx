import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Calender = () => {
  const [open, setOpen] = useState(false);
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
    setOpen(false);
  };

  return (
    <div className="bg-white text-black w-3/4 h-1/2 rounded-3xl flex justify-around items-center">
      {/* calender */}
      <div className="">
        <div>
          <button onClick={() => setOpen(!open)}>Check-In / Check-Out</button>

          {open && (
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
      {/* adults */}
      <div>Adults</div>
      {/* children */}
      <div>Children</div>
    </div>
  );
};

export default Calender;
