import { Outlet } from "react-router-dom";
import '../styles/auth.css'

export default function AuthLayout() {
    return (
        <>
            <p className="uppercase text-3xl font-bold">Habitio</p>
            <main>
                <Outlet/>
            </main>
        </>
        
    )
}