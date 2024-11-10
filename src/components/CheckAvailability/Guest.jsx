import { useState } from "react";
import GuestCounter from "./GuestCounter";
import { Icon } from "../index.js";

const Guest = () => {
  const [openGuestCounter, setOpenGuestCounter] = useState(false);
  return (
    <div className="flex gap-2 cursor-pointer relative">
      <span>
        <Icon name="user" />
      </span>
      <div>
        <div
          className="flex gap-4"
          onClick={() => setOpenGuestCounter(!openGuestCounter)}
        >
          <span>1 Adult</span>
          <span>0 Children</span>
          <span>1 Room</span>
        </div>

        {openGuestCounter && <GuestCounter />}
      </div>
      <span>
        <Icon name="downArrow" />
      </span>
    </div>
  );
};

export default Guest;
