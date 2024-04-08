import Button from "../homepage/Button"


const HeaderAdmin = () => {
    return <header className="bg-[#2474E5]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            
            <div className="flex h-16 items-center justify-between">
                
                <div className="flex-1 md:flex md:items-center md:gap-12">
                    <a className="block text-teal-600" href="#">
                        <span className="sr-only">Home</span>
                        <img width={150} src="/logo.png" alt="" />
                    </a>
                </div>
                
                <div className="md:flex md:items-center md:gap-12">
                   
                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black shadow"
                                href="#"

                            >
                                <Button title="Acount" />
                            </a>

                            <div className="hidden sm:flex">
                                <a
                                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-balck"
                                    href="#"
                                >
                                    <Button title="Logout" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}

export default HeaderAdmin