import React from 'react'
import {Link, NavLink, Route, BrowserRouter, Switch}  from 'react-router-dom'
import Main from '../Main/Main'
// import About from "../About/About"
import ProjectLists from '../ProjectLists/ProjectLists'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'


const Home = () => {
    return (
        <div className="App">
            <Main/>
            <Contact/>
            <Footer/>
        </div>  
    )
}

export default Home
