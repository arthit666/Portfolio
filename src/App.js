import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectlList/ProjectList";


function App() {
  return (
    <div className="App">
      <Intro />
      <ProjectList/>
      <Contact/>
    </div>
  );
}

export default App;
