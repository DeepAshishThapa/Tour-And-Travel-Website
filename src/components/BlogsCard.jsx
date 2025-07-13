import { CardVariants } from "../cva/CardVariants"
import { cn } from "../utis/cn"
import { Link } from "react-router"

export const BlogsCard = ({ className, img, title, description, author, size, ...props }) => {
    return (
        <>
            <Link
            to={`/blogs/${title}`}
            onClick={()=>{window.scrollTo(0, 0)}    }
            state={{img,title,description,author}}
            >

                <div className={cn(CardVariants({ size }), className

                )} {...props}

                >

                    <img src={img} alt="" className="h-[55%] w-full object-cover hover:scale-105 transition-transform duration-300" />
                    <div className="p-2 flex flex-col gap-3">
                        <ul className="flex justify-between text-gray-500 ">
                            <li>{author}</li>
                            <li>April, 2022</li>
                        </ul>
                        <div className="font-bold">{title}</div>
                        <p className="line-clamp-2">{description}</p>

                    </div>






                </div>
            </Link>
        </>
    )



}