import React from "react";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label for="username">Felhasználónév </label>
          <input placeholder="Felhasználónév" />
        </div>
        <div className="password">
          <label for="password">Jelszó</label>
          <input placeholder="Jelszó" />
        </div>
        <div className="confirm-password">
          <label for="confirmPassword">Jelszó megerősítése</label>
          <input placeholder="Jelszó megerősítése" />
        </div>
      </div>
      <div class="footer">
        <Link to={"/entry"}><button class="back-btn">
          Vissza
        </button></Link>
        <button type="submit" class="submit-btn">
          Regisztráció
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
