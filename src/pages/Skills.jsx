import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const Skills = () => {
    const targets = [
        'skills_M', 'skills_y' ,'skills_S', 'skills_k', 'skills_i', 'skills_l', 'skills_l_2', 'skills_s'
    ]

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        ScrollTrigger.create({
            trigger: "#skills_M",
            onEnter: textAppearing,
            start: "center 700",
            end: "center 700 ",
            // markers: true
        })
    })

    const textAppearing = () => {
        gsap.to('#skillsPage', {opacity: 1})
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
    <div id="skillsPage"  className="flex mt-[10rem] md:mt-0 h-[100vh] items-center relative left-0  ">
        <div id="skillsPage" className="opacity-0 flex flex-col ">
            <div className=" 
                flex
                flex-col          
                pl-[1rem]
                md:pl-[5rem] 
            ">
                <div className="
                        flex 
                        leading-[140%]  
                        text-[3.5rem]
                        font-bold
                        
                        md:text-[5rem]
                        md:leading-[120%]">
                    <h1 id="skills_M" className="text-rose-500 hover:text-teal-500 titleShadow">M</h1>
                    <h1 id="skills_y" className="text-rose-500 hover:text-teal-500 titleShadow">y</h1>

                    <h1 id="skills_S" className="text-teal-500 pl-2 md:pl-5 hover:text-teal-500 titleShadow">S</h1>
                    <h1 id="skills_k" className="text-teal-500 hover:text-teal-500 titleShadow">k</h1>
                    <h1 id="skills_i" className="text-teal-500 hover:text-teal-500 titleShadow">i</h1>
                    <h1 id="skills_l" className="text-teal-500 hover:text-teal-500 titleShadow">l</h1>
                    <h1 id="skills_l_2" className="text-teal-500 hover:text-teal-500 titleShadow">l</h1>
                    <h1 id="skills_s" className="text-teal-500 hover:text-teal-500 titleShadow">s</h1>
                </div>

            <div className="text-white mt-2 md:mt-5 md:text-[2rem]">
                <div className="flex flex-col md:flex-row justify-center ">
                    <div className="md:w-[20rem]">
                        <h1 className="text-rose-500 smallShadow">{"<"} Stacks {"/>"} </h1>
                        <ul>MERN Stack</ul>
                        <ul>Django Vue.js</ul>
                        <br></br>

                        <h1 className="text-rose-500 smallShadow">{"<"} Languages {"/>"} </h1>
                        <ul>JavaScript</ul>
                        <ul>Python</ul>
                        <ul>Java</ul>
                        <br></br>
                    </div>
                    <div className="w-[20rem]">
                        <h1 className="text-rose-500 smallShadow">{"<"} Databases {"/>"} </h1>
                        <ul>MongoDB</ul>
                        <ul>SQL</ul>
                        <br></br>


                    <h1 className="text-rose-500 smallShadow">{"<"} Web Design {"/>"} </h1>
                    <ul>HTML</ul>
                    <ul>CSS</ul>
                    <ul>Responsive Design</ul>
                    <br></br>
                </div>   
                <div className="w-[20rem]">
                    
                    <h1 className="text-rose-500 smallShadow">{"<"} Frameworks {"/>"} </h1>
                    <ul>React</ul>
                    <ul>Node.js</ul>
                    <ul>Express</ul>
                    <ul>Vue.js</ul>
                    <ul>Tailwind</ul>
                    <ul>SASS</ul>
                    <ul>Greensock</ul>
                    <br></br>
                </div>
                <div className="w-[20rem]">
                    <h1 className="text-rose-500 smallShadow">{"<"} Workflow {"/>"} </h1>
                    <ul>SCRUM</ul>
                    <ul>Git</ul>
                </div>
                 
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills