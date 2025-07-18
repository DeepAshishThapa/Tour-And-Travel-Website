import { cva } from "class-variance-authority";

export const CardVariants=cva("shadow-lg bg-white overflow-hidden",
    {
        variants:{
            size:{
                sm:"h-30",
                lg:"h-100"
            }
        },
        defaultVariants:{
            size:"lg"
        }
    }
)