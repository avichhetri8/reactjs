import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './component/Person'

const App = () =>{
  const [personState , setPersonState] = useState({
    persons : [
      {'name':'a'}
    ]
  })

  
const switchNameHandler = (props) => {
  console.log("clicked")
  setPersonState({persons:[{'name' :'Clicked'}]}) 
}

   return(
        <div className="App">
            <h1>hello</h1>
            <button  onClick={switchNameHandler}  >Click Me</button>
            <Person name={personState.persons[0].name} />
        </div>
    
    );

}

export default App;

