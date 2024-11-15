import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";


const Rooms = () => {


  const [apartments, setApartments] = useState([])


  useEffect(() => {
    fetch('rooms.json')
      .then((res) => res.json())
      .then((data) => {
        setApartments(data)

      })

  }, [])

  console.log(apartments)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {
          apartments.map((apartment, index) => <RoomCard key={index} apartment={apartment}></RoomCard>

            
          )
        }
      </div>
    </div>
  );
};

export default Rooms;
