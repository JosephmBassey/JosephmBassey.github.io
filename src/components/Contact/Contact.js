import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact mb-5">
            <div className="container">

                <div className="section-title animate__animated animate__delay-1.6s">
                    <h2 className="contact-us-text h2-text">Contact</h2>
                </div>

            
                <div className="row ">

                    <div className="col-md-6 col-lg-4 mt-sm-4 d-flex align-items-center justify-content-center share animate__animated animate__delay-1.0s">
                    <div className="info-box">
                        <i className="bx bx-share-alt"></i>
                        <h3>Social Profiles</h3>
                        <div className="social-links">
                            <a href="https://twitter.com/jm_bassey" className="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="https://web.facebook.com/josephmbassey/" className="facebook"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                            <a href="https://wa.me/2348182406562" className="google-plus"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/jmbassey/" className="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            <a href="https://github.com/josephmbassey" className="Github"><i class="fa fa-github" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mt-sm-4 d-flex align-items-center justify-content-center email animate__animated animate__delay-2.0s">
                    <div className="info-box">
                        <i className="bx bx-envelope"></i>
                        <h3>Email Me</h3>
                        <p>joseph.mbassey2@gmail.com</p>
                    </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mx-auto mt-sm-4 d-flex align-items-center justify-content-center number animate__animated animate__delay-3.0s">
                    <div className="info-box">
                        <i className="bx bx-phone-call"></i>
                        <h3>Call Me</h3>
                        <p>+234 818 240 6562</p>
                        <p>+234 706 192 6206</p>
                    </div>
                    </div>

                </div>

                <div className="row">

                

                    <div className="col-12">

                        <div className="section-title animate__animated animate__delay-1.6s mt-5 text-center">
                            <h2 className="contact-us-text h2-text">Message</h2>
                            <p className="h2">Send a Message</p>
                        </div>

                        <form action="" class="email-form mt-4">

                            <div class="form-row">
                                <div class="col-md-6 form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name"/>
                                </div>

                                <div class="col-md-6 form-group">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"/>
                                </div>
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
                            </div>

                            <div class="form-group">
                                <textarea class="form-control" name="message"  placeholder="Message"></textarea>
                            </div>

                            <div class="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>  
    )
}

export default Contact
