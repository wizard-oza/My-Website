import "./Experience.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faSpa } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'
const Experience = () => {
    const navigate = useNavigate();
    const navigateToContacts = () => {
        navigate('/contact');
      };
      const navigateaboutMe = () => {
        navigate('/aboutMe');
      };
    return (
        <div className="experience">
            <div className="exp-title">
                <h3>My Experience</h3>
            </div>
            <div className="exp-box">
                <div className="exp-card">
                    <div className="exp-title-com">
                    <FontAwesomeIcon icon={faBuilding} className = 'exp-icon'/>
                    <a href="https://www.salusspa.com/" className="exp-link"><h1 className="company">Gamegos</h1></a>
                    </div>
                    <div className="time-period">
                        <h4>06/07/2022 - 19/08/2022</h4>
                    </div>
                    
                        <p className="exp-para">Worked as a backend intern.</p>
                        <div className="exp-list">
                        <ul>
                        <li>Learned Docker, Mysql, and Redis</li>
                        <li>Made a POC of an authorization code flow with PKCE by
                            implementing an authorization server and a client-server.
                        </li>
                        <li>Used MySQL and docker-compose in authorization-server,
                            Redis in the client-server.
                            </li>
                        </ul>
                        </div>
                       
                    

                </div>
                <div className="exp-card">
                    <div className="exp-title-com">
                    <FontAwesomeIcon icon={faSpa} className = 'exp-icon'/>
                    <a href="https://www.salusspa.com/" className="exp-link"><h1 className="company">Salus Spa</h1></a>
                    </div>
                    <div className="time-period">
                        <h4 className="time">06/09/2022 - 14/01/2023</h4>
                    </div>
                        <p className="exp-para">Worked as a software advisor.</p>
                        <div className="exp-list">
                          <ul>
                            <li>Helped with business online commercials.</li>
                            <li>Consulted for the software
                            </li>
                            <li>Made a multilanguage website for <a href="https://www.salusspa.com/" className="exp-link">Salus 
                            Spa</a> using EditorX.

                         </li>
                         </ul>
                        </div>
                    </div>
                
            </div>
            <div className="exp-buts">
            <button className="exp-but" onClick={navigateToContacts}>Be The Next One!</button>
            <button className="exp-but" onClick={navigateaboutMe}>Learn More</button>
            </div>
            
        </div>
    );

}

export default Experience;