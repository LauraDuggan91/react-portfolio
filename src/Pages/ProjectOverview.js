import '../styles/project-overview.scss'

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/iconlogo.png';
import resume from './../assets/LauraDuggan2020.jpg'
import { FaLinkedinIn } from 'react-icons/fa';




const ProjectOverview = () => {

    return (
        <div className='project-overview col-3'>
            <Link to='/'>
                <img  className='logo-link' src={logo} alt='logo' />
            </Link>
            <a className='resume-link' href={resume} download>RESUME</a>
            <div className='project-text'>
                <div className='name-text'>Wufoo Entry Manager Redesign</div>
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

export default ProjectOverview