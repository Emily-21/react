import React from 'react';

/*create a component that allows the user to show off pets, age
  specifies, food legs walks 
  pass props through inside the app component.*/
  
const Pets = (props) => {
    return (
  <div>
  <li>species: {props.breed}</li>
  <li>name: {props.name}</li>
  <li>age: {props.age}</li>
  <li>color: {props.color}</li>
  
  </div>
    )
    
  }


  export default Pets;