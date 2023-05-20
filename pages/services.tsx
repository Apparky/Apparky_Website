import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'


import Aimandobjective from "../components/Explore"

import ComprisonSlider from"../components/ComprisonSlider"



import Blueprint from "../components/Blueprint"

import Construct from "../components/Construct"


import Upgrade from "../components/Upgrade"


import Image from 'next/image'

import AnimatedTextWord from "../components/AnimatedTextWord";

import Link from 'next/link';



export default function Services() {
    
  const parallax = useRef<IParallax>(null!)


 


 
  
  return (
      
      
      <div className='page page-one parallax4' style={{ width: '100%', height: '100%' }}>
    
    
    

    <div >
  <h2 className="font-semibold text-[24vw] sm:text-[25vw] lg:text-[26vw] text-gray-700  " style={{lineHeight: 2}}><AnimatedTextWord text="Services"/></h2>
      
  
  </div>
  
  
  
  
  
  
  
  
      <Parallax ref={parallax} pages={8}  >
  
        
  <ParallaxLayer offset={1} speed={0.5}     style={{ backgroundColor: '#000000' ,borderTopLeftRadius: '40px', borderTopRightRadius: '40px' , width:'100', opacity:"0.93"}} className="min-h-screen">
  
  
  
  <div  >
  <h2 className="font-semibold text-[10vw] sm:text-[10vw] lg:text-[12vw] text-white ml-10  lg:ml-4" style={{lineHeight: 2}}>What we do</h2>
  <h1 className="font-semibold text-[6vw]  lg:text-[6vw] lg:ml-16 ml-4" style={{lineHeight: 1, color:'#ffffff' }}>The qualities are always recalled long after the price is forgotten</h1>  
  
  </div>
  
  




  


  
  
  
<div className='mt-24 bg-black'>

<div>
   <section className="overflow-hidden relative  pointer-events-none w-full mx-auto " ><div className="lg:w-5/6  lg:h-full overflow-hidden lg:ml-40 ml-4 lg:mt-36 "> <video autoPlay loop muted className='w-full h-3/4  rounded-3xl'>
              <source src='/videos/Services.mp4' type='video/mp4' />
  </video></div></section> 


  </div> 
  
  
  
  
  
  <h1 className=" font-medium text-[6vw] sm:text-[4vw] lg:text-[8vw] lg:ml-16 font-serif ml-4  mt-20" style={{lineHeight: 1, color:'#ffffff' }}>We accomplish this by using a straightforward method.</h1>  

  
  
  
  <div>

    <Aimandobjective/>
  </div>
  
  
  <div>

    <Blueprint/>
  </div>
  

  <div>

    <Construct/>
  </div>
  
  

  <div>

    <Upgrade/>
  </div>
  
  


  <div className='lg:border-2 border-yellow-400 lg:rounded-2xl  lg:mt-4 border ml-2 mr-2 rounded-2xl mt-12'>
  
  <div className="block   rounded-2xl  p-4 shadow-xl sm:p-6 lg:p-8 lg:w-11/12  bg-black min-w-full" >
  
  <h2 className="mr-auto mb-4  font-semibold lg:text-8xl text-white text-4xl  lg:ml-12">
  Our Capabilities
      
    </h2>
  <p className="text-gray-300 lg:text-5xl md:text-sm font-PlataSansRegular lg:ml-20">

  <p className=" lg:text-5xl lg:mt-4 lg:ml-12 font-medium  text-2xl">Apparky with its Advanced Technological Potential: </p>
  
  <ul className="list-disc lg:ml-24 ml-4 mt-4 text-xl lg:text-4xl">
  
     <li>Web Development</li>
     <li>Custom Desktop Application </li>
     <li>Android App Development</li>
     <li>Social Media Management Service</li>
   
    </ul>

  </p>
</div>

  
  
  
  
  
  
  
  
  <div
  className="block   p-4 shadow-xl   lg:w-11/12  lg:ml-20 mt-4  " >
  
  <h1 className="mt-3 lg:text-7xl font-medium text-white sm:text-2xl font-PlataSansRegular text">
  How do we help ?
  </h1>
  <p className="lg:mt-4  text-gray-300 lg:text-4xl md:text-sm font-PlataSansRegular">
  We believe that if we put our efforts it will be equal to your success. This will always built the enthusiasm to be our partners. 

  </p>


  <h1 className="mt-5 lg:text-7xl font-medium text-white sm:text-2xl font-PlataSansRegular text">
  How we deliver result?  
  </h1>

  <h1 className="mt-3 lg:text-5xl font-medium text-white sm:text-2xl font-PlataSansRegular text">
  <li>  Time and money management </li>
  </h1>
  <p className="lg:mt-4  text-gray-300 lg:text-4xl md:text-sm font-PlataSansRegular">
  The time is precious to all, that&apos;s why Apparky always tries to deliver the projects earlier than the deadlines. As we value the time we value the customers too. 

  </p>
</div>

  



</div>

 


</div>


   











 
 
 
 
 
 
 
 
 
 
 {/*<div className='mt-8'>

   <section className="overflow-hidden relative  pointer-events-none w-full mx-auto" ><div className="w-5/6  h-full overflow-hidden lg:ml-40 ml-16"> <video autoPlay loop muted className='w-full h-3/4 border rounded-3xl'>
              <source src='/videos/aboutvideo4.mp4' type='video/mp4' />
  </video></div></section> 


  </div>  */}




 {/*<div className=' bg-black '>

<ComprisonSlider style={undefined} className="lg:ml-0 bg-black ml-24 h-1/2 w-1/2"/>


</div> */}









  
  
<section className=" p-10 sm:p-20 relative z-10 overflow-hidden text-white "  style={{ backgroundColor:'#000000' }}>
  
  <h2 className="font-semibold text-[12vw] sm:text-[12vw] lg:text-[26vw] " style={{lineHeight: 2, color:'#ffffff' }}>Ready ?</h2>
      
  <h1 className="font-semibold text-[6vw] sm:text-[4vw] lg:text-[6vw] " style={{lineHeight: 0, color:'#ffffff' }}><Link href="/contact">Share your idea with us</Link></h1>
  </section>
  
  
  </ParallaxLayer>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  
  
  
  
  
  
  
 
  
  
  
  
  <ParallaxLayer
    offset={0}
    speed={0.1}
    onClick={() => parallax.current.scrollTo(1)}
    >
  
  
      
              
  </ParallaxLayer>
  
  
  
  
  
  
  
  
  
  
  
  
  
  </Parallax>
      
    
  
  
      </div>
    );
  }
  
  