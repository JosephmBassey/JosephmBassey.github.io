import React, { Component } from 'react'
import {Link, NavLink, Route, BrowserRouter, Switch}  from 'react-router-dom'
import './Navbar.css'



export class Navbar extends Component {

    state={
        open: false,
        scrolled: false
    }
      
    componentDidMount(){
        window.addEventListener("scroll", ()=>{
        const IsTop= window.pageYOffset > 0;
        IsTop==true?(this.setState({scrolled: true})): (this.setState({scrolled: false}))
        })
    }
    

    render() {
        return (
            <div className= {this.state.scrolled== true ? "fixed-bar effexts fixed-top" : "fixed-bar"}>
                <div className="container nav p-2">
                    <div className="d-flex justify-content-center">
                        <NavLink to="/" className="navbar-brand heading-text" >JOSEPH</NavLink>
                    </div>
            
                    <div className={this.state.open=== false ? "toggler-icon p-2" : "toggler-icon toggler-icon-rotate p-2"} onClick={()=> this.setState({open: !this.state.open}) }>
                        <span className="rotate-1st"></span>
                        <span className="rotate-2nd"></span>
                    </div>
            
                    <div>
                        <div className={this.state.open=== false ? "menu": "menu showDropdown"}>
                            <NavLink to="/" className={this.state.open=== false ? "animate__animated": "animate__animated animate__fadeIn animate__delay-1s"}  onClick={()=> this.setState({open: !this.state.open}) }>Home</NavLink>
                            <a href="#contact" className={this.state.open=== false ? "animate__animated": "animate__animated animate__fadeIn animate__delay-1s"} onClick={()=> this.setState({open: !this.state.open}) }>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar

