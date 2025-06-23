import { ButtonVariants } from '../cva/ButtonVariants'
import logo from '../assets/logo.png'
import { Button } from './Button'
import { NavLink } from 'react-router'

export function Navbar() {

    return (
        <>
            <nav className="h-10 flex justify-around items-center py-8">
                <div>
                    <img src={logo} alt="site logo" className='w-30 '/>
                </div>
                <div className='flex gap-2 items-center'>
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
                <Button variant="primary">
                    <span>Book Now</span>


                </Button>

            </nav>
        </>
    )
}