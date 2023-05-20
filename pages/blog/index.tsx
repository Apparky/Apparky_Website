import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'


import Image from 'next/image'
import AnimatedTextWord from '../../components/AnimatedTextWord'




export default function PageOne() {
    
  const parallax = useRef<IParallax>(null!)
  
  
  return (
      
      
      <div className='page page-three parallax ' style={{ width: '100%', height: '100%' }}>
    
    
    

    <div >
  <h2 className="font-semibold text-[24vw] sm:text-[25vw] lg:text-[18vw] text-black" style={{lineHeight: 2}}><AnimatedTextWord text="Blog"/></h2>
      
  
  </div>
  
  
  
  
  
  
  
  
      <Parallax ref={parallax} pages={6}  >
  
        
  <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#000000' , borderRadius: '40px' }} className="min-h-screen" >
  
  
  
  <div >
  <h2 className="font-semibold text-[20vw] sm:text-[25vw] lg:text-[20vw] text-white ml-32" style={{lineHeight: 2}}>Articles</h2>
      
  
 
  
  



  
  
 <div>


 

 <section className="bg-zinc-300 dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <div className="lg:flex lg:-mx-6">
      <div className="lg:w-3/4 lg:px-6">
        <Image
          className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
          src="https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8MjM2OTg3OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
          width={1470}
          height={80}
        />
        <div>
          <p className="mt-6 text-sm text-blue-500 uppercase">Want to know</p>
          <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
            What do you want to know about UI
          </h1>
          <div className="flex items-center mt-6">
            <Image
              className="object-cover object-center w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            
              width={764}
              height={80}
            
            />
            <div className="mx-4">
              <h1 className="text-sm text-gray-700 dark:text-gray-200">
                Amelia. Anderson
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Lead Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
        <div>
          <h3 className="text-blue-500 capitalize">Design instument</h3>
          <a
            href="#"
            className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
          >
            How to raise $100k+ by using blox ui kit on your design
          </a>
        </div>
        <hr className="my-6 border-blue-500 dark:border-gray-700" />
        <div>
          <h3 className="text-blue-500 capitalize">UI Resource</h3>
          <a
            href="#"
            className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
          >
            Should you creat UI Product by using Blox?
          </a>
        </div>
        <hr className="my-6 border-blue-500 dark:border-gray-700" />
        <div>
          <h3 className="text-blue-500 capitalize">Premium Collection</h3>
          <a
            href="#"
            className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
          >
            Top 10 Blocks you can get on Bloxs collection.
          </a>
        </div>
        <hr className="my-6 border-blue-500 dark:border-gray-700" />
        <div>
          <h3 className="text-blue-500 capitalize">Premium kits</h3>
          <a
            href="#"
            className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
          >
            Top 10 Ui kit you can get on Bloxs collection.
          </a>
        </div>
      </div>
    </div>
  </div>
</section>










<section className="bg-indigo-300 dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        From the blog
      </h1>
      <p className="max-w-lg mx-auto mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis
        sint autem nesciunt, laudantium quia tempore delect
      </p>
    </div>
    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
      <div>
        <Image
          className="relative z-10 object-cover w-full rounded-md h-96"
          src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          height={80}
          width={1470}
        />
        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
          <a
            href="#"
            className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
          >
            All the features you want to know
          </a>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            veritatis sint autem nesciunt, laudantium quia tempore delect
          </p>
          <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
        </div>
      </div>
      <div>
        <Image
          className="relative z-10 object-cover w-full rounded-md h-96"
          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          height={80}
          width={1470}

        />
        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
          <a
            href="#"
            className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
          >
            How to use sticky note for problem solving
          </a>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            veritatis sint autem nesciunt, laudantium quia tempore delect
          </p>
          <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
        </div>
      </div>
    </div>
  </div>
</section>








<section className="bg-indigo-200 dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
      Our recent post
    </h1>
    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
      <div className="lg:flex">
        <Image
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          height={80}
          width={1470}

        />
        <div className="flex flex-col justify-between py-6 lg:mx-6">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            How to use sticky note for problem solving
          </a>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            On: 20 October 2019
          </span>
        </div>
      </div>
      <div className="lg:flex">
        <Image
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          height={80}
          width={1470}
        />
        <div className="flex flex-col justify-between py-6 lg:mx-6">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            How to use sticky note for problem solving
          </a>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            On: 20 October 2019
          </span>
        </div>
      </div>
      <div className="lg:flex">
        <Image
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          height={80}
          width={1470}
        />
        <div className="flex flex-col justify-between py-6 lg:mx-6">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            Morning routine to boost your mood
          </a>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            On: 25 November 2020
          </span>
        </div>
      </div>
      <div className="lg:flex">
        <Image
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
          alt=""
          height={80}
          width={1470}
        />
        <div className="flex flex-col justify-between py-6 lg:mx-6">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            All the features you want to know
          </a>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            On: 30 September 2020
          </span>
        </div>
      </div>
      <div className="lg:flex">
        <Image
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
          alt=""
          height={80}
          width={1470}
        />
        <div className="flex flex-col justify-between py-6 lg:mx-6">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            Minimal workspace for your inspirations
          </a>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            On: 13 October 2019
          </span>
        </div>
      </div>
      <div className="lg:flex">
        <Image
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          height={80}
          width={1470}
        />
        <div className="flex flex-col justify-between py-6 lg:mx-6">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            What do you want to know about Blockchane
          </a>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            On: 20 October 2019
          </span>
        </div>
      </div>
    </div>
  </div>
</section>









 
  
  
  </div>


  
  
  <div className='bg-black' >
    
    
    <h2 className="font-semibold text-[6vw] sm:text-[18vw] lg:text-[8vw] text-white ml-44" style={{lineHeight: 2}}>Have a dream in mind ?</h2>
    <h2 className="font-semibold text-[6vw] sm:text-[18vw] lg:text-[8vw] text-white ml-96" style={{lineHeight: 2}}>Let&apos;s begin.....</h2>
    
    </div>


   
    </div>
  



  
  
  
  
  
  
  
  
  
  
  </ParallaxLayer>
  
  
  
  
  
  
  
  
  
  
  
  
  
  <ParallaxLayer
    offset={0}
    speed={0}
    factor={3}>
  
  
  {/*  <Marquee  speed={50}   pauseOnHover={true}  className=' font-semibold text-[8vw] sm:text-[2vw] lg:text-[2vw] ' style={{lineHeight: 2 , color:'#FFF200' }}>
   <p className='bg-black' style={{backgroundColor: 'transparent'}}>/ WEB DEVELOPMENT / APP DEVELOPMENT / CUSTOM DESKTOP APPLICATION / SOCIAL MEDIA SERVICES </p>
  </Marquee>
    */}
  
    </ParallaxLayer>
    
  
  
  
  
  
  <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
   
  
   
  </ParallaxLayer>
  
  <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
    
  
  
  
  </ParallaxLayer>
  
  
  <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
    
    
  
    
  </ParallaxLayer>
  
  <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
   
    
  
  {/*   <div >
  <h2 className="font-semibold text-[24vw] sm:text-[25vw] lg:text-[26vw] invisible lg:visible" style={{lineHeight: 2, color:'#FFF200' }}>About</h2>
      
  </div>
  
  */}
  
  </ParallaxLayer>
  
  <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 1.0 }}>
    
  
  
  </ParallaxLayer>
  
  <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
  
    
    
  </ParallaxLayer>
  
  <ParallaxLayer
    offset={2.5}
    speed={-0.4}
   >
    
  
  
    </ParallaxLayer>
  
  <ParallaxLayer
    offset={2}
    speed={-0.3}
   
  >
    
    
  </ParallaxLayer>
  
  
  <ParallaxLayer
    offset={0}
    speed={0.1}
    onClick={() => parallax.current.scrollTo(1)}
    >
  
  
      
              
  </ParallaxLayer>
  
  <ParallaxLayer
    offset={1}
    speed={0.1}
    onClick={() => parallax.current.scrollTo(2)}
   >
     
  
  
  </ParallaxLayer>
  
  
  
  
  
  
  
  
  
  
  
  </Parallax>
      
    
  
  
      </div>
    );
  }
  
  
  