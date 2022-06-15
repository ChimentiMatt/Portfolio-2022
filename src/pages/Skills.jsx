const Skills = () => {
    const targets = [
        'skills_M', 'skills_y' ,'skills_S', 'skills_k', 'skills_i', 'skills_l', 'skills_l_2', 'skills_s'
    ]

  return (
    <div id='test3' className="flex h-[120vh] relative left-0  ">
        <div id="skillsPage" className=" flex flex-row ">
            <div className=" 
                flex
                flex-col          
                pl-[1rem]
                md:pl-[5rem] 
            ">
                <div className="
                        flex 
                        leading-[140%]  
                        text-[3.5rem]
                        font-bold
                        
                        md:text-[5rem]
                        md:leading-[120%]">
                    <h1 id="skills_M" className="text-rose-500 hover:text-teal-500 titleShadow">M</h1>
                    <h1 id="skills_y" className="text-rose-500 hover:text-teal-500 titleShadow">y</h1>

                    <h1 id="skills_S" className="text-teal-500 pl-2 md:pl-5 hover:text-teal-500 titleShadow">S</h1>
                    <h1 id="skills_k" className="text-teal-500 hover:text-teal-500 titleShadow">k</h1>
                    <h1 id="skills_i" className="text-teal-500 hover:text-teal-500 titleShadow">i</h1>
                    <h1 id="skills_l" className="text-teal-500 hover:text-teal-500 titleShadow">l</h1>
                    <h1 id="skills_l_2" className="text-teal-500 hover:text-teal-500 titleShadow">l</h1>
                    <h1 id="skills_s" className="text-teal-500 hover:text-teal-500 titleShadow">s</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills