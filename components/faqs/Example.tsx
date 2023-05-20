import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";




const Accordion = ({ i, expanded, setExpanded,text,content }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions

 

  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#000000" : "#000000" }}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="lg:text-3xl lg:pl-12 lg:py-2 font-semibold box text-xl pl-1 pt-4 lg:pt-0"
      > {text}</motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          > 
        <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="content-placeholder lg:text-3xl text-xl "
  >{content}
   
  </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

 const Example: Function = (i: any): JSX.Element[] => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState<false | number>(0);

  return accordionIds.map((i) => (
    
    <Accordion i={i} expanded={expanded} setExpanded={setExpanded} key={i} text={text1[i]} content={content1[i]}/>
    
  ));
};

const accordionIds = [0, 1, 2, 3];
let text1=["How do you get in touch with us ?","What opportunities are available ?","What are the benefits of using our customize application ?", "Why are we unique ?", "What is your project management process ?","Is your website will be mobile-friendly ?"]
let content1=[`Go to the ‘Contact’ section.
You will able to see the Connection. The page symbolizes the true relation between two generation,You and Us.
Fill up the credential (for example:- Name, Email, Country, Phone number and the message, about your project)
After filling the credential, then click Let's discuss.
We will automatically get in touch with you.`,"With us you can promote your business, you can create your own business websites, you can use your own customize desktop and mobile application to handle your own business data.","By using our customize desktop/web application, you can control and restored all of your business data. We create the application as per the customization you provide, which is smooth and user-friendly to use.","Our works and efforts helps you to build your connection with your target audience. Our innovative and latest designs makes you fulfill your demands. By branding your services, you can achieve your commercial objectives.",
"After surveying your business we plan to an extent to deliver you the best result possible. We initiate our technological skills to raise you higher. We then execute and manages the data securely and start monitoring to make you the top in the competition.","Your website will be according to your need. Of course it will be mobile-friendly as we designed the responsive layout accordingly. We also optimize website speed and compress images to use it better in your mobile devices. "]

export default Example