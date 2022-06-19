import gsap from "gsap"
import emailjs from 'emailjs-com';

import Typing from "../images/typing.gif"

const ContactForm = ({toast}) => {
    let currentID = ''
    let formSent = false


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

    const sendEmail = (e) => {
        e.preventDefault()
        
        // Check if form is filled out
        if (e.target[0].value !== '' && e.target[1].value !== '' && e.target[2].value !== '' && e.target[3].value !== '' && !formSent){
            formSent = true
            // Send email
            // emailjs.sendForm('service_eteo1ua', "template_869gumn", e.target, 'user_36LBaEeyrSAXckH2SDyR7')
            // .then(function(response) {
            //         console.log('SUCCESS!', response.status, response.text);
            //     }, function(error) {
            //         console.log('FAILED...', error);
            //     });

            document.querySelector('#celebrate').style.opacity = '1'
            document.querySelector('#duckDance').style.opacity = '1'

            toast()
            document.getElementById('contactForm').style.opacity = .2
            document.getElementById('contactBtn').style.pointerEvents = 'none'
            document.getElementById('nameForm').style.pointerEvents = 'none'
            document.getElementById('emailForm').style.pointerEvents = 'none'
            document.getElementById('subjectForm').style.pointerEvents = 'none'
            document.getElementById('messageForm').style.pointerEvents = 'none'
        }
        // Make red visuals for if the field was not filled out
        if (e.target[0].value === '') document.getElementById("nameForm").style.borderBottom = '3px red solid' 
        if (e.target[1].value === '') document.getElementById("emailForm").style.borderBottom = '3px red solid' 
        if (e.target[2].value === '') document.getElementById("subjectForm").style.borderBottom = '3px red solid' 
        if (e.target[3].value === '') document.getElementById("messageForm").style.borderBottom = '3px red solid' 
    }

  return (
    <form onSubmit={sendEmail} id='contactForm' className="opacity-0 flex flex-col text-black w-[95%] h-[27rem] md:w-[45rem]">
        <div className="flex justify-between mb-2">
            <input id="nameForm" onClick={accentField} name="name" className="bg-white w-[49%] p-2 border-2 border-white md:p-4" placeholder="Name"></input>
            <input id="emailForm" onClick={accentField} type="email" name="email" className="bg-white w-[49%] p-2 border-2 border-white md:p-4" placeholder="Email"></input>
        </div>
            <input id="subjectForm" onClick={accentField} name="subject" className="bg-white p-2 mb-2 border-2 border-white md:p-4" placeholder="Subject"></input>
            <textarea id="messageForm" onClick={accentField} name="message" className="bg-white p-2 h-full border-2 border-white  md:p-4" placeholder="Message"></textarea>
            <div className="h-0">
                <img id="catTypingMobile" className="sm:hidden relative h-[5rem] top-[-5rem] right-[-13rem]" src={Typing} alt="cat typing" />
            </div>
        <div className="flex justify-end">
            <button id="contactBtn" className="contactBtn p-3 pl-12 pr-12 mt-[2rem] border-2 border-white  hover:bg-black hover:text-white ">Send Message</button>
        </div>
    </form>
  )
}

export default ContactForm