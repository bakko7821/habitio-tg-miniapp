import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigate/Navigation.js";

export default function MainLayout() {
    // useAuthGuard()
    
    return (
        <>
            <h1>Habit track</h1>
            <main>
                <Outlet />
            </main>
            <Navigation/>
        </>
    )
}