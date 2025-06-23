import { ButtonVariants } from "../cva/ButtonVariants";
import { cn } from "../utis/cn";
import {Slot} from "@radix-ui/react-slot"

export function Button({className,asChild,variant,size,...props}){
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