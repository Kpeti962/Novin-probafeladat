import React from 'react';
import { Link } from "react-router-dom";

const EntryPage = () => {
  return (
    <div className="entry-section">
      
    <div className="login-inputs">
      <input placeholder="Felhasználónév" type="text" />
      <input placeholder="Jelszó" type="password" />
    </div>
    <div className="entrypage-buttons">
      <Link to={"/mainpage"}><button>Belépés</button></Link>
      <Link to={"/registration"}><button>Regisztráció</button></Link>
    </div>
  
</div>
  )
}

export default EntryPage;