import React, {useState, useEffect} from "react";

const Debits = ({debitBalance, setDebitBalance, debitTransactionsList, setDebitTransactionsList}) => {
  const totalDebitBalance = debitBalance.reduce((total, current) => total + current, 0);

  const handleTransaction = (event) => {
    event.preventDefault();
    const date = Date.now();
    const debitAmount = Number(event.target.amount.value);
    const description = event.target.description.value;
    setDebitTransactionsList([...debitTransactionsList, {amount: debitAmount, description: description, date: date}]);
    const updatedDebitBalance = [...debitBalance, debitAmount];
    setDebitBalance(updatedDebitBalance);
    event.target.amount.value = "";
    event.target.description.value = "";
  }
  return (
    <>
      <h1>Debits Page</h1>
      <h3>Debit Balance: {totalDebitBalance}</h3>
      <form onSubmit={handleTransaction}>
        <label>Enter Debit Amount:</label>
        <br />
        <input type="text" name="amount" required placeholder="Enter debit amount" style={{ display: 'block' }}></input>
        <label>Enter Description:</label>
        <input type="text" name="description" required placeholder="Enter description" style={{ display: 'block' }}></input>
        <input className="button" type="submit" value="submit"></input>
      </form>
      <div>
        <h3>Transaction History:</h3>
        <ul>
          {debitTransactionsList.map((debitTransactionsList, index) => {
            return ( 
              <li key={index} style={{ margin: '10px 0' }}>
                Amount: {debitTransactionsList.amount}<br />
                Description: {debitTransactionsList.description}<br />
                Date: {new Date(debitTransactionsList.date).toLocaleString()}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Debits;