import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ActualAccount from "./ActualAccount";

const AccountsList = ({ accounts, setAccounts }) => {
  const navigate = useNavigate();
  const location = useLocation({});

  const viewAccountHandler = (key) => {
 /*    navigate(`/${key + 1}`); */
    console.log(key + 1);
  };

  const deleteHandler = (itemName, key) => {
    const updatedAccounts = accounts.filter((account, index) => index !== key);
  setAccounts(updatedAccounts);
    console.log();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -400 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -400 }}
      transition={{ duration: 0.4 }}
      className="container"
    >
      <table className="table">
        <thead>
          <tr className="text-white">
            <th scope="col">Sorszám</th>
            <th scope="col">Név</th>
            <th scope="col">Kiállítás dátuma</th>
            <th scope="col">Esedékesség dátuma</th>
            <th scope="col">Tétel neve</th>
            <th scope="col">Ár</th>
            <th scope="col">Komment</th>
            <th scope="col">Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, key) =>
        
         (
            <tr key={key}>
              <th>{key + 1}</th>
              <th>{account.name}</th>
              <th>{account.dateOfIssue}</th>
              <th>{account.dueDate}</th>
              <th>{account.itemName}</th>
              <th>{account.price} Ft</th>
              <th>{account.comment}</th>
              <th>
                <div className="d-flex align-items-center">
                  <button onClick={() => viewAccountHandler(key)}>
                    Megtekint
                  </button>
                  <button onClick={() => deleteHandler(account.itemName, key)}>Törlés</button>

                  <Routes location={location} key={location.pathname}>
                    <Route
                      path={`/${key + 1}`}
                      element={<ActualAccount account={account} />}
                    ></Route>
                  </Routes>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      {accounts.length === 0 && (
        <h3 className="d-flex justify-content-center">
          Jelenleg nincsen elkészített számla
        </h3>
      )}
      <div>
        <Link to={"/mainpage"}>
          <button>Menü</button>
        </Link>
        <Link to={"/createAccount"}>
          <button>Számla készítése</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default AccountsList;
