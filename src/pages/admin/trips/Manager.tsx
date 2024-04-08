import { useEffect, useState } from "react";
import { ITrip } from "../../../interfaces/trips";
import { Link } from "react-router-dom";

const TripsList = () => {
    const [trips, setTrips] = useState([])
    // fetch trip
    const fetchTrips = async () => {
        const data = await (await fetch("http://localhost:3000/trips?_expand=busHouse")).json()
        setTrips(data)

    }
    useEffect(() => {
        fetchTrips()
    }, [])
    return <div>
        <h1 className="flex justify-center text-2xl font-medium ">Danh sách chuyến đi</h1>
        <Link className="p-2 bg-[#16a34a] text-white p " to="/admin/trips/add">Thêm mới chuyến đi</Link>
        {trips.map(item => <Trip data={item} />)}
    </div>
}

export default TripsList

const Trip = (props: { data: ITrip }) => {
    return <div className="">
        <article className="rounded-xl border-2 border-gray-100 bg-white mt-2 ">
            <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                <a href="#" className="block shrink-0">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        className="size-14 rounded-lg object-cover"
                    />
                </a>

                <div className="">
                    <h3 className="font-medium sm:text-xl">
                        <Link to={"/admin/trips/" + props.data.id} className="hover:underline">{props.data.busHouse?.name}</Link>
                    </h3>
                    <div className="flex">
                        <p className="text-xl font-semibold text-gray-800">Số ghế:</p>
                        <p className=" tx-xl py-1 text-gray-700 font-medium ml-1 ">{props.data.seats}</p>
                    </div>
                    <div className="flex">
                        <p className="text-xl font-semibold text-gray-800">Khởi hành:</p>
                        <p className=" tx-xl py-1 text-gray-700 font-medium ml-1 ">{props.data.startTime}</p>
                    </div>
                    <div className="flex">
                        <p className="text-xl font-semibold text-gray-800">Điểm đi:</p>
                        <p className=" tx-xl py-1 text-gray-700 font-medium ml-1 ">{props.data.fromStation}</p>
                    </div>
                </div>
                <div className="ml-32">
                    <div className="flex">
                        <p className="text-xl font-semibold text-gray-800">SĐT nhà xe:</p>
                        <p className=" tx-xl py-1 text-gray-700 font-medium ml-1 ">{props.data.phone}</p>
                    </div>
                    <div className="flex">
                        <p className="text-xl font-semibold text-gray-800">Bến xe:</p>
                        <p className=" tx-xl py-1 text-gray-700 font-medium ml-1 ">{props.data.station}</p>
                    </div>
                    <div className="flex">
                        <p className="text-xl font-semibold text-gray-800">Điểm đến:</p>
                        <p className=" tx-xl py-1 text-gray-700 font-medium ml-1 ">{props.data.toStation}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <strong
                    className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                    </svg>

                    <span className="text-[10px] font-medium sm:text-xs">Solved!</span>
                </strong>
            </div>
        </article>
    </div>

}