import * as React from "react";
import ComprisonSlider from"../components/ComprisonSlider"


import Example from "../components/faqs/Example"


import { useRef , useState} from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

import { FaGithub,FaFacebook,FaMastodon, FaInstagram,FaLinkedin,FaDiscord ,FaTwitter} from "react-icons/fa";


import AnimatedTextWord from "../components/AnimatedTextWord";

import emailjs from "@emailjs/browser";
import Link from 'next/link';


const Result = ()=>{

  return(<p className="text-white lg:text-2xl lg:ml-96 ml-4 lg:mx-12 mx-0 "> Your message has been successfully sent. We will contact you soon</p>)

}






export default function PageFour() {
   
  const parallax = useRef<IParallax>(null!)
  
  
  
  
  
  const form = useRef();
  const [result,showResult]= useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_cel43jn",
        form.current,
        "TZnfnc6rOyVo9HHW9"
      )
      .then(
        (result) => {
          console.log("Successfully send");
        },
        (error) => {
          console.log("Wrong input");
        }
      );
  e.target.reset();
    showResult(true);
    };
  
    setTimeout(()=>{showResult(false)},50000);

  
  
  
  
  return (
      
   
    

    <div className='page page-four parallax1'  style={{ width: '100%', height: '100%' }}>
    
    
    
    
   <div>
    
    
    
    <h2 className="font-semibold text-[18vw] sm:text-[18vw] lg:text-[19vw] text-zinc-400 " style={{lineHeight: 2}}><AnimatedTextWord text="Contact"/>
    </h2>
    
    
    </div>
   
  
  
  
  
      <Parallax ref={parallax} pages={4}>
  
        
  <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#000000' , borderRadius: '40px' , height:'100' , opacity:"0.90"}} >
  
  
  
  <div className="divide-y divide-yellow-400" >
  <h2 className="font-semibold text-[14vw]  lg:text-[15vw] text-white ml-4" style={{lineHeight: 2}}>Drop us a line</h2>
      
  <hr className="my-8 lg:my-0" />
  </div>
  
  

<section className="w-full mx-auto" ><div className="lg:w-5/6  lg:h-full  lg:ml-40 "> 
             
             
             
             
             
<div>
    <section >
           
           
           <div  className=" lg:mt-28 mt-12 ">
    
    
    
    

    <form action="" className="lg:mt-10"    onSubmit={sendEmail} ref={form}>
    
   
      <input type="hidden" name="access_key"  /> 
      <div className="grid lg:gap-40 lg:grid-cols-2 gap-12">
        <div className="relative z-0 " >
          <input type="text" name="name" className="ml-1 peer block w-full appearance-none border-0 border-b border-white bg-transparent lg:py-2.5 lg:px-0 py-2  text-xl text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " spellCheck="false" required/>
          <label className=" ml-1 absolute -top-6 -z-10 origin-[0] -translate-y-6 scale-75 transform lg:text-5xl text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div className="relative z-0">
          <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent lg:py-2.5 px-0  py-2   text-xl text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " spellCheck="false" required/>
          <label className="  absolute -top-6 -z-10 origin-[0] -translate-y-6 scale-75 transform lg:text-5xl text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div className="relative z-0">
          <input type="text" name="country" className=" ml-1 peer block w-full appearance-none border-0 border-b border-white bg-transparent lg:py-2.5 px-0  py-2 text-xl text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " spellCheck="false" required/>
          <label className="  ml-1 absolute -top-4 -z-10 origin-[0] -translate-y-6 scale-75 transform lg:text-5xl text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your country</label>
        </div>
        <div className="relative z-0">
          <input type="text"  name="about" className="peer block w-full appearance-none border-0 border-b border-white bg-transparent lg:py-2.5 px-0 py-2 text-xl text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " spellCheck="false"  required/>
          <label className="absolute -top-4 -z-10 origin-[0] -translate-y-6 scale-75 transform lg:text-5xl text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">How did you hear about us ?</label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea name="message" rows={5} className=" ml-1 peer block w-full appearance-none border-0 border-b border-white bg-transparent lg:py-2.5 px-0 py-2 text-xl text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "  spellCheck="false"  required></textarea>
          <label className="ml-1 absolute -top-4 -z-10 origin-[0] -translate-y-6 scale-75 transform lg:text-5xl text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tell us about your project</label>
        </div>
      </div>
      <div className="lg:ml-64 ml-16 ">
      <button className="  lg:mt-24 lg:ml-80 mt-16 rounded-md bg-blue-700 px-10 py-2 text-white w-11/12 h-28 lg:text-5xl  text-sm glow-on-hover font-semibold ">Let&apos;s discuss</button>
      </div>
     <div>{result ?<Result/>:null}</div>
    </form>
  
  
  </div>

  

</section>
      
    <hr className="text-white mx-5 mt-28 " />
 
</div> 
             
             
             
</div></section>





<div className="flex   mt-16 justify-center ml-4">

<Link  href="https://github.com/Apparky" className='no-underline'>
<FaGithub  color="white" className="mr-7    lg:h-16 lg:w-16 h-8 w-8"/> </Link>

<Link  href="https://www.facebook.com/profile.php?id=100089777855118" className='no-underline'>

<FaFacebook  color="white" className="mr-7 lg:h-16 lg:w-16 h-8 w-8"/></Link>

<Link  href="https://mastodon.social/@apparky" className='no-underline'>

<FaMastodon   color="white" className="mr-7 lg:h-16 lg:w-16 h-8 w-8"/></Link>

<Link  href="https://www.linkedin.com/in/apparky-web-6762a3263/" className='no-underline'>
<FaLinkedin color="white" className="mr-7 lg:h-16 lg:w-16 h-8 w-8  "/></Link>

<Link  href="https://discord.com/invite/2YSbJNZT" className='no-underline'>

<FaDiscord color="white" className="mr-7 lg:h-16 lg:w-16 h-8 w-8  "/></Link>

<Link  href="https://twitter.com/Apparky_Tech" className='no-underline'>

<FaTwitter color="white" className="mr-7 lg:h-16 lg:w-16 h-8 w-8  "/></Link>

<Link  href="https://www.instagram.com/apparky.web/" className='no-underline'>

<FaInstagram color="white" className="mr-7 lg:h-16 lg:w-16 h-8 w-8  "/></Link>

</div>
  
  
  
  
<div >

<h2 className="font-semibold text-[14vw] sm:text-[18vw] lg:text-[12vw] text-white lg:ml-44 ml-4 mt-12" style={{lineHeight: 2}}>Faqs</h2>

<div className="example-container lg:ml-96 lg:px-32 mt-8 lg:mt-0">
  <Example/>

</div>
</div>






  
<div >
    
    
    <h2 className="font-semibold text-[17vw] sm:text-[18vw] lg:text-[15vw] text-white lg:ml-44 ml-6" style={{lineHeight: 2}}>Quick links</h2>
    
    
    </div>
   
   

    <div className="flex   lg:ml-60 ml-8 ">

<div className="font-semibold text-[6vw] sm:text-[18vw] lg:text-[4vw] text-white lg:basis-1/4  basis-20" style={{lineHeight: 0}}><h2>Privacy</h2></div>
<div className="font-semibold text-[6vw] sm:text-[18vw] lg:text-[4vw] text-white lg:basis-1/6 basis-16" style={{lineHeight: 0}}><h2>T&C</h2></div>
<div className="font-semibold text-[6vw] sm:text-[18vw] lg:text-[4vw] text-white lg:basis-56 basis-12" style={{lineHeight: 0}}><h2>CC</h2></div>
<div className="font-semibold text-[6vw] sm:text-[18vw] lg:text-[4vw] text-white lg:basis-1/6 basis-8 " style={{lineHeight: 0}}><h2>Blog</h2></div>
</div>



  
 
  
  </ParallaxLayer>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
    
  
  
  <ParallaxLayer
    offset={0}
    speed={0.1}
    onClick={() => parallax.current.scrollTo(1)}
    >
  
  
      
              
  
  
  </ParallaxLayer>
  
  
    {/*<ParallaxLayer
    offset={1}
    speed={0.1}
    onClick={() => parallax.current.scrollTo(2)}
    >
  
  
      
              
  
  
  </ParallaxLayer> */}
  
  
  
  
  
  
  
 
   
  
  
  
  
  </Parallax>
      
  </div>
  
  
      
   
      
  


    );
  }

  