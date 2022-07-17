import {React,useState} from 'react'
import navbarStyle from './navbarStyle.module.css'
import { Link } from 'react-router-dom';
export default function
    () {
       
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light  position-fixed top-0 start-0 end-0 ${navbarStyle.mainNav} `}>
                <div className="container">
                    <a className={`navbar-brand ${navbarStyle.title}`}  href="#">Start React</a>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    
                        <span className="navbar-toggler-icon "></span>
                        
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link className="nav-link active" aria-current="page"  to="home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="portofolio">Portofolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="contact">Contact</Link>
                            </li>
                           
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
