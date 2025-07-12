import { CardVariants } from "../cva/CardVariants"
import { cn } from "../utis/cn"
 
export const BlogsCard = ({ className,img, size, ...props }) => {
    return (
        <>
            <div className={cn(CardVariants({ size }), className

            )} {...props}>

                <img src={img} alt=""className="h-[55%] w-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="p-2 flex flex-col gap-3">
                    <ul className="flex justify-between text-gray-500 ">
                        <li>April, 2022</li>
                        <li>April, 2022</li>
                    </ul>
                    <div className="font-bold">The 10 best places to visit in indis</div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aut!</p>

                </div>






            </div>
        </>
    )



}