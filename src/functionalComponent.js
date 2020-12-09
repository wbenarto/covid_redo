import React, { useState } from 'react';
import Person from './components/Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name:"Bill", age:21},
      { name:"Joe", age:41}
    ]
  })

  const handleClick = () => {
    setPersonsState({
      persons: [
        { name:"Joel", age:44 },
        { name:"Kim", age:32 }
      ]
    })
  }

  return (
    <div className='App'>
      <h1>This is my React App</h1>
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age}></Person>
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age}></Person>
    
      <button onClick={handleClick}>Click to change Info</button>
    </div>
  )
}

export default App;