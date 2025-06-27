import { ButtonVariants } from '../cva/ButtonVariants'
import logo from '../assets/logo.png'
import { Button } from './Button'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { HugeiconsIcon } from '@hugeicons/react';
import { Menu04Icon } from '@hugeicons/core-free-icons'
import {Menu03Icon} from '@hugeicons/core-free-icons'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { useEffect, useState } from 'react'

export function Navbar() {
    const [showmenu,setshowmenu]=useState(false)
    const togglemenu=()=>{
        setshowmenu(prev=>!prev)
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


    return (
        <>
            <nav className="h-10 flex md:justify-around items-center sm:py-8 py-10 justify-between px-3 md:px-0 shadow-md">
                <div>
                    <img src={logo} alt="site logo" className='w-30 ' />
                </div>
                <div className='md:flex gap-2 items-center hidden '>
                    <Button asChild >
                        <NavLink to={"/"} onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                    </Button>
                    <Button asChild >
                        <NavLink to={"/blogs"} onClick={() => window.scrollTo(0, 0)}>Blogs</NavLink>
                    </Button>
                    <Button asChild >
                        <NavLink to={"/places"} onClick={() => window.scrollTo(0, 0)}>Best Places</NavLink>
                    </Button>
                    <Button asChild >
                        <NavLink to={"/about"} onClick={() => window.scrollTo(0, 0)}>About</NavLink>
                    </Button>
                    <Button className='flex items-center group relative'>

                        <span>Quick Links </span>
                        <HugeiconsIcon
                            icon={ArrowDown01Icon}
                            size={20}
                            strokeWidth={2}
                            className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                        />
                        <div className="absolute w-[150px]  top-12 bg-white py-4 px-2 shadow-md">
                            {DropdownLinks.map(({ name, link }) => (
                                <div className='leading-loose hover:bg-blue-200 rounded-md'>
                                    <Button asChild>
                                        <a href={link}>{name}</a>

                                    </Button>
                                </div>

                            ))}

                        </div>
                    </Button>


                </div>
                <div className='flex items-center gap-5'>
                    <Button variant="primary">
                        <span>

                            Book Now
                        </span>




                    </Button>
                    {
                        showmenu?(
                    
                    <HugeiconsIcon icon={Menu03Icon}
                       strokeWidth={3}
                    onClick={togglemenu}
                    className="hover:cursor-pointer"
                    />
                    
                )
                    :(
                       
                        <HugeiconsIcon 
                    icon={Menu04Icon} 
                    strokeWidth={3}
                    onClick={togglemenu}
                    className="hover:cursor-pointer"
                    />
                    )
}
                </div>

            </nav>
        </>
    )
}

