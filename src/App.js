import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';
 
const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons : [
    {name:'Ali', age :28},
    {name:'Shahid', age :28},
    {name:'Ishaque', age :28}
    ],
    otherstate:'Something is there'
  });
  const switchNameHandler = () => {  
    //console.log('Button Clicked!');
    setPersonsState ({
      persons:[
        {name:' Ishaque Ali', age :28},
        {name:'Shahid', age :28},
        {name:'Ishaque', age :28}
      ],
    
    });
  };
  
     return (
      <div className="App">
         <h1>Hi I am a react app</h1>
         <button onClick={switchNameHandler}>Switch Name</button>
         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
         <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies  is Racing</Person>
         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
         
       </div>
    );
 //return React.createElement('div',{className:'App'},React.createElement('hi', null, 'Hii I am react JS'));
  };


  
  
export default App;

 

