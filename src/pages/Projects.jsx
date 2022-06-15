import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import MarioComposer from '../images/marioMusic.PNG'
import Pokemon from '../images/pokemon.PNG'
import LinguistAssist from '../images/LA.PNG'

const Projects = ({ref}) => {
    const targets = [
        'projects_M', 'projects_y', 'projects_S', 'projects_h', 'projects_o', 'projects_w', 'projects_c', 'projects_a' , 'projects_s' , 'projects_e' 
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
    })

    const textAppearing = () => {
        gsap.to('#projectsPage', {opacity: 1})
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
    <div 
        className="flex h-[100vh] relative left-0  ">
        <div id="projectsPage" className="opacity-0 flex flex-row ">
            <div className=" 
                flex
                flex-col
                
                
                pl-[1rem]
                md:pl-[5rem] ">
                <div className="
                    flex 
                    leading-[140%]  
                    text-[3.5rem]
                    font-bold
                    mt-[2.5rem]
                    md:text-[5rem]
                    md:leading-[120%]">
                    <h1 id="projects_M" className="text-rose-500 hover:text-teal-500 opacity-0 titleShadow">M</h1>
                    <h1 id="projects_y" className="text-rose-500 hover:text-teal-500 opacity-0 titleShadow">y</h1>

                    <h1 id="projects_S" className="text-teal-500 hover:text-teal-500 opacity-0 titleShadow pl-2 md:pl-5">S</h1>
                    <h1 id="projects_h" className="text-teal-500 hover:text-teal-500 opacity-0 titleShadow">h</h1>
                    <h1 id="projects_o" className="text-teal-500 hover:text-teal-500 opacity-0 titleShadow">o</h1>
                    <h1 id="projects_w" className="text-teal-500 hover:text-teal-500 opacity-0 titleShadow">w</h1>
                    <h1 id="projects_c" className="text-teal-500 hover:text-teal-500 opacity-0 titleShadow">c</h1>
                    <h1 id="projects_a" className="text-teal-500 hover:text-teal-500 opacity-0 titleShadow">a</h1>
                    <h1 id="projects_s" className="text-teal-500 hover:text-teal-500 opacity-0 titleShadow">s</h1>
                    <h1 id="projects_e" className="text-teal-500 hover:text-teal-500 opacity-0 titleShadow">e</h1>
                </div>
                <div className="flex flex-col justify-between mt-5 w-[90vw] h-[80vh]  md:w-[75vw] md:h-[20rem]">
                    <div>
                        
                        <div className="flex flex-col text-white md:flex-row">
                            <img className="md:h-[12rem] border-2 border-black rounded-lg" src={MarioComposer} />
                            <div className="hidden ml-[2rem] md:flex md:flex-col ">
                                <p className="mb-2 text-rose-500 smallShadow">{"<"} Mario Composer {"/>"}</p>
                                <p className="">A MERN Stack application based on the Super Nintendo game Mario Paint Composer. Build a song by placing notes on the music sheet. Change the note from sounds like a piano or trumpet. Change the note type from durations like a quarter note or half note. Save your song with a user's system that is not required. </p>
                                <p className="mt-3">Have fun! It's a joy to play around on. </p>
                                <p className="mt-3 ">Visit Application </p>
                            </div>
                            <p className="mt-5 md:hidden">Visit Application </p>
                        </div>
                    </div>
                    <div className="mt-5 mb-5  ">
                        <div className="flex flex-col text-white md:flex-row">
                            <img className="md:h-[12rem] border-2 border-black rounded-lg"  src={Pokemon} />
                            <div className="hidden ml-[2rem] md:flex md:flex-col  ">
                                <p className="mb-2 text-rose-500 smallShadow">{"<"} Pokémon! Simulator {"/>"}</p>
                                <p className="">Play a mock version of the Pokemon Gameboy game built using only vanilla Javascript. Use Charmander to battle and catch Pokémon. See if you can catch them all. Your progress is tracked in your Pokédex.</p>
                                <p className="mt-3">How to play: Use the Arrow Keys and Enter. You can also click on the Gameboys buttons or click inside of the Gameboy screen. At any point, the start button will show you the Pokedex. </p>
                                <p className="mt-3">Visit Application </p>
                            </div>
                            <p className="mt-5 md:hidden">Visit Application </p>
                        </div>
                    </div>

                    <div className="">
    
                        <div className="flex flex-col text-white md:flex-row">
                            <img className="md:h-[12rem] border-2 border-black rounded-lg"  src={LinguistAssist} />
                            <div className="hidden ml-[2rem] md:flex md:flex-col  ">
                                <p className="mb-2 text-rose-500 smallShadow">{"<"} Linguist Assist {"/>"}</p>
                                <p className="">A MERN Stack application based on the Super Nintendo game Mario Paint Composer. Build a song by placing notes on the music sheet. Change the note from sounds like a piano or trumpet. Change the note type from durations like a quarter note or half note. Save your song with a user's system that is not required. </p>
                                <p className="mt-3">Have fun! It's a joy to play around on. </p>
                                <p className="mt-3">Visit Application </p>
                                </div>
                             <p className="mt-5 md:hidden">Visit Application </p>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </div>

  )
}

export default Projects