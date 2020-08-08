import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import './App.css';

import {Link, NavLink, Route, BrowserRouter, Switch}  from 'react-router-dom'

import Header from "./components/Header/Header"
import Main from './components/Main/Main'
import About from "./components/About/About"
import ProjectLists from './components/ProjectLists/ProjectLists'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'




export class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App



