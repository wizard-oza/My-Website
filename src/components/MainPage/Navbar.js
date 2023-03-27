import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useNavigate} from 'react-router-dom'
const Navbar = (props) => {
   const [hidden , setHiddenMenu] = useState(true);
    function handdleHiddenMenu(){
        setHiddenMenu(!hidden);
        console.log(hidden);
    }
    const navigate = useNavigate();
    const navigateToContacts = () => {
        navigate('/contact');
      };
    return (
        <div>
           <div className="contanier">
            <nav>
            <h1 className="logo">{props.title}</h1>
                <button className='toggleButton' onClick={handdleHiddenMenu}><FontAwesomeIcon icon={faBars} className = "icon"></FontAwesomeIcon></button>
                    <div className='navLinks' id = { !hidden ? 'toogleMenu' : ''}>
                    <ul>
                        <li><Link to = {props.link1_ref} className = 'link'>{props.link1_title}</Link></li>
                        <li><Link to = {props.link2_ref}  className = 'link'>{props.link2_title}</Link></li>
                        <li><Link to = {props.link3_ref}  className = 'link'>{props.link3_title}</Link></li>
                    </ul> 
                    </div>
                    <button className="contactButton" onClick={navigateToContacts}>{props.button_name}</button>
            </nav>
        </div>

     </div>
        
    );

}

export default Navbar;