import React from 'react'

const Contact = () => {
  return (
    <section name='contact' className='w-full h-screen bg-[#0f2342] text-gray-300 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/f6a34943-f1ea-4dcc-bf5e-b33c01734d0f" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#CB8316]'>Contact me today!</p>
            </div>
            <input className='p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2' type='email' placeholder='Email' name='email' />
            <textarea className='p-2 text-black' name='message' rows='10'></textarea>
            <button className='text-white border-2 hover:bg-[#CB8316] px-4 py-2 my-8 mx-auto flex items-center duration-300'>Submit</button>
        </form>
    </section>
  )
}

export default Contact