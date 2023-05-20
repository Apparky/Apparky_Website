import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'




import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";



import Marquee from 'react-fast-marquee';




import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { motion} from "framer-motion"


import Slide from "../components/Slide"

import Link from 'next/link';













export default function Index() {
  
  
  
  const parallax = useRef<IParallax>(null!)





 {/*Particles */}
  
 const particlesInit = useCallback(async engine => {
  console.log(engine);
  // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
  await console.log(container);
}, []);

{/*Particles */}




{/*Hide and show text*/}

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  hidden: { opacity: 0, y: 2 }
};



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
    
    <div className='page  parallax3  opacity-90  '  title=" Click then Scroll"  >
    

  {/*  <div >
  <h2 className="font-semibold text-[24vw] sm:text-[25vw] lg:text-[26vw] text-white" style={{lineHeight: 2}}>Apparky</h2>
      
  
  </div>  */}
    
    

    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              autoPlay: true,
              background: {
                color: {
                  value: "#000"
                },
                image: "",
                position: "",
                repeat: "",
                size: "",
                opacity: 0.1
              },
              backgroundMask: {
                composite: "destination-out",
                cover: {
                  color: {
                    value: "#fff"
                  },
                  opacity: 1
                },
                enable: false
              },
              defaultThemes: {},
              delay: 0,
              fullScreen: {
                enable: true,
                zIndex: -1
              },
              detectRetina: true,
              duration: 0,
              fpsLimit: 120,
              interactivity: {
                detectsOn: "window",
                events: {
                  onClick: {
                    enable: false,
                    mode: []
                  },
                  onDiv: {
                    selectors: [],
                    enable: false,
                    mode: [],
                    type: "circle"
                  },
                  onHover: {
                    enable: true,
                    mode: "trail",
                    parallax: {
                      enable: false,
                      force: 2,
                      smooth: 10
                    }
                  },
                  resize: {
                    delay: 0.5,
                    enable: true
                  }
                },
                modes: {
                  attract: {
                    distance: 200,
                    duration: 0.4,
                    easing: "ease-out-quad",
                    factor: 1,
                    maxSpeed: 50,
                    speed: 1
                  },
                  bounce: {
                    distance: 200
                  },
                  bubble: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    divs: {
                      distance: 200,
                      duration: 0.4,
                      mix: false,
                      selectors: []
                    }
                  },
                  connect: {
                    distance: 80,
                    links: {
                      opacity: 0.5
                    },
                    radius: 60
                  },
                  grab: {
                    distance: 100,
                    links: {
                      blink: false,
                      consent: false,
                      opacity: 1
                    }
                  },
                  push: {
                    default: true,
                    groups: [],
                    quantity: 4
                  },
                  remove: {
                    quantity: 2
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    divs: {
                      distance: 200,
                      duration: 0.4,
                      factor: 100,
                      speed: 1,
                      maxSpeed: 50,
                      easing: "ease-out-quad",
                      selectors: []
                    }
                  },
                  slow: {
                    factor: 3,
                    radius: 200
                  },
                  trail: {
                    delay: 0.005,
                    pauseOnStop: true,
                    quantity: 5,
                    particles: {
                      color: {
                        value: "#ff0000",
                        animation: {
                          enable: true,
                          speed: 400,
                          sync: true
                        }
                      },
                      collisions: {
                        enable: false
                      },
                      links: {
                        enable: false
                      },
                      move: {
                        outModes: {
                          default: "destroy"
                        },
                        speed: 2
                      },
                      size: {
                        value: 5,
                        animation: {
                          enable: true,
                          speed: 5,
                          minimumValue: 1,
                          sync: true,
                          startValue: "min",
                          destroy: "max"
                        }
                      }
                    }
                  },
                  light: {
                    area: {
                      gradient: {
                        start: {
                          value: "#ffffff"
                        },
                        stop: {
                          value: "#000000"
                        }
                      },
                      radius: 1000
                    },
                    shadow: {
                      color: {
                        value: "#000000"
                      },
                      length: 2000
                    }
                  }
                }
              },
              manualParticles: [],
              particles: {
                bounce: {
                  horizontal: {
                    random: {
                      enable: false,
                      minimumValue: 0.1
                    },
                    value: 1
                  },
                  vertical: {
                    random: {
                      enable: false,
                      minimumValue: 0.1
                    },
                    value: 1
                  }
                },
                collisions: {
                  absorb: {
                    speed: 2
                  },
                  bounce: {
                    horizontal: {
                      random: {
                        enable: false,
                        minimumValue: 0.1
                      },
                      value: 1
                    },
                    vertical: {
                      random: {
                        enable: false,
                        minimumValue: 0.1
                      },
                      value: 1
                    }
                  },
                  enable: true,
                  mode: "bounce",
                  overlap: {
                    enable: true,
                    retries: 0
                  }
                },
                color: {
                  value: "#ff0000",
                  animation: {
                    h: {
                      count: 0,
                      enable: true,
                      offset: 0,
                      speed: 50,
                      decay: 0,
                      sync: false
                    },
                    s: {
                      count: 0,
                      enable: false,
                      offset: 0,
                      speed: 1,
                      decay: 0,
                      sync: true
                    },
                    l: {
                      count: 0,
                      enable: false,
                      offset: 0,
                      speed: 1,
                      decay: 0,
                      sync: true
                    }
                  }
                },
                groups: {},
                move: {
                  angle: {
                    offset: 0,
                    value: 90
                  },
                  attract: {
                    distance: 200,
                    enable: false,
                    rotate: {
                      x: 3000,
                      y: 3000
                    }
                  },
                  center: {
                    x: 50,
                    y: 50,
                    
                    radius: 0
                  },
                  decay: 0,
                  distance: {},
                  direction: "none",
                  drift: 0,
                  enable: true,
                  gravity: {
                    acceleration: 9.81,
                    enable: false,
                    inverse: false,
                    maxSpeed: 50
                  },
                  path: {
                    clamp: true,
                    delay: {
                      random: {
                        enable: false,
                        minimumValue: 0
                      },
                      value: 0
                    },
                    enable: false,
                    options: {
                      sides: 6,
                      turnSteps: 30,
                      angle: 30
                    }
                  },
                  outModes: {
                    default: "out",
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out"
                  },
                  random: false,
                  size: false,
                  speed: 2,
                  spin: {
                    acceleration: 0,
                    enable: false
                  },
                  straight: false,
                  trail: {
                    enable: false,
                    length: 10,
                    fill: {
                      color: {
                        value: "#000"
                      }
                    }
                  },
                  vibrate: false,
                  warp: false
                },
                number: {
                  density: {
                    enable: true,
                    width: 1920,
                    height: 1080
                  },
                  limit: 0,
                  value: 100
                },
                opacity: {
                  random: {
                    enable: true,
                    minimumValue: 0.3
                  },
                  value: {
                    min: 0.3,
                    max: 0.8
                  },
                  animation: {
                    count: 0,
                    enable: true,
                    speed: 0.5,
                    decay: 0,
                    sync: false,
                    destroy: "none",
                    startValue: "random",
                    minimumValue: 0.3
                  }
                },
                reduceDuplicates: false,
                shadow: {
                  blur: 0,
                  color: {
                    value: "#000"
                  },
                  enable: false,
                  offset: {
                    x: 0,
                    y: 0
                  }
                },
                shape: {
                  options: {},
                  type: "circle"
                },
                size: {
                  random: {
                    enable: true,
                    minimumValue: 1
                  },
                  value: {
                    min: 1,
                    max: 3
                  },
                  animation: {
                    count: 0,
                    enable: true,
                    speed: 3,
                    decay: 0,
                    sync: false,
                    destroy: "none",
                    startValue: "random",
                    minimumValue: 1
                  }
                },
                stroke: {
                  width: 0
                },
                zIndex: {
                  random: {
                    enable: false,
                    minimumValue: 0
                  },
                  value: 0,
                  opacityRate: 1,
                  sizeRate: 1,
                  velocityRate: 1
                },
                life: {
                  count: 0,
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0
                    },
                    value: 0,
                    sync: false
                  },
                  duration: {
                    random: {
                      enable: false,
                      minimumValue: 0.0001
                    },
                    value: 0,
                    sync: false
                  }
                },
                rotate: {
                  random: {
                    enable: false,
                    minimumValue: 0
                  },
                  value: 0,
                  animation: {
                    enable: false,
                    speed: 0,
                    decay: 0,
                    sync: false
                  },
                  direction: "clockwise",
                  path: false
                },
                destroy: {
                  bounds: {},
                  mode: "none",
                  split: {
                    count: 1,
                    factor: {
                      random: {
                        enable: false,
                        minimumValue: 0
                      },
                      value: 3
                    },
                    rate: {
                      random: {
                        enable: false,
                        minimumValue: 0
                      },
                      value: {
                        min: 4,
                        max: 9
                      }
                    },
                    sizeOffset: true,
                    particles: {}
                  }
                },
                roll: {
                  darken: {
                    enable: false,
                    value: 0
                  },
                  enable: false,
                  enlighten: {
                    enable: false,
                    value: 0
                  },
                  mode: "vertical",
                  speed: 25
                },
                tilt: {
                  random: {
                    enable: false,
                    minimumValue: 0
                  },
                  value: 0,
                  animation: {
                    enable: false,
                    speed: 0,
                    decay: 0,
                    sync: false
                  },
                  direction: "clockwise",
                  enable: false
                },
                twinkle: {
                  lines: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1
                  },
                  particles: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1
                  }
                },
                wobble: {
                  distance: 5,
                  enable: false,
                  speed: {
                    angle: 50,
                    move: 10
                  }
                },
                orbit: {
                  animation: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    sync: false
                  },
                  enable: false,
                  opacity: 1,
                  rotation: {
                    random: {
                      enable: false,
                      minimumValue: 0
                    },
                    value: 45
                  },
                  width: 1
                },
                links: {
                  blink: false,
                  color: {
                    value: "random"
                  },
                  consent: false,
                  distance: 100,
                  enable: true,
                  frequency: 1,
                  opacity: 1,
                  shadow: {
                    blur: 5,
                    color: {
                      value: "#000"
                    },
                    enable: false
                  },
                  triangles: {
                    enable: false,
                    frequency: 1
                  },
                  width: 1,
                  warp: false
                },
                repulse: {
                  random: {
                    enable: false,
                    minimumValue: 0
                  },
                  value: 0,
                  enabled: false,
                  distance: 1,
                  duration: 1,
                  factor: 1,
                  speed: 1
                }
              },
              pauseOnBlur: true,
              pauseOnOutsideViewport: true,
              responsive: [],
              smooth: false,
              style: {},
              themes: [],
              zLayers: 100,
              emitters: []
            }  }

            />




          



    <Parallax ref={parallax} pages={8}  >

      
<ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#FFF200' ,borderTopLeftRadius: '40px', borderTopRightRadius: '40px', opacity:"0.95"}}  className="min-h-screen">



<div className='p-10 sm:p-20 relative z-10 overflow-hidden   ' >
<h2 className="font-semibold text-[20vw]  lg:text-[26vw] " style={{lineHeight: 2}}>Why ?</h2>
</div>  


<div className='lg:-mt-56 '  style={{ backgroundColor: '#FFF200'}}>
<h2 className=" font-semibold text-[6vw] sm:text-[25vw] lg:text-[4vw]  ml-4"   >WE ARE <span className='lg:text-[10vw] text-[10vw]'>WEB CREATER</span> </h2>



</div>


<section className="overflow-hidden relative  pointer-events-none lg:w-full  lg:mx-auto  bg-black" ><div className="  h-full  lg:ml-40  "> <video autoPlay loop muted className='w-full  rounded-3xl    p-4 '>
              <source src='/videos/Homepage1.mp4' type='video/mp4' />
            </video></div></section>

        
 <div className="flex   bg-black text-yellow-400 lg:h-96 h-56 "><div className='font-semibold  flex lg:w-full lg:h-36 lg:text-8xl lg:p-20  lg:ml-72 px-6 text-3xl'>WHY?</div><div><p className='lg:text-3xl lg:mr-20 lg:p-20  text-sm mr-4 ' > BECAUSE!
Our Resources are based on increasing the efficiency.
APPARKY with its aim came forward with your decision if you want to upgrade your business.
We came as the possibilities of their way to make them upgraded with the creativity and modernized technology
</p></div></div>







<div className=' w-full '  style={{ backgroundColor: '#FFF200'}}>


<Marquee  speed={50}   pauseOnHover={true}  className=' font-semibold text-[8vw] sm:text-[2vw] lg:text-[8vw] ' style={{lineHeight: 2 , color:'#000000' }}>
 <p  style={{backgroundColor: '#fff200'}}>/ WEB DEVELOPMENT / APP DEVELOPMENT / CUSTOM DESKTOP APPLICATION / SOCIAL MEDIA SERVICES </p>
</Marquee>
  


        
        <div className=' w-full p-10 sm:p-20 relative z-10 overflow-hidden' style={{backgroundColor: '#fff200'}}>
<h2 className="font-semibold text-[20vw] sm:text-[25vw] lg:text-[26vw] " style={{lineHeight: 1.5}}>Work</h2>
    
</div>

<div >
<h2 className="font-semibold text-[7vw] sm:text-[25vw] lg:text-[6vw] lg:ml-24 ml-2" style={{lineHeight: 1}}>Our efforts and recent clients</h2>
    

</div>



</div>



       

<section className="overflow-hidden relative  pointer-events-none w-full mx-auto " style={{backgroundColor: '#fff200'}}  ><div className="lg:w-11/12  lg:h-full  lg:ml-20  lg:p-6  "> <video autoPlay loop muted className='lg:w-full lg:h-3/4' style={{borderRadius: '40px'}}>
              <source src='/videos/ourworks5.mp4' type='video/mp4' />
            </video></div></section>




       
       
       
       
       
        <div className='p-10 sm:p-20 relative z-10 overflow-hidden' style={{backgroundColor: '#fff200'}}>
<h2 className="font-semibold text-[24vw] sm:text-[25vw] lg:text-[26vw] " style={{lineHeight: 1.5}}>Blog</h2>
    



<div className=' relative'>
<Slide/>
</div>

</div>




        
        <section className=" p-10 sm:p-20 relative z-10 overflow-hidden text-white "  style={{ backgroundColor:'#fff200' }}>
  
  <h2 className="font-semibold text-[20vw] sm:text-[25vw] lg:text-[26vw] " style={{lineHeight: 1, color:'#000000' }}>Ready ?</h2>
      
  <h1 className="font-semibold text-[6vw] sm:text-[4vw] lg:text-[6vw] " style={{lineHeight: 2, color:'#000000' }}>   <Link href="/contact">Share your idea with us</Link></h1>
  </section>

       

  
  

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

