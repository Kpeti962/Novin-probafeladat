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
      const month = [
        "Jan",
        "Febr",
        "Már",
        "Ápr",
        "Máj",
        "Jún",
        "Júl",
        "Aug",
        "Szept",
        "Okt",
        "Nov",
        "Dec",
      ];

      const d = new Date();
      let name = month[d.getMonth()];
      const currentTime = [
        new Date().getFullYear() +
          "." +
          name +
          "." +
          new Date().getDate() +
          " " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes(),
      ];
      setUser({ ...user, entryTime: currentTime, isLoggedIn: true });

      const storedUser = JSON.parse(localStorage.getItem("user"));
      storedUser.entryTime = currentTime;
      storedUser.isLoggedIn = true;

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
      className="entry-section d-flex flex-column align-items-center justify-content-center"
    >
      {dangerAlert && (
        <Alert
          variant="danger"
          className="position-absolute top-0 d-flex justify-content-center"
        >
          A felhasználónév vagy a jelszó nem egyezik
        </Alert>
      )}
      <div className="login-inputs d-flex justify-content-evenly text-align-center">
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
      <div className="entrypage-buttons d-flex text-align-center justify-content-center">
        <motion.button whileTap={{ scale: 0.85 }} onClick={loginHandler}>Belépés</motion.button>
        <Link to={"/registration"}>
          <motion.button whileTap={{ scale: 0.85 }}>Regisztráció</motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default EntryPage;
