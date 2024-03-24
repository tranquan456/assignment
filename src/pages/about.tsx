import Header from "../components/Header"
import Footer from "../components/Footer"
import Box from "../components/Box"
import SeachBaseDetail from "../components/Search"
const AboutPage = () => {
    return <div className="bg-[#F2F2F2]">
        <Header />
        <SeachBaseDetail/>
        <div className="relative mx-auto   py-10 " ><Box/> </div>
        <Footer />
    </div>
}

export default AboutPage