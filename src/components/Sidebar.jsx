import {Link} from 'react-scroll'
import GitHubIcon from '../images/GitHub.png'
import LinkedInIcon from '../images/linkedin.png'

const Sidebar = ({handleClick}) => {

  return (
    <div className="
        hidden
        z-10
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
        <div className='bg-black border-b-[2px] border-white text-white text-center hover:bg-white hover:cursor-pointer hover:text-black'>
            <Link to="homePage" spy={true} smooth={true}>
                <h1 className="
                    text-[2rem]
                    pt-[1.5rem]
                    ">Matt
                </h1>
                <p className="
                    relative
                    bottom-2.5
                    text-center
                    text-[.7rem]
                    "
                >{"<"} Developer  {"/>"}
                </p>
                <p className="
                    relative
                    bottom-3
                    text-center
                    text-[.7rem]
                    "
                >{"<"} Student {"/>"}
                </p>
                <p className="
                    relative
                    bottom-3.5
                    text-[.7rem]
                    pb-[1.5rem]"
                >{"<"} Teacher {"/>"}
                </p>
            </Link>
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