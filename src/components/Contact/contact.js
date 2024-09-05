import React from "react";
import './contact.css';




const Contact = () => {

    return (
        <section className="section-contact" id="contact">
             <div class="contact-header">
                    <h1>Get In Touch</h1>
                    <span>Do you have a project in mind, contact me here</span>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="contact-info">
                        <h2>Find Me <i class="uil uil-corner-right-down"></i></h2>
                            <p><i class="uil uil-envelope"></i> Email: Ibrahimbolaji317@gmail.com</p>
                            <p><i class="uil uil-phone"></i> Tel: +234 706 183 5932</p>
                        </div>

                    </div>
                    <div class="col">
                        <div class="form-control"  >
                            <div class="form-inputs">
                                <input type="text" className="input-field" placeholder="Name" name="name" required/>
                                <input type="text" className="input-field" placeholder="Email" name="email" required/>
                              
                           
                            </div>
                            <div class="text-area">
                                <textarea name="message" placeholder="Message" required></textarea>
                            </div>
                            <div class="form-button">
                                <button type="submit" class="btn">Send <i class="uil uil-message"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                
        </section>
    )
}
export default Contact;
