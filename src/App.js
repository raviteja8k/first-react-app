import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Customer from './Customer/Customer';

function App() {
  return (
    <div className="App">
      <h1 className="color-red">Hola!  The react App..</h1>
      <p className="color-green">This is a paragraph here...</p>
      <Customer />
    </div>
  );
}

export default App;
