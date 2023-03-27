import "./WelcomePage.css"
import {useNavigate} from 'react-router-dom'

const WelcomePage = () => {
    const navigate = useNavigate();
        const navigateToContacts = () => {
            navigate('/contact');
        };
    return (
        
    <section className="main">
            <div className="welcomeTemplate">
            <div className="paragrafSection">
                <h4 className="h4-welcome">Merhaba,</h4>
                <h1 className="h1-welcome">My Name Is <span>Ozan Çiçek</span></h1>
                <h3 className="h3-wel">Currently Computer Science Major</h3>
                <p className="welcomePara">Welcome to my website. I am Ozan. I am a major in computer science at Bahcesehir University. 
                Here, you will get information about me, my interests, hobbies, and more. If you still have questions feel free to contact me.</p>
                <button className="contact" onClick={navigateToContacts}>Contact Me</button>
            </div>
             <img src = { require('./images/main-img.png')} alt = "main" className="mainPicture"></img>
        </div>
    </section>
        
    );

}

export default WelcomePage;