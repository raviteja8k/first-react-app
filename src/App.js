import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    string: '',
    splitString: [],
    stringLength : 0
  };

  lengthFinder = (event) => {
    const newString = event.target.value;
    const newSplitString = newString.split('');
    const newStringLength= event.target.value.length;
    this.setState({string: newString, splitString: newSplitString, stringLength: newStringLength});
  }
 
  deleteChar = (index) => {
    const delString = [...this.state.splitString];
    delString.splice(index, 1);
    const newStrLength = delString.length;
    const joinString = delString.join('');
    this.setState({splitString: delString, string: joinString, stringLength: newStrLength});
  }

  render(){   

  return (
    <div className="App">
      <h1>Voici ma 'The String App'</h1>
      <input onChange={(event) => this.lengthFinder(event)} value={this.state.string}/>  
      <p>The length of the string is {this.state.stringLength}</p>
      <Validation strlen={this.state.stringLength}/>
     {(this.state.string.length>=1)? 
      this.state.splitString.map((str,id) => 
      <Char displayString={str} 
            key={id} 
            clicked={() => this.deleteChar(id)}/>)
    : null}
    </div>
  );
}
}

export default App;
