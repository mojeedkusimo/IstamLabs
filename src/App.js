import React from 'react';
import './App.css';
import Attendance from "./components/Attendance"
import Home from "./components/Home"
import Register from "./components/Register"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route path="/" exact component={Home}/>
        <Route path="/attendance" component={Attendance}/>
        <Route path="/register" component={Register}/>
      </BrowserRouter>
    </div>
  )
}

export default App;
