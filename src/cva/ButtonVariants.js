import {cva} from "class-variance-authority"


export const ButtonVariants=cva("rounded-md font-medium transition-colors hover:cursor-pointer",
    {
        variants:{
            variant:{
                default:"bg-transparent text-black",
                primary:"bg-cyan-500 text-white hover:bg-cyan-700",
                secondary:"bg-gray-400 text-white hover:bg-gray-600"
            },
            size:{
                sm:"px-3 py-1 text-sm",
                md:"px-4 py-2 text-md",
                lg:"px-5 py-3 text-lg"

            }
        },
        defaultVariants:{
            variant:"default",
            size:"md"
        }
    }

)