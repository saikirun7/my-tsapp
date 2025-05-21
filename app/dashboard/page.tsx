"use client"

import { useRouter } from "next/navigation";
//import PrivateRoute from "../PrivateRoute/PrivateRoute";

function Dashboard() {
    console.log("Dashboard")
    const route = useRouter();

    const logout = () => {
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        localStorage.clear();
        route.push("/login");
    }

    return (
        //<PrivateRoute>
            <div>
                <h1>Dashboard</h1>
                <button onClick={logout}>Logout</button>
            </div>
        //</PrivateRoute>
    )
}

export default Dashboard