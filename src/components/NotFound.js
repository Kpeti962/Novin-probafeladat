import React from 'react';
import { useNavigate } from "react-router-dom";


const NotFound = () => {
  const navigate = useNavigate();

  const backtToLoginHandler = () =>{
    navigate("/entry")
  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h1>Upsz. Valami rosszul sült el :(</h1>
      <h2>Az oldal nem elérhető vagy nincs jogosultságod hozzá.</h2>
      <button onClick={backtToLoginHandler}>Vissza a bejelentkezéshez</button>
    </div>
  )
}

export default NotFound;