import Navbar from "../../components/Navigation/Navbar"
import Footer from "../../components/Navigation/Footer"
import Layout from "../../hocs/layouts/Layout"

function Services(){
    return(
        <Layout>
            <Navbar></Navbar>
            <div className="pt-36">
                Services
            </div>
            
            <Footer></Footer>
        </Layout>
    )
}

export default Services
