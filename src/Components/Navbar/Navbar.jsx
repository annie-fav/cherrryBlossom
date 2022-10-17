import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div>
            <hr></hr>
            <nav className="inline-flex text-center ml-40">
                <Link className="font-serif text-xl text-pink-800 font-bold ml-24" to="/">Home</Link>
                <Link className="font-serif text-xl text-pink-800 font-bold ml-20" to="/canada">Canada</Link>
                <Link className="font-serif text-xl text-pink-800 font-bold ml-20" to="/newzeland">New Zeland</Link>
                <Link className="font-serif text-xl text-pink-800 font-bold ml-20" to="germany">Germany</Link>
                <Link className="font-serif text-xl text-pink-800 font-bold ml-20" to="/brazil">Brazil</Link>
                <Link className="font-serif text-xl text-pink-800 font-bold ml-20" to="/india">India</Link>
            </nav>
            <hr></hr>
            
        </div>
    )
}

export default Navbar