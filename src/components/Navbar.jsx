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
                        <NavLink to={"/"} onClick={()=>window.scrollTo(0,0)}>Home</NavLink>
                    </Button>
                    <Button asChild >
                        <NavLink to={"/blogs"} onClick={()=>window.scrollTo(0,0)}>Blogs</NavLink>
                    </Button>
                    <Button asChild >
                        <NavLink to={"/places"} onClick={()=>window.scrollTo(0,0)}>Best Places</NavLink>
                    </Button>
                    <Button asChild >
                        <NavLink to={"/about"} onClick={()=>window.scrollTo(0,0)}>About</NavLink>
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