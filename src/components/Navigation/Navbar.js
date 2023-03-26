import { connect } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import logo_nav from "assets/img/icons/chilliwiny-logo.png"
import loading_gif from "assets/gif/loading.gif"

function scrollFunction() {
    if(document.getElementById('navbar')){
        if(window.scrollY < 50 || document.documentElement.scrollTop < 50){
            document.getElementById('navbar').classList.remove('bg-white');
            document.getElementById('navbar').classList.remove('shadow-mynavbar');
        }else{
            document.getElementById('navbar').classList.add('bg-white');
            document.getElementById('navbar').classList.add('shadow-mynavbar');
        }
    }
}

window.onscroll = scrollFunction


function Navbar(){
    return (
        <nav id="navbar"className="duration-1000 transition w-full py-10 top-0 fixed z-10">
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] inset-0 w-full max-w-none">
            <svg class="relative w-full  h-10 max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
                <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9089FC" />
                    <stop offset="1" stop-color="#FF80B5" />
                </linearGradient>
                </defs>
            </svg>
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
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to="/cases" className=" text-lg font-medium leading-6 text-mylightblue-700 inline-flex mx-8 border-b-2   p-0.25 hover:border-mydarkblue-900 transition ease-in-out duration-1000">Cases</NavLink>
                    <NavLink to="/services" className="text-lg font-medium leading-6 text-mylightblue-700 inline-flex mx-8 border-b-2  border-white p-0.25 hover:border-mydarkblue-900 transition ease-in-out duration-1000">Services</NavLink>
                    <NavLink to="/about-us" className="text-lg font-medium leading-6 text-mylightblue-700 inline-flex mx-8 border-b-2  border-white p-0.25 hover:border-mydarkblue-900 transition ease-in-out duration-1000">About us</NavLink>
                    <NavLink to="/careers" className="text-lg font-medium leading-6 text-mylightblue-700 inline-flex mx-8 border-b-2  border-white p-0.25 hover:border-mydarkblue-900 transition ease-in-out duration-1000">Careers</NavLink>
                    <NavLink to="/blog" className="text-lg font-medium leading-6 text-mylightblue-700 inline-flex mx-8 border-b-2  border-white p-0.25 hover:border-mydarkblue-900 transition ease-in-out duration-1000">Blog</NavLink>
                    <NavLink to="/contacts" className="text-lg font-medium leading-6 text-mylightblue-500 inline-flex mx-8 border-b-2  border-white p-0.25 hover:border-mydarkblue-900 transition ease-in-out duration-1000">Contacts</NavLink>
                    <button
                        type="button" 
                        className="bg-mydarkblue-900 ml-8 relative inline-flex items-center rounded-md border border-transparent px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-mylightblue-500 hover:ring-mylightblue-500 hover:ring-2 hover:ring-offset-2 ease-in-out duration-500 focus:outline-none focus:ring-2 focus:ring-mydarkblue-900 focus:ring-offset-2"
                    >
                        Hire us
                        <img 
                            className="w-16 pl-4"
                            src={loading_gif}
                        />
                    </button>
                    
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProp = state =>({

})

export default connect(mapStateToProp, {

}) (Navbar)
