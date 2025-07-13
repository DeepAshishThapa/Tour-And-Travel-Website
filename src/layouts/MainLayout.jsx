import { Outlet } from "react-router"
import { Navbar } from "../components/Navbar/Navbar"
import {Footer} from '../components/Footer/Footer'

export function MainLayout() {
    return (
        <>


            
            
            <Navbar />
            <div className="pt-23">
            <Outlet />
            </div>

            
            <Footer/>
            



        </>
    )
}