import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import ProjectSlides from "../components/ProjectSlides"

import Rocket from '../images/rocketGif.gif'

const Projects = ({ref}) => {
    const targets = [
        'projects_S', 'projects_h', 'projects_o', 'projects_w', 'projects_c', 'projects_a' , 'projects_s' , 'projects_e' 
    ]

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        ScrollTrigger.create({
            trigger: "#projects_M",
            onEnter: textAppearing,
            start: "center 700",
            end: "center 700 ",
            // markers: true
        })
    }, [])

    const textAppearing = () => {
        gsap.to('#projectsSection', {opacity: 1})
        let time = 0
        for (const element of targets){
            let tl = gsap.timeline({repeat: 0})
            tl.to("#" + element, { delay: time, opacity: 1, ease: 'none', transition: .2})
            tl.to("#" + element, { delay: time, opacity: 1, ease: 'none'})
            
            let tl2 = gsap.timeline({repeat: 0})
            tl2.to("#" + element, { delay: time, scale: 1.2, ease: 'none', transition: .2})
            tl2.to("#" + element, { scale: 1, ease: 'none'})
            
            time += .05
        }
    }
    
  return (
    <div id="topOfProjects" className=" h-[60rem] flex flex-col justify-center ">
        <div className="flex flex-col pl-[1rem] md:pl-[2rem] lg:pl-[12rem]">
            <div id='projectsPage'  className=" flex leading-[140%] text-[3.5rem]  md:text-[5rem] md:leading-[120%]">
                {/* <h1 id="projects_M" className="text-white hover:text-[#61DBFB] opacity-0 ">M</h1>
                <h1 id="projects_y" className="text-white hover:text-[#61DBFB] opacity-0 ">y</h1> */}

                <h1 id="projects_S" className="text-white hover:text-[#61DBFB] opacity-0 ">S</h1>
                <h1 id="projects_h" className="text-white hover:text-[#61DBFB] opacity-0 ">h</h1>
                <h1 id="projects_o" className="text-white hover:text-[#61DBFB] opacity-0 ">o</h1>
                <h1 id="projects_w" className="text-white hover:text-[#61DBFB] opacity-0 ">w</h1>
                <h1 id="projects_c" className="text-white hover:text-[#61DBFB] opacity-0 ">c</h1>
                <h1 id="projects_a" className="text-white hover:text-[#61DBFB] opacity-0 ">a</h1>
                <h1 id="projects_s" className="text-white hover:text-[#61DBFB] opacity-0 ">s</h1>
                <h1 id="projects_e" className="text-white hover:text-[#61DBFB] opacity-0 ">e</h1>
                <img id="rocketDesktop" className='hidden opacity-0 relative  h-[5rem] md:ml-[1.5rem] bottom-[-.7rem] rotate-[45deg] lg:block lg:opacity-1' src={Rocket} alt="rocket drawing" />
            </div>
        </div>
        <ProjectSlides />
    </div>

  )
}

export default Projects