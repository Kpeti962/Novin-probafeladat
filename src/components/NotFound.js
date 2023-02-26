import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const NotFound = () => {
  const navigate = useNavigate();

  const backtToLoginHandler = () =>{
    navigate("/")
  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h1>Upsz. Valami rosszul sült el :(</h1>
      <h2>Az oldal nem elérhető vagy nincs jogosultságod hozzá.</h2>
      <motion.button whileTap={{ scale: 0.85 }} onClick={backtToLoginHandler}>Ugrás a bejelentkezéshez</motion.button>
    </div>
  )
}

export default NotFound;