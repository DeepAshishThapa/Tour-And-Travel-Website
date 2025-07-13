import suitcase from '../assets/suitcase.png'
import { HugeiconsIcon } from '@hugeicons/react';
import { AirplaneModeIcon } from '@hugeicons/core-free-icons';
import { Hotel01Icon } from '@hugeicons/core-free-icons';
import { Wifi01Icon } from '@hugeicons/core-free-icons';
import { PieIcon } from '@hugeicons/core-free-icons';
export const Banner2 = () => {
    return (
        <>
            <div className='shadow-lg w-[100vw] py-20'>
                <div className='flex justify-between gap-15 flex-col md:flex-row w-full max-w-[1200px] items-center mx-auto px-15 md:px-5'>
                    <img src={suitcase} alt="" data-aos="flip-up"/>
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-bold text-3xl' data-aos="fade-up">Explore all corners of the world with us</h1>
                        <p className='text-gray-500 text-sm' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, sed? Lorem ipsum dolor sit amet consectetur adipisicing el</p>
                        <div className='grid grid-cols-2 gap-y-8' data-aos="zoom-in">
                            <div className='flex items-center gap-3'>
                                <HugeiconsIcon
                                    icon={AirplaneModeIcon}
                                    size={20}
                                    color="#000000"
                                    strokeWidth='3'


                                />
                                <span>flight</span>


                            </div>
                            <div className='flex gap-3 items-center'>
                                <HugeiconsIcon
                                    icon={Hotel01Icon}
                                    size={20}
                                    color="#6e3333"
                                    strokeWidth={3}
                                />
                                <span>hotel</span>

                            </div>
                            <div className='flex gap-3 items-center'>
                                <HugeiconsIcon
                                    icon={Wifi01Icon}
                                    size={24}
                                    color="#417505"
                                    strokeWidth={1.5}
                                />
                                <span>wifi</span>

                            </div>
                            <div className='flex items-center gap-3 '>
                                <HugeiconsIcon
                                    icon={PieIcon}
                                    size={24}
                                    color="#1f097a"
                                    strokeWidth={3}
                                />
                                <span>foods</span>
                            </div>

                        </div>
                    </div>


                </div>





            </div>

        </>

    )
}