import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    customers : [
    {id: 'asd44', name: 'Moses', wallet: '280'},  
    {id: 'er44', name: 'Mathew', wallet: '350'},     
    {id: 'aers44', name: 'Morgan', wallet: '420'},
    {id: 'jklj4k4', name: 'Megan', wallet: '370'}],
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

  let persons = null;
  
  if( this.state.showDisplay )
  persons = (
   <div>
     {
       this.state.customers.map((customer, customerKey) => 
        <UserOutput key={customer.id} 
                    change={(event) => this.changeCustomername(event, customer.id)} 
                    click={() => this.deleteCustomer(customerKey)} 
                    cname={customer.name} 
                    cwallet={customer.wallet}/>
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
