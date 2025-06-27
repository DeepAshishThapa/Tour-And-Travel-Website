import { ButtonVariants } from '../cva/ButtonVariants'
import logo from '../assets/logo.png'
import { Button } from './Button'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';

export function Navbar() {
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
            <nav className="h-10 flex justify-around items-center py-8">
                <div>
                    <img src={logo} alt="site logo" className='w-30 ' />
                </div>
                <div className='flex gap-2 items-center'>
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
                        <div className="absolute w-[150px]  top-10 bg-gray-400 py-4 px-2 ">
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
                <Button variant="primary">
                    <span>

                        Book Now
                    </span>


                </Button>

            </nav>
        </>
    )
}