import '../styles/design-panel.scss'
import projects from './../data/projects';
import React from 'react';
import EntryManager from '../assets/EntryManager.png'
import NailDate from '../assets/NailDate.png'
import NewToronto from '../assets/NewToronto.png'
import NickelsonHomes from '../assets/NickelsonHomes.png'
import MySkdule from '../assets/MySkdule.png'
import Calendar from '../assets/Calendar.jpg'
import Renovation from '../assets/Renovation.jpg'
import Tech from '../assets/Tech.jpg'
import Trees from '../assets/Trees.jpg'
import Nails from '../assets/Nails.jpg'
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';



const imageName = (image) => {
    switch(image) {
        case 'EntryManager':
            return EntryManager
        case 'NailDate':
            return NailDate
        case 'NewToronto':
            return NewToronto
        case 'NickelsonHomes':
            return NickelsonHomes
        case 'MySkdule':
            return MySkdule
        default:
    }
}

const backgroundImage = (image) => {
    switch(image) {
        case 'EntryManager':
            return `linear-gradient(rgba(93, 34, 34,0.9), rgba(21,21,21,0.9)), url(${Tech})`
        case 'NailDate':
            return `linear-gradient(rgba(78, 28, 56,0.9), rgba(21,21,21,0.9)), url(${Nails})`
        case 'NewToronto':
            return `linear-gradient(rgba(32, 74, 74,0.9), rgba(21,21,21,0.9)), url(${Trees})`
        case 'NickelsonHomes':
            return `linear-gradient(rgba(70, 60, 52,0.9), rgba(21,21,21,0.9)), url(${Renovation})`
        case 'MySkdule':
            return `linear-gradient(rgba(63, 34, 93,0.9), rgba(21,21,21,0.9)), url(${Calendar})`
        default:
    }
}


const DesignPanel = () => {

    return (
        <div className='design-panel col-6'>
            <div className='images-container'>
            {projects.map((project, index) => (
                <div className='image-container' key={index}>
                    <div>
                        {project.url ? (
                            <a href={project.url} target='_blank' rel="noopener noreferrer">
                                 <div className='card-title'>
                                    {project.title}{project.url && <FaExternalLinkAlt />}<span className='card-info'>{project.type}</span>
                                </div>
                                {/* <div>{project.type}</div> */}
                                <img src={imageName(project.image)} alt='project'/>
                            </a>
                        ) : (
                            <Link to={`/projects/${project.image}`}>
                                 <div className='card-title'>
                                    {project.title}{project.url && <FaExternalLinkAlt />}<span className='card-info'>{project.type}</span>
                                </div>
                                {/* <div>{project.type}</div> */}
                                <img src={imageName(project.image)} alt='project'/>
                            </Link>
                        )}
                    </div>
                </div>
            ))}

            </div>

        </div>
    )

}

export default DesignPanel