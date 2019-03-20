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

  swapName_handler = () => {
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

  render() {
    const { persons } = this.state;
    return (
      <div className="App">
        <button onClick={this.swapName_handler}>Random Swap</button>
        <Person name={persons[0].name} age={persons[0].age} />
        <Person name={persons[1].name} age={persons[1].age}>Hobbies: Sky diving</Person>
        <Person name={persons[2].name} age={persons[2].age} />
      </div>
    );
  }
}

export default App;
