import {
    createBrowserRouter,
    
} from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import AdminPage from './pages/admin';
import Dashboard from "./components/Admin/Dashboard";
import Add from "./pages/admin/trips/Add";
import TripsList from "./pages/admin/trips/Manager";
import { getBusHouses } from "./services/busHouse.api";
import { getTripById } from "./services/trips.api";
import UpdateTrip from "./pages/admin/trips/Edit";
import LoginPage from "./components/Admin/Signin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "about",
        element: <AboutPage />,
    },
    {
        path: "signin",
        element: <LoginPage />,
    },
    {
        path: '/admin',
        element: <AdminPage />,
        children: [
            { path: "", element: <Dashboard /> },
            { path: "trips", element: <TripsList /> },
            {
                path: "trips/add",
                loader: async () => {
                    const { data } = await getBusHouses();
                    return data
                },
                element: <Add />
            },
            {
                path: "trips/:id",
                loader: async ({ params }) => {
                    const { data: busHouses } = await getBusHouses();
                    if (params.id) {
                        const { data: trip } = await getTripById(params.id)
                        return { trip, busHouses }
                    }
                    return { busHouses }
                },
                element: <UpdateTrip />
            },
        ]
    },
]);

export default router