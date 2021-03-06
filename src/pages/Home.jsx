import { useEffect, useGlobal } from 'reactn'
import {Link} from 'react-scroll'
import gsap from "gsap"
import { GoChevronDown } from 'react-icons/go'

import HappyClound from "../images/happyCloud2.gif"

const Home = () => {
    const [silly, setSilly] = useGlobal("silly")
    const [emailSent, setEmailSent] = useGlobal("emailSent")
    const targets = [
        'H', 'e', 'l', 'l_2', 'o', 'comma',
        'I', 'apostrophe', 'm',
        'M', 'a', 't', 't_2', 'C', 'h', 'i', 'm_2', 'e_2', 'n', 't_3', 'i_2',  'comma_2',
        'a_2', 'd', 'e_3', 'v', 'e_4', 'l_3', 'o_2', 'p', 'e_5', 'r', 'comma_3',
        's', 't_4', 'u', 'd_2', 'e_6', 'n_3', 't_5', 'comma_4',
        'a_4', 'n_4', 'd_3',
        't_6', 'e_7', 'a_5', 'c_2', 'h_2', 'e_8', 'r_4', 'period'
    ]

    useEffect(() => {
        textAppearing()
        let tl = gsap.timeline({repeat: -1})
        setEmailSent(false)

        if (silly){
            tl.to('#happyCloud', {x: '5vw', duration: 10})
            tl.to('#happyCloud', {x: '0vw', duration: 10})
        }
    }, [])

    const textAppearing = () => {
        let time = 0
        for (const element of targets){
            
            let tl = gsap.timeline({repeat: 0})
            tl.to("#" + element, { delay: time, opacity: 1, ease: 'none', transition: .2, zIndex: 10})
            tl.to("#" + element, { delay: time, opacity: 1, ease: 'none', zIndex: 10})
            
            let tl2 = gsap.timeline({repeat: 0})
            tl2.to("#" + element, { delay: time, scale: 1.2, ease: 'none', transition: .2, zIndex: 10})
            tl2.to("#" + element, { scale: 1, ease: 'none', zIndex: 10})
            
            time += .03
        }

        gsap.to('#contactMeBtn', {delay: 1.5, opacity: 1, top: 0})
        gsap.to('#chevronDown', {delay: 3, opacity: 1, zIndex: 0})
        let tl4 = gsap.timeline({repeat: -1})
        tl4.to('#chevronDown', {duration: .5, y: '5px'})
        tl4.to('#chevronDown', {duration: .5, y: '0rem'})
    }

    const hoverAnimate = (e) => {
        let tl = gsap.timeline({repeat: 0})
        tl.to("#" + e.target.id, { scale: 1.2, ease: 'none', transition: .2})
        tl.to("#" + e.target.id, { scale: 1, ease: 'none'})
    }

  return (
    <div id="homePage" className="flex flex-col md:pl-[2rem] justify-center h-screen md:h-[59rem] text-white">
        <img id="happyCloud" className="absolute h-[10rem] top-0 right-[2rem] md:right-[10rem]" src={HappyClound} alt="happy cloud gif"/>
        <div className="text-[3.3rem] font-bold pl-[1rem] leading-[110%] lg:pl-[10rem]  md2:text-[5rem] md:leading-[120%]">
            <div className="flex">
                <h1 id="H" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>H</h1>
                <h1 id="e" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="l" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>l</h1>
                <h1 id="l_2" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>l</h1>
                <h1 id="o" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>o</h1>
                <h1 id="comma" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>,</h1>
            </div>

            <div className="flex relative z-50">
                <h1 id="I" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>I</h1>
                <h1 id="apostrophe" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>'</h1>
                <h1 id="m" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>m</h1>

                <h1 id="M" className="text-[#61DBFB] pl-2 opacity-0 md:pl-5" onMouseEnter={hoverAnimate}>M</h1>
                <h1 id="a" className="text-[#61DBFB]  opacity-0 " onMouseEnter={hoverAnimate}>a</h1>
                <h1 id="t" className="text-[#61DBFB]  opacity-0 " onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="t_2" className="text-[#61DBFB]  opacity-0 " onMouseEnter={hoverAnimate}>t</h1>

                {/* Medium screen text for Chimenti */}
                <h1 id="C" className="hidden pl-5 hover:text-[teal-600] opacity-0  md:pl-5 md:block" onMouseEnter={hoverAnimate}>C</h1>
                <h1 id="h" className="hidden hover:text-[#61DBFB] opacity-0  md:block" onMouseEnter={hoverAnimate}>h</h1>
                <h1 id="i" className="hidden hover:text-[#61DBFB] opacity-0  md:block" onMouseEnter={hoverAnimate}>i</h1>
                <h1 id="m_2" className="hidden hover:text-[#61DBFB] opacity-0  md:block" onMouseEnter={hoverAnimate}>m</h1>
                <h1 id="e_2" className="hidden hover:text-[#61DBFB] opacity-0  md:block" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="n" className="hidden hover:text-[#61DBFB] opacity-0  md:block" onMouseEnter={hoverAnimate}>n</h1>
                <h1 id="t_3" className="hidden hover:text-[#61DBFB] opacity-0  md:block" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="i_2" className="hidden hover:text-[#61DBFB] opacity-0  md:block" onMouseEnter={hoverAnimate}>i</h1>
                <h1 id="comma_2" className="hover:text-[#61DBFB] opacity-0 md:block" onMouseEnter={hoverAnimate}>,</h1>
            </div>

            {/* Mobile design text for Chimenti */}
            <div className="flex">
                <h1 id="C" className="text-[#61DBFB] opacity-0 name md:hidden" onMouseEnter={hoverAnimate}>C</h1>
                <h1 id="h" className="text-[#61DBFB] opacity-0 name md:hidden" onMouseEnter={hoverAnimate}>h</h1>
                <h1 id="i" className="text-[#61DBFB] opacity-0 name md:hidden" onMouseEnter={hoverAnimate}>i</h1>
                <h1 id="m_2" className="text-[#61DBFB] opacity-0 name md:hidden" onMouseEnter={hoverAnimate}>m</h1>
                <h1 id="e_2" className="text-[#61DBFB] opacity-0 name md:hidden" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="n" className="text-[#61DBFB] opacity-0 name md:hidden" onMouseEnter={hoverAnimate}>n</h1>
                <h1 id="t_3" className="text-[#61DBFB] opacity-0 name md:hidden" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="i_2" className="text-[#61DBFB] opacity-0 name md:hidden" onMouseEnter={hoverAnimate}>i</h1>
                <h1 id="comma_2" className="hover:text-[#61DBFB] opacity-0 md:hidden" onMouseEnter={hoverAnimate}>,</h1>
            </div>


            <div className="flex">
                <h1 id="a_2" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>a</h1>

                <h1 id="d" className="hover:text-[#61DBFB] pl-2  opacity-0 md:pl-5" onMouseEnter={hoverAnimate}>d</h1>
                <h1 id="e_3" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="v" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>v</h1>
                <h1 id="e_4" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="l_3" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>l</h1>
                <h1 id="o_2" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>o</h1>
                <h1 id="p" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>p</h1>
                <h1 id="e_5" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="r" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>r</h1>

                <h1 id="comma_3" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>,</h1>

                {/* Medium screen text for student */}
                <h1 id="s" className="hidden hover:text-[#61DBFB] pl-2 opacity-0 md:pl-5 md:block" onMouseEnter={hoverAnimate}>s</h1>
                <h1 id="t_4" className="hidden hover:text-[#61DBFB] opacity-0 md:block" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="u" className="hidden hover:text-[#61DBFB] opacity-0 md:block" onMouseEnter={hoverAnimate}>u</h1>
                <h1 id="d_2" className="hidden hover:text-[#61DBFB] opacity-0 md:block" onMouseEnter={hoverAnimate}>d</h1>
                <h1 id="e_6" className="hidden hover:text-[#61DBFB] opacity-0 md:block" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="n_3" className="hidden hover:text-[#61DBFB] opacity-0 md:block" onMouseEnter={hoverAnimate}>n</h1>
                <h1 id="t_5" className="hidden hover:text-[#61DBFB] opacity-0 md:block" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="comma_4" className="hidden hover:text-[#61DBFB] opacity-0 md:block" onMouseEnter={hoverAnimate}>,</h1>
            </div>

            {/* Mobile design text for student */}
            <div className="flex">
                <h1 id="s" className="hover:text-[#61DBFB] opacity-0 md:hidden" onMouseEnter={hoverAnimate}>s</h1>
                <h1 id="t_4" className="hover:text-[#61DBFB] opacity-0 md:hidden" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="u" className=" hover:text-[#61DBFB] opacity-0 md:hidden" onMouseEnter={hoverAnimate}>u</h1>
                <h1 id="d_2" className="hover:text-[#61DBFB] opacity-0 md:hidden" onMouseEnter={hoverAnimate}>d</h1>
                <h1 id="e_6" className="hover:text-[#61DBFB] opacity-0 md:hidden" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="n_3" className="hiden hover:text-[#61DBFB] opacity-0 md:hidden" onMouseEnter={hoverAnimate}>n</h1>
                <h1 id="t_5" className="hover:text-[#61DBFB] opacity-0 md:hidden" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="comma_4" className="hover:text-[#61DBFB] opacity-0 md:hidden" onMouseEnter={hoverAnimate}>,</h1>
            </div>

            <div className="flex">
                <h1 id="a_4" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>a</h1>
                <h1 id="n_4" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>n</h1>
                <h1 id="d_3" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>d</h1>

                <h1 id="t_6" className="hover:text-[#61DBFB] pl-2  opacity-0 md:pl-5" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="e_7" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="a_5" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>a</h1>
                <h1 id="c_2" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>c</h1>
                <h1 id="h_2" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>h</h1>
                <h1 id="e_8" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="r_4" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>r</h1>
                <h1 id="period" className="hover:text-[#61DBFB] opacity-0" onMouseEnter={hoverAnimate}>.</h1>
            </div>

        </div>
        <div>
            <Link to="contactPage" spy={true} smooth={true}>

                <button id="contactMeBtn" className="opacity-0 contactBtn text-black p-[.5rem] pl-[2rem] pr-[2rem] ml-[1rem] mt-[1rem] border-2 border-white bg-white hover:bg-black hover:text-white lg:ml-[10rem] md:mt-[2.5rem]">Send Message</button>
            </Link>
        </div>
        <div id='chevronDown' className="absolute z-0 opacity-0 text-black bottom-[0rem] right-[0rem] md:block">
            <p className='relative left-[.3rem] bottom-[1rem] rotate-[-90deg]'>Scroll Down</p>
            <GoChevronDown className="relative h-[4.5rem] w-[4rem] text-black right-[-1rem]"/>
        </div>
    </div>
  )
}

export default Home