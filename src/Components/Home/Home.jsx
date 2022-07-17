import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
// import mainImage from '../../images/avatar.svg'
import homeStyle from './HomeStyle.module.css'


export default function Home() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
          setVantaEffect(BIRDS({
            el: myRef.current
          }))
        }
        return () => {
          if (vantaEffect) vantaEffect.destroy()
        }
      }, [vantaEffect])

    return (
        <div ref={myRef} className={`text-center vh-100`}>
            <div className={`content mt-5  w-100 d-flex align-items-center justify-content-center h-100 `}>
                {/* <img src={mainImage} alt="" className=' mt-5 pt-5 m-auto mt-5  ' /> */}
                <h1 className='   bolder '>HELLO I'M SEIF EHAB </h1>
               
            </div>
        </div>
    )
}
