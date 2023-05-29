import React from 'react'
import hungrypanda from '../assets/hungrypanda.jpg'

const Projects = () => {
  return (
    <section name='projects' className='bg-[#0f2342] text-gray-300 w-full md:h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#CB8316]'>My Projects</p>
        </div>

        {/* projects cards */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{backgroundImage:`url(${hungrypanda})`}} className='shadow-lg shadow-[#151b24] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Hungry Panda Project
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/benjaminLeongSK/IODdemo/tree/main/Capstone' target='blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </section>
  )
}

export default Projects