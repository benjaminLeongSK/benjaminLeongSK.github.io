import React from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/logo.png';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = ({toogleMedia, handleToggle}) => {
    
  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]">
        <div>
            <img src={logo} alt="logo" style={{width:"80px"}}/>
        </div>

        <div>
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact me</li>
            </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleToggle} className='md:hidden z-30'>
            {!toogleMedia ? <FaBars /> : <FaTimes />}
        </div>
        <ul className={!toogleMedia ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contact me</li>
        </ul>

        {/* Socials */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-blue-800 duration-300 bg-blue-600'>
                    <a href='/' className='flex justify-between items-center w-full text-gray-300'>
                        Linkedin <FaLinkedin size={35}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-black duration-300 bg-[#24292f]'>
                    <a href='/' className='flex justify-between items-center w-full text-gray-300'>
                        GitHub <FaGithub size={35}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-blue-800 duration-300 bg-blue-600'>
                    <a href='/' className='flex justify-between items-center w-full text-gray-300'>
                        Resume <BsFillPersonLinesFill size={35}/>
                    </a>
                </li>
                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-blue-800 duration-300 bg-blue-600'>
                    <a href='/' className='flex justify-between items-center w-full text-gray-300'>
                        Linkedin <FaLinkedin size={35}/>
                    </a>
                </li> */}
            </ul>
        </div>
    </nav>

  )
}

export default Navbar