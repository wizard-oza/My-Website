import Navbar from "../MainPage/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import './Cv.css'
import {saveAs} from "file-saver";

const CV = () => {
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
      const PNG_FILE_URL = 'http://localhost:3000/CV.png'
      const downloadCvPng = () => {
        saveAs(PNG_FILE_URL, "Cv");
      }
    return (
        <div>
            <Navbar title={navbar_conts[0].title} button_name={navbar_conts[0].button_name}
            link1_title={navbar_conts[0].header_link1_title} link1_ref={navbar_conts[0].header_link1_ref}
            link2_title={navbar_conts[0].header_link2_title} link2_ref={navbar_conts[0].header_link2_ref}
            link3_title={navbar_conts[0].header_link3_title} link3_ref={navbar_conts[0].header_link3_ref}></Navbar>
            <div className="CVMain">
                <div className="CVMainHeader">
                    <button className="CVButton" onClick={downloadCvPng}>Download CV <FontAwesomeIcon icon={faDownload} className = 'CVicon'></FontAwesomeIcon></button> 
                </div>
                <div className=" CVMainCont">
                <img src = { require('./CVImage/CV.png')} alt = "main" className="CV"></img>
                </div>
            </div>
        </div>
    );
}
export default CV;