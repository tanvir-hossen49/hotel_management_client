import React, { useEffect, useState } from "react";


const Rooms = () => {


  const [apartments, setApartments] = useState([])
  

  useEffect(()=>{
    fetch('rooms.json')
    .then((res)=> res.json())
    .then((data)=> {
      setApartments(data)
  
    })

  },[])

 console.log(apartments)

  return (
    <div>
       {
        apartments.map((apartment, index)=> 
          <div key={index} className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={apartment.apartment_image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
            
        
            
        )
       }
    </div>
  );
};

export default Rooms;
