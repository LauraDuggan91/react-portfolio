import '../styles/entry-manager.scss'
import '../styles/project-overview.scss'

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/iconlogo.png';
import resume from './../assets/LauraDuggan.jpg'
import { FaTwitter, FaCodeBranch, FaLinkedinIn } from 'react-icons/fa';
import EntryManagerImg from './../assets/EntryManager.png'
import EntryResearch1 from './../assets/EntryResearch1.png'
import EntryResearch2 from './../assets/EntryResearch2.png'
import EntryResearch3 from './../assets/EntryResearch3.png'
import EntryResearch4 from './../assets/EntryResearch4.png'
import LegacyEntryManager1 from './../assets/LegacyEntryManager1.png'
import LegacyEntryManager2 from './../assets/LegacyEntryManager2.png'
import LegacyEntryManager3 from './../assets/LegacyEntryManager3.png'
import WCAG from './../assets/WCAG.png'
import EntryManagerGif from './../assets/EntryManager.gif'
import EntryGif from './../assets/Entry.gif'


const EntryManager = () => {

    return (
        <>
            <div className='project-overview col-3'>
                <Link to='/'>
                    <img  className='logo-link' src={logo} alt='logo' />
                </Link>
                <a className='resume-link' href={resume} download>RESUME</a>
                <div className='project-list'>
                    <ul>
                        <li><a href='#em-header'>Wufoo Entry Mananger Redesign</a></li>
                        <li><a href='#em-brief'>Brief</a></li>
                        <li><a href='#em-card-sorting'>Workshops</a></li>
                        <li><a href='#em-testing'>User Testing</a></li>
                        <li><a href='#em-meetings'>Stakeholder Meetings</a></li>
                        <li><a href='#em-accessibility'>Accessibility</a></li>
                        <li><a href='#em-results'>Results</a></li>
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



            <div className='entry-manager col-6'>
                <div id='em-header'>
                <img className='header-image' src={EntryManagerImg} alt='Wufoo entry manager' />
                    <div className='content'>
                        <h2>WUFOO ENTRY MANAGER REDESIGN</h2>
                        <p className='overview'>The Wufoo application is a robust form builder and analytics tool within the SurveyMonkey suite of products. The Wufoo engineering team was tasked with redesigning and rebuilding the product with updated technology and visual design.
                        My role in this project has been as both a UX designer and Front End Developer, tasked with building the updated form manager, entry manager, file manager, and form builder. I also owned the end-to-end redesign process of the entry manager.
                        You can see this application live in production after signing into <a href="https://wufoo.com" target="_blank" rel="noopener noreferrer">wufoo.com</a> or check out the <a href="https://www.wufoo.com/blog/try-new-form-entry-manager-beta/" target="_blank" rel="noopener noreferrer">blog post</a>.</p>
                    </div>
                </div>
                
                <div className='col-5' id='em-brief'>
                    <h3>The Brief </h3>
                    <div className='content'>
                        <p>While completing a rebrand and re-architecture of the entire Wufoo product, we needed to overhaul the existing entry manager in the legacy application. The brief included requirements around the following:</p>
                        <ul>
                            <li>Needed to show more entries at a time (legacy only showed 6, which people considered unusable in comparison to our competitors). </li>
                            <li>Needed to have updated colour scheme, visual design, and graphics in the logged-out marketing pages has changed completely, and our logged-in experience should match that look and feel.</li>
                            <li>Needed to match the ongoing form manager page rebuild </li>
                            <li>Needed to make use of the existing components in the company-wide design system </li>
                            <li>Needed to rethink the user flow throughout the entry manager, what functionality was used the most, and maintain feature parity.  </li>
                            <li>Needed to improve the usability and discoverability of features (especially paid upgrades). </li>
                        </ul>
                    </div>
                </div>
                
                <div className='legacy-gallery'>
                    <img src={LegacyEntryManager1} alt='Entry manager in Wufoo'/>
                    <img src={LegacyEntryManager2} alt='Entry manager in Wufoo'/>
                    <img src={LegacyEntryManager3} alt='Entry manager in Wufoo'/>
                </div>
    
                <div className='col-5' id='em-card-sorting'>
                    <h3>Card Sorting Workshop</h3>
                    <p className='content'>In order to lay out the MVP of entry manager, we held a number of workshops to align on the project values. I assembled members of the Wufoo team who had high familiarity of the product, as well as completely new users, for a card sorting workshop to see where they expected to find certain functionality. 
                    Since the Wufoo product was relatively new to most of the employees on the SurveyMonkey team, they were able to provide insights on what they’d expect based on similar functionality in the core product. </p>
                </div>

                <div className='col-5' id='em-testing'>
                    <h3>User Testing</h3>
                    <div className='content'>
                        <p>To avoid designing in a vacuum, I ran through various trials of the product throughout the design process. I set up a series of tasks for a variety of users to complete. Knowing that a power-user would approach challenges differently compared to a brand new user, our testing subjects were chosen based on different levels of experience with the product. 
                        </p><p>We kicked off the user testing with users within the company that knew the basic usage of Wufoo, but were not active users. We later introduced power-users that were paying for our top-tier plan, as well as people who had never heard of the product before. 
                        The users were asked to perform a series of tasks with no guidance, and throughout these testing sessions we were able to identify pain points throughout the product. 
                        </p>
                    </div>
                </div>
                <div className='slide-gallery'>
                    <img src={EntryResearch1} alt='Slide showing successful metrics'/>
                    <img src={EntryResearch2} alt='Slide showing difficulty rating'/>
                    <img src={EntryResearch3} alt='Slide showing time spent on tasks'/>
                    <img src={EntryResearch4} alt='Slide showing takeaways'/>
                </div>

                <div className='col-5' id='em-meetings'>
                    <h3>Stakeholder Meetings</h3>
                    <div className='content'>
                        <p>I met with the design team of the SurveyMonkey core product - they had a number of experienced designers and a cohesive design language that I wanted to bring into the Wufoo product. We drew parallels between the survey responses page, and the Wufoo entries page, and tried to re-use as many components as possible.
                        </p><p>I also met with the team behind the SurveyMonkey design system (WDS - Wrench Design System) to see how we could align this family of products and re-use the library in the Wufoo product. Wufoo ended up being the first product to implement WDS components in production, largely because of our ability to iterate quickly, which provided the opportunity to test functionality of each component.
                        Lastly, as an engineer, I was constantly checking in with the larger engineering team to make sure we could build out a database schema that would support the front end designs and implementation. 
                        </p>
                    </div>
                    
                </div>
                
                <div className='col-5' id='em-accessibility'>
                    <h3>Accessibility</h3>
                    <p className='content'>Our product needed to be accessible (at a minimum WCAG 2.0 AA) so I led the decisions around font sizes and colour contrast, and in building the project I was able to use semantic HTML and tab indices/focus states for screen reader compatibility. 
                    I completed an engineering audit and visual audit of the entire new front end, including the entry manager, to ensure we were hitting the standard.
                    </p>
                </div>
                <img className='image-full' src={WCAG} alt='accessibility audit sample'/>
                
                <div className='col-5' id='em-results'>
                    <h3>Results</h3>
                    <p className='content'>This project is live in production, designed and built by yours truly. Below, you can see the Entry Manager in action, and keep scrolling to see what an individual entry looks like. To check it out in real time, create or login to your Wufoo account and view any forms entries. </p> 
                </div>
                <h4>Entry Manager</h4>
                <img className='header-image gif-image' src={EntryManagerGif} alt='gif of application' />
                <h4>Entry View</h4>
                <img className='header-image gif-image' src={EntryGif} alt='gif of application' />
            </div>
        </>
    )

}

export default EntryManager