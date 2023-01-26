import '../styles/about-panel.scss'

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/iconlogo.png';
import resume from './../assets/LauraDuggan.jpg'
import { FaLinkedinIn } from 'react-icons/fa';




const AboutPanel = () => {

    return (
        <div className='about-panel col-3'>
            <Link to='/'>
                <img  className='logo-link' src={logo} alt='logo' />
            </Link>
            <a className='resume-link' href={resume} download>RESUME</a>
            <div className='about-text'>
                <div className='name-text'>Hey there</div>
                <div>
                    I'm Laura, a front end developer, UX designer, and accessibility advocate.
                    I like to think my dedication, cunning wit, and sparkling personality make me an asset for any team.
                </div>
            </div>

            <div className='footer'>
                <div className='email'>lauracatherineduggan@gmail.com</div>
                <div className='social-icons'>
                    <a href='https://www.linkedin.com/in/lauracduggan/' rel="noopener noreferrer"  target='_blank'><FaLinkedinIn /></a>
                </div>
            </div>

        </div>
    )

}

export default AboutPanel