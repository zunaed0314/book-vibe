import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const links = (
        <>
            <li><NavLink to='/' className={({isActive}) => `bg-transparent hover:bg-gray-100 font-semibold ${isActive ? 'text-green-500 border border-green-500' : ''}`}>Home</NavLink></li>
            <li><NavLink to='books' className={({isActive}) => `bg-transparent hover:bg-gray-100 font-semibold ${isActive ? 'text-green-500 border border-green-500' : ''}`}>Listed Books</NavLink></li>
            <li><NavLink to='pages-to-read' className={({isActive}) => `bg-transparent hover:bg-gray-100 font-semibold ${isActive ? 'text-green-500 border border-green-500' : ''}`}>Page to read</NavLink></li>
        </>
    );
    return (
        <div>
            <nav className="bg-base-100 shadow-sm fixed top-0 w-full z-50">
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                        </div>
                        {/* <NavLink >Book-vibe</NavLink> */}
                        <NavLink to='/' className="text-xl font-bold">Book-vibe</NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end space-x-5">
                        <a className="btn btn-success">Log in</a>
                        <a className="btn btn-accent">Sign up</a>
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default Navbar;