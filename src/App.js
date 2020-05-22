import React, { Component } from 'react';
import './App.css';
//import Customer from './Customer/Customer';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'rabadaman45'
  }

  changeUsername = (event) =>{
    this.setState ({
      userName: event.target.value
    }
    );
  }

  render(){   
    const headStyle = {
      fontSize: '20px',
      color: 'green'
    }

  return (
    <div className="App">
      <h1 style={headStyle}>The UserInput/UserOutput React App</h1>
      <UserInput changeInput={this.changeUsername} userName={this.state.userName}/>
      <UserOutput  userName={this.state.userName}>Dynamic Username:</UserOutput>
      <UserOutput  userName={'raspberry97'} />
      <UserOutput  userName={'copenhaggen4'}/>
      <UserOutput  userName={'runaround77'}/>
    </div>
  );
}
}

export default App;
