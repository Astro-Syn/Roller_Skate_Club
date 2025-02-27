import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='w-full flex items-center justify-between z-[2] pt-10 px-[10%] border-b-2 border-b-[aqua] border-solid'>
        <h3 className="text-white text-[28px] tracking-tighter">
          <span className='text-pink-600 tracking-wide'>Kiki's</span> Roller Club
        </h3>
        
        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'} absolute md:static bg-teal-500 md:bg-transparent w-full md:w-auto`}>
          <Link to='/'><li><a className='text-amber-50 no-underline font-bold cursor-pointer hover:text-lime-300' href="#home">Home</a></li></Link>
          <Link to='/instructors'><li><a className='text-amber-50 no-underline font-bold cursor-pointer hover:text-lime-300' href="#instructors">Instructors</a></li></Link>
          <Link to='/about'><li><a className='text-amber-50 no-underline font-bold cursor-pointer hover:text-lime-300' href="#about">About Us</a></li></Link>
          <Link to='/events'><li><a className='text-amber-50 no-underline font-bold cursor-pointer hover:text-lime-300' href="#events">Events</a></li></Link>
          <Link to='/contact'><li><a className='text-amber-50 no-underline font-bold cursor-pointer hover:text-lime-300' href="#contact">Contact</a></li></Link>
        </ul>

        <div className="btnContainer">
          <button className="btn">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
