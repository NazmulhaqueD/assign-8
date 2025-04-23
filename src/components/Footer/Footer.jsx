import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='mt-16 flex justify-center'>
            <div className=''>
                <h1 className='flex items-center gap-4 text-2xl justify-center'><FaPlusCircle /> Phudu</h1>
                <ul className='flex py-8 border-b'>
                    <NavLink to={'/'} className={({isActive}) => isActive ? 'underline' : ''}><li
                        className='m-2'>Home</li></NavLink>

                    <NavLink className={({isActive}) => isActive ? 'underline' : ''}><li className='m-2'>My-Bookings</li></NavLink>

                    <NavLink className={({isActive}) => isActive ? 'underline' : ''}><li className='m-2'>Blogs</li></NavLink>

                    <NavLink className={({isActive}) => isActive ? 'underline' : ''}><li className='m-2'>Contact Us</li></NavLink>
                </ul>
                <hr className='w-full' />
            </div>
        </div>
    );
};

export default Footer;