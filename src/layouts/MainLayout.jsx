import { Outlet } from "react-router"
import { Navbar } from "../components/Navbar"
import {Footer} from '../components/footer'

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