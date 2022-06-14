import { useEffect } from "react"
import gsap from "gsap"
import { GoChevronDown } from 'react-icons/go'

const Home = () => {
    const targets = [
        'H', 'e', 'l', 'l_2', 'o', 'comma',
        'I', 'apostrophe', 'm',
        'M', 'a', 't', 't_2', 'C', 'h', 'i', 'm_2', 'e_2', 'n', 't_3', 'i_2',  'comma_2',
        'a_2', 'p', 'r', 'o_2', 'g', 'r_2', 'a_3', 'm_3', 'e_3', 'r_3', 'comma_3',
        's', 't_4', 'u', 'd', 'e_4', 'n_3', 't_5', 'comma_4',
        'a_4', 'n_4', 'd_2',
        't_6', 'e_5', 'a_5', 'c_2', 'h_2', 'e_6', 'r_4'
    ]

    useEffect(() => {
        textAppearing()

    })

    const textAppearing = () => {
        let time = 0
        for (const element of targets){
            let tl = gsap.timeline({repeat: 0})
            tl.to("#" + element, { delay: time, opacity: 1, ease: 'none', transition: .2})
            tl.to("#" + element, { delay: time, opacity: 1, ease: 'none'})
            
            let tl2 = gsap.timeline({repeat: 0})
            tl2.to("#" + element, { delay: time, scale: 1.2, ease: 'none', transition: .2})
            tl2.to("#" + element, { scale: 1, ease: 'none'})
            
            // let tl3 = gsap.timeline({repeat: 0})
            // tl3.to("#" + element, { delay: time , duration: .1, rotate: '10deg'})
            // tl3.to("#" + element, { duration: .1, rotate: '-10deg'})
            // tl3.to("#" + element, { duration: .1, rotate: '0deg'})
            
            time += .05
        }

        gsap.to('#contactMeBtn', {delay: 3, opacity: 1, top: 0})
        gsap.to('#chevronDown', {delay: 4, opacity: 1})
        let tl4 = gsap.timeline({repeat: -1})
        tl4.to('#chevronDown', {duration: .5, y: '5px', ease: 'none'})
        tl4.to('#chevronDown', {duration: .5, y: '0rem', ease: 'none'})
    }

    const hoverAnimate = (e) => {
        let tl = gsap.timeline({repeat: 0})
        tl.to("#" + e.target.id, { scale: 1.2, ease: 'none', transition: .2})
        tl.to("#" + e.target.id, { scale: .8, ease: 'none'})
        tl.to("#" + e.target.id, { scale: 1, ease: 'none'})
        // let tl2 = gsap.timeline({repeat: 2})
        // tl2.to("#" + e.target.id, { duration: .1, rotate: '10deg'})
        // tl2.to("#" + e.target.id, { duration: .1, rotate: '-10deg'})
        // tl2.to("#" + e.target.id, { duration: .1, rotate: '0deg'})
    }

    const hoverButton = (e) => {
        gsap.to("#" + e.target.id, { background: 'white', color: 'black', borderColor: 'black'})
    }
    const exitHoverButton = (e) => {
        gsap.to("#" + e.target.id, { background: 'teal', color: 'white', borderColor: 'teal'})
    }

  return (
    <div className="
        flex
        flex-col
        justify-center
        h-screen 
        text-black 
        "
    >
        <div className="
            pl-[5rem] 
            text-[5rem]
            font-bold
            leading-[120%]
            "
        >
            {/* <h1 id="test1"><span id='H' onMouseEnter={hoverAnimate} >H</span>ello!</h1> */}
            <div className="flex">
                <h1 id="H" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>H</h1>
                <h1 id="e" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="l" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>l</h1>
                <h1 id="l_2" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>l</h1>
                <h1 id="o" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>o</h1>
                <h1 id="comma" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>,</h1>
            </div>

            <div className="flex">
                <h1 id="I" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>I</h1>
                <h1 id="apostrophe" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>'</h1>
                <h1 id="m" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>m</h1>

                <h1 id="M" className="text-rose-500 pl-5 opacity-0 name" onMouseEnter={hoverAnimate}>M</h1>
                <h1 id="a" className="text-rose-500 opacity-0 name" onMouseEnter={hoverAnimate}>a</h1>
                <h1 id="t" className="text-rose-500 opacity-0 name" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="t_2" className="text-rose-500 opacity-0 name" onMouseEnter={hoverAnimate}>t</h1>

                <h1 id="C" className="text-teal-500 pl-5 opacity-0 name" onMouseEnter={hoverAnimate}>C</h1>
                <h1 id="h" className="text-teal-500 opacity-0 name" onMouseEnter={hoverAnimate}>h</h1>
                <h1 id="i" className="text-teal-500 opacity-0 name" onMouseEnter={hoverAnimate}>i</h1>
                <h1 id="m_2" className="text-teal-500 opacity-0 name" onMouseEnter={hoverAnimate}>m</h1>
                <h1 id="e_2" className="text-teal-500 opacity-0 name" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="n" className="text-teal-500 opacity-0 name" onMouseEnter={hoverAnimate}>n</h1>
                <h1 id="t_3" className="text-teal-500 opacity-0 name" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="i_2" className="text-teal-500 opacity-0 name" onMouseEnter={hoverAnimate}>i</h1>
                <h1 id="comma_2" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>,</h1>
            </div>

            <div className="flex">
                <h1 id="a_2" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>a</h1>

                <h1 id="p" className="hover:text-teal-500 pl-5 opacity-0" onMouseEnter={hoverAnimate}>p</h1>
                <h1 id="r" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>r</h1>
                <h1 id="o_2" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>o</h1>
                <h1 id="g" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>g</h1>
                <h1 id="r_2" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>r</h1>
                <h1 id="a_3" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>a</h1>
                <h1 id="m_3" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>m</h1>
                <h1 id="e_3" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="r_3" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>r</h1>

                <h1 id="comma_3" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>,</h1>

                <h1 id="s" className="hover:text-teal-500 pl-5 opacity-0" onMouseEnter={hoverAnimate}>s</h1>
                <h1 id="t_4" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="u" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>u</h1>
                <h1 id="d" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>d</h1>
                <h1 id="e_4" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="n_3" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>n</h1>
                <h1 id="t_5" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="comma_4" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>,</h1>
            </div>
            <div className="flex">
                <h1 id="a_4" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>a</h1>
                <h1 id="n_4" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>n</h1>
                <h1 id="d_2" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>d</h1>

                <h1 id="t_6" className="hover:text-teal-500 pl-5 opacity-0" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="e_5" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="a_5" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>a</h1>
                <h1 id="c_2" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>c</h1>
                <h1 id="h_2" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>h</h1>
                <h1 id="e_6" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="r_4" className="hover:text-teal-500 opacity-0" onMouseEnter={hoverAnimate}>r</h1>
            </div>
            {/* <h1 className="hover:text-teal-400">I'm <span className="text-teal-600">Matt</span> Chimenti, </h1> */}
            {/* <h1>a programmer and teacher </h1> */}
        </div>
        <div>
            <button id="contactMeBtn" onMouseEnter={hoverButton} onMouseLeave={exitHoverButton} className="
                opacity-0
                relative
                top-10
                text-[1.5rem]
                text-white
                bg-teal-600
                shadowText
                p-[.5rem]
                pl-[2rem]
                pr-[2rem]
                ml-[5rem] 
                mt-[2.5rem]
                border-2 
                border-teal-600
                "
            >Contact me</button>
        </div>
        <div className="
            absolute
            flex
            justify-center
            bottom-10
            left-[50%]

        ">
            <GoChevronDown id='chevronDown' className="
                opacity-0 
                h-[4rem] 
                w-[4rem]
                text-teal-500"
                
            />
        </div>
    </div>
  )
}

export default Home