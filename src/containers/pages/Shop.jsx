import Navbar from "../../components/Navigation/Navbar"
import Footer from "../../components/Navigation/Footer"
import Layout from "../../hocs/layouts/Layout"
import { useEffect } from "react"
function Shop(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar></Navbar>
            <div className="pt-36">
                Shop
            </div>
            
            <Footer></Footer>
        </Layout>
    )
}

export default Shop
