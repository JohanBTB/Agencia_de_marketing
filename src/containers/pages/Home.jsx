import Navbar from "../../components/Navigation/Navbar"
import Footer from "../../components/Navigation/Footer"
import Header from "../../components/Home/Header"
import Incentives from "../../components/Home/Incentives"
import Layout from "../../hocs/layouts/Layout"
import CasesList from "../../components/Home/CasesList"
import { useEffect } from "react";
// import bg_main from "../../assets/sonido/bg_main.mp3";
function Home(){
    // useEffect(() => {
    //     const audio = new Audio(bg_main);
    //     audio.play();
    //     return () => {
    //       audio.pause();
    //       audio.currentTime = 0;
    //     };
    //   }, []);
    // useEffect(()=>{
    //     window.scrollTo(0,0)
    // },[])
    return(
        <Layout>
            <Navbar></Navbar>
            <Header></Header>
            <div className=" bg-white dark:bg-gra-900 z-[-1]">
                    <Incentives/>
                    <CasesList/>
            </div>
            
            <Footer></Footer>
        </Layout>
    )
}

export default Home
