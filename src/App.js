import React, { Component } from 'react';
import './App.css';

import Person from './components/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 30 },
      { name: "Mel", age: 20 },
      { name: "Moi", age: 50 }
    ]
  }

  swapName_handler = (newName) => {
    let orphand1 = 0, orphand2 = 0

    while(orphand1 === orphand2)
    {
      orphand1 = Math.floor(Math.random() * this.state.persons.length);
      orphand2 = Math.floor(Math.random() * this.state.persons.length);
    }

    const {persons} = this.state;
    let temp = persons[orphand1];
    persons[orphand1] = persons[orphand2];
    persons[orphand2] = temp;
    this.setState({persons});
  }

  setNewName_handler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Mel", age: 20 },
        { name: "Moi", age: 50 }
      ]
    })
  }

  onNameChange_handler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 30 },
        { name: event.target.value, age: 20 },
        { name: "Moi", age: 50 }
      ]
    })
  }
  

  render() {
    const { persons } = this.state;
    //inline style
    //cons - hard to use onHover
    const style = {
      padding: "0.5rem",
      margin: "0.5rem 0 0.5rem 0",
      borderRadius:" 0.5rem",
      border: "2px solid black",
      backgroundColor: "orange",
      outlineStyle: "none",
      cursor: "pointer"
    }
    return (
      <div className="App">
        <button style={style} onClick={this.swapName_handler}>Random Swap</button>
        <Person name={persons[0].name} age={persons[0].age} clickHandler={this.swapName_handler}/>
        <Person name={persons[1].name} age={persons[1].age} changed={this.onNameChange_handler}>Hobbies: Sky diving</Person>
        <Person name={persons[2].name} age={persons[2].age} clickHandler={this.setNewName_handler.bind(this,'Maya')} />
      </div>
    );
  }
}

export default App;
