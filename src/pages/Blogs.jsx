import { Blogshero } from "../components/Blogshero"
import { Outlet } from "react-router"
import AOS from "aos";
import { useEffect } from "react";
export function Blogs(){
     useEffect(() => {
    window.scrollTo(0, 0);      // 👈 scrolls to top on route load
    setTimeout(() => AOS.refresh(), 100); // 👈 gives AOS time to recalculate
  }, []);
    return(
        <>
        
        <Outlet/>
         
        <Blogshero/>
        
        </>
    )
}
