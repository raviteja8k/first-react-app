import React, { Component } from 'react';
import './App.css';
//import Customer from './Customer/Customer';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'rabadaman45',
    showDisplay: false
  }

  changeUsername = (event) =>{
    this.setState ({
      userName: event.target.value
    }
    );
  }

  clickHandler = (props) => {
    this.setState({
      userName: props
    });
  }

  toggleDisplay = () => {
    const display = this.state.showDisplay;
    this.setState({showDisplay: !display});
  }

  render(){   
    const headStyle = {
      fontSize: '20px',
      color: 'green'
    }

  const persons = (<UserOutput  userName={'runaround77'}>Children: </UserOutput>);

  return (
    <div className="App">
      <h1 style={headStyle}>The UserInput/UserOutput React App</h1>
      <button onClick={this.toggleDisplay}>Toggle Display</button>
      { this.state.showDisplay ?
        <div>
        <UserInput changeInput={this.changeUsername} defuserName={this.state.userName}/>
        <UserOutput  userName={this.state.userName}>Dynamic Username:</UserOutput>
        <UserOutput  userName={this.state.userName} click={this.clickHandler.bind(this,'raspberry978')}/>
        <UserOutput  userName={'copenhaggen4'}/>
        
        {persons}
        </div> : null
      }
    </div>
  );
}
}

export default App;
