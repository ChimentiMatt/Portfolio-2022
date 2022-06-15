import {Link} from 'react-scroll'

const Sidebar = ({handleClick}) => {
  return (
    <div className="
        hidden
        realative
        fixed
        mr-[50rem]
        flex-col 
        justify-between
        w-[8rem]
        h-screen
        bg-black
        border-r-2
        border-white
        
        md:flex
        "
        
    >
        <div>
            <Link to="homePage" spy={true} smooth={true}>
            <h1 id="Matt" className="
                // top-5
                bg-teal-500
                font-bold
                text-center
                text-[2rem]
                text-white   
                pt-[1.5rem]
                "
            >Matt</h1>
            <p className="
                text-center
                bg-teal-500
                text-white
                text-[.7rem]
                "
            >{"<"} Developer  {"/>"}
            </p>
            <p className="
                text-center
                bg-teal-500
                text-white
                text-[.7rem]
                "
            >{"<"} Student {"/>"}
            </p>
            <p className="
                text-center
                bg-teal-500
                text-white
                text-[.7rem]
                pb-[2rem]"
            >{"<"} Teacher {"/>"}
            </p>
            </Link>
        </div>
        
        <div>

            <ul className="
                mt-[12.5rem]
                text-center
                text-[1rem]
                text-white
                
                pt-[1rem]
                pb-[1rem]
                border-t-[1px]
                border-stone-800
                hover:text-teal-500
                "
                >
                <Link to="projectsPage" spy={true} smooth={true}>Projects</Link>
            </ul>
            <ul className="
                text-center
                text-[1rem]
                text-white
                pt-[1rem]
                pb-[1rem]
                border-t-[1px]
                border-stone-800
                hover:text-teal-500
                "
                >
                <Link to="aboutPage" spy={true} smooth={true}>About</Link>
            </ul>
            <ul className="
                text-center
                text-[1rem]
                text-white
                pt-[1rem]
                pb-[1rem]
                border-t-[1px]
                border-stone-800
                hover:text-teal-500"
                > 
                <Link to="skillsPage" spy={true} smooth={true}>Skills</Link>
            </ul>
            <ul className="
                text-center
                text-[1rem]
                text-white
                pt-[1rem]
                pb-[1rem]
                border-t-[1px]
                border-b-[1px]
                border-stone-800
                hover:text-teal-500"
                > 
                <Link to="skillsPage" spy={true} smooth={true}>Contact</Link>
            </ul>
        </div>
        <div className="
            flex
            content-center
            justify-center
            
            list-none
            pb-[22rem]
            pt-[1rem]">
                
            <li className="
                text-center
                text-[1rem]
                text-white
                hover:text-teal-500"
            >LI</li>
            <li className="
                text-center
                text-[1rem]
                text-white
                hover:text-teal-500
                pl-2
                "
            >GH</li>
        </div>
    </div>
  )
}

export default Sidebar