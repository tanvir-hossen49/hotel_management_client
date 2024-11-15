import React from 'react';

const RoomCard = ({ apartment }) => {

   

    return (
        <div className="card card-compact bg-base-100  shadow-xl ">
                <figure>
                    <img
                        src={apartment.apartment_image}
                        alt="rooms" />
                </figure>
                <div className="card-body font-mono font-bold ">
                    <p> Floor No : {apartment.floor_no} </p>
                    <hr />
                    <p> Block Name : {apartment.block_name} </p>
                    <hr />
                    <p> Apartment No : {apartment.apartment_no} </p>
                    <hr />
                    <p> Rent : {apartment.rent} </p>
                    <hr />

                </div>

                <p className="btn bg-green-400 font-mono hover:bg-green-500 "> {apartment.agreement_button} </p>

            </div>
    );
};

export default RoomCard;