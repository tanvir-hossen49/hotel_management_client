import React from "react";

const GuestCounter = ({
  adults,
  setAdults,
  children,
  setChildren,
  room,
  setRoom,
}) => {
  const increment = type => {
    if (type === "adults") {
      setAdults(adults + 1);
    } else if (type === "children") {
      setChildren(children + 1);
    } else if (type === "room") {
      setRoom(room + 1);
    }
  };

  const decrement = type => {
    if (type === "adults" && adults > 1) {
      setAdults(adults - 1);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
    } else if (type === "room" && room > 1) {
      setRoom(room - 1);
    }
  };

  return (
    <div className="absolute bg-white mt-8 border border-1 rounded-lg p-4 select-none">
      <div>
        <span className="block font-medium text-gray-700">Adults</span>
        <div className="flex items-center mt-2">
          <button
            onClick={() => decrement("adults")}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <input
            type="text"
            value={adults}
            readOnly
            className="w-12 text-center mx-2 border border-gray-300 rounded"
          />
          <button
            onClick={() => increment("adults")}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>

      <div className="my-2">
        <span className="block font-medium text-gray-700">Children</span>
        <div className="flex items-center mt-2">
          <button
            onClick={() => decrement("children")}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <input
            type="text"
            value={children}
            readOnly
            className="w-12 text-center mx-2 border border-gray-300 rounded"
          />
          <button
            onClick={() => increment("children")}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>

      <div>
        <span className="block font-medium text-gray-700">Room</span>
        <div className="flex items-center mt-2">
          <button
            onClick={() => decrement("room")}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <input
            type="text"
            value={room}
            readOnly
            className="w-12 text-center mx-2 border border-gray-300 rounded"
          />
          <button
            onClick={() => increment("room")}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestCounter;
