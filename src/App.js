import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills"
import { Contact } from "./pages/Contact";

function App() {

  
  return (
    <div className="
      App 
      
      flex">
      <Sidebar />
      <div className="
        flex 
        flex-col 
        w-screen

        md:pl-[8rem]

        ">
          <Home />
          <About />
          <Projects />
        <div id='backgroundEffect'>
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
