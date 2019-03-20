import React, {useState} from 'react';
import './App.css';

import Person from './components/Person';


const app = props => {

  const [state, applyState] = useState({
    persons: [
      { name: "Max", age: 30 },
      { name: "Mel", age: 20 },
      { name: "Moi", age: 50 }
    ]
  });

  const swapName_handler = () => {
    let orphand1 = 0, orphand2 = 0

    while(orphand1 === orphand2)
    {
      orphand1 = Math.floor(Math.random() * state.persons.length);
      orphand2 = Math.floor(Math.random() * state.persons.length);
    }

    const {persons} = state;
    let temp = persons[orphand1];
    persons[orphand1] = persons[orphand2];
    persons[orphand2] = temp;
    applyState({persons});
  }

    const { persons } = state;
    
    return (
      <div className="App">
        <button onClick={swapName_handler}>Random Swap</button>
        <Person name={persons[0].name} age={persons[0].age} />
        <Person name={persons[1].name} age={persons[1].age}>Hobbies: Sky diving</Person>
        <Person name={persons[2].name} age={persons[2].age} />
      </div>
    );
}

export default app;
