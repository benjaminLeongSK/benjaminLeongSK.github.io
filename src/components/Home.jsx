import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = ({toogleMedia}) => {
  return (
    <section name='home' className='w-full h-screen bg-[#0f2342]'>
    
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#CB8316]'> 
                Hi, This is 
            </p>
            <h1 className='text-4xl sm:text-7xl font-bold ml-[-5px]'> 
                Benjamin Leong 
            </h1>
            <div className='flex uppercase tracking-[3px] py-[20px] h-[60px]'>
                <h2>
                    I'm a 
                </h2>
                {!toogleMedia ? 
                    <div className='grid ml-[10px] overflow-hidden'>
                        <span className='animate-scroll'>Aspiring Full-Stack Developer</span>
                        <span className='animate-scroll'>Financial Consultant</span>
                        <span className='animate-scroll'>Uncertified Foodie</span>
                        <span className='animate-scroll'>Instructor</span>
                        <span className='animate-scroll'>Aspiring Full-Stack Developer</span>
                    </div>
                    :
                    null
                }
            </div>
            <p className='py-4 max-w-[700px]'>
                I’m a full-stack developer specializing in building (and occasionally
                designing) exceptional digital experiences. Currently, I’m focused on
                building responsive full-stack web applications.
            </p>
            <div>
                <button className=' group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#CB8316] hover:border-[#CB8316] duration-200'>
                    View work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>
            </div>
        </div>
        
    </section>
  )
}

export default Home