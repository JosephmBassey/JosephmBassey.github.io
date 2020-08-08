import React from 'react'
import './DefaultHeaderAnimation.css'

const DefaultHeaderAnimation = (props) => {
    return (
        <div className="container-fluid">
            <div className="container animation1">
                <h2 className=" Main-Header animate__animated animate__fadeInLeft animate__delay-0.5s">{props.text}</h2>
                <p className="h5 sub-text animate__animated animate__fadeIn animate__delay-1s">{props.subText}</p>
                <div className="box1">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default DefaultHeaderAnimation
