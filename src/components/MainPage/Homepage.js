import Navbar from "./Navbar";
import WelcomePage from "./WelcomePage";
import Skills from "./Skills";
import Experience from "./Experience";

const HomePage = () => {
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
          <div><WelcomePage></WelcomePage></div>
          <div><Skills></Skills></div>
          <div><Experience></Experience></div>
          
        </div>
      )
}
export default HomePage;