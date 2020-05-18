import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import AboutDave from './components/AboutDave';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Pets from './components/Pets';
import Student from './components/Student';
import Movies from './components/Movies';


class App extends Component { // Student extends CodeNation
  render() { // render method is used inside of Class Based components
    return (
      <div className="App">
        <Navbar />
        <Heading />
        <AboutMe />
        <AboutDave />
        <Student name = "Adam" age={22}/>
       <Pets breed= "dog" name= "boydie" color="tan" age={7} />
       <Pets breed="cat" name="pheobe" color="white" age={3} />
       <Pets breed="rabbit" name="beans" color="black" age={2} />
       <Movies title="Drive" year="2011" actor="Ryan Gosling" />
       <Movies title="American Beauty" year="1999" actor="Kevin Spacey" />
      </div>
    )
  }
}


export default App; //this line is crucial 

