import '../styles/myskdule.scss'
import '../styles/project-overview.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/iconlogo.png';
import resume from './../assets/LauraDuggan.jpg'
import { FaTwitter, FaCodeBranch, FaLinkedinIn } from 'react-icons/fa';
import MySkduleImg from './../assets/MySkdule.png'
import IsoSkdule from './../assets/IsoSkdule.jpg'




const MySkdule = () => {

    return (
        <>
        <div className='project-overview col-3'>
                <Link to='/'>
                    <img  className='logo-link' src={logo} alt='logo' />
                </Link>
                <a className='resume-link' href={resume} download>RESUME</a>
                <div className='project-list'>
                    <ul>
                        <li><a href='#ms-myskdule'>MySkdule App Design</a></li>
                        <li><a href='#ms-results'>Results</a></li>
                    </ul>
                    
                </div>

                <div className='footer'>
                    <div className='email'>lauracatherineduggan@gmail.com</div>
                    <div className='social-icons'>
                        <a href='https://twitter.com/atlauraduggan' rel="noopener noreferrer"  target='_blank'><FaTwitter /></a>
                        <a href='https://github.com/LauraDuggan91' rel="noopener noreferrer"  target='_blank'><FaCodeBranch /></a>
                        <a href='https://www.linkedin.com/in/lauracduggan/' rel="noopener noreferrer"  target='_blank'><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>



            <div className='myskdule col-6'>
                <img className='header-image' src={MySkduleImg} alt='my schedule' />

                <div className='content' id='ms-myskdule'>
                        <h2>MYSKDULE CONCEPT</h2>
                        <p className='overview'>MySkdule is a concept application born from the frustrations of trying to book a haircut online. The goal is for an all-encompasing location for small businesses to handle client bookings and scheduling. </p>
                </div>
                <div className='col-5' id='ms-results'>
                    <h3>Results</h3>
                    <div className='content'>
                        <p>MySkdule is a concept application born from the frustrations of trying to book a haircut online. The goal is for an all-encompasing location for small businesses to handle client bookings and scheduling. </p>
                        <p>This is actively being designed and built in react as a passion project. Stay tuned for the finished product!</p>
                    </div>
                </div>
                <img className='header-image' src={IsoSkdule} alt='my schedule designs' />
            </div>
        </>
    )

}

export default MySkdule