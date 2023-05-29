import React from 'react';
import { useNavigate } from 'react-router-dom';
import resume from '../assets/resume.png'
import resumepdf from '../assets/resumepdf.pdf'

const Resume = () => {
    const navigate = useNavigate();

    const navigateHome = () =>{
        navigate('/');
    }

  return (
    <div className='w-full h-screen bg-[#0f2342] sm:flex'>
            <div className='max-w-[1000px] w-full flex flex-col justify-center items-center text-white'>
                <p className='text-4xl font-bold inline border-b-4 border-[#CB8316]'>Resume</p>
                <a href={resumepdf} download="resumepdf" target='blank' className='invisible sm:visible'>
                    <button className='border-4 p-2 m-6 hover:bg-[#CB8316] duration-300'>Download PDF</button>
                </a>
                <button onClick={navigateHome} className='border-4 p-2 m-6 hover:bg-[#CB8316] duration-300 invisible sm:visible'>Back to Home</button>
            </div>
            <div className='max-w-[1000px] w-full flex justify-center items-center'>
                <img src={resume} alt='resume' className='h-full sm:h-[800px] p-4 bg-[#0f2342]'/>
            </div>
            <div className='sm:hidden max-w-[1000px] w-full flex flex-col justify-center items-center text-white bg-[#0f2342]'>
                <a href={resumepdf} download="resumepdf" target='blank'>
                    <button className='border-4 p-2 m-6 hover:bg-[#CB8316] duration-300'>Download PDF</button>
                </a>
                <button onClick={navigateHome} className='border-4 p-2 m-6 hover:bg-[#CB8316] duration-300'>Back to Home</button>
            </div>

    </div>
  )
}

export default Resume