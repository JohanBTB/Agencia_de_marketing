import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo_nav from "assets/img/icons/chilliwiny-logo.png";
import loading_gif from "assets/gif/loading.gif";
import {useState, react } from 'react';

function scrollFunction() {
    if(document.getElementById('navbar')){
        if(window.scrollY < 50 || document.documentElement.scrollTop < 50){
            document.getElementById('navbar').classList.remove('dark:bg-gray-900');
            document.getElementById('navbar').classList.remove('shadow-mynavbar');
        }else{
            document.getElementById('navbar').classList.add('dark:bg-gray-900');
            document.getElementById('navbar').classList.add('shadow-mynavbar');
        }
    }
}

window.onscroll = scrollFunction


function Navbar(){

    const [open, setOpen] = useState(false)
    return (
        <nav id="navbar"className=" fixed duration-1000 transition w-full py-10 top-0 z-10 ">
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] inset-0 w-full max-w-none">

            </div>
            <div className="px-4 sm:px-12">
                <div className="-ml-4 -mt-2  flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 ">
                    <Link to="/" >
                    <img

                        className=""
                        src={logo_nav}
                        width={250}
                        height={150}
                    />
                    </Link>
                    </div>
                    <div className="hidden md:block lg:ml- mt-2 flex-shrink-0"> 
                    <NavLink to="/characters" className=" text-md lg:text-lg font-medium leading-6 text-mylightblue-700 inline-flex mx-8 border-b-4   p-0.25 border-gray-900 hover:border-mydarkblue-900 dark:hover:border-mypink-900 transition ease-in-out duration-500">Characters</NavLink>
                    <NavLink to="/community" className="text-md lg:text-lg font-medium leading-6 text-mylightblue-700 inline-flex mx-8 border-b-4  border-gray-900  p-0.25 hover:border-mydarkblue-900 dark:hover:border-mypink-900  transition ease-in-out duration-500">Community</NavLink>
                    <NavLink to="/events" className="text-md lg:text-lg font-medium leading-6 text-mylightblue-700 inline-flex mx-8 border-b-4  border-gray-900  p-0.25 hover:border-mydarkblue-900 dark:hover:border-mypink-900  transition ease-in-out duration-500">Events</NavLink>
                    <NavLink to="/news" className="text-md lg:text-lg font-medium leading-6 text-mylightblue-700 inline-flex mx-8 border-b-4  border-gray-900  p-0.25 hover:border-mydarkblue-900 dark:hover:border-mypink-900  transition ease-in-out duration-500">News</NavLink>
                    <NavLink to="/contact" className="text-md lg:text-lg font-medium leading-6 text-mylightblue-500 inline-flex mx-8 border-b-4  border-gray-900  p-0.25 hover:border-mydarkblue-900 dark:hover:border-mypink-900  transition ease-in-out duration-500">Contact</NavLink>
                    <button
                        type="button" 
                        className="bg-mydarkblue-900 dark:bg-mydarkblue-500 ml-8 relative inline-flex items-center rounded-md border border-transparent
                         px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-mylightblue-500 hover:ring-mylightblue-500 hover:ring-2
                          hover:ring-offset-2 ease-in-out duration-500 focus:outline-none focus:ring-2 focus:ring-mydarkblue-900 focus:ring-offset-2"
                    >
                        Hire us
                        <img 
                            className="w-16  hidden lg:block"
                            src={loading_gif}
                        />
                    </button>
                    
                    
                    </div>
                    <button class="border-2 border-transparent rounded-md p-1 active:border-mydarkblue-100">
                        
                        { open ?
                        <svg onClick={()=>{setOpen(false)}} id="menu-close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#635f9c" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        
                        :
                        <svg onClick={()=>{setOpen(true)}}id="menu-open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#635f9c" class="w-10 h-10 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        }                            
                    </button>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProp = state =>({

})

export default connect(mapStateToProp, {

}) (Navbar)
