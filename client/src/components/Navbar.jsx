import React, { useContext, useState, useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import Users from '../assets/user.webp';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';

const Navbar = () => {
    const { user, setUser, setShowLogin ,logout , credit } = useContext(AppContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const handleLogout = () => {
        setUser(null);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className='flex items-center justify-between py-4 relative'>
            <Link to="/">
                <img src={assets.logo} alt="logo" className="w-28 sm:w-32 lg:w-40" />
            </Link>
            <div>
                {user ? (
                    <div className='flex items-center gap-2 sm:gap-6'>
                        <button className='flex items-center gap-2 bg-blue-100 px-4 cursor-pointer sm:px-4 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-transform'>
                            <img src={assets.credit_star} alt="Credit" className="w-5" />
                            <p className='text-xs sm:text-sm font-medium text-gray-600'>Credit Left: {credit}</p>
                        </button>
                        <p className='text-gray-600 max-sm:hidden pl-4'>Hi {user.name}</p>

                        {/* User Profile & Dropdown */}
                        <div className='relative' ref={dropdownRef}>
                            <img 
                                src={Users} 
                                className='w-12 drop-shadow cursor-pointer' 
                                alt="User" 
                                onClick={logout}
                            />
                        
                        </div>
                    </div>
                ) : (
                    <div className='flex items-center gap-2 sm:gap-5'>
                        <p className='cursor-pointer' onClick={() => navigate('/buy')}>Pricing</p>
                        <button className='bg-zinc-800 text-white py-2 px-7 cursor-pointer sm:px-10 text-sm rounded-full' onClick={() => setShowLogin(true)}>Login</button>
                    </div>
                )}
            </div>        
        </div>
    );
};

export default Navbar;
