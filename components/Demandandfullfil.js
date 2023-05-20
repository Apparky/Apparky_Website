import React from 'react'
import { useState } from "react";


import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";



const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};




const Demandandfullfill = () => {
  
  
  
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
        height: "120vh",
        background: "black",
      }}
    >
      <motion.div
        style={{
          background: "blue",
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
        <motion.h4 layout="position" className='text-white text-7xl font-semibold'>Demand and Fullfillment</motion.h4>
        {showCard && (
          
          <motion.div className="container mt-32 mx-auto p-4 md:p-0">
          {/* Card wrapper */}
          <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
            {/* Card image */}
            <div
              className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1671810456344-56f6e8c94069?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGFpbSUyMGFuZCUyMGRldGVtaW5hdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")'
              }}
            >
              <div className="absolute text-xl">
                <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer" />
              </div>
            </div>
            {/* ./Card image */}
            {/* Card body */}
            <div className="bg-gradient-to-r from-indigo-500 w-full md:w-2/3">
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
                    <p className="text-2xl mt-4 lg:mt-0 text-justify md:text-left font-semibold text-white">
                    The maximum demand is to get the deal with the low cost. And thus we are here to fulfill the necessity that you all want from us. We work with an effective budget-friendly culture due to which both you and us are satisfied.
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

export default Demandandfullfill