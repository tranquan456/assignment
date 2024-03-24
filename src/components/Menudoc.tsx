const Menu=()=>{
 return <div>
     <div className="h-72 rounded-lg bg-white  border-2 border-black-100 " >
            <p className="py-2 sm:px-6 text-gray-1500 text-xl font-medium">Sắp xếp</p>
            <div className="block py-2 sm:px-6 ">
                <label htmlFor="Option1" className="flex cursor-pointer  gap-4">
                    <div className="flex items-center">

                        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option1" />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900"> Mặc định </strong>
                    </div>
                </label>
                <label htmlFor="Option2" className="flex cursor-pointer  gap-4">
                    <div className="flex items-center">

                        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option2" />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900"> Giờ đi sớm nhất </strong>
                    </div>
                </label>
                <label htmlFor="Option3" className="flex cursor-pointer  gap-4">
                    <div className="flex items-center">

                        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option3" />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900"> Giờ đi muộn nhất </strong>
                    </div>
                </label>
                <label htmlFor="Option3" className="flex cursor-pointer  gap-4">
                    <div className="flex items-center">

                        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option3" />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900"> Đánh giá cao nhất</strong>
                    </div>
                </label>
                <label htmlFor="Option3" className="flex cursor-pointer  gap-4">
                    <div className="flex items-center">

                        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option3" />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900"> Giá tăng dần</strong>
                    </div>
                </label>
                <label htmlFor="Option3" className="flex cursor-pointer  gap-4">
                    <div className="flex items-center">

                        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option3" />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900"> Giá giảm dần </strong>
                    </div>
                </label>
            </div>
        </div>
 </div>
}
export default Menu