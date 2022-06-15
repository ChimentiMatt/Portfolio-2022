const Sidebar = () => {
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
        
        md:flex
        "
        
    >
        <div>
            <h1 id="Matt" className="
                // top-5
                bg-teal-600
                font-bold
                text-center
                text-[2rem]
                text-white   
                pt-[1.5rem]
                "
            >Matt</h1>
            <p className="
                text-center
                bg-teal-600
                text-white
                text-[.7rem]
                "
            >{"<"} Developer  {"/>"}
            </p>
            <p className="
                text-center
                bg-teal-600
                text-white
                text-[.7rem]
                "
            >{"<"} Student {"/>"}
            </p>
            <p className="
                text-center
                bg-teal-600
                text-white
                text-[.7rem]
                pb-[2rem]"
            >{"<"} Teacher {"/>"}
            </p>
        </div>
        <div>
        <h3 className="
                mt-[15rem]
                text-center
                text-[1rem]
                text-white
                pt-[1rem]
                pb-[1rem]
                border-t-[1px]
                border-stone-800
                "
            >Home</h3>
            <h3 className="
                text-center
                text-[1rem]
                text-white
                pt-[1rem]
                pb-[1rem]
                border-t-[1px]
                border-stone-800"
            >Projects</h3>
            <h3 className="
                text-center
                text-[1rem]
                text-white
                pt-[1rem]
                pb-[1rem]
                border-t-[1px]
                border-stone-800"
            >About</h3>
            <h3 className="
                text-center
                text-[1rem]
                text-white
                pt-[1rem]
                pb-[1rem]
                border-t-[1px]
                border-b-[1px]
                border-stone-800"
            > Skill</h3>
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
                text-white"
            >LI</li>
            <li className="
                text-center
                text-[1rem]
                text-white
                pl-2"
            >GH</li>
        </div>
    </div>
  )
}

export default Sidebar