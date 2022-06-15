import gsap from "gsap"
const ContactForm = () => {
    let currentID = ''

    const hoverButton = (e) => {
        gsap.to("#" + e.target.id, { background: 'white', color: 'black', borderColor: 'black'})
    }
    const exitHoverButton = (e) => {
        gsap.to("#" + e.target.id, { background: 'black', color: 'teal', borderColor: 'teal'})
    }

    const accentField = (e) => {
        if (currentID === ''){
            gsap.to('#' + e.target.id, {duration:0,  delay: 0, borderBottom: '3px teal solid',  })
            currentID = e.target.id
        }
        else if (currentID !== e){
            gsap.to('#' + currentID, {duration:0,  delay: 0, borderBottom: '3px white solid',  })
            gsap.to('#' + e.target.id, {duration:0,  delay: 0, borderBottom: '3px teal solid',  })
            currentID = e.target.id
        }
    }

  return (
    <div>
        <form id='test3' className="flex flex-col text-teal-500 w-[95%] h-[27rem] md:w-[45rem]">
            <div className="flex justify-between mb-2">
                <input id="nameForm" onClick={accentField} className="bg-white w-[49%] p-2 border-2 border-white md:p-4" placeholder="Name"></input>
                <input id="emailForm" onClick={accentField} className="bg-white w-[49%] p-2 border-2 border-white md:p-4" placeholder="Email"></input>
            </div>
                <input id="subjectForm" onClick={accentField} className="bg-white p-2 mb-2 border-2 border-white md:p-4" placeholder="Subject"></input>
                <textarea id="messageForm" onClick={accentField} className="bg-white p-2 h-full border-2 border-white  md:p-4" placeholder="Message"></textarea>
            <div className="flex justify-end">
                <button id="contactBtn" onMouseEnter={hoverButton} onMouseLeave={exitHoverButton} className=" p-3 pl-12 pr-12 mt-[2rem]  text-teal-500 border-2 border-teal-500 bg-black md:bg-black">Send Message</button>
            </div>
        </form>

    </div>
  )
}

export default ContactForm