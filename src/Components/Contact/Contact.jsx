import React from 'react'
import aboutStyle from './ContactStyle.module.css'

export default function Contact() {
  return (
    <div className='mt-5 pt-5 text-center '>
        <h2 className='mt-5 text-center'>CONTACT</h2>
        <input type="text" className='form-control w-50  m-auto mt-5 ' placeholder=' Name'  />
        <input type="text" className='form-control w-50  m-auto mt-5 ' placeholder=' Email'  />
        <input type="text" className='form-control w-50  m-auto mt-5 ' placeholder=' Password'  />
        <textarea  type="text" className='form-control w-50  m-auto mt-5 pb-5' placeholder=' Message'  />
        <button className='btn btn-outline-danger mt-5 w-25 mb-5 '> Send</button>
    </div>
  )
}
