import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination  } from 'swiper';
import gsap from "gsap"

import MarioGif from '../images/MarioGif.gif'
import MarioComposer from '../images/marioMusic.PNG'
import Pokemon from '../images/pokemon.PNG'
import LinguistAssist from '../images/LA.PNG'

import DancingBros from '../images/dancingBros.gif'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectSlides = () => {

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

  return (
    <div id='projectsSection' className="opacity-0 w-[90vw] text-white mt-[1rem] ">
    <Swiper
        // install Swiper modules
        modules={[Pagination, Navigation]}
        breakpoints={{
            800: {
              width: 800,
              slidesPerView: 1,
            }
          }}
        spaceBetween={30}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        navigation

        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
            <div className="w-[95%] ml-[1rem] md:ml-[2rem]  lg:ml-[12rem]">
                <img id="marioProjectImg" className='hover:cursor-pointer' src={MarioComposer} onMouseEnter={() => showGifOnHover('mario')} alt="mario composer"/>
                <img id="marioProjectGif" className='hidden opacity-0 hover:cursor-pointer' src={MarioGif} onMouseLeave={() => hideGifOnHover('mario')} alt="mario composer gif"/>
                <p className="mt-[1rem] text-teal-600">{"<"} Mario Composer {"/>"}</p>
                <p className="mt-[.5rem]">A MERN Stack application based on the Super Nintendo game Mario Paint Composer. Build a song by placing notes on the music sheet. Change the note from sounds like a piano or trumpet. Change the note type from durations like a quarter note or half note. Save your song with a user's system that is not required. </p>
                <p className="mt-[.5rem]">Have fun! It's a joy to play around on. </p>
                <p className="mt-[.5rem] hover:cursor-pointer">Visit Application </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-[95%] ml-[1rem] md:ml-[2rem]  lg:ml-[12rem]">
                <img src={Pokemon}/>
                <p className="mt-[1rem] text-teal-600">{"<"} Pokémon! Simulator {"/>"}</p>
                <p className="mt-[.5rem]">Play a mock version of the Pokemon Gameboy game built using only vanilla Javascript. Use Charmander to battle and catch Pokémon. See if you can catch them all. Your progress is tracked in your Pokédex.</p>
                <p className="mt-[.5rem]">How to play: Use the Arrow Keys and Enter. You can also click on the Gameboys buttons or click inside of the Gameboy screen. At any point, the start button will show you the Pokedex. </p>
                <p className="mt-[.5rem] hover:cursor-pointer">Visit Application </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-[95%] ml-[1rem] md:ml-[2rem] lg:ml-[12rem]">
                <img src={LinguistAssist}/>
                <p className="mt-[1rem] mb-2 text-teal-600">{"<"} Linguist Assist {"/>"}</p>
                <p className="mt-[.5rem]">Built with Django and Vue.js, this application is designed to help students,  and second language learners to help improve spelling.</p>
                <p className="mt-[.5rem]">Quiz yourself; hear words and definitions and typo it out to see if you spelled the word correct. Your missed words will be instantly stored, so you can learn from your mistakes.</p>
                <p className="mt-[.5rem] hover:cursor-pointer">Visit Application </p>
            </div>
        </SwiperSlide>
    </Swiper>
</div>
  )
}

export default ProjectSlides