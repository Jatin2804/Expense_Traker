import React, { useState } from "react";
import ReactModal from "react-modal";
import { Box, TextField, Button } from "@mui/material";

const AddBalanceModal = ({ isOpen, onClose, onAddBalance,onRemoveBalance,isAdd}) => {
  const [balance, setBalance] = useState("");

  const handleAddBalance = () => {
    isAdd?  onAddBalance(balance) : onRemoveBalance(balance)
    setBalance(""); // Reset the balance input field
    onClose(); // Close the modal
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Balance"
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
        <h1> {isAdd? "Add" : "Remove"} Money</h1>
        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        <TextField
          label="Amount"
          variant="outlined"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          sx={{ marginX: "10px", width: "50%" }}
        />
        <Button
          variant="contained"
          onClick={handleAddBalance}
          size="large"
          sx={{ bgcolor: "#F4BB4A", width: "8rem" }}
        >
          {isAdd? "Add" : "Remove"}
        </Button>
        <Button
          variant="contained"
          onClick={onClose}
          size="large"
          sx={{
            color: "black",
            bgcolor: "#E3E3E3",
            width: "8rem",
            marginX: "10px",
          }}
        >
          Cancel
        </Button>
        </Box>
        
      </Box>
    </ReactModal>
  );
};

export default AddBalanceModal;
