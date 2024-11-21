import React, { useContext, useEffect, useState } from "react";
import AddBalanceModal from "../ReactModals/AddBalanceModel";
import AddExpenseModal from "../ReactModals/AddExpenseModel";
import PieChart from "./PieChart";
import PieChartColor from "./PieChartColour";
import styles from "./Expensetraker.module.css";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { useExpense } from "../../context/ExpenseDataConext";
import { useTotal } from "../../context/TotalContext";

const Expensetraker = () => {
  const { expensedata, setExpensedata } = useExpense();
  const { totalbalance, setTotalBalance, totalexpense, setTotalExpense } =useTotal();
  const [isBalanceModalOpen, setBalanceModalOpen] = useState(false);
  const [isExpenseModalOpen, setExpenseModalOpen] = useState(false);
  const { catergoryPercentages, setCategoryPercentages } = useTotal();
 const [isAdd, setIsAdd] = useState(true);


 // Initialize state from localStorage on component mount
 useEffect(() => {
  const storedTotalBalance = localStorage.getItem("totalBalance");
  const storedTotalExpense = localStorage.getItem("totalExpense");
  const storedExpenses = JSON.parse(localStorage.getItem("defaultExpenses"));

  if (storedExpenses) setExpensedata(storedExpenses);
  if (storedTotalBalance) setTotalBalance(parseFloat(storedTotalBalance));
  if (storedTotalExpense) setTotalExpense(parseFloat(storedTotalExpense));
}, []);

// Update localStorage whenever expensedata, totalbalance, or totalexpense changes
useEffect(() => {
  localStorage.setItem("totalBalance", totalbalance.toString());
  localStorage.setItem("totalExpense", totalexpense.toString());
  localStorage.setItem("defaultExpenses", JSON.stringify(expensedata));
}, [expensedata, totalbalance, totalexpense]);

// Calculate category percentages for PieChart
useEffect(() => {
  const calculateCategoriesPercentages = () => {
    const categories = ["Food", "Entertainment", "Travel", "Shopping"];

    const totalExpensesByCategory = categories.map((category) => {
      const categoryTotal = expensedata.reduce(
        (sum, expense) =>
          expense.category === category
            ? sum + Number(expense.price)
            : sum,
        0
      );
      return {
        category,
        percentage: totalexpense > 0 ? ((categoryTotal / totalexpense) * 100).toFixed(2) : 0,
      };
    });
    setCategoryPercentages(totalExpensesByCategory);
  };
  calculateCategoriesPercentages();
}, [expensedata, totalexpense, setCategoryPercentages]);



  useEffect(() => {
    console.log("percentages:", catergoryPercentages); // Logs correctly after state update
  }, [catergoryPercentages]);

  useEffect(() => {
    console.log("expensedata:", expensedata);
  }, [expensedata]);

  const handleAddBalance = (balance) => {
    setTotalBalance(totalbalance + Number(balance));
  };
  
  const handleRemoveBalance = (balance) =>{
    setTotalBalance(totalbalance - Number(balance));
  }

  const handleAddExpense = (newExpense) => {
    const newTotalExpense = totalexpense + Number(newExpense.price);
    const newTotalBalance = totalbalance - Number(newExpense.price);
    if (newTotalBalance >= 0) {
      setTotalExpense(newTotalExpense);
      setTotalBalance(newTotalBalance);
      setExpensedata((prevExpensedata) => [...prevExpensedata, newExpense]);
    } else {
      alert("Not Enough money in the wallet");
    }
  };

  const handleClearExpense= () => {
    setExpensedata((prevExpensedata) => []);
    setTotalExpense(0);
  }

  return (
    <Box className={styles.expensetraker}>
      <Box className={styles.navbar}>
        <h1>Expense Tracker</h1>
      </Box>

      <Grid container spacing={5} className={styles.innerSection}>
        <Grid
          size={{ xs: 12, lg: 4.5, md: 6 }}
          className={styles.innerSectionBox}
        >
          <Box className={styles.innerSectionHeading}>
            <Box>Wallet Balance:</Box>
            <Box className={styles.walletHeading}>₹{totalbalance}</Box>
          </Box>
          <button
            className={styles.walletButton}
            onClick={() =>{ 
              setIsAdd(true);
              setBalanceModalOpen(true);}}
          >
            + Add Money
          </button>
          <button
            className={styles.walletRemoveButton}
            onClick={() => {
              setIsAdd(false);
              setBalanceModalOpen(true);}}
          >
            + Remove Money
          </button>
          <AddBalanceModal
            isOpen={isBalanceModalOpen}
            onClose={() => setBalanceModalOpen(false)}
            onAddBalance={handleAddBalance}
            onRemoveBalance={handleRemoveBalance}
            isAdd={isAdd}
          />
        </Grid>

        <Grid
          size={{ xs: 12, lg: 4.5, md: 6 }}
          className={styles.innerSectionBox}
        >
          <Box className={styles.innerSectionHeading}>
            <Box>Expenses:</Box>
            <Box className={styles.expenseHeading}>₹{totalexpense}</Box>
          </Box>
          <button
            className={styles.expenseButton}
            onClick={() => {setExpenseModalOpen(true)}}
          >
            + Add Expense
          </button>
          <button
            className={styles.expenseRemoveButton}
            onClick={() => handleClearExpense()}
          >
            + Clear Expenses
          </button>
          <AddExpenseModal
            isOpen={isExpenseModalOpen}
            onClose={() => setExpenseModalOpen(false)}
            onAddExpense={handleAddExpense}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 12, lg: 3 }} className={styles.piechart}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <PieChart />
            <PieChartColor />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Expensetraker;
