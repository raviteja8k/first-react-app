import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    customers : [
    {name: 'Moses', wallet: '280'},  
    {name: 'Mathew', wallet: '350'},     
    {name: 'Morgan', wallet: '420'},
    {name: 'Megan', wallet: '370'}],
    showDisplay: false
  }

 

  toggleDisplay = () => {
    const display = this.state.showDisplay;
    this.setState({showDisplay: !display});
  }

  deleteCustomer = (indexKey) => {
    const iCustomers = [...this.state.customers];
    iCustomers.splice(indexKey, 1);
    console.log(iCustomers);
    this.setState({customers: iCustomers});
  };

  render(){   
    const headStyle = {
      fontSize: '20px',
      color: 'green'
    }

  let persons = null;
  
  if( this.state.showDisplay )
  persons = (
   <div>
     {
       this.state.customers.map((customer, customerKey) => 
        <UserOutput key={customerKey} click={() => this.deleteCustomer(customerKey)} cname={customer.name} cwallet={customer.wallet}/>
       )}
    </div>
   );

  return (
    <div className="App">
      <h1 style={headStyle}>The UserInput/UserOutput React App</h1>
      <button onClick={this.toggleDisplay}>Toggle Display</button>
      {persons}
    </div>
  );
}
}

export default App;
