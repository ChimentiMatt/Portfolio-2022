import gsap from "gsap"
import emailjs from 'emailjs-com';

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


    const sendEmail = (e) => {
        e.preventDefault()

        // Check if form is filled out
        if (e.target[0].value !== '' && e.target[1].value !== '' && e.target[2].value !== '' && e.target[3].value !== ''){

            // Send email
            emailjs.sendForm('service_eteo1ua', "template_869gumn", e.target, 'user_36LBaEeyrSAXckH2SDyR7')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                console.log('FAILED...', error);
                });
        }
    }

  return (
    <div>
        <form onSubmit={sendEmail} id='test3' className="flex flex-col text-black w-[95%] h-[27rem] md:w-[45rem]">
            <div className="flex justify-between mb-2">
                <input id="nameForm" onClick={accentField} name="name" className="bg-white w-[49%] p-2 border-2 border-white md:p-4" placeholder="Name"></input>
                <input id="emailForm" onClick={accentField} type="email" name="email" className="bg-white w-[49%] p-2 border-2 border-white md:p-4" placeholder="Email"></input>
            </div>
                <input id="subjectForm" onClick={accentField} name="subject" className="bg-white p-2 mb-2 border-2 border-white md:p-4" placeholder="Subject"></input>
                <textarea id="messageForm" onClick={accentField} name="message" className="bg-white p-2 h-full border-2 border-white  md:p-4" placeholder="Message"></textarea>
            <div className="flex justify-end">
                <button id="contactBtn" onMouseEnter={hoverButton} onMouseLeave={exitHoverButton} className=" p-3 pl-12 pr-12 mt-[2rem]  text-teal-500 border-2 border-teal-500 bg-black md:bg-black">Send Message</button>
            </div>
        </form>

    </div>
  )
}

export default ContactForm