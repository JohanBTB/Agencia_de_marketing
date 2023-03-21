import { connect } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import logo_nav from "assets/img/icons/chilliwiny-logo.png"
import loading_gif from "assets/gif/loading.gif"




function Navbar(){
    return (
        <nav className="w-full py-10 top-0 fixed">
            <div className="bg-white px-4 sm:px-12">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
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
                    <NavLink to="/cases" className="text-lg font-medium leading-6 text-mylightblue-900 inline-flex mx-8 border-b-2  border-white p-0.25 hover:border-mydarkblue">Cases</NavLink>
                    <NavLink to="/services" className="text-lg font-medium leading-6 text-mylightblue-900 inline-flex mx-8 border-b-2  border-white p-0.25 hover:border-mydarkblue">Services</NavLink>
                    <NavLink to="/about-us" className="text-lg font-medium leading-6 text-mylightblue-900 inline-flex mx-8 border-b-2  border-white p-0.25 hover:border-mydarkblue">About us</NavLink>
                    <NavLink to="/careers" className="text-lg font-medium leading-6 text-mylightblue-900 inline-flex mx-8 border-b-2  border-white p-0.25 hover:border-mydarkblue">Careers</NavLink>
                    <NavLink to="/blog" className="text-lg font-medium leading-6 text-mylightblue-900 inline-flex mx-8 border-b-2  border-white p-0.25 hover:border-mydarkblue">Blog</NavLink>
                    <NavLink to="/contacts" className="text-lg font-medium leading-6 text-mylightblue-900 inline-flex mx-8 border-b-2  border-white p-0.25 hover:border-mydarkblue">Contacts</NavLink>
                    <button
                        type="button" 
                        className="bg-mydarkblue ml-8 relative inline-flex items-center rounded-md border border-transparent px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-mylightblue-900 hover:ring-mylightblue-900 hover:ring-2 hover:ring-offset-2 ease-in-out duration-500 focus:outline-none focus:ring-2 focus:ring-mydarkblue focus:ring-offset-2"
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
