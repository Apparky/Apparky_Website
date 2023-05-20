import React from 'react'
import { useState } from "react";


import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";



const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
  hidden: { opacity: 0, scale: 1 }
};




const Explore = () => {
  
  
  
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
          background: "#2f3c7e",
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
        <motion.h4 layout="position" className='text-white lg:text-9xl  text-4xl font-semibold'>Construct</motion.h4>
        {showCard && (
          
          <motion.div className="container mt-32 mx-auto p-4 md:p-0">
          {/* Card wrapper */}
          <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
            {/* Card image */}
            <div
              className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
              style={{
                backgroundImage:
                  'url("/Construct.gif")'
              }}
            >
              <div className="absolute text-xl">
                <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer" />
              </div>
            </div>
            {/* ./Card image */}
            {/* Card body */}
            <div className="bg-gradient-to-r from-[#fbeaeb5d] w-full md:w-2/3">
              {/* Card body - outer wrapper */}
              <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                {/* Card body - inner wrapper */}
                <div className="bg- lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                  {/* Card title and subtitle */}
                  <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                    <h3></h3>
                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                      
                    </p>
                    
                  </div>
                  {/* ./Card title and subtitle */}
                  {/* Card description */}
                  <div className="w-full lg:px-3">
                    <p className="lg:text-2xl mt-4 lg:mt-0 text-justify md:text-left font-medium text-white">
                    
                  <span className='lg:text-3xl text-xl px-8 '>All of the latest technology increases the efficiency level and makes the output speedy.</span>
                    
                    <ul className="list-disc lg:ml-20 ml-4 ">
     <li>React JS- It&apos;s a JavaScript library for building user interface which is fast, secure and interactive for the user.</li>
     <li>Next JS - helps to create full stack web pages by extending react framework.</li>
     <li>Node JS- Node JS is a JavaScript runtime built on Chrome&apos;s V8 JavaScript engine. </li>
     <li>Tailwind CSS- A utility-first CSS framework that can be composed to build any design, directly in your markup. </li>
     <li>Django- A leading Python Web Framework that inspire rapid development.</li>
    </ul>
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

export default Explore