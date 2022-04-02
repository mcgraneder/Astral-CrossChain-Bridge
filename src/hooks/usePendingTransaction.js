import React, { useState  } from "react"
import { v4 } from "uuid"

const usePendingTransactions = () => {

    const [currentHash, setCurrentHash] = useState()
    const [deposits, setDeposits] = useState([ {
        id: v4(),
        type: "type",
        from: "from",
        to: "to",
        amount: "amount",
        txHash: "hash",
        time: "date",
      }])
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
          console.log(transactions)
        }
      }, []);
    
      React.useEffect(() => {
        localStorage.setItem("deposits", JSON.stringify(deposits));
        localStorage.setItem("transactions", JSON.stringify(transactions));
        localStorage.setItem("currentHash", currentHash);
      });

      return { transactions, setTransactions, deposits, setDeposits, currentHash, setCurrentHash}
}

export default usePendingTransactions