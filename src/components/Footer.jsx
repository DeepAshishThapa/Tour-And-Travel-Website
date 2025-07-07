import footervid from '../assets/footervid.mp4'
import logo from '../assets/logo.png'
import { HugeiconsIcon } from '@hugeicons/react';
import { TelegramIcon } from '@hugeicons/core-free-icons'
import { PhoneCheckIcon } from '@hugeicons/core-free-icons';
import { InstagramIcon } from '@hugeicons/core-free-icons';
import { Facebook01Icon } from '@hugeicons/core-free-icons';
import { Linkedin01Icon } from '@hugeicons/core-free-icons';

export const Footer = () => {
    return (
        <>
            <div className='mt-10 h-250 md:h-135 shadow-md relative flex justify-center items-center'>
                <video src={footervid} className='h-[100%] w-full object-cover absolute' loop muted autoPlay />

                <div className='bg-white opacity-80  h-[85%] 2xl:w-330 rounded-lg w-[95%] px-5 pt-10 relative'>
                    <div className='grid md:grid-cols-2 md:gap-25 pb-10'>
                        <div>
                            <img src={logo} alt="" className='h-15 w-30 object-contain' />
                            <p className='text-sm text-black font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt esse recusandae fuga delectus atque. Lorem ipsum dolor sit amet.

                            </p>
                            <ul className='flex flex-col mt-12 gap-4'>
                                <li className='flex items-center gap-4'>
                                    <HugeiconsIcon
                                        icon={TelegramIcon}
                                        size={20}
                                        color="#1e0707"
                                        strokeWidth={4}

                                    />
                                    <span>Noida, Uttar Pradesh</span>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <HugeiconsIcon
                                        icon={PhoneCheckIcon}
                                        size={20}
                                        color="#000000"
                                        strokeWidth={4}
                                    />
                                    <span>+123 456 789</span>
                                </li>
                                <li className='flex gap-2 '>
                                    <HugeiconsIcon
                                        icon={InstagramIcon}
                                        size={28}
                                        color="#000000"
                                        strokeWidth={3}
                                    />

                                    <HugeiconsIcon
                                        icon={Facebook01Icon}
                                        size={28}
                                        color="#000000"
                                        strokeWidth={3}


                                    />
                                    <HugeiconsIcon
                                        icon={Linkedin01Icon}
                                        size={28}
                                        color="#000000"
                                        strokeWidth={3}
                                    />


                                </li>
                            </ul>
                        </div>
                        <div className='mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 '>
                            <div>
                                <h1 className='font-bold text-lg'>Important Links</h1>
                                <ul className='links flex flex-col gap-4 '>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Best Places</li>
                                    <li>Blogs</li>

                                </ul>
                            </div>

                            <div>
                                <h1 className='font-bold text-lg'>Important Links</h1>
                                <ul className='links flex flex-col gap-4 '>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Best Places</li>
                                    <li>Blogs</li>

                                </ul>

                            </div>
                            <div>
                                <h1 className='font-bold text-lg'>Important Links</h1>
                                <ul className='links flex flex-col gap-4 '>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Best Places</li>
                                    <li>Blogs</li>

                                </ul>

                            </div>



                        </div>


                    </div>
                    <div className='bg-cyan-500 absolute bottom-0 w-full h-13 left-0 right-0 text-center text-white font-semibold py-3'>
                        <span>@copyright 2024 All rights reserved || Made with ❤️ by TCJ</span>
                    </div>


                </div>
                
            </div>
        </>
    )
}