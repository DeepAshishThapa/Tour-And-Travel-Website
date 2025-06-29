import { InputVariants } from "../cva/InputVariants";
import { cn } from "../utis/cn";

import { memo } from "react";

function InputComponent({ className, variant, size, type, placeholder, ...props }) {
    return (
        <>
            <input type={type} placeholder={placeholder} className={cn(InputVariants({ variant, size }), className)} {...props} />
        </>
    )


}
export const Inputbox = memo(InputComponent)