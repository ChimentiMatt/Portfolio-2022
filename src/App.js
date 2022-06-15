import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

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
        <Projects />
        <About />
      </div>
    </div>
  );
}

export default App;
