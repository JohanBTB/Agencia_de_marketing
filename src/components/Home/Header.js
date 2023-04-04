
import React from 'react';
import main from "assets/img/icons/main.png"
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom"
function Header(){



  
    return (
        <div class="bg-white dark:bg-gray-900 relative isolate px-6 pt-14  lg:px-8">
            <div class="mr-auto  py-32 sm:py-48 lg:py-56">
                <div class="">
                    <h1 class="sm:text-3xl font-bold tracking-tight leading-none md:text-5xl xl:text-7xl text-mypink-500 dark:text-mypink-900 px-10">
                        
                        <span class="font-medium">Play </span><span> </span>

                        <Typewriter 
                        words={[' something new', ' with a friend', ' different things', ' in a unique way', ' in a difficult mode']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={65}
                        deleteSpeed={65}
                        delaySpeed={2500}
                        />

                    </h1>
                    <ul  class="flex md:text-md lg:text-lg mt-8 lg:mt-16 text-mydarkblue-900 dark:text-mypink-100">
                        <li class="mx-6 inline-flex border-2 px-4 py-2 border-mydarkblue-900 dark:border-mypink-900 rounded-full transition duration-500 hover:cursor-pointer hover:bg-mydarkblue-900 dark:hover:bg-mypink-900 hover:text-mydarkblue-900 dark:hover:text-pink-100"><Link to="/cases">Cases </Link></li>
                        <li class="mx-6 inline-flex border-2 px-4 py-2 border-mydarkblue-900 dark:border-mypink-900 rounded-full transition duration-500 hover:cursor-pointer hover:bg-mydarkblue-900 dark:hover:bg-mypink-900 hover:text-mydarkblue-900 dark:hover:text-pink-100"><Link to="/services">Services</Link></li>
                        <li class="mx-6 inline-flex border-2 px-4 py-2 border-mydarkblue-900 dark:border-mypink-900 rounded-full transition duration-500 hover:cursor-pointer hover:bg-mydarkblue-900 dark:hover:bg-mypink-900 hover:text-mydarkblue-900 dark:hover:text-pink-100"><Link to="/aboutus">About us</Link></li>
                        <li class="mx-6 inline-flex border-2 px-4 py-2 border-mydarkblue-900 dark:border-mypink-900 rounded-full transition duration-500 hover:cursor-pointer hover:bg-mydarkblue-900 dark:hover:bg-mypink-900 hover:text-mydarkblue-900 dark:hover:text-pink-100"><Link to="/careers">Careers </Link></li>
                            
                    </ul>

                </div>
            </div>
            <div class="sm:absolute inset-x-0 top-[calc(100%-13rem)] h-full -z-10 transform-gpu overflow-hidden  sm:top-[calc(100%-30rem)]">
                <img class="w-full mb-auto" src={main}></img>
            </div>
        </div>

    )
}

export default Header

