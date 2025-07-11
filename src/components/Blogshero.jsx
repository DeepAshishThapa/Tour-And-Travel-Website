import { Card } from "./PlacesCard"
export const Blogshero=()=>{
    return(
        <>
        <div className="sm:px-23 pt-8 px-2 ">
            <div className="flex gap-2 items-center">

                    <div className="bg-cyan-600 w-2 h-13 inline"></div>
                    <h1 className="font-bold text-3xl ">Our Latest Blogs</h1>

                </div>
                <div className="pt-10 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 hover:cursor-pointer">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

        </div>
        </>
    )
}