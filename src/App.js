import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="
      App 
      
      flex">
      <Sidebar />
      <div className="
        flex 
        flex-col 
        pl-[8rem]">
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
