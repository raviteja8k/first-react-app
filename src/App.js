import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Customer from './Customer/Customer';

function App() {
  return (
    <div className="App">
      <h1 className="color-red">Hola!  The react App..</h1>
      <p className="color-green">This is a paragraph here...</p>
      <Customer num="1" wallet="320"/>     
      <Customer num="2" wallet="350"/>  
      <Customer num="3" wallet="420"/>  
      <Customer num="4" wallet="280"/>  
    </div>
  );
}

export default App;
