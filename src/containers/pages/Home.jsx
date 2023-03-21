import Navbar from "../../components/Navigation/Navbar"
import Footer from "../../components/Navigation/Footer"
import Header from "../../components/Home/Header"
import Layout from "../../hocs/layouts/Layout"

function Home(){
    return(
        <Layout>
            <Navbar></Navbar>
            <Header></Header>

            <div className="pt-36">
                 Home
            </div>
            
            <Footer></Footer>
        </Layout>
    )
}

export default Home
