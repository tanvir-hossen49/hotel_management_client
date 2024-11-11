import { useEffect, useRef, useState } from "react";
import GuestCounter from "./GuestCounter";
import { Icon } from "../index.js";

const Guest = () => {
  const [openGuestCounter, setOpenGuestCounter] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(1);
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

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex gap-2 cursor-pointer relative p-2 border rounded-md md:flex-row md:gap-4 md:p-4">
      <span>
        <Icon name="user" />
      </span>
      <div ref={guestCounterRef}>
        <div
          className="flex gap-4 select-none text-center"
          onClick={() => setOpenGuestCounter(!openGuestCounter)}
        >
          <span>
            {adults} Adult{adults > 1 ? "s" : ""}
          </span>
          <span>{children} Children</span>
          <span>
            {room} Room{room > 1 ? "s" : ""}
          </span>
        </div>

        {openGuestCounter && (
          <GuestCounter
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
            room={room}
            setRoom={setRoom}
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
