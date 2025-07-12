import { CardVariants } from "../cva/CardVariants"
import { cn } from "../utis/cn"
 
export const BlogsCard = ({ className,img, size, ...props }) => {
    return (
        <>
            <div className={cn(CardVariants({ size }), className

            )} {...props}>

                <img src={img} alt=""className="h-[55%] w-full object-cover hover:scale-105 transition-transform duration-300" />






            </div>
        </>
    )



}