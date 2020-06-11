import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegForm from "./regForm"
import Header from "./Header"
import Footer from "./Footer"
import Qrcode from "./components/Qrcode"

function App() {
  return (
    <div className="App">
      <Header />
     <RegForm />
     <Qrcode />
     <Footer />
    </div>
  );
}

export default App;
