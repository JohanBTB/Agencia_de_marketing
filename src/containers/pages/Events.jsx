import Navbar from "../../components/Navigation/Navbar"
import Footer from "../../components/Navigation/Footer"
import Layout from "../../hocs/layouts/Layout"
import Header from "../../components/Events/Header"
import CollaborationList from "../../components/Events/CollaborationList"
import BannerList from "../../components/Events/BannerList"

import { useEffect } from "react"

function Events(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar></Navbar>
            <div className="m-auto bg-white dark:bg-gray-900 z-[-1]">
                <Header />
                
            </div>
            <CollaborationList />
            <BannerList />
            <Footer/>            
        </Layout>
    )
}

export default Events