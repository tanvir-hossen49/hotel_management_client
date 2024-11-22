import { useRef, useState } from "react";
import GuestSummary from "./GuestSummary";
import GuestCounter from "./GuestCounter";
import Icon from "../Icon/Icon";
import useOutsideClick from "../../hooks/useOutsideClick";

const Guest = () => {
  const [openGuestCounter, setOpenGuestCounter] = useState(false);
  const [guestCounts, setGuestCounts] = useState([
    { name: "Adult", count: 1, default: 1 },
    { name: "Children", count: 0, default: 0 },
    { name: "Room", count: 1, default: 1 },
  ]);
  const guestCounterRef = useRef(null);
  useOutsideClick(guestCounterRef, () => setOpenGuestCounter(false));

  return (
    <div
      tabIndex={0}
      className="flex gap-2 cursor-pointer relative p-2 border rounded-md md:flex-row md:gap-4 md:p-4"
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") {
          setOpenGuestCounter(!openGuestCounter);
        }
      }}
    >
      <span>
        <Icon name="user" />
      </span>

      <div ref={guestCounterRef}>
        <div
          className="flex gap-4 text-center"
          onClick={() => setOpenGuestCounter(!openGuestCounter)}
        >
          <GuestSummary guestCounts={guestCounts} />
        </div>

        {openGuestCounter && (
          <GuestCounter
            guestCounts={guestCounts}
            setGuestCounts={setGuestCounts}
          />
        )}
      </div>

      <span>
        <Icon name="downArrow" />
      </span>
    </div>
  );
};

export default Guest;
