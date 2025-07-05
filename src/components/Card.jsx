import { CardVariants } from "../cva/CardVariants";
import { cn } from "../utis/cn";
import { memo } from "react";

 const CardComponent = ({ className, size, ...props }) => {
    return (
        <>
            <div className={cn(CardVariants({ size }),
            className

            )}{...props}>

            </div>
        </>
    )

}
export const Card = memo(CardComponent);