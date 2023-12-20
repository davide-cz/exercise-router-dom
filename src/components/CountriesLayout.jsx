import { Link, Outlet } from "react-router-dom"

export default function (){
    return (
        <>
            <nav >
                <menu className='mainNav'>
                    <li>
                    <Link to='/' className='navLink'>Home</Link>
                    </li>
                    <li>
                    <Link to='about' className='navLink'>About</Link>
                    </li>
                    <li>
                    <Link to='countries' className='navLink'>Countries</Link>
                    </li>
                </menu>
            </nav>
            <Outlet/>
        </>
    )
}