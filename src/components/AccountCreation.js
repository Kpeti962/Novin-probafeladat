import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AccountCreation = ({ account, setAccount, accounts, setAccounts }) => {
  useEffect(() => {
  
  
  
  }, [])
  



  const saveNameHandler = (e) => {
    setAccount({...account, name: e.target.value,});
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
    console.log(e.target.value);
    console.log(account);
  };

  return (
    <div className="account-creating-section">
      <div className="date-of-issue">
        <label htmlFor="date-of-issue">Kiállítás dátuma</label>
        <input
          type="date"
          id="date-of-issue"
          value={account.dateOfIssue}
          onChange={saveDateOfIssueHandler}
        />
      </div>
      <div className="due-date">
        <label htmlFor="due-date">Esedékesség dátuma</label>
        <input
          type="date"
          id="due-date"
          value={account.dueDate}
          onChange={saveDueDateHandler}
        />
      </div>
      <div className="name">
        <label htmlFor="name">Vásárló neve</label>
        <input id="name" value={account.name} onChange={saveNameHandler} />
      </div>
      <div className="item-name">
        <label htmlFor="item-name">Tétel neve</label>
        <input
          id="item-name"
          value={account.itemName}
          onChange={saveItemNameHandler}
        />
      </div>
      <div className="price">
        <label htmlFor="price">Ár</label>
        <input
          type="number"
          id="price"
          value={account.price}
          onChange={savePriceHandler}
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
          <button>Mégsem</button>
        </Link>
        <button onClick={saveAccountHandler}>Mentés</button>
      </div>
    </div>
  );
};

export default AccountCreation;
