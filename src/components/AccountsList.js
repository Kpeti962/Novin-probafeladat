import React from 'react';

const AccountsList = ({accounts}) => {
  return (
    <div className="accounts-list-section">
      <ul>
        {accounts.map((account)=> {
          return(
            <li>
              <h4>{account.name}</h4>
              <h4>{account.dateOfIssue}</h4>
              <h4>{account.dueDate}</h4>
              <h4>{account.itemName}</h4>
              <h4>{account.price}</h4>
              <h4>{account.comment}</h4>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AccountsList;