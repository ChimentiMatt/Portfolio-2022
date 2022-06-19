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
            start: "center 600",
            end: "center 600 ",
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
    <div className="flex h-[40rem] items-center relative left-0 md:mt-[5rem] md:ml-[2rem] ">
        <div id="skillsPage" className="opacity-0 flex flex-col ">
            <div className="flex flex-col pl-[1rem] lg:pl-[10rem]">
                <div className="flex leading-[140%] text-[3.5rem]  md:mt-[0rem] md:text-[5rem] xl:text-[5rem] xl:leading-[120%]">
                    <h1 id="skills_M" className="opacity-0 text-white hover:text-teal-600 ">M</h1>
                    <h1 id="skills_y" className="opacity-0 text-white hover:text-teal-600 ">y</h1>

                    <h1 id="skills_S" className="opacity-0 text-white pl-5 md:pl[5rem] hover:text-teal-600 ">S</h1>
                    <h1 id="skills_k" className="opacity-0 text-white hover:text-teal-600 ">k</h1>
                    <h1 id="skills_i" className="opacity-0 text-white hover:text-teal-600 ">i</h1>
                    <h1 id="skills_l" className="opacity-0 text-white hover:text-teal-600 ">l</h1>
                    <h1 id="skills_l_2" className="opacity-0 text-white hover:text-teal-600 ">l</h1>
                    <h1 id="skills_s" className="opacity-0 text-white hover:text-teal-600 ">s</h1>
                </div>

                <div className="text-white mt-2 xl:mt-5 xl:text-[2rem]">
                    <div className="flex xl:flex-row  ">
                        <div className="w-[9rem] xl:w-[20rem]">
                            <h1 className="text-teal-600 smallShadow">{"<"} Stacks {"/>"} </h1>
                            <ul>MERN Stack</ul>
                            <ul>Django Vue.js</ul>
                            <br></br>

                            <h1 className="text-teal-600 smallShadow">{"<"} Languages {"/>"} </h1>
                            <ul>JavaScript</ul>
                            <ul>Python</ul>
                            <ul>Java</ul>
                            <br></br>
                        </div>
                        <div className="ml-10 xl:ml-0 xl:w-[20rem]">
                            <h1 className="text-teal-600 smallShadow">{"<"} Databases {"/>"} </h1>
                            <ul>MongoDB</ul>
                            <ul>SQL</ul>
                            <br></br>


                            <h1 className="text-teal-600 smallShadow">{"<"} Web Design {"/>"} </h1>
                            <ul>HTML</ul>
                            <ul>CSS</ul>
                            <ul>Responsive Design</ul>
                            <br></br>
                        </div>   

                    {/* Hidden on Mobile */}
                    <div className="hidden xl:block w-[20rem]">
                        <h1 className="text-teal-600 smallShadow">{"<"} Frameworks {"/>"} </h1>
                        <ul>React</ul>
                        <ul>Node.js</ul>
                        <ul>Express</ul>
                        <ul>Vue.js</ul>
                        <ul>Tailwind</ul>
                        <ul>SASS</ul>
                        <ul>Greensock</ul>
                        <br></br>
                    </div>
                    {/* <div className="hidden xl:block w-[20rem]">
                        <h1 className="text-teal-600 smallShadow">{"<"} Workflow {"/>"} </h1>
                        <ul>SCRUM</ul>
                        <ul>Git</ul>
                    </div> */}
                </div>

                {/* NOT hidden on mobile */}
                <div className="text-white flex">
                    <div className="w-[9rem]  xl:hidden">
                        <h1 className="text-teal-600 smallShadow">{"<"} Frameworks {"/>"} </h1>
                        <ul>React</ul>
                        <ul>Node.js</ul>
                        <ul>Express</ul>
                        <ul>Vue.js</ul>
                        <ul>Tailwind</ul>
                        <ul>SASS</ul>
                        <ul>Greensock</ul>
                        <br></br>
                    </div>
                    <div className="ml-10 xl:hidden ">
                        <h1 className="text-teal-600 smallShadow">{"<"} Workflow {"/>"} </h1>
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