import React from "react";
import { Link } from "react-router-dom";

const RegistrationPage = ({ user, setUser }) => {






  const usernameHandler = (e) => {
    setUser({ ...user, username: e.target.value });
    console.log(e.target.value);
  };
  const passwordHandler = (e) => {
    setUser({ ...user, password: e.target.value });
    console.log(e.target.value);
  };
  const confirmPasswordHandler = (e) => {
    setUser({ ...user, confirmPassword: e.target.value });
    console.log(e.target.value);
  };

  const registrationSubmit = () => {

    
    
    if (user.password === user.confirmPassword) {
      console.log("jó");
      localStorage.setItem("user", JSON.stringify(user))
    } else {
      console.log("nem jó");
    }
    console.log(user);
  };
  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label htmlFor="username">Felhasználónév </label>
          <input
            id="username"
            placeholder="Felhasználónév"
            value={user.username}
            onChange={usernameHandler}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Jelszó</label>
          <input
            type="password"
            id="password"
            placeholder="Jelszó"
            value={user.password}
            onChange={passwordHandler}
          />
        </div>
        <div className="confirm-password">
          <label htmlFor="confirm-password">Jelszó megerősítése</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Jelszó megerősítése"
            value={user.confirmPassword}
            onChange={confirmPasswordHandler}
          />
        </div>
      </div>
      <div class="footer">
        <Link to={"/entry"}>
          <button class="back-btn">Vissza</button>
        </Link>
        <button onClick={registrationSubmit} type="submit" class="submit-btn">
          Regisztráció
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
