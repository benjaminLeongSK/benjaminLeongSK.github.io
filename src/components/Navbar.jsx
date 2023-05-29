import React from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/logo.png';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = ({toogleMedia, handleToggle}) => {
    
  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src={logo} alt="logo" style={{width:"80px"}}/>
        </div>

        <div>
            <ul className="hidden md:flex">
                <li className='border-b-2 border-[#0a192f] hover:border-[#CB8316] duration-200'>
                    <Link to='home'smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='border-b-2 border-[#0a192f] hover:border-[#CB8316] duration-200'>
                    <Link to='about'smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='border-b-2 border-[#0a192f] hover:border-[#CB8316] duration-200'>
                    <Link to='skills'smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='border-b-2 border-[#0a192f] hover:border-[#CB8316] duration-200'>
                    <Link to='projects'smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='border-b-2 border-[#0a192f] hover:border-[#CB8316] duration-200'>
                    <Link to='contact'smooth={true} duration={500}>
                        Contact Me
                    </Link>
                </li>
            </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleToggle} className='md:hidden z-30'>
            {!toogleMedia ? <FaBars /> : <FaTimes />}
        </div>
        <ul className={!toogleMedia ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-2 m-4 text-4xl border-b-2 border-[#0a192f] hover:border-[#CB8316] duration-200'>
                <Link onClick={handleToggle} to='home'smooth={true} duration={500}>
                        Home
                </Link>
            </li>
            <li className='py-2 m-4 text-4xl border-b-2 border-[#0a192f] hover:border-[#CB8316] duration-200'>
                <Link onClick={handleToggle} to='about'smooth={true} duration={500}>
                        About
                </Link>
            </li>
            <li className='py-2 m-4 text-4xl border-b-2 border-[#0a192f] hover:border-[#CB8316] duration-200'>
                <Link onClick={handleToggle} to='skills'smooth={true} duration={500}>
                        Skills
                </Link>
            </li>
            <li className='py-2 m-4 text-4xl border-b-2 border-[#0a192f] hover:border-[#CB8316] duration-200'>
                <Link onClick={handleToggle} to='projects'smooth={true} duration={500}>
                        Projects
                </Link>
            </li>
            <li className='py-2 m-4 text-4xl border-b-2 border-[#0a192f] hover:border-[#CB8316] duration-200'>
                <Link onClick={handleToggle} to='contact'smooth={true} duration={500}>
                        Contact Me
                </Link>
            </li>
        </ul>

        {/* Socials */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-blue-800 duration-300 bg-blue-600'>
                    <a href='https://www.linkedin.com/in/blsk0629/' target='blank' className='flex justify-between items-center w-full text-gray-300'>
                        Linkedin <FaLinkedin size={35}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-black duration-300 bg-[#24292f]'>
                    <a href='https://github.com/benjaminLeongSK' target='blank' className='flex justify-between items-center w-full text-gray-300'>
                        GitHub <FaGithub size={35}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:bg-blue-800 duration-300 bg-blue-600'>
                    <a href='/resume' className='flex justify-between items-center w-full text-gray-300'>
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