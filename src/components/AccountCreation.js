import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import { motion } from "framer-motion";

const AccountCreation = ({
  account,
  setAccount,
  accounts,
  setAccounts,
  successAlert,
  setSuccessAlert,
  dangerAlert,
  setDangerAlert,
}) => {
  useEffect(() => {
    if (accounts.length > 0) {
      localStorage.setItem("accounts", JSON.stringify(accounts));
    }
  }, [accounts]);

  const saveNameHandler = (e) => {
    setAccount({ ...account, name: e.target.value });
  };
  const saveDateOfIssueHandler = (e) => {
    setAccount({ ...account, dateOfIssue: e.target.value });
  };
  const saveDueDateHandler = (e) => {
    setAccount({ ...account, dueDate: e.target.value });
  };
  const saveItemNameHandler = (e) => {
    setAccount({ ...account, itemName: e.target.value });
  };
  const savePriceHandler = (e) => {
    setAccount({ ...account, price: e.target.value });
  };
  const saveCommentHandler = (e) => {
    setAccount({ ...account, comment: e.target.value });
  };

  const saveAccountHandler = (e) => {
    e.preventDefault();
    if (
      account.name.length > 0 &&
      account.dateOfIssue.length > 0 &&
      account.dueDate.length > 0 &&
      account.itemName.length > 0 &&
      account.price.length > 0
    ) {
      setSuccessAlert(true);
      setTimeout(() => {
        setSuccessAlert(false);
      }, 2000);
      setAccounts([...accounts, account]);
      setAccount({
        name: "",
        dateOfIssue: "",
        dueDate: "",
        itemName: "",
        price: "",
        comment: "",
      });
    } else {
      setDangerAlert(true);
      setTimeout(() => {
        setDangerAlert(false);
      }, 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -400 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -400 }}
      transition={{ duration: 0.4 }}
      className="account-creating-section d-flex flex-column align-items-center justify-content-center min-vh-100 overflow-auto"
    >
      {successAlert && (
        <Alert
          variant="success"
          className="position-absolute top-0 d-flex justify-content-center"
        >
          Számla sikeresen rögzítve
        </Alert>
      )}
      {dangerAlert && (
        <Alert
          variant="danger"
          className="position-absolute top-0 d-flex justify-content-center"
        >
          Töltsd ki a kötelező mezőket
        </Alert>
      )}
      <h2 className="mb-5">Számla készítése</h2>
      <div className="date-of-issue">
        <label htmlFor="date-of-issue">Kiállítás dátuma *</label>
        <input
          type="date"
          id="date-of-issue"
          value={account.dateOfIssue}
          onChange={saveDateOfIssueHandler}
          required
        />
      </div>
      <div className="due-date">
        <label htmlFor="due-date">Esedékesség dátuma *</label>
        <input
          type="date"
          id="due-date"
          value={account.dueDate}
          onChange={saveDueDateHandler}
          required
        />
      </div>
      <div className="name">
        <label htmlFor="name">Vásárló neve  -</label>
        <input
          id="name"
          value={account.name}
          onChange={saveNameHandler}
          required
        />
      </div>
      <div className="item-name">
        <label htmlFor="item-name">Tétel neve *</label>
        <input
          id="item-name"
          value={account.itemName}
          onChange={saveItemNameHandler}
          required
        />
      </div>
      <div className="price">
        <label htmlFor="price">Ár(Ft) *</label>
        <input
          type="number"
          id="price"
          value={account.price}
          onChange={savePriceHandler}
          required
        />
      </div>
      <div className="comment">
        <label htmlFor="comment">Komment</label>
        <textarea
          rows="3"
          id="comment"
          value={account.comment}
          onChange={saveCommentHandler}
        />
      </div>
      <div className="footer">
        <Link to={"/mainpage"}>
          <button>Menü</button>
        </Link>
        <button onClick={saveAccountHandler}>Mentés</button>
        <Link to={"/accountsLists"}>
          <button>Ugrás a számlákhoz</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default AccountCreation;
