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

  onButtonClick = (newWalletValue, newName) => {
    //console.log("Button click!");
    this.setState({
      customers : [
        {name: newName, wallet: newWalletValue},  
        {name: 'Mathew', wallet: '350'},     
        {name: 'Morgan', wallet: '420'}
      ]
    })
  }

inputAdded = (event) => {
  this.setState({
    customers: [
      {name: 'Max', wallet: '320'},
      {name: event.target.value, wallet: '350'},     
      {name: 'Morgan', wallet: '420'}
    ]
  })
}

  render(){
  
    const buttonStyle= {
    border: '1px solid blue',
    color: 'green',
    padding:'10px'
  }

  return (
    <div className="App">
      <h1 className="color-red">Hola!  The react App..</h1>            
      <p className="color-green">This is a paragraph here...</p>
      <Customer 
      num={this.state.customers[0].name} 
      wallet={this.state.customers[0].wallet}/>     
      <Customer 
      num={this.state.customers[1].name} 
      wallet={this.state.customers[1].wallet} 
      click={this.onButtonClick.bind(this, '800', 'Goblin')} 
      inputTyped={this.inputAdded}/>  
      <Customer 
      num={this.state.customers[2].name} 
      wallet={this.state.customers[2].wallet}>
        Choses à acheter
        <ul>
          <li>Le Chocolat</li>
          <li>Le pain avec du buerre</li>
        </ul>
      </Customer>
      <button style={buttonStyle} onClick={this.onButtonClick.bind(this, '200', 'Charlotte')}>Click Me!</button>
    </div>
  );
}
}

export default App;
