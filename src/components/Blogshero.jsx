import { BlogsCard } from "./BlogsCard"
import boat from '../assets/boat.jpg'
import tajmahal from '../assets/tajmahal.jpg'
import water from '../assets/water.jpg'
export const Blogshero=()=>{
    const BlogsData=[
        {
            img:tajmahal
        },
        {
            img:water
        },
        {
            img:boat
        }
    ]
    return(
        <>
        <div className="sm:px-20 px-2 pt-8 lg:max-w-[1200px] 2xl:max-w-[1400px] mx-auto sm:max-w-[700px] max-w-[400px]">
            <div className="flex gap-2 items-center">

                    <div className="bg-cyan-600 w-2 h-13 inline"></div>
                    <h1 className="font-bold text-3xl ">Our Latest Blogs</h1>

                </div>
                <div className="pt-10 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 hover:cursor-pointer">
                    {BlogsData.map((item,index)=>(
                        <BlogsCard {...item}/>
                    ))}
                    
                </div>

        </div>
        </>
    )
}