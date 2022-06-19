import { useEffect } from "reactn"
import gsap from "gsap"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import ContactForm from "../components/ContactForm"

import Typing from "../images/typing.gif"
import Celebrate from "../images/celebrate.gif"
import DuckDance from "../images/duckDance.gif"

export const Contact = ({toast}) => {
    let wasEmailSent = false
    const targets = [
        'contact_C', 'contact_o', 'contact_n', 'contact_t', 'contact_a', 'contact_c', 'contact_t_2',
        'contact_M' , 'contact_e' 
    ]
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        ScrollTrigger.create({
            trigger: "#contact_C",
            onEnter: textAppearing,
            start: "center 600",
            end: "center 600 ",
            // markers: true
        })
    }, [])
    const textAppearing = () => { 
        if (!wasEmailSent){ // stops scroll trigger from re activating form
            wasEmailSent = true
            gsap.to('#contactForm, #contactText', {opacity: 1})
            let time = 0
            for (const element of targets){
                let tl = gsap.timeline({repeat: 0})
                tl.to("#" + element, { delay: time, opacity: 1, ease: 'none', transition: .2})
                tl.to("#" + element, { delay: time, opacity: 1, ease: 'none'})
                
                let tl2 = gsap.timeline({repeat: 0})
                tl2.to("#" + element, { delay: time, scale: 1.2, ease: 'none', transition: .2})
                tl2.to("#" + element, { scale: 1, ease: 'none'})
                
                time += .03
            }
        }
    }

  return (
    <div id="contactPage" className="text-white items-center flex h-[100vh] relative left-0  md:mt-0 md:ml-[2rem]">
        <div className="relative z-10 flex flex-col">
            <div className="flex flex-col pl-[1rem] lg:pl-[10rem]">
                <div className="flex leading-[140%] text-[3.5rem] font-bold mt-[2.5rem] md:text-[5rem] md:leading-[120%]">
                    <h1 id="contact_C" className="text-white hover:text-teal-600 opacity-0 ">C</h1>
                    <h1 id="contact_o" className="text-white hover:text-teal-600 opacity-0 ">o</h1>
                    <h1 id="contact_n" className="text-white hover:text-teal-600 opacity-0  ">n</h1>
                    <h1 id="contact_t" className="text-white hover:text-teal-600 opacity-0 ">t</h1>
                    <h1 id="contact_a" className="text-white hover:text-teal-600 opacity-0 ">a</h1>
                    <h1 id="contact_c" className="text-white hover:text-teal-600 opacity-0 ">c</h1>
                    <h1 id="contact_t_2" className="text-white hover:text-teal-600 opacity-0 ">t</h1>

                    <h1 id="contact_M" className="text-white hover:text-teal-600 opacity-0  pl-2 md:pl-5">M</h1>
                    <h1 id="contact_e" className="text-white hover:text-teal-600 opacity-0 ">e</h1>

                    <div className="h-0">
                        <img id="catTyping" className="hidden sm:block xl:hidden absolute h-[5rem] md:top-[6.4rem] md:ml-[11.5rem]" src={Typing} alt="cat typing" />
                    </div>
                </div>
                <div id="contactText" className="opacity-0 mb-[1rem] w-[95%]">
                    <h1>Have something you want built? Send me a message and we can grab digital coffee.</h1>
                </div>
                <ContactForm toast={toast}/>
            </div>
        </div>
        <div className="h-0">
            <img id="catTypingDesktop" className="hidden relative top-[1rem] left-[0rem] h-[15rem]  xl:block 3xl:left-[20rem]" src={Typing} alt="cat typing" />
        </div>


        <img id="celebrate" className="absolute lg:left-[50%] z-0 opacity-0" src={Celebrate} alt="fireworks" />
        <img id="duckDance" className="absolute lg:left-[60%] left-[7rem] h-[10rem] bottom-[5rem] md:bottom-[10rem] z-0 opacity-0" src={DuckDance} alt="dancing duck"/>
    </div>
  )
}
