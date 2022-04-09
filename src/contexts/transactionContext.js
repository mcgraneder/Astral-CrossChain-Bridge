import React, { useState, createContext } from "react";
import { v4 } from "uuid";

export const TransactionStateContext = createContext();

export const TransactionProvider = ({ children }) => {

    const [pending, setPending] = useState(false)
    const [transactions, setTransactions] = React.useState([
        {
          id: v4(),
          type: "type",
          from: "from",
          to: "to",
          amount: "amount",
          txHash: "hash",
          time: "date",
          }
      ]);
    
      React.useEffect(() => {
        const transactionData = localStorage.getItem("transactions");
        if (transactionData) {
          setTransactions(JSON.parse(transactionData));

        }
      }, []);
    
      React.useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
      });


    return <TransactionStateContext.Provider value={ {pending, setPending, transactions, setTransactions} }>{children}</TransactionStateContext.Provider>
}