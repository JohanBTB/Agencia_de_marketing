import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Navigation/Footer";
import Layout from "../../hocs/layouts/Layout";
import Header from "../../components/Characters/Header";
import CharactersList from "../../components/Characters/CharactersList";
import Elements from "../../components/Characters/Elements";
function Characters(){
    return(
        <Layout>
            <Navbar></Navbar>
            <Header className="pt-36">
                
            </Header>
            <CharactersList />
            <Elements />

            <Footer></Footer>
        </Layout>
    )
}

export default Characters
