import { ButtonVariants } from "../cva/ButtonVariants";
import { cn } from "../utis/cn";
import {Slot} from "@radix-ui/react-slot"
import {memo} from "react"

 function ButtonComponent({className,asChild,variant,size,...props}){
    const Comp=asChild? Slot:"button"
    return(
        <>
        <Comp className={cn(
            ButtonVariants({variant,size}),
            className
        )} {...props}>

        </Comp>

        </>
    )
}
export const Button = memo(ButtonComponent);