import { Link } from "react-router-dom"

const Menu = () => {
    return <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
            <ul className="mt-6 space-y-1">
                <li>
                    <Link to="/admin" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/admin/trips" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        Lịch sử chuyến
                    </Link>
                </li>
                <li>
                    <Link to="/admin/trips/add" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        Chuyến xe
                    </Link>
                </li>
                <li>
                    <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        Nhà xe
                    </a>
                </li>
            </ul>
           
        </div>
       
    </div>

}
export default Menu 