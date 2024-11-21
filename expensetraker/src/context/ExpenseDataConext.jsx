import React, { createContext, useState, useContext } from 'react';

// Create the Context
const ExpenseContext = createContext();

// Create a provider component
export const ExpenseProvider = ({ children }) => {
  const [expensedata, setExpensedata] = useState([]);

  return (
    <ExpenseContext.Provider value={{ expensedata, setExpensedata }}>
      {children}
    </ExpenseContext.Provider>
  );
};

// Create a custom hook to use the ExpenseContext
export const useExpense = () => useContext(ExpenseContext);
