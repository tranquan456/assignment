import Form from "./Form";
import Span from "./Span";

const Banner = () => {
        return <section className="relative bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat h-96">
                <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
                        <Form />
                        <Span />
                </div>
        </section>
}

export default Banner;