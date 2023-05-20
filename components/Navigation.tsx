import * as React from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useState } from 'react';
import Image from 'next/image';

export default function Navigation({
  pages
}: {
  pages: { href: string; name: string }[];
}) {
  const router = useRouter();

  const [navbar, setNavbar] = useState(false);

  return (
    <div>




<div>
      <nav className="w-full  fixed top-0 left-0 right-0 z-10 bg-opacity-50 bg-teal-200  lg:bg-transparent">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
             {/* <Link href="/">
              <Image src="/logo03.svg" width={60} height={40} alt="logo" />
  </Link> */ }
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
            
       {  pages.map((page) => {
        return (
         
          <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent " key={page.href}>
         <Link href={page.href} key={page.href}    onClick={() => setNavbar(!navbar)} className='no-underline lg:text-teal-400  text-black text-4xl hover:text-cyan-500  font-semibold' >
            <div className={router.route === page.href ? "selected" : ""}>
              {page.name}
            </div>
          </Link>

          </li>
        );
      })}
   
     
</ul>

</div>
          </div>
        </div>
      </nav>
    </div>

    </div>
  );
}

