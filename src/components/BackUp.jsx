import React from 'react'
import { useEffect, useState } from 'react'

const BackUp = () => {
    const [backUp, setBackUp] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackUp(true);
            } else{
                setBackUp(false);
            }
        })
    })

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div>
        {backUp ? 
            <button onClick={scrollUp} className='fixed bottom-[5%] right-5 border-4 text-white text-5xl'>^</button> : null
        }
    </div>
  )
}

export default BackUp