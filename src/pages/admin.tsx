import { Outlet } from 'react-router-dom';
import HeaderAdmin from "../components/Admin/Header"
import Menu from "../components/Admin/Menu"


const AdminPage = () => {
    return <div>
        <HeaderAdmin />
        <div className="flex">
            <div className="w-1/5"><Menu/></div>
            <div className="w-4/5"> <Outlet /></div>
        </div>

    </div>
}
export default AdminPage