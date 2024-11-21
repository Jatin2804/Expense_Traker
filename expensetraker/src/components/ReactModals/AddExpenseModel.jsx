import React, { useState } from "react";
import ReactModal from "react-modal";
import { Box, TextField, Button } from "@mui/material";
import styles from "../Expensetraker/Expensetraker.module.css";

const AddExpenseModal = ({ isOpen, onClose, onAddExpense }) => {
  const [expensetitle, setExpensetitle] = useState("");
  const [expensPrice, setExpensPrice] = useState("");
  const [category, setCategory] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const handleAddExpense = () => {
    const newExpense = {
      title: expensetitle,
      price: expensPrice,
      category,
      date: expenseDate,
    };
    onAddExpense(newExpense);
    setExpensetitle("");
    setExpensPrice("");
    setCategory("");
    setExpenseDate("");
    onClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Expense"
      style={{
        content: {
          width: "50%",
          minWidth:"300px",
          height: "fit-content",
          margin: "auto",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "#EFEFEFD9",
        },
      }}
    >
      <Box>
        <h1>Add Expense</h1>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <TextField
            label="Title"
            variant="outlined"
            value={expensetitle}
            onChange={(e) => setExpensetitle(e.target.value)}
            sx={{ margin: "10px", width: "45%" }}
            required // Make the field required
          />
          <TextField
            label="Price"
            variant="outlined"
            type="number" // Set input type to number for price
            value={expensPrice}
            onChange={(e) => setExpensPrice(e.target.value)}
            sx={{ margin: "10px", width: "45%" }}
            required // Make the field required
          />
          <Box className={styles.categorySection} sx={{ width: "60%", margin: "5px" }}>
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
            onChange={(e) => setExpenseDate(e.target.value)}
            sx={{ margin: "10px", width: "20%" }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ bgcolor: "#F4BB4A", width: "10rem", margin: "10px" }}
            onClick={handleAddExpense}
            disabled={!expensetitle || !expensPrice || !category} // Disable if required fields are not filled
          >
            Add
          </Button>
          <Button
            variant="contained"
            onClick={onClose}
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

export default AddExpenseModal;
