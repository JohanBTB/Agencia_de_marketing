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
            <div className="m-auto bg-white dark:bg-gray-900 z-[-1]">
                <div className="relative pt-36 max-w-sm sm:max-w-xl md:max-w-5xl lg:max-w-6xl xl:max-w-8xl m-auto">
                    Home
                    <Incentives/>
                    <CasesList/>
                </div>
            </div>
            
            <Footer></Footer>
        </Layout>
    )
}

export default Home
