import { Button } from "../Button"
import { NavLink } from "react-router"
import profile from  '../../assets/profile.webp'
import { cn } from "../../utis/cn"
import { memo } from "react"
function MenuboxComponent({className}) {
   
    return (
        <>
            <div className={cn("fixed top-0 h-screen w-0  overflow-x-hidden bg-white shadow-md z-100 flex flex-col gap-15  transition-all duration-100",className)}>
                <div className="flex items-center gap-1">
                    <img src={profile} alt="" className="w-[100px] "/>
                    <div className="text-gray-500">
                        <div className="">Hello User</div>
                        <div>Premium user</div>
                    </div>
                </div>
                <Button asChild>
                    <NavLink to={"/"} onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                </Button>
                <Button asChild >
                    <NavLink to={"/blogs"} onClick={() => window.scrollTo(0, 0)}>Blogs</NavLink>
                </Button>
                <Button asChild >
                    <NavLink to={"/places"} onClick={() => window.scrollTo(0, 0)}>Best Places</NavLink>
                </Button>
                <Button asChild >
                    <NavLink to={"/about"} onClick={() => window.scrollTo(0, 0)}>About</NavLink>
                </Button>


            </div>
        </>
    )


}
export const Menubox= memo(MenuboxComponent);