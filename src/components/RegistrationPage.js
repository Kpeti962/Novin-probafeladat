import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Alert from "react-bootstrap/Alert";

const RegistrationPage = ({
  user,
  setUser,
  dangerAlert,
  setDangerAlert,
  successAlert,
  setSuccessAlert,
}) => {
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [enoughCharacter, setEnoughCharacter] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  useEffect(() => {
 
    if (
      user.name.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0 &&
      user.confirmPassword.length > 0
    ) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [user]);

  const nameHandler = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const usernameHandler = (e) => {
    setUser({ ...user, username: e.target.value });
  };
  const passwordHandler = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  const confirmPasswordHandler = (e) => {
    setUser({ ...user, confirmPassword: e.target.value });
  };

  const registrationSubmit = () => {
    if (
      user.name.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0 &&
      user.confirmPassword.length > 7 &&
      user.password === user.confirmPassword
    ) {
      localStorage.setItem("user", JSON.stringify(user));
      setUser({
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
        entryTime: {},
      });
      setSuccessAlert(true);
      setTimeout(() => {
        setSuccessAlert(false);
      }, 2000);
    } else if (
      user.name.length === 0 ||
      user.username.length === 0 ||
      user.password.length === 0 ||
      user.confirmPassword.length === 0
    ) {
      setDangerAlert(true);
      setTimeout(() => {
        setDangerAlert(false);
      }, 2000);
    } else if (user.password !== user.confirmPassword) {
      setPasswordMatch(true);
      setTimeout(() => {
        setPasswordMatch(false);
      }, 2000);
    } else if (user.confirmPassword.length < 8) {
      setEnoughCharacter(true);
      setTimeout(() => {
        setEnoughCharacter(false);
      }, 2000);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 1, x: 400 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 400 }}
      transition={{ duration: 0.4 }}
      className="form min-vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      {successAlert && (
        <Alert
          variant="success"
          className="position-absolute top-0 d-flex justify-content-center"
        >
          Sikeres regisztr??ci??
        </Alert>
      )}
      {dangerAlert && (
        <Alert
          variant="danger"
          className="position-absolute top-0 d-flex justify-content-center"
        >
          Minden mez?? kit??lt??se k??telez??
        </Alert>
      )}
      {passwordMatch && (
        <Alert
          variant="danger"
          className="position-absolute top-0 d-flex justify-content-center"
        >
          A jelszavaknak egyez??nek kell lennie
        </Alert>
      )}
      {enoughCharacter && (
        <Alert
          variant="danger"
          className="position-absolute top-0 d-flex justify-content-center"
        >
          A jelsz??nak legal??bb 8 karakternek kell lennie
        </Alert>
      )}
      <div className="form-body">
        <div className="name">
          <label htmlFor="name">N??v </label>
          <input
            id="name"
            placeholder="N??v"
            value={user.name}
            onChange={nameHandler}
          />
        </div>
        <div className="username">
          <label htmlFor="username">Felhaszn??l??n??v </label>
          <input
            id="username"
            placeholder="Felhaszn??l??n??v"
            value={user.username}
            onChange={usernameHandler}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Jelsz??</label>
          <input
            type="password"
            id="password"
            placeholder="(Legal??bb 8 karakter)"
            value={user.password}
            onChange={passwordHandler}
          />
        </div>
        <div className="confirm-password">
          <label htmlFor="confirm-password">Jelsz?? meger??s??t??se</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="(Legal??bb 8 karakter"
            value={user.confirmPassword}
            onChange={confirmPasswordHandler}
          />
        </div>
      </div>
      <div class="footer">
        <Link to={"/"}>
          <motion.button whileTap={{ scale: 0.85 }} class="back-btn">
            Vissza
          </motion.button>
        </Link>
        <motion.button
          disabled={disableSubmit}
          whileTap={{ scale: 0.85 }}
          onClick={registrationSubmit}
          type="submit"
          class="submit-btn"
        >
          Regisztr??ci??
        </motion.button>
      </div>
    </motion.div>
  );
};

export default RegistrationPage;
