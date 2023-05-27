import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Java from '../assets/java.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <section name='skills' className='w-full h-screen bg-[#0f2342]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#CB8316]'>Skillsets</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4  gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#151b24] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='html icon' />
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-[#151b24] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='html icon' />
                    <p>CSS</p>
                </div>
                <div className='shadow-md shadow-[#151b24] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='html icon' />
                    <p>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#151b24] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt='html icon' />
                    <p>React</p>
                </div>
                <div className='shadow-md shadow-[#151b24] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt='html icon' />
                    <p>NodeJS</p>
                </div>
                <div className='shadow-md shadow-[#151b24] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt='html icon' />
                    <p>Java</p>
                </div>
                <div className='shadow-md shadow-[#151b24] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt='html icon' />
                    <p>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-[#151b24] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt='html icon' />
                    <p>MongoDB</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills