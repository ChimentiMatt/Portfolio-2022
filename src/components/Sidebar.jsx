import {Link} from 'react-scroll'
import GitHubIcon from '../images/GitHub.png'
import LinkedInIcon from '../images/linkedin.png'

const Sidebar = ({handleClick}) => {

  return (
    <div className="
        hidden
        z-[100]
        realative
        fixed
        
        flex-col 
        justify-between
        w-[8rem]
        h-screen
        bg-black
        border-r-[2px]

        border-white
    
        lg:flex">
        <div className='bg-white border-b-[2px] border-white text-black text-center hover:bg-black hover:cursor-pointer hover:text-white'>
            <div className='leading-7 text-[1.5rem] pb-[1.5rem] pt-[1.5rem] '>
                <Link to="homePage" spy={true} smooth={true}>
                    <p className="">{"<"} Matter</p>
                    <p>of</p>
                    <p>Code {"/>"}</p>

                </Link>
            </div>
        </div>
        
        <div className=''>
            <ul className="
        
          
                text-center
                text-[1rem]
                text-white
                pt-[1rem]
                pb-[1rem]
                border-t-[1px]
                border-stone-800
                hover:cursor-pointer
                hover:bg-white
                hover:text-black
                ">
                <Link to="aboutPage" spy={true} smooth={true}>About</Link>
            </ul>
            <ul className="
                text-center
                text-[1rem]
                text-white
                
                pt-[1rem]
                pb-[1rem]
                border-t-[1px]
                hover:cursor-pointer
                border-stone-800
                hover:bg-white
                hover:text-black
                ">
                <Link to="topOfProjects" spy={true} smooth={true}>Projects</Link>
            </ul>
            <ul className="
                text-center
                text-[1rem]
                text-white
                pt-[1rem]
                pb-[1rem]
                border-t-[1px]
                hover:cursor-pointer
                border-stone-800
                hover:bg-white
                hover:text-black
                "
                > 
                <Link to="skillsTarget" spy={true} smooth={true}>Skills</Link>
            </ul>
            <ul className="
                text-center
                text-[1rem]
                text-white
                pt-[1rem]
                pb-[1rem]
                border-t-[1px]
                border-b-[1px]
                hover:cursor-pointer
                border-stone-800
                hover:bg-white
                hover:text-black
                "
                > 
                <Link to="contactPage" spy={true} smooth={true}>Contact</Link>
            </ul>
            <div className="
                flex
                content-center
                justify-center
                
                list-none
                pb-[18rem]
                pt-[1rem]">
                    
                <li className="
                    text-center
                    text-[1rem]
                    text-white
                    hover:cursor-pointer
                    hover:invert
                    "
                    ><img className="h-5 hover:bg-black  hover:rounded-[20%]" src={LinkedInIcon} />
                </li>
                <li className="
                    text-center
                    text-[1rem]
                    text-white
                    hover:cursor-pointer
                    hover:invert
                    pl-2
                    "
                    ><img className="h-5 hover:bg-black hover:rounded-lg" src={GitHubIcon} />
                </li>
            </div>
        </div>
    </div>
  )
}

export default Sidebar