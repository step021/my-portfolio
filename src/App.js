
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import WorkExperienceAndSkills from "./components/WorkExperienceAndSkills";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="workexperienceandskills"><WorkExperienceAndSkills /></div>
    </BrowserRouter>
  );
}

export default App;