import React, { useState } from "react";
import { Link } from "react-router-dom";

const EntryPage = () => {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginpassword, setLoginpassword] = useState("");
  const [ableToLogin, setAbleToLogin] = useState(false);

  const usernameHandler = (e) => {
    setLoginUserName(e.target.value);
  };
  const passwordHandler = (e) => {
    setLoginpassword(e.target.value);
  };

  const loginHandler = () => {
   
    const entryUser = JSON.parse(localStorage.getItem("user"));

     if (
      entryUser.username === loginUserName &&
      entryUser.password === loginpassword
      ) {
      setAbleToLogin(true);
      console.log("jó");
    } else {
      console.log("nem jó");
    }
  };

  return (
    <div className="entry-section">
      <div className="login-inputs">
        <input
          placeholder="Felhasználónév"
          type="text"
          value={loginUserName}
          onChange={usernameHandler}
        />
        <input
          placeholder="Jelszó"
          type="password"
          value={loginpassword}
          onChange={passwordHandler}
        />
      </div>
      <div className="entrypage-buttons">
        <Link to={ableToLogin ? "/mainpage" : "/entry"}>
          <button onClick={loginHandler}>Belépés</button>
        </Link>
        <Link to={"/registration"}>
          <button>Regisztráció</button>
        </Link>
      </div>
    </div>
  );
};

export default EntryPage;
