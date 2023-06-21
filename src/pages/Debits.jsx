import React, {useState, useEffect} from "react";

const Debits = ({debitBalance, setDebitBalance}) => {
  const [transactionsList, setTransactionsList] = useState([]);
  const totalDebitBalance = debitBalance.reduce((total, current) => total + current, 0);

  const handleTransaction = (event) => {
    event.preventDefault();
    const date = Date.now();
    const debitAmount = Number(event.target.amount.value);
    const description = event.target.description.value;
    setTransactionsList([...transactionsList, {amount: debitAmount, description: description, date: date}]);
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
          {transactionsList.map((transactionsList, index) => {
            return ( 
              <li key={index} style={{ margin: '10px 0' }}>
                Amount: {transactionsList.amount}<br />
                Description: {transactionsList.description}<br />
                Date: {new Date(transactionsList.date).toLocaleString()}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Debits;

/*
amount: 
description:
date: 

a = [{}]
setA([...a, newObject]) 

const [list, setList] = useState([]);
list = {amount: 1000, description: "debit", date: Date.now()};
setList([...list,{amount: 2000, description: "debit2", date: Date.now()}]);
console.log(list) // two objects 

list.map((list) => {
  return {
    <h2>list.amount</h2>
  };
})

*/