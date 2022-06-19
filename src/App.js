import gsap from "gsap"

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills"
import { Contact } from "./pages/Contact";

function App() {

  const toast = () => {
    gsap.to("#toast", {opacity: 1, y:'-2.5rem', display: 'flex'})
    gsap.to("#toast", {delay: 3, opacity: 0, y: '0', display: 'none'})
  }

  return (
    <div className="App flex">
      <Sidebar />
      <div className="flex flex-col w-screen ">
          <Home />
          <About />
          <Projects />
          <div id='backgroundEffect'>
            <Skills />
            <Contact toast={toast}/>
          </div>
          <div id="toast" className="fixed z-20 opacity-0 hidden justify-center items-center w-[10rem] h-11 bottom-5 left-[50%] border-2 text-white border-rose-600 bg-rose-600">
            Message Sent!
          </div>
      </div>
    </div>
  );
}

export default App;
