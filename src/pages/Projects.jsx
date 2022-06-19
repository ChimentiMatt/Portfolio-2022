import { useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation  } from 'swiper';
import gsap from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import MarioComposer from '../images/marioMusic.PNG'
import Pokemon from '../images/pokemon.PNG'
import LinguistAssist from '../images/LA.PNG'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



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
    <div id="topOfProjects" className=" ">
        <div className="flex flex-col pl-[1rem] md:pl-[2rem] lg:pl-[12rem]">
            <div id='projectsPage'  className=" flex leading-[140%] text-[3.5rem]  md:text-[5rem] md:leading-[120%]">
                <h1 id="projects_M" className="text-white hover:text-teal-600 opacity-0 ">M</h1>
                <h1 id="projects_y" className="text-white hover:text-teal-600 opacity-0 ">y</h1>

                <h1 id="projects_S" className="text-white hover:text-teal-600 opacity-0  pl-2 md:pl-5">S</h1>
                <h1 id="projects_h" className="text-white hover:text-teal-600 opacity-0 ">h</h1>
                <h1 id="projects_o" className="text-white hover:text-teal-600 opacity-0 ">o</h1>
                <h1 id="projects_w" className="text-white hover:text-teal-600 opacity-0 ">w</h1>
                <h1 id="projects_c" className="text-white hover:text-teal-600 opacity-0 ">c</h1>
                <h1 id="projects_a" className="text-white hover:text-teal-600 opacity-0 ">a</h1>
                <h1 id="projects_s" className="text-white hover:text-teal-600 opacity-0 ">s</h1>
                <h1 id="projects_e" className="text-white hover:text-teal-600 opacity-0 ">e</h1>
            </div>
        </div>
        <div id='projectsSection' className="opacity-0 w-[90vw] text-white mt-[2rem]">
            <Swiper
                // install Swiper modules
                modules={[Navigation]}
                breakpoints={{
                    800: {
                      width: 800,
                      slidesPerView: 1,
                    }

                  }}
                spaceBetween={30}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                // pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <div className="w-[95%] ml-[2rem] lg:ml-[12rem]">
                        <img src={MarioComposer}/>
                        <p className="pl-[1rem] pr-[1rem] mt-[1rem] mb-2 text-teal-600">{"<"} Mario Composer {"/>"}</p>
                        <p className="pl-[1rem] pr-[1rem] ">A MERN Stack application based on the Super Nintendo game Mario Paint Composer. Build a song by placing notes on the music sheet. Change the note from sounds like a piano or trumpet. Change the note type from durations like a quarter note or half note. Save your song with a user's system that is not required. </p>
                        <p className="pl-[1rem] pr-[1rem] mt-3">Have fun! It's a joy to play around on. </p>
                        <p className="pl-[1rem] mt-3">Visit Application </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[95%] ml-[2rem] lg:ml-[12rem]">
                        <img src={Pokemon}/>
                        <p className="pl-[1rem] pr-[1rem] mt-[1rem] mb-2 text-teal-600">{"<"} Pokémon! Simulator {"/>"}</p>
                        <p className="pl-[1rem] pr-[1rem]">Play a mock version of the Pokemon Gameboy game built using only vanilla Javascript. Use Charmander to battle and catch Pokémon. See if you can catch them all. Your progress is tracked in your Pokédex.</p>
                        <p className="pl-[1rem] pr-[1rem] mt-3">How to play: Use the Arrow Keys and Enter. You can also click on the Gameboys buttons or click inside of the Gameboy screen. At any point, the start button will show you the Pokedex. </p>
                        <p className="pl-[1rem]  mt-3">Visit Application </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[95%] ml-[2rem] lg:ml-[12rem]">
                        <img src={LinguistAssist}/>
                        <p className="pl-[1rem] pr-[1rem] mt-[1rem] mb-2 text-teal-600">{"<"} Linguist Assist {"/>"}</p>
                        <p className="pl-[1rem] pr-[1rem] ">Built with Django and Vue.js, this application is designed to help students,  and second language learners to help improve spelling.</p>
                        <p className="pl-[1rem] pr-[1rem] mt-3">Quiz yourself; hear words and definitions and typo it out to see if you spelled the word correct. Your missed words will be instantly stored, so you can learn from your mistakes.</p>
                        <p className="pl-[1rem] mt-3">Visit Application </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>

  )
}

export default Projects