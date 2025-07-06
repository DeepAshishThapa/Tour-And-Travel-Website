import { Card } from "./Card";
import boat from '../assets/boat.jpg'
import { HugeiconsIcon } from '@hugeicons/react';
import { MapPinpoint01Icon } from '@hugeicons/core-free-icons';
export const Placeshero = () => {
    return (
        <>
            <div className="px-23 pt-10 ">
                <div className="flex gap-2 items-center">

                    <div className="bg-cyan-600 w-2 h-13 inline"></div>
                    <h1 className="font-bold text-3xl ">Best Places to visit</h1>
                </div>

                <div className="pt-10 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 ">
                    <Card>
                        <img src={boat} alt="" className="h-[55%] w-full object-cover" />
                        <div className="flex flex-col p-3 gap-2">
                            <h1 className="font-bold text-xl">Boat tour</h1>
                            <div className="flex items-center gap-1.5">
                                 <HugeiconsIcon icon={MapPinpoint01Icon}
                                    size={18}
                                    color="#000000"
                                    className="text-gray-500"

                                />
                                <div className="text-gray-500">USA</div>
                               
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.     </p>
                            <div className="h-[1.3px] bg-gray-200"></div>

                            <ul className="flex items-center justify-between"> 
                                <li>Cultural Relax</li>
                                <li className="font-bold text-2xl">$100</li>
                            </ul>

                        </div>
                    </Card>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </div>






            </div>

        </>
    )
}