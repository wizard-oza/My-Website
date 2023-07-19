import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {faGithub } from '@fortawesome/free-brands-svg-icons'
import {faTwitter } from '@fortawesome/free-brands-svg-icons'
import Navbar from '../MainPage/Navbar'
import './Contact.css'

const Contact = () => {
    const navbar_conts = [
        {
            title: 'Ozan\'s Profolio ',
            button_name: 'Contact Me',
            header_link1_title: 'Main Page',
            header_link1_ref: '/',
            header_link2_title: 'My Cv',
            header_link2_ref: '/myCv',
            header_link3_title: 'About Me',
            header_link3_ref: '/aboutMe'
        }
      ];
    return (
        <div>
             <Navbar title={navbar_conts[0].title} button_name={navbar_conts[0].button_name}
            link1_title={navbar_conts[0].header_link1_title} link1_ref={navbar_conts[0].header_link1_ref}
            link2_title={navbar_conts[0].header_link2_title} link2_ref={navbar_conts[0].header_link2_ref}
            link3_title={navbar_conts[0].header_link3_title} link3_ref={navbar_conts[0].header_link3_ref}></Navbar>
        <div className="contactPage">
            <div className="contactCard">
                <h1 className="contactTitle">My Information</h1>
                <h3 className='contactInfo'>ozancicek754@gmail.com</h3>
                <h3 className='contactInfo'> (+90) 538 044 3970</h3>
                <div className='icons'>
                <a href='https://www.linkedin.com/in/ozan-%C3%A7i%C3%A7ek-5a6bb2237/' ><FontAwesomeIcon icon={faLinkedin}className = 'contactIcon' /></a>
                <a href='https://github.com/wizard-oza' ><FontAwesomeIcon icon={faGithub} className = 'contactIcon'/></a>
                <a href='https://twitter.com/ozanCicek21_' ><FontAwesomeIcon icon={faTwitter} className = 'contactIcon'/></a>
                <a href='https://www.instagram.com/ozancicek74/'><FontAwesomeIcon icon={faInstagram} className = 'contactIcon'/></a>
                </div>
                <h3 className='contactPara'>Hope To See You Soon </h3>
            </div>
        </div>
        </div>
    );
}

export default Contact;