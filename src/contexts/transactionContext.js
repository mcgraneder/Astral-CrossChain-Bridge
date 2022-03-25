import React, { useState, createContext } from "react";

export const TransactionStateContext = createContext();

export const TransactionProvider = ({ children }) => {

    const [pending, setPending] = useState(false)

    return <TransactionStateContext.Provider value={ {pending, setPending} }>{children}</TransactionStateContext.Provider>
}