import { Route, Routes } from "react-router-dom";
import HomePage from "./components/MainPage/Homepage";
import AboutMain from "./components/AboutMe/AboutMain";
import CV from "./components/MyCv/Cv";
import Contact from "./components/Contact/Contatc";

function App() {
return (
  <Routes>
    <Route path="/" element = {<HomePage/>}/>
    <Route path="/myCv" element = {<CV/>} />
    <Route path="/aboutMe" element = {<AboutMain />}/>
    <Route path="/contact" element = {<Contact />}/>
  </Routes>
)
  
}

export default App;
