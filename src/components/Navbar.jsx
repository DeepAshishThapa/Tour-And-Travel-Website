import { ButtonVariants } from '../cva/ButtonVariants'
import logo from '../assets/logo.png'
import { Button } from './Button'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { HugeiconsIcon } from '@hugeicons/react';
import { Menu04Icon } from '@hugeicons/core-free-icons'
import { Menu03Icon } from '@hugeicons/core-free-icons'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { useEffect, useState } from 'react'
import { Menubox } from './Menubox'
import { useCallback } from 'react'

export function Navbar() {
    const [showmenu, setshowmenu] = useState(false)
    const togglemenu = () => {
        setshowmenu(prev => !prev)
    }
    const DropdownLinks = [
        {
            name: "Our Services",
            link: "/#Services"
        },
        {
            name: "Top Brands",
            link: "/#mobilebrands",
        },
        {
            name: "Location",
            link: "/#location"
        }
    ]
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setshowmenu(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // optional: run once on mount
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrolltoTop = useCallback(() => {
        window.scrollTo(0, 0);

    }, [])


    return (
        <>
            
                {
                    showmenu ? (
                        <Menubox className="w-[80%] py-10 px-5" />
                    ) :
                        (
                            <Menubox className="w-0 px-0 py-0" />
                        )
                }
           

            <div className="h-8 bg-gradient-to-r from-cyan-700 to-cyan-400 sm:flex text-white justify-between px-20 items-center hidden fixed w-[100vw] z-10">
                <div>20% off on next booking</div>
                <div>Mobile No. +91 123456789</div>

            </div>

            <nav className="h-10 flex md:justify-around items-center sm:py-8 py-10 justify-between px-3 md:px-0 shadow-md fixed w-[100vw] md:top-8 z-10 bg-white ">
                <div>
                    <img src={logo} alt="site logo" className='w-30 ' />
                </div>
                <div className='md:flex gap-2 items-center hidden midnav'>
                    <Button asChild >
                        <NavLink to={"/"} onClick={scrolltoTop}>Home</NavLink>
                    </Button>
                    <Button asChild >
                        <NavLink to={"/blogs"} onClick={scrolltoTop}>Blogs</NavLink>
                    </Button>
                    <Button asChild >
                        <NavLink to={"/places"} onClick={scrolltoTop}>Best Places</NavLink>
                    </Button>
                    <Button asChild >
                        <NavLink to={"/about"} onClick={scrolltoTop}>About</NavLink>
                    </Button>
                    <div className="relative group">
                        {/* Trigger Button */}
                        <Button className="flex items-center">
                            <span>Quick Links</span>
                            <HugeiconsIcon
                                icon={ArrowDown01Icon}
                                size={20}
                                strokeWidth={2}
                                className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                            />
                        </Button>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full mt-2 w-[150px] bg-white py-4 px-2 shadow-md 
                          opacity-0 invisible 
                           group-hover:visible group-hover:opacity-100 
                           hover:visible hover:opacity-100 
                             transition-all duration-200 z-50">
                            {DropdownLinks.map(({ name, link }) => (
                                <div key={name} className="leading-loose hover:bg-blue-200 rounded-md">
                                    <Button asChild>
                                        <a href={link}>{name}</a>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
                <div className='flex items-center gap-5'>
                    <Button variant="primary">
                        <span>

                            Book Now
                        </span>




                    </Button>
                    {
                        showmenu ? (
                            <>

                                <HugeiconsIcon icon={Menu03Icon}
                                    strokeWidth={3}
                                    onClick={togglemenu}
                                    className="hover:cursor-pointer block md:hidden"
                                />


                            </>


                        )
                            : (
                                <>
                                    <HugeiconsIcon
                                        icon={Menu04Icon}
                                        strokeWidth={3}
                                        onClick={togglemenu}
                                        className="hover:cursor-pointer block md:hidden"
                                    />

                                </>

                            )
                    }
                </div>

            </nav>
        </>
    )
}

