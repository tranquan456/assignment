import Banner from "../components/Banner"
import Card from "../components/Card"
import Header from "../components/Header"
import Footer from "../components/Footer"

const HomePage = () => {
    return <div>
        <Header />
        <Banner />
        <div className="relative mx-auto max-w-screen-xl  py-10 sm:px-6 " >
            <div className="font-medium text-2xl"><h1>Tuyến đường phổ biến</h1></div>
            <div className="flex gap-4">

                <Card title="/img_product1.png" name="Sài Gòn - Nha Trang" price="Từ 200.000đ" discount="250.000đ"/>
                <Card title="/img_product2.png"name="Hà Nội - Hải Phòng" price="Từ 80.000đ"discount="110.000đ"/>
                <Card title="/img_product3.png"name="Sài Gòn - Đà Lạt" price="Từ 200.000đ" discount=""/>
                <Card title="/img_product4.png" name="Sài Gòn - Phan Thiết" price="Từ 150.000đ" discount=""/>
            </div>
        </div>
        <div> <Footer/></div>
    </div>
}

export default HomePage