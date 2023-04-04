import React, { useState } from 'react';
import { BoltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='flex justify-between items-center bg-slate-200 lg:mx-20 p-2 lg:p-5 rounded'>
            <div className='flex items-center'>
                <BoltIcon className="h-6 w-6 text-blue-500" />
                <Link className='text-xl font-bold' to='/'>Next-Page</Link>
            </div>
            <nav>
                <button className='lg:hidden' onClick={() => setOpen(!open)}><span>
                    {open === true ? <XMarkIcon className="h-6 w-6 text-blue-500" />: <Bars3Icon className="h-6 w-6 text-blue-500" />}
                </span></button>
                <ul className={`lg:flex text-xl font-medium lg:space-x-6 absolute lg:static duration-700 -ml-8 ${open ? 'top-12' : '-top-24'}`}>
                    <li className=''>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink
                            to="/books"
                            className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                            Books
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;