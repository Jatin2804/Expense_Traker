import React, { useEffect, useState } from "react";
import styles from "../RecentTransaction/RecentTrasactions.module.css";
import { useExpense } from "../../context/ExpenseDataConext"; // Corrected the spelling
import { useTotal } from "../../context/TotalContext";
import { Box, TextField, Button } from "@mui/material"; // Fixed Button import
import ReactModal from "react-modal";

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.5)";
ReactModal.defaultStyles.overlay.backdropFilter = "blur(5px)";

const ReactModel = ({ editExpense, close, selectedExpense, isEditing }) => {
  const { expensedata, setExpensedata } = useExpense();
  const { totalbalance, setTotalBalance } = useTotal();
  const { totalexpense, setTotalExpense } = useTotal();
  const [category, setCategory] = useState(selectedExpense?.category || "");
  const [expensetitle, setexpensetitle] = useState(
    selectedExpense?.title || ""
  ); // Corrected default value
  const [expensPrice, setexpensPrice] = useState(selectedExpense?.price || 0); // Changed to string for consistency
  const [expenseDate, setexpenseDate] = useState(selectedExpense?.date || "");

  useEffect(() => {
    setCategory(selectedExpense?.category || "");
    setexpensetitle(selectedExpense?.title || "");
    setexpensPrice(selectedExpense?.price || 0); // Updated default value
    setexpenseDate(selectedExpense?.date || "");
  }, [selectedExpense, isEditing]);

  const handleEditExpense = () => {
    // Create a new expense object
    const updatedExpense = {
      title: expensetitle,
      price: parseFloat(expensPrice), // Ensure price is a number
      category,
      date: expenseDate,
    };

    if (selectedExpense) {
      const newTotalExpense =
        totalexpense + (parseFloat(expensPrice) - (selectedExpense.price || 0));
      const newTotalBalance =
        totalbalance - (parseFloat(expensPrice) - (selectedExpense.price || 0));

      if (newTotalBalance >= 0) {
        setTotalExpense(newTotalExpense);
        setTotalBalance(newTotalBalance);
        setExpensedata((prevExpensedata) => {
          const newExpenseData = prevExpensedata.map((expense) =>
            expense === selectedExpense ? updatedExpense : expense
          );
          return newExpenseData;
        });
      } else {
        alert("Not Enough money in the wallet");
      }
    } else {
      setExpensedata((prevExpensedata) => [...prevExpensedata, updatedExpense]);

      const newTotalExpense = totalexpense + parseFloat(expensPrice);
      const newTotalBalance = totalbalance - parseFloat(expensPrice);

      setTotalExpense(newTotalExpense);
      setTotalBalance(newTotalBalance);
    }

    // Reset form fields
    setexpensetitle("");
    setexpensPrice("");
    setCategory("");
    setexpenseDate("");

    close();
  };

  return (
    <ReactModal
      isOpen={editExpense}
      contentLabel="Modal #2 Global Style Override Example"
      onRequestClose={close}
      style={{
        content: {
          width: "50%", // Customize width
          minWidth:"300px",
          height: "fit-content", // Customize height
          margin: "auto", // Center the modal
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "#EFEFEFD9",
        },
      }}
    >
      <Box>
        <h1>{selectedExpense ? "Edit Expense" : "Add Expense"}</h1>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <TextField
            label="Title"
            variant="outlined"
            value={expensetitle}
            onChange={(e) => setexpensetitle(e.target.value)}
            sx={{ margin: "10px", width: "45%"}}
          />
          <TextField
            label="Price"
            variant="outlined"
            type="number"
            value={expensPrice}
            onChange={(e) => setexpensPrice(e.target.value)}
            sx={{ margin: "10px", width: "45%" }}
          />
          <Box
            className={styles.categorySection}
            sx={{ width: "60%", margin: "5px" }}
          >
            <label htmlFor="category">Select Category :</label>
            {["Food", "Shopping", "Entertainment", "Travel","Others"].map((cat) => (
              <label key={cat}>
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={category === cat}
                  onChange={(e) => setCategory(e.target.value)}
                  required // Make the radio group required
                />
                {cat}
              </label>
            ))}

          </Box>
          <TextField
            type="date"
            variant="outlined"
            value={expenseDate}
            onChange={(e) => setexpenseDate(e.target.value)}
            sx={{ margin: "10px", width: "20%" }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ bgcolor: "#F4BB4A", width: "10rem", margin: "10px" }}
            onClick={handleEditExpense}
          >
            {selectedExpense ? "Update" : "Add"}
          </Button>
          <Button
            variant="contained"
            onClick={close}
            size="large"
            sx={{
              color: "black",
              bgcolor: "#E3E3E3",
              width: "8rem",
              margin: "10px",
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </ReactModal>
  );
};

export default ReactModel;
