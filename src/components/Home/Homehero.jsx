import { Inputbox } from "../Inputbox";
import { Button } from "../Button";
import { useState } from "react";



export function Homehero() {
    const [value,setValue]=useState(150)
    const handleinputcchange=(e)=>{
        setValue(e.target.value)
    }
    
return(
    <>
        <div className="h-[60vh] ">

            <div className="h-full flex items-center ">
                <div className="grid grid-cols-1 gap-4 text-white w-[95%] m-auto 2xl:w-300 ">
                    <div>
                        <p
                         data-aos="fade-up"
                         data-aos-delay="300"
                        >Our Packages
                           
                        </p>
                        <h1
                         className="text-4xl font-bold"
                         data-aos="fade-up"
                         data-aos-delay="300"
                        >Search Your Destination</h1>
                    </div>
                    <div className="w-full sm:h-35 h-auto bg-white rounded-md px-4 py-4 relative flex-col flex sm:flex-row justify-center gap-5 text-gray-500"
                     data-aos="fade-up"
                         data-aos-delay="600"
                    >
                       
                        <div className="sm:w-[32%] w-[100%]">
                            <h1 className="">Search Your Destination</h1>
                            <Inputbox className="w-[100%]" type="text" placeholder="Dubai" />
                        </div>
                        <div className="w-[100%] sm:w-[32%]">
                            <h1 className="">Date</h1>
                            <Inputbox className="w-[100%]" type="date" />
                        </div>
                        <div className="sm:w-[32%] w-[100%]">
                            <div className="flex justify-between">
                            <h1 className="">Max Price</h1>
                            <label for="slide">
                                <span id="valueofrange" className="font-bold text-black">
                                    
                                     ${value}
                                </span>
                            </label>
                            </div>
                            <Inputbox className="w-[100%] px-2 py-3 accent-cyan-300"
                                type="range"
                                min="150"
                                max="1000"
                                step="1"
                                id="slide"
                                value={value}
                                onChange={handleinputcchange}
                               
                            />
                            

                        </div>




                        <Button variant="primary" size="md" className="rounded-full absolute sm:top-30 top-64 ">
                            Search Now

                        </Button>
                    </div>

                </div>

            </div>

        </div>
    </>

)



}