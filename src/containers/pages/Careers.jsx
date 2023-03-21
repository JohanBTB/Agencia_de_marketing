import Navbar from "../../components/Navigation/Navbar"
import Footer from "../../components/Navigation/Footer"
import Layout from "../../hocs/layouts/Layout"

function Careers(){
    return(
        <Layout>
            <Navbar></Navbar>
            <div className="pt-36">
                Careers
            </div>
            
            <Footer></Footer>
        </Layout>
    )
}

export default Careers