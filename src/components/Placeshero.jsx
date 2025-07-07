import { Card } from "./Card";
import boat from '../assets/boat.jpg'
import tajmahal from '../assets/tajmahal.jpg'
import water from '../assets/water.jpg'
import sydney from '../assets/sydney.jpg'
import LA from '../assets/LA.jpg'
import cali from '../assets/cali.jpg'
import { HugeiconsIcon } from '@hugeicons/react';
import { MapPinpoint01Icon } from '@hugeicons/core-free-icons';


export const Placeshero = () => {
    return (
        <>
            <div className="sm:px-23 pt-10 px-2">
                <div className="flex gap-2 items-center">

                    <div className="bg-cyan-600 w-2 h-13 inline"></div>
                    <h1 className="font-bold text-3xl ">Best Places to visit</h1>
                </div>

                <div className="pt-10 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 hover:cursor-pointer">
                    <Card>
                        <img src={boat} alt="" className="h-[55%] w-full object-cover hover:scale-105 transition-transform duration-300" />
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

                    <Card >
                        <img src={tajmahal} alt="" className="h-[55%] w-full object-cover hover:scale-105 transition-transform duration-300" />
                        <div className="flex flex-col p-3 gap-2">
                            <h1 className="font-bold text-xl">Taj Mahal</h1>
                            <div className="flex items-center gap-1.5">
                                <HugeiconsIcon icon={MapPinpoint01Icon}
                                    size={18}
                                    color="#000000"
                                    className="text-gray-500"

                                />
                                <div className="text-gray-500">India</div>

                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.    </p>
                            <div className="h-[1.3px] bg-gray-200"></div>

                            <ul className="flex items-center justify-between">
                                <li>Cultural Relax</li>
                                <li className="font-bold text-2xl">$100</li>
                            </ul>

                        </div>


                    </Card>

                    <Card>
                        <img src={water} alt="" className="h-[55%] w-full object-cover hover:scale-105 transition-transform duration-300" />
                        <div className="flex flex-col p-3 gap-2">
                            <h1 className="font-bold text-xl">Underwater</h1>
                            <div className="flex items-center gap-1.5">
                                <HugeiconsIcon icon={MapPinpoint01Icon}
                                    size={18}
                                    color="#000000"
                                    className="text-gray-500"

                                />
                                <div className="text-gray-500">USA</div>

                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.    </p>
                            <div className="h-[1.3px] bg-gray-200"></div>

                            <ul className="flex items-center justify-between">
                                <li>Cultural Relax</li>
                                <li className="font-bold text-2xl">$6500</li>
                            </ul>

                        </div>




                    </Card>
                    <Card >
                        <img src={sydney} alt="" className="h-[55%] w-full object-cover hover:scale-105 transition-transform duration-300" />
                        <div className="flex flex-col p-3 gap-2">
                            <h1 className="font-bold text-xl">Underwater</h1>
                            <div className="flex items-center gap-1.5">
                                <HugeiconsIcon icon={MapPinpoint01Icon}
                                    size={18}
                                    color="#000000"
                                    className="text-gray-500"

                                />
                                <div className="text-gray-500">AUS</div>

                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.    </p>
                            <div className="h-[1.3px] bg-gray-200"></div>

                            <ul className="flex items-center justify-between">
                                <li>Cultural Relax</li>
                                <li className="font-bold text-2xl">$6700</li>
                            </ul>

                        </div>


                    </Card>
                    <Card >
                        <img src={LA} alt="" className="h-[55%] w-full object-cover hover:scale-105 transition-transform duration-300" />
                        <div className="flex flex-col p-3 gap-2">
                            <h1 className="font-bold text-xl">Los Angels </h1>
                            <div className="flex items-center gap-1.5">
                                <HugeiconsIcon icon={MapPinpoint01Icon}
                                    size={18}
                                    color="#000000"
                                    className="text-gray-500"

                                />
                                <div className="text-gray-500">United States</div>

                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.    </p>
                            <div className="h-[1.3px] bg-gray-200"></div>

                            <ul className="flex items-center justify-between">
                                <li>Cultural Relax</li>
                                <li className="font-bold text-2xl">$7000</li>
                            </ul>

                        </div>

                    </Card>

                    <Card >
                        <img src={cali} alt="" className="h-[55%] w-full object-cover hover:scale-105 transition-transform duration-300" />
                        <div className="flex flex-col p-3 gap-2">
                            <h1 className="font-bold text-xl">Los Vegas </h1>
                            <div className="flex items-center gap-1.5">
                                <HugeiconsIcon icon={MapPinpoint01Icon}
                                    size={18}
                                    color="#000000"
                                    className="text-gray-500"

                                />
                                <div className="text-gray-500">California</div>

                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet   </p>
                            <div className="h-[1.3px] bg-gray-200"></div>

                            <ul className="flex items-center justify-between">
                                <li>Cultural Relax</li>
                                <li className="font-bold text-2xl">$7000</li>
                            </ul>

                        </div>


                    </Card>


                </div>






            </div >

        </>
    )
}