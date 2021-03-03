import React from 'react'
import Axios from 'axios'

type usersList = { username : string, score:number}
function rank() {
  let users : usersList [] = []
  const getUsers = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:4000/usersList",
        }).then((res) => {
          users = res.data;
          console.log(users)
          
          
        });
      };
getUsers();
   return (
       <div> 
       {users.map(user => {
           <p>{user.username} : {user.score} : {user} </p>
       })}
       </div>
   )   
}


export default rank