import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination  } from 'swiper';
import gsap from "gsap"

import MarioGif from '../images/MarioGif.gif'
import MarioComposer from '../images/marioMusic.gif'
import Pokemon from '../images/pokemon.PNG'
import LinguistAssist from '../images/LA.PNG'

import Cat from '../images/rocketGif.gif'
import Milk from '../images/milkGif.gif'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectSlides = () => {
  let moveMath = 0

  const showGifOnHover = (nameOfImg) => {
    if (nameOfImg == 'mario'){
      gsap.to('#marioProjectImg', {duration: 0, display: 'none', opacity: 0 })
      gsap.to('#marioProjectGif', {duration: 0, display: 'block', opacity: 1 })
    }
  }

  const hideGifOnHover = (nameOfImg) => {
    if (nameOfImg == 'mario'){
      gsap.to('#marioProjectGif', {duration: 0, display: 'none', opacity: 0 })
      gsap.to('#marioProjectImg', {duration: 0, display: 'block', opacity: 1 })
    }
  }

  const slideTiggerAnimations = () => {
    moveMath += 20
    if (moveMath < 100){ 
      gsap.to("#rocketDesktop", {x: `${moveMath}vw`})
      gsap.to("#rocketMobile", {x: `${moveMath }vw`})
    }
    else if (moveMath === 100){
      moveMath = 0
      gsap.to("#rocketDesktop", {x: 0, visibility: 'none', duration: 0})
      gsap.to("#rocketMobile", {x: 0, visibility: 'none', duration: 0})
    }
  }


  return (
    <div id='projectsSection' className="opacity-0 w-[96vw] text-white mt-[1rem] ">
      <div>
      <Swiper
          // install Swiper modules
          modules={[Pagination, Navigation]}
          breakpoints={{
              800: {
                width: 800,
                slidesPerView: 1.2,
              }
            }}
          spaceBetween={0}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          navigation
          onSlideChange={() => slideTiggerAnimations()}
          
          >
          <SwiperSlide>
              <div className="w-[95%] border-2 border-white border-b-0 border-r-0 ml-[1rem] md:ml-[2rem]  lg:ml-[12rem]">
                  <img id="marioProjectImg" className='hover:cursor-pointer' src={MarioComposer} onMouseEnter={() => showGifOnHover('mario')} alt="mario composer"/>
                  <img id="marioProjectGif" className='hidden opacity-0 hover:cursor-pointer' src={MarioGif} onMouseLeave={() => hideGifOnHover('mario')} alt="mario composer gif"/>
                  <p className="mt-[.5rem] text-[#61DBFB] pl-[.5rem]">{"<"} Mario Composer {"/>"}</p>
                  <p className="mt-[.5rem] pl-[.5rem] pr-[.5rem]">A MERN Stack application based on the Super Nintendo game Mario Paint Composer. Build a song by placing notes on the music sheet. Change the note from sounds like a piano or trumpet. Change the note type from durations like a quarter note or half note. Save your song with a user's system that is not required. Have fun! It's a joy to play around on.</p>
                  <p className="mt-[.5rem] pl-[.5rem]  hover:cursor-pointer">Visit Application </p>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="w-[95%] border-2 border-white border-b-0 border-r-0 ml-[1rem] md:ml-[2rem]  lg:ml-[12rem]">
                  <img src={Pokemon}/>
                  <p className="mt-[.5rem] pl-[.5rem] text-[#61DBFB]">{"<"} Pokémon! Simulator {"/>"}</p>
                  <p className="mt-[.5rem] pl-[.5rem] pr-[.5rem]">Play a mock version of the Pokemon Gameboy game built using only vanilla Javascript. Use Charmander to battle and catch Pokémon. See if you can catch them all. Your progress is tracked in your Pokédex. How to play: Use the Arrow Keys and Enter or click on the gameboy itself. Hit Start to view your progress and see what Pokemon you have caught.</p>

                  <p className="mt-[.5rem] pl-[.5rem] hover:cursor-pointer">Visit Application </p>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="w-[95%] border-2 border-white border-b-0 border-r-0 ml-[1rem] md:ml-[2rem] lg:ml-[12rem]">
                  <img src={LinguistAssist}/>
                  <p className="mt-[.5rem]  pl-[.5rem]  mb-2 text-[#61DBFB]">{"<"} Linguist Assist {"/>"}</p>
                  <p className="mt-[.5rem] pl-[.5rem] pr-[.5rem">Built with Django and Vue.js, this application is designed to help students,  and second language learners to help improve spelling. Quiz yourself; hear words and definitions and typo it out to see if you spelled the word correct. Your missed words will be instantly stored, so you can learn from your mistakes.</p>
                  <p className="mt-[.5rem] pl-[.5rem]  hover:cursor-pointer">Visit Application </p>
              </div>
          </SwiperSlide>
      </Swiper>
      {/* ----Mobile and smalls screen rocket. Desktop is in projects next to My Showcase text---- */}
      <div className='flex justify-between overflow-hidden mt-[2rem] mb-[1.5rem] w-[100vw] '>
        <img id="rocketMobile" className='relative h-[5rem] md:ml-[12rem] rotate-[45deg] lg:hidden lg:opacity-0' src={Cat} alt="rocket drawing" />
      </div>
    </div>
  </div>
  )
}

export default ProjectSlides