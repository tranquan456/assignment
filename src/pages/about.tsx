import Header from "../components/homepage/Header"
import Footer from "../components/homepage/Footer"
import SeachBaseDetail from "../components/homepage/Search"
import Menu from "../components/homepage/Menudoc"
import TicketList from "../components/homepage/Item"
const AboutPage = () => {
    return <div className="bg-[#F2F2F2]">
        <Header />
        <SeachBaseDetail />
        <div className="relative mx-auto   py-10 " >
            <div className="grid   lg:grid-cols-6 lg:gap-10">
                <div>

                </div>
                <Menu />
                <div className="rounded-lg lg:col-span-3 ">
                    <TicketList/>
                </div>

            </div>
        </div>
       
        <Footer />
    </div>
}

export default AboutPage