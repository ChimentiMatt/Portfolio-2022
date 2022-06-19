import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import Matt from '../images/bodyShot.jpeg'
import TextBubble from '../images/textBubbleStatic.png'
import Mustache from '../images/mustache.gif'
import EyePatch from '../images/eyePatch.gif'

const About = () => {
    const targets = [
        'about_A', 'about_b', 'about_o', 'about_u', 'about_t', 
        'about_M', 'about_e'
    ]

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        ScrollTrigger.create({
            trigger: "#about_A",
            onEnter: textAppearing,
            start: "center 700",
            end: "center 700 ",
            // markers: true
        })
    })

    const jokesAppearing= () => {
        gsap.to('#textBubbleContent', {delay: 4, opacity: 1})
        gsap.to('#mustache', {delay: 2, opacity: 1})
        gsap.to('#eyePatch', {delay: 3, opacity: 1})
    }

    const textAppearing = () => {
        gsap.to('#aboutPage, #aboutRight', {opacity: 1})
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

        gsap.to('#contactMeBtn', {delay: 3, opacity: 1, top: 0})
        gsap.to('#chevronDown', {delay: 4, opacity: 1})
        let tl4 = gsap.timeline({repeat: -1})
        tl4.to('#chevronDown', {duration: .5, y: '5px', ease: 'none'})
        tl4.to('#chevronDown', {duration: .5, y: '0rem', ease: 'none'})

        jokesAppearing()
    }

    const fallingText = (e) => {
        let tl = gsap.timeline({repeat: 0})
        tl.to("#" + e.target.id, { rotate: '20deg'})
        tl.to("#" + e.target.id, { delay: .2, rotate: '25deg'})
        tl.to("#" + e.target.id, { delay: .2, rotate: '30deg'})
        tl.to("#" + e.target.id, { delay: .2, rotate: '35deg'})
        tl.to("#" + e.target.id, { delay: 1, y: '100rem', x: '10rem'})
        tl.to("#" + e.target.id, { display: 'none'})
        tl.to("#" + e.target.id, { delay: 2, rotate: '0deg', x: '0rem', y: '0rem'})
        tl.to("#" + e.target.id, { display: 'block'})
    }


  return (
    <div className="flex relative left-0 h-screen md:pl-[2rem] text-white">
        <div id="aboutPage" className="opacity-0 flex flex-row ">
            <div className="flex flex-col justify-center pl-[1rem] lg:pl-[10rem] ">
                <div className="flex leading-[140%] text-[3.5rem] font-bold md:text-[5rem] lg:leading-[120%]">
                    <h1 id="about_A" className="text-white hover:text-teal-600 opacity-0 ">A</h1>
                    <h1 id="about_b" className="text-white hover:text-teal-600 opacity-0 ">b</h1>
                    <h1 id="about_o" className="text-white hover:text-teal-600 opacity-0 ">o</h1>
                    <h1 id="about_u" className="text-white hover:text-teal-600 opacity-0 ">u</h1>
                    <h1 id="about_t" className="text-white hover:text-teal-600 opacity-0 ">t</h1>

                    <h1 id="about_M" className="text-white hover:text-teal-600 opacity-0 pl-2 lg:pl-5 " >M</h1>
                    <h1 id="about_e" onMouseEnter={fallingText} className="text-white hover:text-teal-600 opacity-0 " >e</h1>
                </div>

                <div className="text-[1rem] w-[90vw] sm:w-[70vw] lg:w-[30rem]">
                    <p className="text-teal-600">{"<"} Developer {"/>"}</p>
                    <p>I am a developer living in Oregon who has a passion for making creative front-end focused applications. I find pushing myself to create something bigger and better to be a never-ending supply of excitement and motivation as I freelance, and work on passion projects. </p>

                    <p className="text-teal-600 mt-5">{"<"} Student {"/>"}</p>
                    <p className="mb-5">Currently, I am two months away from finishing my Bridge to Master of Software at GCU then I begin the formal Masters. My GPA is a 4.0, and I will keep perfect marks throughout  my acedemia. </p>

                    <p className="text-teal-600">{"<"} Teacher {"/>"}</p>
                    <p >I teach Intro To Programming for PDX Code Guild, which is a community I love. I am a graduate myself of their Full-Stack Bootcamp as well as their Advanced MERN Stack Bootcamp. I also manage the TAs for the company and run Study Hall. It's a true gem of an organization and community.</p>
                </div>
            </div>
            <div id="aboutRight" className="opacity-0 flex justify-center items-center  lglet:opacity-0">
                <div>
                    <div id="textBubbleContent" className="hidden md:block opacity-0">
                        {/* <div className="h-0">
                            <h1 className="hidden md:block relative z-20 h-[20em] left-[27.8rem] top-[-2.5rem] text-black text-[1rem]" >Who put this</h1>
                        </div>
                        <div className="h-0">
                            <h1 className="hidden md:block relative z-20 h-[20em] left-[28.5rem] top-[-1.0rem] text-black text-[1rem]" >in here?!? </h1>
                        </div>
                        <div className="h-0">
                            <img id="textBubble" className="hidden md:block relative z-10 h-[10em] left-[25.5rem] top-[-5.5rem]" src={TextBubble} alt="mustache on my selfie" />
                        </div> */}
                    </div>
                    <div className="h-0">
                        <img id="mustache" className="hidden md:block opacity-0 relative h-[5rem] left-[21rem] top-[5.5rem] " src={Mustache} alt="mustache on my selfie" />
                    </div>
                    <div className="h-0">
                        <img id="eyePatch" className="hidden md:block opacity-0 relative h-[3rem] left-[20.6rem] top-[4.8rem] scale-x-[-1]" src={EyePatch} alt="eye patch on my selfie" />
                    </div>
                    <img id="bodyShot" className="hidden border-2 border-white h-[40rem] xl:block xl:ml-[10rem] " src={Matt} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About