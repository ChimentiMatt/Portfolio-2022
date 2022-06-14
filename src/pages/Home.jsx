import { useEffect } from "react"
import gsap from "gsap"

const Home = () => {
    useEffect(() => {
        // gsap.to("#test1", {y: "-1rem", color: 'black', rotate: '90deg'})
    })

    const hoverAnimate = (e) =>{
        var tl = gsap.timeline({repeat: 0})
        tl.to("#" + e.target.id, { scale: 1.2, ease: 'none', transition: .2})
        tl.to("#" + e.target.id, { scale: 1, ease: 'none'})

        var tl2 = gsap.timeline({repeat: 2})
        tl2.to("#" + e.target.id, { duration: .1, rotate: '10deg'})
        tl2.to("#" + e.target.id, { duration: .1, rotate: '-10deg'})
        tl2.to("#" + e.target.id, { duration: .1, rotate: '0deg'})
    }

  return (
    <div className="
        flex
        flex-col
        justify-center
        h-screen 
        text-white 
        "
    >
        <div className="
            pl-[5rem] 
            text-[5rem]
            font-bold
            leading-[125%]
            "
        >
            {/* <h1 id="test1"><span id='H' onMouseEnter={hoverAnimate} >H</span>ello!</h1> */}
            <div className="flex">
                <h1 id="H" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>H</h1>
                <h1 id="e" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="l" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>l</h1>
                <h1 id="l_2" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>l</h1>
                <h1 id="o" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>o</h1>
                <h1 id="comma" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>,</h1>
            </div>

            <div className="flex">
                <h1 id="I" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>I</h1>
                <h1 id="apostrophe" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>'</h1>
                <h1 id="m" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>m</h1>

                <h1 id="M" className="text-teal-400 pl-4" onMouseEnter={hoverAnimate}>M</h1>
                <h1 id="a" className="text-teal-400" onMouseEnter={hoverAnimate}>a</h1>
                <h1 id="t" className="text-teal-400" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="t_2" className="text-teal-400" onMouseEnter={hoverAnimate}>t</h1>

                <h1 id="C" className="text-teal-400 pl-4" onMouseEnter={hoverAnimate}>C</h1>
                <h1 id="h" className="text-teal-400" onMouseEnter={hoverAnimate}>h</h1>
                <h1 id="i" className="text-teal-400" onMouseEnter={hoverAnimate}>i</h1>
                <h1 id="m_2" className="text-teal-400" onMouseEnter={hoverAnimate}>m</h1>
                <h1 id="e_2" className="text-teal-400" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="n" className="text-teal-400" onMouseEnter={hoverAnimate}>n</h1>
                <h1 id="t_3" className="text-teal-400" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="i_2" className="text-teal-400" onMouseEnter={hoverAnimate}>i</h1>
            </div>

            <div className="flex">
                <h1 id="a_2" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>a</h1>

                <h1 id="p" className="hover:text-teal-400 pl-4" onMouseEnter={hoverAnimate}>p</h1>
                <h1 id="r" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>r</h1>
                <h1 id="o_2" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>o</h1>
                <h1 id="g" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>g</h1>
                <h1 id="r_2" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>r</h1>
                <h1 id="a_3" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>a</h1>
                <h1 id="m_3" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>m</h1>
                <h1 id="m_4" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>m</h1>
                <h1 id="e_3" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="r-2" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>r</h1>

                <h1 id="comma_2" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>,</h1>

                <h1 id="s" className="hover:text-teal-400 pl-4" onMouseEnter={hoverAnimate}>s</h1>
                <h1 id="t_4" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="u" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>u</h1>
                <h1 id="d" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>d</h1>
                <h1 id="e_4" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="n_3" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>n</h1>
                <h1 id="t_5" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>t</h1>
            </div>
            
            <div className="flex">
                <h1 id="a_4" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>a</h1>
                <h1 id="n_4" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>n</h1>
                <h1 id="d_2" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>d</h1>

                <h1 id="t_6" className="hover:text-teal-400 pl-4" onMouseEnter={hoverAnimate}>t</h1>
                <h1 id="e_5" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="a_5" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>a</h1>
                <h1 id="c_2" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>c</h1>
                <h1 id="h_2" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>h</h1>
                <h1 id="e_6" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>e</h1>
                <h1 id="r_3" className="hover:text-teal-400" onMouseEnter={hoverAnimate}>r</h1>
            </div>
            {/* <h1 className="hover:text-teal-400">I'm <span className="text-teal-600">Matt</span> Chimenti, </h1> */}
            {/* <h1>a programmer and teacher </h1> */}
        </div>
        <div>
            <button className="
                text-[1.5rem]
                p-[1rem]
                pl-[2rem]
                pr-[2rem]
                ml-[5rem] 
                mt-[2.5rem]
                border-2 
                border-teal-600
                "
            >Contact me</button>
        </div>
    </div>
  )
}

export default Home