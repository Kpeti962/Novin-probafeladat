import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AccountsList = ({ accounts, setAccounts }) => {
  const navigate = useNavigate();

  const viewAccountHandler = (key) => {
    navigate(`/id/${key}`);
  };

  const deleteHandler = (itemName, key) => {
    if (window.confirm("Valóban törölni szeretnéd a számlát?")) {
      const updatedAccounts = accounts.filter(
        (account, index) => index !== key
      );
      setAccounts(updatedAccounts);
      localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -400 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -400 }}
      transition={{ duration: 0.4 }}
      className="container overflow-auto min-vh-100"
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
          {accounts.map((account, key) => (
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
                  <motion.button whileTap={{ scale: 0.85 }} onClick={() => viewAccountHandler(key)}>
                    Megtekint
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.85 }} onClick={() => deleteHandler(account.itemName, key)}>
                    Törlés
                  </motion.button>
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
          <motion.button whileTap={{ scale: 0.85 }}>Menü</motion.button>
        </Link>
        <Link to={"/createAccount"}>
          <motion.button whileTap={{ scale: 0.85 }}>Számla készítése</motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default AccountsList;
