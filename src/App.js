import { useEffect, useGlobal } from 'reactn'
import gsap from "gsap"
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills"
import { Contact } from "./pages/Contact";

function App() {
  const [silly, setSilly] = useGlobal("silly")

  useEffect(() => {
    toggleSilly()
})

  const toast = () => {
    gsap.to("#toast", {opacity: 1, y:'-2.5rem', display: 'flex'})
    gsap.to("#toast", {delay: 3, opacity: 0, y: '0', display: 'none'})
  }

  const toggleSilly = (e) => {
    if (silly)
    {
      document.querySelector('#sillyBtn').innerHTML = "Silly Mode ON"
      gsap.to('#happyCloud', {opacity: 1})
      gsap.to('#mustache', {opacity: 1})
      gsap.to('#eyePatch', {opacity: 1})
      gsap.to('#skillGifs', {opacity: 1})
      gsap.to('#catTyping', {opacity: 1})
      gsap.to('#catTypingDesktop', {opacity: 1})
      gsap.to('#catTypingMobile', {opacity: 1})
    }

    else{
      document.querySelector('#sillyBtn').innerHTML = "Silly Mode OFF"
      gsap.to('#happyCloud', {opacity: 0})
      gsap.to('#mustache', {opacity: 0})
      gsap.to('#eyePatch', {opacity: 0})
      gsap.to('#skillGifs', {opacity: 0})
      gsap.to('#catTyping', {opacity: 0})
      gsap.to('#catTypingDesktop', {opacity: 0})
      gsap.to('#catTypingMobile', {opacity: 0})
    }

}

 
  return (
    <div className="App flex">
      <Sidebar />
      <div className="flex flex-col w-screen ">
          <Home/>
          <About/>
          <Projects />
          <div id='backgroundEffect'>
            <Skills />
            <Contact toast={toast}/>
          </div>
          <div id="toast" className="fixed z-20 opacity-0 hidden justify-center items-center w-[10rem] h-11 bottom-[0rem] lg:bottom-5 left-[50%] border-2 text-white border-rose-600 bg-rose-600">
            Message Sent!
          </div>
      </div>
      <div className="fixed z-50 top-[1.5rem] right-[-5.5rem] rotate-[45deg] hover:cursor-pointer ">
        <button onClick={() => setSilly(!silly)} id="sillyBtn" className=" bg-red-800 text-white p-[.5rem] pl-[5rem] pr-[5rem] hover:bg-red-700 hover:text-white">Silly Mode ON</button>
      </div>
    </div>
  );
}

export default App;
