import React from 'react'
import './Intro.css'

const Intro = () => {
    return (
        <div className="Intro">
            <div className="container mt-5">
            <h1 className="animate__animated animate__fadeInLeft animate__delay-0.5s">Hi, I'm <span style={{color: "#35e888"}}>Joseph Bassey.</span></h1>
            <h3 className="Iam-text animate__animated animate__fadeIn animate__delay-1s">A passionate <span className="job-desc">Software Engineer</span> with over 2 years of professional experience, currently working as Backend Engineer at <a href="https://linkedin.com/company/akufintech/">Aku Fintech</a> </h3>
            <p className="mt-4 Iam-text p-text animate__fadeInDown animate__animated animate__delay-2s">
           
            </p>
        
            <div className="mt-4 intro-box">
                <div className="social-links animate__animated animate__fadeInLeft animate__delay-3s">
                <a href="https://twitter.com/jm_bassey" className="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="https://web.facebook.com/josephmbassey/" className="facebook"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a href="https://wa.me/2348182406562" className="google-plus"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/jmbassey/" className="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://github.com/josephmbassey" className="Github"><i class="fa fa-github" aria-hidden="true"></i></a>
                    
                </div>
            </div>
        
            </div>
        </div>
    )
}

export default Intro
