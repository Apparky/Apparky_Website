import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'


import Aimandobjective from "../components/Explore"

import ComprisonSlider from"../components/ComprisonSlider"











import Image from 'next/image'
import AnimatedTextWord from '../components/AnimatedTextWord'

import Link from 'next/link';



export default function Why() {
    
  const parallax = useRef<IParallax>(null!)


 


 
  
  return (
      
      
      <div className='page page-one parallax2' style={{ width: '100%', height: '100%' }}>
    
    
    

    <div >
  <h2 className="font-semibold text-[24vw] sm:text-[25vw] lg:text-[26vw] " style={{lineHeight: 2}}><AnimatedTextWord text="Why ?"/></h2>
      
  
  </div>
  
  
  
  
  
  
  
  
      <Parallax ref={parallax} pages={8}  >
  
        
  <ParallaxLayer offset={1} speed={0.5}     style={{ backgroundColor: '#000000' ,borderTopLeftRadius: '40px', borderTopRightRadius: '40px' , width:'100', opacity:"0.90"}} className="min-h-screen" >
  
  
  
  <div  >
  <h2 className="font-semibold text-[10vw] sm:text-[10vw] lg:text-[12vw] text-white ml-10  lg:ml-4" style={{lineHeight: 2}}>We are Apparkian</h2>
      
  
  </div>
  
  




  


  <div
  className="block rounded-2xl border-4 border-yellow-400  p-4 shadow-xl   lg:w-11/12  lg:ml-20" >
  
  <h1 className="mt-3 lg:text-7xl font-medium text-white sm:text-2xl font-PlataSansRegular text">
  THIS IS HOW WE BEGIN!
  </h1>
  <p className="lg:mt-4  text-gray-300 lg:text-3xl md:text-sm font-PlataSansRegular">
Our story has started in a unique way. One day we were gossiping and discussing about latest web based technology. Suddenly, we found out there were a lot of small business owners, who are suffering from web existence and those who have their websites, they are facing the loading problems. By dominating this problems we upgraded ourselves with the upgraded technology. We start our journey from helping our known ones including relatives, friends, families in there businesses by introducing the speedy technology. We are glad to say that, all small business are operating successfully and functionally on web. We are happy to satisfy them. And finally we came up with Apparky.
  <br></br>App = Application & arky=pioneering spirit
So the inner meaning of Apparky symbolizes that exploring new ideas and methods with the application that is unique in every aspect.

  </p>
</div>

  


<div className="block     p-4 shadow-xl sm:p-6 lg:p-8 lg:w-11/12  bg-black min-w-full" >
  
  <h2 className="mr-auto mb-4  font-medium lg:text-7xl text-white sm:text-4xl  lg:ml-20">
    Global thinking-Honesty with your Unity
      
    </h2>
  <p className="text-gray-300 lg:text-3xl md:text-sm font-PlataSansRegular lg:ml-20">

  <ul className="list-disc lg:ml-20 ml-4 ">
     <li>We are trustworthy and obvious that is why we act with unforgiving honor.</li>
     <li>We guarantee a cautious and blooming work culture and a friendly atmosphere with you.</li>
     <li>We mold technology at its best shape. Because we always find a solution to a problems by understanding its core.</li>
     <li>We are here to change the thoughts by upgrading themselves with the modernization and with us.</li>
   
    </ul>

  </p>
</div>



 





   






<div className=''>



<section className="bg-blue-900">
  <div className="mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4 py-32 md:max-w-screen-xl md:grid-cols-2 md:px-8 lg:grid-cols-3">
    <div>
      <h2 className="lg:text-7xl font-medium text-white text-4xl  ">
      Our Value towards Customers
      </h2>
      <p className="text-2xl font-medium text-white mt-4">   We are dominated by our customers. We always listen to customers so that we can appreciate both their ambition and the provocation they face, and then get to work using our technology to solve their issues. This is why we are valued for.
The time is precious to all, that&apos;s why Apparky always tries to deliver the projects earlier than the deadlines. As we value the time we value the customers too.</p>
    </div>
    <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div className="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-16 w-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </div>
      <p className="mb-3 font-medium  text-white text-3xl">
      The Aim and Objective
      </p>
      <p className="text-blue-200 text-xl">
      APPARKY with its aim came forward with  your decision if you want to upgrade your business, Apparky is the explorer of creativity with the latest technology.
We work with modern generation to accelerate digital transformation for long term growth. 
Our services are based on increasing the efficiency of every visitors. 
We are the best Specialist in our world of technology and you are the specialist in your profession. So Together, We can conquer the world. Whenever we become the partner we are completed and successful. With the hope of Success, Apparky came forward to assure the best result or outcome that we can achieve together.
      </p>
    </div>
    <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div className="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-16 w-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </div>
      <p className="mb-3 font-medium  text-white text-3xl">
      Demand and Fulfillment
      </p>
      <p className="text-blue-200 text-xl">
        
      The maximum demand is to get the deal with the low cost. And thus we are here to fulfill the necessity that you all want from us. We work with an effective budget-friendly culture due to which both you and us are satisfied.

      </p>
    </div>
    <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div className="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-16 w-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </div>
      <p className="mb-3 font-medium  text-white text-3xl">
      Experiential learning - Learning through experience
      </p>
      <p className="text-blue-200 text-xl">
      Learning is good but when you combine both learning as well as  performing , it will become the best outcome. We never stop learning . We learn , we implement and the result is delivered to you . We always try to figure out newest innovation that will change the backdation.
      </p>
    </div>
    <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div className="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-16 w-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </div>
      <p className="mb-3 font-medium  text-white text-3xl">
      We are open to innovation and experimentation
      </p>
      <p className="text-blue-200 text-xl">
      Innovation is the most  important structure of life  , the reflection of change and solution of the problems. When it collaborates with Experiment the great creation and ideas comes .We are the innovative generation that creates the experiments to resolve every problems. We are here to resolve every possibilities that you are enduring with your businesses .
      </p>
    </div>
    <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div className="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-16 w-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </div>
      <p className="mb-3 font-medium  text-white text-3xl">
      Single Page Application with Speedy Resources
      </p>
      <p className="text-blue-200 text-xl">
      The overview of Apparky, is a single page application.“A single page application is a web application or websites that interacts with the user very fast and it’s very responsive.” Even if there is a poor internet connection the page loads quickly. 

We do not get exhausted, we always put our efforts to work harder and keep on exploring new ideas. 
      </p>
    </div>
  </div>
</section>



</div>







 
 
 
 <div className=' bg-gradient-to-r from-indigo-900 to-cyan-900 '>


 <section className="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row ">
  
  <div className="">
    
   
    <div className="grid gap-y-12 gap-x-16 lg:grid-cols-2">
      <div>
        <p className="mb-6 border-l-4 border-white pl-4 lg:text-6xl  text-cyan-500 text-2xl">
        We are here to make the rise of every single steps to success for everyone
        </p>
        <p className="lg:text-3xl text-white text-xl">
        We see our customers as invited guests to a party, and we are the hosts. It&apos;s our job to make the customer experience a far way better.
People expect good service but few are willing to give it.
Be helpful, even if there&apos;s no immediate profit in it.
The purpose of business should be to make life better for people.
When we help others it is the most important feelings that Apparky believes.
We like to listen. We have learned a great deal from listening carefully. Most people never listen.
To listen closely and reply well is the highest perfection we are able to attain in the art of conversation. 
        </p>
      </div>
      <div>
        <p className="mb-6 border-l-4 border-white pl-4 lg:text-6xl  text-cyan-500 text-2xl">
        Make yourself creative with us,we are the creative generation 

        </p>
        <p className="lg:text-3xl text-white text-xl">
        The small businesses to the individual, all are using the backdated technology now a days and is suffering from the high possibilities of internet and loading problems that makes their businesses moderate. They haven’t upgraded themselves with the modernized technology. Apparky came as the possibilities of their way to make them upgraded with the creative Interface and modernized technology.
        </p>
      </div>
      
    </div>
  </div>
</section>




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
  
  