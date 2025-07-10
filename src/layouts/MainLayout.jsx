import { Outlet } from "react-router"
import { Navbar } from "../components/Navbar"
import {Footer} from '../components/footer'

export function MainLayout() {
    return (
        <>


            
            
            <Navbar />
            <Outlet />

            
            <Footer/>
            



        </>
    )
}