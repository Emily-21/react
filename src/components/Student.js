import React from 'react';

/*create a component that allows the user to show off pets, age
  specifies, food legs walks 
  pass props through inside the app component.*/

  // props is an 'object'. when we . we are adding a value to the object


  const Student = (props) => {
    return(
      <div>
       <p> Hello my name is {props.name} and my age is {props.age}</p> 
      </div>
    )
    }
    

    export default Student;