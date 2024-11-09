import React from 'react';
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client';

const Banner = () => {
    return (
        <div className='relive'>
            <div
                className="h-[90vh] bg-cover bg-center "
                style={{
                    backgroundImage: "url('https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=')",
                }}
            >
                <div className='h-[90vh] flex items-center justify-center  bg-slate-800 bg-opacity-50 w-full'>
                    <div className="text-white text-center">
                        <h1

                            className="text-3xl font-semibold italic inline-flex gap-2"><motion.p
                                initial={{ x: 90, scale: 0.3, opacity: 0 }}
                                animate={{ x: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >Welcome to</motion.p> <motion.p
                                initial={{ x: -90, scale: 0.3, opacity: 0 }}
                                animate={{ x: 0, scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >[hotel name]</motion.p></h1>
                        <div className='overflow-hidden'>
                            <motion.p
                                initial={{ scale: 1.5 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className='text-[11px] font-semibold'><span className='overflow-hidden '>Where every stay is unique</span></motion.p>
                        </div>
                        <motion.button
                            initial={{ opacity: 0, y: 150, scale: 2 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.5 }}
                            className="text-white border-2 border-white py-2 px-10 font-semibold hover:bg-white hover:text-black  duration-500 my-5 text-[15px]">Book Now</motion.button>
                    </div>
                </div>
            </div>
            <div className="bg-white mx-12 shadow-md absolute bottom-3 w-[calc(100%-6rem)]">
  <div className="flex items-center p-6 gap-4">
    <input
      className="border-2 border-slate-700 w-full p-2"
      type="date"
      name=""
      id=""
    />
    <input
      className="border-2 border-slate-700 w-full p-2"
      type="date"
      name=""
      id=""
    />
    <input className='w-full border-2 border-slate-700 p-2' defaultValue={1} placeholder='Adult' type="number" name="" id="" />
    <input className='w-full border-2 border-slate-700 p-2' placeholder='Children' type="number" name="" id="" />
    <button className='uppercase p-2 border-2 border-slate-700 w-full'>Check Availability</button>
  </div>
</div>
        </div>

    );
};

export default Banner;