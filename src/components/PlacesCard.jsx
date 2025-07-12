import { CardVariants } from "../cva/CardVariants";
import { cn } from "../utis/cn";
import { memo } from "react";
import { HugeiconsIcon } from '@hugeicons/react';
import { MapPinpoint01Icon } from '@hugeicons/core-free-icons';


const CardComponent = ({ className, size,img,title,location,description,price,type, ...props }) => {
    return (
        <>
            <div className={cn(CardVariants({ size }),
                className

            )}{...props}>
                <img src={img} alt="" className="h-[55%] w-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="flex flex-col p-3 gap-2">
                    <h1 className="font-bold text-xl">{title}</h1>
                    <div className="flex items-center gap-1.5">
                        <HugeiconsIcon icon={MapPinpoint01Icon}
                            size={18}
                            color="#000000"
                            className="text-gray-500"

                        />
                        <div className="text-gray-500">{location}</div>

                    </div>
                    <p>{description}    </p>
                    <div className="h-[1.3px] bg-gray-200"></div>

                    <ul className="flex items-center justify-between">
                        <li>{type}</li>
                        <li className="font-bold text-2xl">{price}</li>
                    </ul>

                </div>

            </div>
        </>
    )

}
export const PlacesCard = memo(CardComponent);