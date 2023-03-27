import Navbar from "../MainPage/Navbar";
import Background from "./Background";
import Hobbies from "./Hobbies";
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

const AboutMain = () => {
    return (
        <div>
            <Navbar title={navbar_conts[0].title} button_name={navbar_conts[0].button_name}
            link1_title={navbar_conts[0].header_link1_title} link1_ref={navbar_conts[0].header_link1_ref}
            link2_title={navbar_conts[0].header_link2_title} link2_ref={navbar_conts[0].header_link2_ref}
            link3_title={navbar_conts[0].header_link3_title} link3_ref={navbar_conts[0].header_link3_ref}></Navbar>
            <Background />
            <Hobbies></Hobbies>
        </div>
    );
}
export default AboutMain;