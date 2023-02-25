import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RegistrationPage = ({ user, setUser }) => {
  const nameHandler = (e) => {
    setUser({ ...user, name: e.target.value });
    console.log(e.target.value);
  };
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
      localStorage.setItem("user", JSON.stringify(user));
      setUser({
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
        entryTime: {},
      });
    } else {
      console.log("nem jó");
    }
    console.log(user);
  };
  return (
    <motion.div
      initial={{ opacity: 1, x: 400 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 400 }}
      transition={{ duration: 0.4 }}
      className="form"
    >
      <div className="form-body">
        <div className="name">
          <label htmlFor="name">Felhasználónév </label>
          <input
            id="name"
            placeholder="Név"
            value={user.name}
            onChange={nameHandler}
          />
        </div>
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
    </motion.div>
  );
};

export default RegistrationPage;
