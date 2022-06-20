import { useEffect, useGlobal } from 'reactn'
import gsap from "gsap"

const SillyBanner = () => {
    const [silly, setSilly] = useGlobal("silly")

    useEffect(() => {
        toggleSilly()
    })

    const toggleSilly = (e) => {
        if (silly)
        {
          document.querySelector('#sillyBtn').innerHTML = "Fun Mode ON"
          gsap.to('#happyCloud', {opacity: 1})
          gsap.to('#mustache', {opacity: 1})
          gsap.to('#eyePatch', {opacity: 1})
          gsap.to('#skillGifs', {opacity: 1})
          gsap.to('#catTyping', {opacity: 1})
          gsap.to('#catTypingDesktop', {opacity: 1})
          gsap.to('#catTypingMobile', {opacity: 1})
          gsap.to('#runningCat', {opacity: 1})

        }
    
        else{
          document.querySelector('#sillyBtn').innerHTML = "Fun Mode OFF"
          gsap.to('#happyCloud', {opacity: 0})
          gsap.to('#mustache', {opacity: 0})
          gsap.to('#eyePatch', {opacity: 0})
          gsap.to('#skillGifs', {opacity: 0})
          gsap.to('#catTyping', {opacity: 0})
          gsap.to('#catTypingDesktop', {opacity: 0})
          gsap.to('#catTypingMobile', {opacity: 0})
          gsap.to('#runningCat', {opacity: 0})
        }
    }
    return (
        <div className="fixed z-50 top-[1.5rem] right-[-7.5rem] rotate-[45deg] hover:cursor-pointer ">
            <button onClick={() => setSilly(!silly)} id="sillyBtn" className=" bg-red-800 text-white p-[.5rem] pl-[5rem] pr-[5rem] hover:bg-red-700 hover:text-white w-[20rem]">Fun Mode ON</button>
        </div>
  )
}

export default SillyBanner