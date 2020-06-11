import React, { Component } from 'react';
import './App.css';
import Persons from './UserOutput/Persons';
import persons from './UserOutput/Persons';

class App extends Component {
  state = {
    customers : [
    {id: 'asd44', name: 'Moses', wallet: '280'},  
    {id: 'er44', name: 'Mathew', wallet: '350'},     
    {id: 'aers44', name: 'Morgan', wallet: '420'},
    {id: 'jklj4k4', name: 'Megan', wallet: '370'},
    {id: 'ilko34s', name: 'Munroe', wallet: '570'},
    {id: 'ujdds567', name: 'Merry', wallet: '250'}],
    showDisplay: false
  }

 

  toggleDisplay = () => {
    const display = this.state.showDisplay;
    this.setState({showDisplay: !display});
  }

  deleteCustomer = (indexKey) => {
    const iCustomers = [...this.state.customers];
    iCustomers.splice(indexKey, 1);
   // console.log(iCustomers);
    this.setState({customers: iCustomers});
  };

  changeCustomername = (event, id) => {
    // new array to update state
    const newCustomers = [...this.state.customers];

    // first find respective index of the customer
    const customerIndex = 
          this.state.customers.findIndex(p => {
          return p.id === id;      
        });
    
    // replace customer at that index to new customer
    const newCustomer = {...this.state.customers[customerIndex]};
    //change name of that customer to input typed
    newCustomer.name = event.target.value;
    
    //adding new customer name 
    newCustomers[customerIndex] = newCustomer;
    
    this.setState({
      customers: newCustomers
    });

  };

  render(){   
    const headStyle = {
      fontSize: '20px',
      color: 'green'
    }

    const buttonStyle = {
      backgroundColor: '#fff',
      padding: '10px',
      color: '#333'
    }

    //Code to change para color based on elements
    const classes = [];
    if(this.state.customers.length<=5) { classes.push('redFont'); }
    if(this.state.customers.length<=3) {classes.push('bold');}

    //Code to toggle display of elements
    let persons = null;
  
  if( this.state.showDisplay ){ 
    persons = (
       <div>
       <p className={classes.join(' ')} 
          style={{color: 'green'}}>This para's style changes based on number of elements below.</p>
       <Persons customers={this.state.customers} 
                change={this.changeCustomername} 
                delete={this.deleteCustomer}  />     
     </div>
   );
   buttonStyle.backgroundColor= 'green';    
   buttonStyle.color= '#fff';
  } 

  return (
    <div className="App">
      <h1 style={headStyle}>The UserInput/UserOutput React App</h1>      
      <button style={buttonStyle} onClick={this.toggleDisplay}>Toggle Display</button>
     {persons}      
    </div>
  );
}
}

export default App;
