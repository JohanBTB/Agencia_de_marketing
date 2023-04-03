import Navbar from "../../components/Navigation/Navbar"
import Footer from "../../components/Navigation/Footer"
import Layout from "../../hocs/layouts/Layout"
import Header from "../../components/News/Header"

import { useEffect } from "react"
function News(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar></Navbar>
            <div className="m-auto bg-white dark:bg-gray-900 z-[-1]">
                <div className="relative pt-36 max-w-sm sm:max-w-xl md:max-w-5xl lg:max-w-6xl xl:max-w-10xl m-auto">
                    <Header />
                    
                </div>
            </div>

            <Footer/>
            
        </Layout>
    )
}

export default News
