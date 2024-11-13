import { useEffect, useRef, useState } from "react";
import GuestCounter from "./GuestCounter";
import Icon from "../Icon/Icon";

const Guest = () => {
  const [openGuestCounter, setOpenGuestCounter] = useState(false);
  const [guestCounts, setGuestCounts] = useState([
    { name: "Adult", count: 1, default: 1 },
    { name: "Children", count: 0, default: 0 },
    { name: "Room", count: 1, default: 1 },
  ]);

  const guestCounterRef = useRef(null);

  // Close GuestCounter when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        guestCounterRef.current &&
        !guestCounterRef.current.contains(event.target)
      ) {
        setOpenGuestCounter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Helper function to format the guest summary text
  const formatGuestSummary = () => {
    const [adults, children, rooms] = guestCounts;
    const adultText = `${adults.count} Adult${adults.count > 1 ? "s" : ""}`;
    const childrenText = `${children.count} ${
      children.count > 1 ? "Children" : "Child"
    }`;
    const roomText = `${rooms.count} Room${rooms.count > 1 ? "s" : ""}`;
    return (
      <div className="flex gap-3">
        <span>{adultText}</span>
        <span>{childrenText}</span>
        <span>{roomText}</span>
      </div>
    );
  };

  return (
    <div className="flex gap-2 cursor-pointer relative p-2 border rounded-md md:flex-row md:gap-4 md:p-4">
      <span>
        <Icon name="user" />
      </span>

      <div ref={guestCounterRef}>
        <div
          className="flex gap-4 text-center"
          onClick={() => setOpenGuestCounter(!openGuestCounter)}
        >
          {formatGuestSummary()}
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
