const Dashboard = () => {
    return (
        <div>
            <div className="flex">
                <div className="w-1/4 p-4">
                    {/* small box */}
                    <div className="bg-blue-500 p-4 text-white">
                        <div className="text-3xl font-bold">150</div>
                        <div className="text-sm">New Orders</div>
                    </div>
                    <a
                        href="#"
                        className="block mt-4 p-2 text-center text-blue-500 bg-white border border-blue-500 rounded-lg"
                    >
                        More info
                    </a>
                </div>
                {/* ./col */}
                <div className="w-1/4 p-4">
                    {/* small box */}
                    <div className="bg-green-500 p-4 text-white">
                        <div className="text-3xl font-bold">53<sup className="text-base">%</sup></div>
                        <div className="text-sm">Bounce Rate</div>
                    </div>
                    <a
                        href="#"
                        className="block mt-4 p-2 text-center text-green-500 bg-white border border-green-500 rounded-lg"
                    >
                        More info
                    </a>
                </div>
                {/* ./col */}
                <div className="w-1/4 p-4">
                    {/* small box */}
                    <div className="bg-yellow-500 p-4 text-white">
                        <div className="text-3xl font-bold">44</div>
                        <div className="text-sm">User Registrations</div>
                    </div>
                    <a
                        href="#"
                        className="block mt-4 p-2 text-center text-yellow-500 bg-white border border-yellow-500 rounded-lg"
                    >
                        More info
                    </a>
                </div>
                {/* ./col */}
                <div className="w-1/4 p-4">
                    {/* small box */}
                    <div className="bg-red-500 p-4 text-white">
                        <div className="text-3xl font-bold">65</div>
                        <div className="text-sm">Unique Visitors</div>
                    </div>
                    <a
                        href="#"
                        className="block mt-4 p-2 text-center text-red-500 bg-white border border-red-500 rounded-lg"
                    >
                        More info
                    </a>
                </div>
                {/* ./col */}
            </div>
        </div>
    );
};

export default Dashboard;