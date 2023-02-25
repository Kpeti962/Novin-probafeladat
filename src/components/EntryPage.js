import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Alert from "react-bootstrap/Alert";

const EntryPage = ({ user, setUser, dangerAlert, setDangerAlert }) => {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginpassword, setLoginpassword] = useState("");

  const navigate = useNavigate();

  const usernameHandler = (e) => {
    setLoginUserName(e.target.value);
  };
  const passwordHandler = (e) => {
    setLoginpassword(e.target.value);
  };

  const loginHandler = async () => {
    const entryUser = JSON.parse(localStorage.getItem("user"));

    if (
      entryUser.username === loginUserName &&
      entryUser.password === loginpassword
    ) {
      const currentTime = [
        new Date().getFullYear() +
          "." +
          new Date().getMonth(+1) +
          "." +
          new Date().getDate() +
          " " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes(),
      ];
      setUser({ ...user, entryTime: currentTime });

      const storedUser = JSON.parse(localStorage.getItem("user"));
      storedUser.entryTime = currentTime;

      localStorage.setItem("user", JSON.stringify(storedUser));

      navigate("/mainpage");
    } else {
      setDangerAlert(true);
      setTimeout(() => {
        setDangerAlert(false);
      }, 2000);
    }
    return;
  };

  return (
    <motion.div
      initial={{ opacity: 1, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -400 }}
      transition={{ duration: 0.4 }}
      className="entry-section"
    >
      {dangerAlert && (
        <Alert
          variant="danger"
          className="position-absolute top-0 d-flex justify-content-center"
        >
          A felhasználónév vagy a jelszó nem egyezik
        </Alert>
      )}
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
        <button onClick={loginHandler}>Belépés</button>

        <Link to={"/registration"}>
          <button>Regisztráció</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default EntryPage;
