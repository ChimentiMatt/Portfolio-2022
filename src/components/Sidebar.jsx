const Sidebar = () => {
  return (
    <div className="
        realative
        fixed
        mr-[50rem]
        flex
        flex-col 
        justify-center
        w-[8rem]
        h-screen
        bg-black"
    >
        <div>
            {/* <h1 className="
                top-0
                bg-teal-600
                font-bold
                text-center
                text-[3.5rem]
                text-white   
                pt-[1.5rem]
                pb-[1.5rem]"
            >Matt</h1> */}
            {/* <p className="
                text-center
                bg-teal-600
                text-black
                pb-[3.5rem]"
            >Programmer</p> */}
        </div>
        <div>
        <h3 className="
                text-center
                text-[1rem]
                text-white
                pt-[1rem]
                pb-[1rem]
                border-t-[1px]
                border-stone-800"
            >Home</h3>
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
                border-stone-800"
            >Skills</h3>
            <h3 className="
                text-center
                text-[1rem]
                text-white
                pt-[1rem]
                pb-[1rem]
                border-t-[1px]
                border-b-[1px]
                border-stone-800"
            > Projects</h3>
        </div>
        <div className="
            flex
            content-center
            justify-center
            bg-blue
            list-none
            
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