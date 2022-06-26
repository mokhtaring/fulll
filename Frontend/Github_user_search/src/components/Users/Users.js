import React, { useState } from 'react'
import axios from 'axios'
import User from './User'

export default function Users() {
  // -------------------------initialisation de states d'application----------------------------------------
    const[users,setUsers]=useState([]);
    const[loading,setLoading]=useState(false);
  //-------------getUserSearchfrom est une fonction qui permet de demander et recevoir la date d'API-------
    const getUserSearchfrom =(e)=>{
      setLoading(true);
        const data=e.target.value;
        if(data!==''){
          axios.get(`https://api.github.com/search/users?q=${data}`)
         .then(respens =>{
            setLoading(false);
            setUsers(respens.data.items);
         })
         }}
    
 return (
    <div className='container mt-2'>
       <div className="row">
          <div className="col-md-12 my-2">
          {/*----------------------Barre de recherche de users---------------------------- */}
            <form>
               <input onChange={getUserSearchfrom} placeholder='search users...' id='search' type="text" className="form-control" autoComplete="off"/>
            </form>
          </div>
       </div>
       {/*---------------------------Affichage de users-------------------------------- */}
       <div>{loading?"Chargement en cours...":
          <div className="row">
            {users.map(user => (
              <div className="col-md-4" key={user.id}>
                  {/*------------User est un compenent pour chaque item "user"---------------------  */}
                  <User user={user}/>
              </div>))}
          </div>}
       </div>
  </div>
  )
}

