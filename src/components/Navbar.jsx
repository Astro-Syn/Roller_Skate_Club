import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
    <nav className='w-full flex items-center justify-between z-[2] pt-10 px-[10%] border-b-2 border-b-[aqua] border-solid'>
    <h3 className="text-white text-[28px] tracking-tighter"><span className=' text-pink-600 tracking-wide'>Kiki's</span> Roller Club</h3>
        <ul className='list-none display: inline-block py-2'>
           <Link to='/'><li><a className='text-amber-50 no-underline font-bold cursor-pointer hover:text-lime-300' href="#home">Home</a></li></Link>
            <Link to='/instructors'><li><a className='text-amber-50 no-underline font-bold cursor-pointer hover:text-lime-300' href="#instructors">Instructors</a></li></Link>
            <Link to='/about'><li><a className='text-amber-50 no-underline font-bold cursor-pointer hover:text-lime-300' href="#about">About Us</a></li></Link>
            <Link to='/events'><li><a className='text-amber-50 no-underline font-bold cursor-pointer hover:text-lime-300' href="#events">Events</a></li></Link>
            <Link to='/contact'><li><a className='text-amber-50 no-underline font-bold cursor-pointer hover:text-lime-300' href="#contact">Contact</a></li></Link>
        </ul>
        <div class="btnContainer">
            <button className="btn">
                Sign Up
            </button>
        </div>
        </nav>
    </div>
    

    
  )
}

export default Navbar