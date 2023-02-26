import React from "react";
import { Link, useParams } from "react-router-dom";

const ActualAccount = ({ accounts }) => {
  const { accountId } = useParams();
  const account = accounts[accountId];

  return (
    <div className="h-100 bg-light">
      <Link to={"/accountsLists"}>
        <button>Vissza</button>
      </Link>
      <h3 className="d-flex justify-content-center">
        Számla #{Number(accountId) + 1}
      </h3>
      <div className="actual-account">
        <h5 className="p-3 pb-5">Név: {account.name}</h5>
        <div className="dates d-flex justify-content-between">
          <h5>Kiállítás dátuma: {account.dateOfIssue}</h5>
          <h5>Esedékesség dátuma: {account.dueDate}</h5>
        </div>
        <div className="item-and-price p-3 d-flex justify-content-between">
          <h5>{account.itemName}</h5>
          <h5>{account.price} Ft</h5>
        </div>
        {account.comment.length > 0 && (
          <h6 className="p-2">Megjegyzés: {account.comment}</h6>
        )}
      </div>
    </div>
  );
};

export default ActualAccount;
