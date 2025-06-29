import {cva} from "class-variance-authority"

export const InputVariants=cva(
    "rounded-md placeholder-gray-500 shadow-md",
    {
        variants:{
            variant:{
                default:"focus:outline-1 focus:outline-cyan-500",
                error:"border-red-500 text-red-600 placeholder-red-400",
                success:"border-green-500 text-green-600 placeholder-green-400",

            },
            size:{
                sm:"py-1 px-3 text-sm",
                md:"py-2 px-4 text-md",
                lg:"py-3 px-5 text-lg"
            },
            
        },
        defaultVariants:{
                variant:"default",
                size:"md"

            }
    }


)



