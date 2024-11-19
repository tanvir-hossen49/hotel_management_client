import { lazy, Suspense } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const CalendarModal = ({ selectionRange, onSelect, isOpen }) => {
  const DateRange = lazy(() =>
    import("react-date-range").then(module => ({ default: module.DateRange }))
  );
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 z-50 w-full md:w-auto transition-transform">
      <Suspense fallback={<div>Loading...</div>}>
        <DateRange
          ranges={[selectionRange]}
          rangeColors={["#43b45e"]}
          onChange={onSelect}
          months={window.innerWidth < 768 ? 1 : 2}
          direction={window.innerWidth < 768 ? "vertical" : "horizontal"}
          minDate={new Date()}
        />
      </Suspense>
    </div>
  );
};

export default CalendarModal;
