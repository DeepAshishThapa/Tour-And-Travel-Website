import { Outlet } from "react-router"
import { Navbar } from "../components/Navbar"
export function MainLayout(){
    return(
        <>
        <div className="h-8 bg-gradient-to-r from-cyan-700 to-cyan-400">


        </div>
        <Navbar/>
        <Outlet/>


        </>
    )
}