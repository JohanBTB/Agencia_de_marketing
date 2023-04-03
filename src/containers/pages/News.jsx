import Navbar from "../../components/Navigation/Navbar"
import Footer from "../../components/Navigation/Footer"
import Layout from "../../hocs/layouts/Layout"
import { useEffect } from "react"
function News(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar></Navbar>
            <div className="pt-36">
                News
            </div>
            
            <Footer></Footer>
        </Layout>
    )
}

export default News
