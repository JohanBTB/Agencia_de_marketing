import Navbar from "../../components/Navigation/Navbar"
import Footer from "../../components/Navigation/Footer"
import Header from "../../components/Home/Header"
import Incentives from "../../components/Home/Incentives"
import Layout from "../../hocs/layouts/Layout"
import CasesList from "../../components/Home/CasesList"

function Home(){
    return(
        <Layout>
            <Navbar></Navbar>
            <Header></Header>
            
            <div className="relative pt-36 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-5xl xl:max-w-8xl mx-auto m-auto">
                 Home
                 <Incentives/>
                 <CasesList/>
            </div>
            
            <Footer></Footer>
        </Layout>
    )
}

export default Home
