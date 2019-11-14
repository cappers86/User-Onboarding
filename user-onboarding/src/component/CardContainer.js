import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';


const CardContainer = () => {
    const [users, fetchusers] = useState([]);


useEffect (() => {

    axios.get('https://reqres.in/api/users')
          .then(responce => {
              console.log(responce.data.results);
              fetchusers(responce.data.results);
          })
          .catch(error => {
              console.log(error);
          })
}, [])

  return (
    <div>
     {
         users.map((users, index) => {
             return(
                 <Card key={index} user={users}/>
             )
         })
     }
    </div>
  );
}

export default CardContainer ;