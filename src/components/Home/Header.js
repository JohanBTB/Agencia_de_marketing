
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom"
function Header(){



  
    return (
        <div class="bg-white dark:bg-gray-900 relative isolate px-6 pt-14 lg:px-8">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
            <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
            <defs>
            <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
            </defs>
        </svg>
        </div>
        <div class="mx-auto max-w-xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative rounded-full py-1 px-3 text-lg leading-6 text-blue-500 dark:text-mypink-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next update. <a href="#" class="font-semibold text-indigo-600 dark:text-mypink-700"><span class="absolute inset-0 " aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
        </div>
        <div class="text-center">
            <h1 class="sm:text-3xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-mypink-500 dark:text-mypink-900 px-10">
                
                <span class="font-medium">Data to </span><span> </span>

                <Typewriter 
                words={[' eat', ' sleep', ' code', ' live!']}
                loop={false}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                />

            </h1>
            <ul  class="flex text-lg justify-center mt-8 text-mydarkblue-900 dark:text-mypink-100">
                <li class="mx-6 inline-flex border-2 px-4 py-2 border-mydarkblue-900 dark:border-mypink-900 rounded-full transition duration-500 hover:cursor-pointer hover:bg-mydarkblue-900 dark:hover:bg-mypink-900 hover:text-mydarkblue-900 dark:hover:text-pink-100"><Link to="/cases">Cases </Link></li>
                <li class="mx-6 inline-flex border-2 px-4 py-2 border-mydarkblue-900 dark:border-mypink-900 rounded-full transition duration-500 hover:cursor-pointer hover:bg-mydarkblue-900 dark:hover:bg-mypink-900 hover:text-mydarkblue-900 dark:hover:text-pink-100"><Link to="/services">Services</Link></li>
                <li class="mx-6 inline-flex border-2 px-4 py-2 border-mydarkblue-900 dark:border-mypink-900 rounded-full transition duration-500 hover:cursor-pointer hover:bg-mydarkblue-900 dark:hover:bg-mypink-900 hover:text-mydarkblue-900 dark:hover:text-pink-100"><Link to="/aboutus">About us</Link></li>
                <li class="mx-6 inline-flex border-2 px-4 py-2 border-mydarkblue-900 dark:border-mypink-900 rounded-full transition duration-500 hover:cursor-pointer hover:bg-mydarkblue-900 dark:hover:bg-mypink-900 hover:text-mydarkblue-900 dark:hover:text-pink-100"><Link to="/careers">Careers </Link></li>
                    
            </ul>

            <p class="mt-6 text-md leading-8 text-blue-500 dark:text-mypink-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>

        </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
            <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
            <defs>
            <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
            </defs>
        </svg>
        </div>
    </div>

    )
}

export default Header

