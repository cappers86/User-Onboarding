import React from 'react';

const Card = (props) => {


    return (
      
      <ul>
        <h1>{props.users.name}</h1>
    <h2>email:{props.users.email}</h2>
    <h2>password:{props.users.password}</h2>
        </ul>
        
    );
  }
  
  export default Card ;