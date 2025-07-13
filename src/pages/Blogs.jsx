import { Blogshero } from "../components/Blogs/Blogshero"
import { Outlet } from "react-router"
import AOS from "aos";
import { useEffect } from "react";
export function Blogs() {
    

    return (
        <>

            <Outlet />
            

                <Blogshero />
            

        </>
    )
}
