import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Customer from './Customer/Customer';

class App extends Component {
  state = {
    customers : [
      {name: 'Max', wallet: '320'},
      {name: 'Mathew', wallet: '350'},
      {name: 'Morgan', wallet: '420'}
    ]
    
  };

  render(){
  return (
    <div className="App">
      <h1 className="color-red">Hola!  The react App..</h1>            
      <p className="color-green">This is a paragraph here...</p>
      <Customer num={this.state.customers[0].name} wallet={this.state.customers[0].wallet}/>     
      <Customer num={this.state.customers[1].name} wallet={this.state.customers[1].wallet}/>  
      <Customer num={this.state.customers[2].name} wallet={this.state.customers[2].wallet}>Choses à acheter
        <ul>
          <li>Le Chocolat</li>
          <li>Le pain avec du buerre</li>
        </ul>
      </Customer>
      <Customer num="4" wallet="280"/>  
    </div>
  );
}
}

export default App;
