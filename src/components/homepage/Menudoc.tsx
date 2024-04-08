const Menu = () => {
    return <div>
        <div className=" rounded-lg bg-white  border-2 border-black-100 " >
            <p className=" py-2 sm:px-6 text-gray-1500 text-xl font-medium">Sắp xếp</p>
            <div className="block py-2 sm:px-6 ">
                <div className="flex items-center mb-4">
                    <input id="country-option-1" type="radio" name="countries" defaultValue="USA" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" defaultChecked />
                    <label htmlFor="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                        Mặc định
                    </label>
                </div>
                <div className="flex items-center mb-4">
                    <input id="country-option-2" type="radio" name="countries" defaultValue="Germany" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Giờ đi sớm nhất
                    </label>
                </div>
                <div className="flex items-center mb-4">
                    <input id="country-option-3" type="radio" name="countries" defaultValue="Spain" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="country-option-3" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Giờ đi muộn nhất
                    </label>
                </div>
                <div className="flex items-center mb-4">
                    <input id="country-option-4" type="radio" name="countries" defaultValue="United Kingdom" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="country-option-4" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Đánh giá cao nhất
                    </label>
                </div>
                <div className="flex items-center mb-4">
                    <input id="country-option-4" type="radio" name="countries" defaultValue="United Kingdom" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="country-option-4" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Giá tăng dần
                    </label>
                </div>
                <div className="flex items-center mb-4">
                    <input id="country-option-4" type="radio" name="countries" defaultValue="United Kingdom" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="country-option-4" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Giá giảm dần
                    </label>
                </div>
            </div>
        </div>
    </div>
}
export default Menu