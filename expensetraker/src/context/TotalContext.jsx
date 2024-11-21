import React, { createContext, useState, useContext } from 'react';

// Create the Context
const TotalContext = createContext();

// Create a provider component
export const TotalProvider = ({ children }) => {
const [totalbalance, setTotalBalance] = useState(5000);
const [totalexpense, setTotalExpense] = useState(0);
const [catergoryPercentages,setCategoryPercentages] = useState([]);

  return (
    <TotalContext.Provider value={{ totalbalance,setTotalBalance,totalexpense,setTotalExpense,catergoryPercentages,setCategoryPercentages }}>
      {children}
    </TotalContext.Provider>
  );
};

// Create a custom hook to use the ExpenseContext
export const useTotal = () => useContext(TotalContext);
