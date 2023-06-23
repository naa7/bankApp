import React from "react";

const Credits = ({creditBalance, setCreditBalance, creditTransactionsList, setCreditTransactionsList}) => {
  const totalCreditBalance = creditBalance.reduce((total, current) => total + current, 0);

  const handleTransaction = (event) => {
    event.preventDefault();
    const date = Date.now();
    const creditAmount = Number(event.target.amount.value);
    const description = event.target.description.value;
    setCreditTransactionsList([...creditTransactionsList, {amount: creditAmount, description: description, date: date}]);
    const updatedCreditBalance = [...creditBalance, creditAmount];
    setCreditBalance(updatedCreditBalance);
    event.target.amount.value = "";
    event.target.description.value = "";
  }
  return (
    <>
      <h1>Credits Page</h1>
      <h3>Credit Balance: {totalCreditBalance}</h3>
      <form onSubmit={handleTransaction}>
        <label>Enter Credit Amount:</label>
        <input type="text" name="amount" required placeholder="Enter credit amount" style={{ display: 'block' }}></input>
        <label>Enter Description:</label>
        <input type="text" name="description" required placeholder="Enter description" style={{ display: 'block' }}></input>
        <input className="button" type="submit" value="submit"></input>
      </form>
      <div>
        <h3>Transaction History:</h3>
        <ul>
          {creditTransactionsList.sort((a, b) => new Date(b.date) - new Date(a.date)).map((creditTransactionsList, index) => {
            return ( 
              <li key={index} style={{ margin: '10px 0' }}>
                Amount: {creditTransactionsList.amount}<br />
                Description: {creditTransactionsList.description}<br />
                Date: {new Date(creditTransactionsList.date).toLocaleString()}
              </li>
            );
          })}
        </ul>

      </div>
    </>
  );
};

export default Credits;
