
import { useState } from "react";
import SearchForm from "./SearchForm";
import { getTrips } from "../../services/trips.api";
import { ITrip } from "../../interfaces/trips";
import { Ticket } from "./Item";
import { useNavigate } from "react-router-dom";


const Form = () => {
    const [trips, setTrips] = useState<ITrip[]>([])
    const navigate = useNavigate();
    const handleSearch = async (query: string) => {
        console.log(query);
        const { data } = await getTrips(query)
        setTrips(data)
        navigate("/about");
    }
    return <div className="w-full text-center ">
        <div className="form-text text-white text-2xl">
            <h2>Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</h2>
        </div>
        <div className="form-seach">
            <ul>
                <li>

                    <a href="" className="action"><i className="fa-solid fa-bus-simple"></i> Xe Khách</a>
                </li>

                <li>

                    <a href=""> <i className="fa-solid fa-plane-up"></i> Máy Bay</a>
                </li>
                <li>

                    <a href=""> <i className="fa-solid fa-train"></i> Tàu Hỏa</a>
                </li>
                <li>

                    <a href=""> <i className="fa-solid fa-caravan"></i>Thuê Xe</a>
                </li>
            </ul>
            <SearchForm onSearch={handleSearch} />
            {trips.map(item => <Ticket key={item.id} />)}
        </div>
    </div>
}
export default Form