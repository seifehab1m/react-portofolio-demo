import React from 'react'
import aboutStyle from './AboutStyle.module.css'

export default function About() {
    return (
        <div className={`vh-100 w-100 ${aboutStyle.background}`} >
            <div className={`w-100 ${aboutStyle.background}`}>
                <div className='container mt-5 pt-5'>
                    <div className="row d-flex justify-content-center">
                        <h2 className={'  m-auto text-center mt-5'}>ABOUT</h2>

                        <div className="col-md-5 offser-3">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
                        </div>
                        <div className="col-md-6 ">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
