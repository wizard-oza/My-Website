import  './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

 const Skills = () => {

    return (
        <div className='skills'>
            <div className='title'>
                <h1>My Skills</h1>
            </div>
            <div className='box'>
                <div className='card'>
                <FontAwesomeIcon icon = {faCode} className = "icon-skill"/>
                    <h5 className='h5-skill'>Coding</h5>
                    <div className='pra'>
                        <p className='skill-para'>Most of the work I do cosists of coding in different languages. 
                        In algorithms and databases, I use specific languages. These include<span className='skill-spa'> C++, Java, and Golang.</span> </p>
                    </div>
                </div>
                <div className='card'>
                <FontAwesomeIcon icon = {faBars} className = "icon-skill"/>
                    <h5 className='h5-skill'>Web Development</h5>
                    <div className='pra'>
                        <p className='skill-para'>I was always in to design thus web Development quickly became one of my intrest in Computer science.
                            I use <span className='skill-spa'>HTTP, CSS and ReactJs</span> to create websites like this one. 
                        </p>
                    </div>
                </div>
                <div className='card'>
                <FontAwesomeIcon icon = {faServer} className = "icon-skill"/>
                    <h5 className='h5-skill'>App Devolopment</h5>
                    <div className='pra'>
                        <p className='skill-para'>When it comes to web or mobile apps two things are important, it runs fast and on all platforms. 
                        Which is why <span className='skill-spa'>Springboot, ReactJS and Docker</span> are crucial. I use these in almost all of my projects. </p>
                    </div>
                </div>
                <div className='card'>
                <FontAwesomeIcon icon = {faDatabase} className = "icon-skill"/>
                    <h5 className='h5-skill'>Databases</h5>
                    <div className='pra'>
                        <p className='skill-para'>Data is one of the most important things in the current world. 
                        So management of databases and cloud knowledge is essential. I am familiar with <span className='skill-spa'>MySQL, Redis, and AWS</span>.</p>
                    </div>
                </div>
            </div>
        </div>

    );
 }

 export default  Skills;