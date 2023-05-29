import React from 'react'

const About = () => {
  return (
    <section name='about' className='w-full h-screen bg-[#0f2342] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#CB8316]'>
                        About
                    </p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Hi, I'm Ben! Appreciate your visit to my page. Do look around.
                    </p>
                </div>
                <div>
                    <p>
                        I am an aspiring software engineer eager to kick-start my career in the field. 
                        While I may not have any formal work experience,  I thrive in challenging 
                        environments and have developed excellent problem-solving and analytical skills 
                        through independent projects and coursework. I have invested considerable time 
                        and effort into self-study and personal projects which allowed me to gain 
                        hands-on experience with various coding languages and technologies. 
                    </p>
                    <p className='pt-4'>
                        I look forward to any posibility of working together in the future!
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About