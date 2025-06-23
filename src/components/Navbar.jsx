import { ButtonVariants } from '../cva/ButtonVariants'
import logo from '../assets/logo.png'
import { Button } from './Button'
import { NavLink } from 'react-router'

export function Navbar() {

    return (
        <>
            <nav className="h-10 flex justify-around ">
                <div>
                    <img src={logo} alt="site logo" />
                </div>
                <div className='flex gap-2 '>
                    <Button asChild>
                        <NavLink to={"/"}>Home</NavLink>
                    </Button>
                    <Button asChild >
                        <NavLink to={"/blogs"}>Blogs</NavLink>
                    </Button>
                    <Button asChild >
                        <NavLink to={"/places"}>Best Places</NavLink>
                    </Button>
                    <Button asChild >
                        <NavLink to={"/about"}>About</NavLink>
                    </Button>
                    <Button>
                        <span>Quick Links</span>
                    </Button>
                    
                </div>

            </nav>
        </>
    )
}