import React, { useRef } from "react";
import "./Contact.css"; 
import emailjs from '@emailjs/browser';


function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lskf6fs', 'template_h1ww54j', form.current, 'UAodmoz2M3sEj_GFe')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email Sent. Thank You!");
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <div id="contact" className="contact">
            <h1 className="formTitle">Contact Me</h1>
            <form className="formBlock" ref = {form} onSubmit={sendEmail}>
                <div className="Info">
                    <div className="leftInfo">
                        <input type="email"  placeholder="Your Email" className="inputText" name="your_email"></input><br></br>
                        <input type="text" placeholder="Job Role" className="inputText" name="your_role"></input><br></br>
                        {/* <input type="number" placeholder="Contact Email" className="inputText"></input><br></br> */}
                        {/* <input type="text" placeholder="Patient Name" className="inputText"></input><br></br> */}
                        {/* <input type="date" placeholder="Patient Birth Date" className="inputText"></input><br></br> */}
                        
                    </div>
                    <div className="rightInfo">
                        <textarea placeholder="Any Comments" rows="6" cols="30" className="Textboxs" name="message"></textarea><br></br>         
                        {/* <textarea placeholder="Additional Concern" rows="5" cols="30" className="Textboxs"></textarea><br></br>                 */}
                    </div>
                    
                </div>
                <br></br>


                {/* <div className="confirmation">
                    <input type="checkbox" ></input>
                    <label id="">   You confirm all the information is valid upto best of your knowlegde </label><br></br>
                </div> */}
                <input type="submit" className="submits" value="Send"></input>
            </form>
        </div>
    )
}

export default Contact;