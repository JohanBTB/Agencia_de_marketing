import Navbar from "../../components/Navigation/Navbar"
import Footer from "../../components/Navigation/Footer"
import Layout from "../../hocs/layouts/Layout"

function Cases(){
    return(
        <Layout>
            <Navbar></Navbar>
            <div className="pt-36">
                Cases
            </div>
            
            <Footer></Footer>
        </Layout>
    )
}

export default Cases
