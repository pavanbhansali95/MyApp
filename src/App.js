import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Person from './Persons/Person';

function App(props) {


  const [persons,setPersons] = useState (
    [
      {
    name: 'mark',age: 22
  },

  {
    name: 'alen',age: 25
  }
]
);

const changeNameHandler = (newName) => {
  setPersons([
    {
  name: newName,age: 22
},

{
  name: 'alen',age: 25
}
])
}





  return (
    <div className="App">
   <Person click={changeNameHandler.bind(this,'Marry')} name={persons[0].name} age={persons[0].age} />
   <Person   name={persons[1].name} age={persons[1].age} />

   <button onClick = {changeNameHandler.bind(this,'Marry')}>Click Me</button>
    </div>
  );
}

export default App;
