import React from 'react'
import { useState } from "react";


import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";



const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
  hidden: { opacity: 0, scale: 1 }
};




const Blueprint = () => {
  
  
  
    const [showCard, setShowCard] = useState(false);


    const control = useAnimation();
    const [ref, inView] = useInView();
  
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

  
  
  
    return (
    <div> 
        
        <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        background: "black",
      }}
      className=" min-h-screen mt-16"
    >
      <motion.div
        style={{
          background: "#965F9C",
          padding: "3rem 2rem",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
        //hover
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 10px rgba(0,0,0,0.4)",
        }}
        transition={{
          layout: {
            duration: 1,
            type: "spring",
          },
        }}
        layout
        onClick={() => setShowCard(!showCard)}

        
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      >
        <motion.h4 layout="position" className='text-white lg:text-9xl text-4xl font-semibold'>Plan</motion.h4>
        {showCard && (
          
          <motion.div className="container mt-32 mx-auto p-4 md:p-0">
          {/* Card wrapper */}
          <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
            {/* Card image */}
            <div
              className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
              style={{
                backgroundImage:
                  'url("/Plan.gif")'
              }}
            >
              <div className="absolute text-xl">
                <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer" />
              </div>
            </div>
            {/* ./Card image */}
            {/* Card body */}
            <div className="bg-gradient-to-r from-rose-400 w-full md:w-2/3">
              {/* Card body - outer wrapper */}
              <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                {/* Card body - inner wrapper */}
                <div className="bg- lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                  {/* Card title and subtitle */}
                  <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                    <h3></h3>
                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                      
                    </p>
                    <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                  </div>
                  {/* ./Card title and subtitle */}
                  {/* Card description */}
                  <div className="w-full lg:w-3/5 lg:px-3">
                    <p className="lg:text-2xl mt-4 lg:mt-0 text-justify md:text-left font-medium text-white">
                    Our experience with their brand we design accordingly - Design and Development.
It is the motive and objective to Assist you in raising your platform online. Apparky is the assistant to it.
Our works and efforts helps you to build your connection with your target audience. Our innovative and latest designs makes you fulfill your demands. By branding your services, you can achieve your commercial objectives.

                    </p>
                  </div>
                  {/* ./Card description */}
                  {/* Call to action button */}
                  
                  {/* ./Call to action button */}
                </div>
                {/* ./Card body - inner wrapper */}
              </div>
              {/* ./Card body - outer wrapper */}
            </div>
            {/* ./Card body */}
          </div>
          {/* ./Card wrapper */}
        </motion.div>



        )}
      </motion.div>
    </div>



         </div>
  )
}

export default Blueprint