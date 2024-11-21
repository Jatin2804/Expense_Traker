import React, { useEffect, useState } from "react";
import styles from "./RecentTrasactions.module.css";
import { useExpense } from "../../context/ExpenseDataConext";
import { useTotal } from "../../context/TotalContext";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import { Box, IconButton } from "@mui/material";
import ReactEditModal from "../ReactModals/ReactEditModel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const RecentTransactions = () => {
  const { expensedata, setExpensedata } = useExpense();
  const { totalbalance, setTotalBalance } = useTotal();
  const { totalexpense, setTotalExpense } = useTotal();
  const [editExpense, setEditExpense] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const itemsPerPage = 3; // Number of cards per page

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const updatedTotalPages = Math.ceil(expensedata.length / itemsPerPage);
    setTotalPages(updatedTotalPages);
    // Ensure currentPage is within bounds
    setCurrentPage(updatedTotalPages);
  }, [expensedata]);

  const handleDelete = (index) => {
    let newTotalBalance = totalbalance;
    let newTotalExpense = totalexpense;

    const newExpenseData = expensedata.reduce((acc, item, i) => {
      if (i !== index) {
        acc.push(item);
      } else {
        const price = Number(item.price);
        newTotalExpense -= price;
        newTotalBalance += price;
      }
      return acc;
    }, []);

    setExpensedata(newExpenseData);
    setTotalExpense(newTotalExpense);
    setTotalBalance(newTotalBalance);

    // Recalculate total pages and update the current page if needed
    const updatedTotalPages = Math.ceil(newExpenseData.length / itemsPerPage);
    setTotalPages(updatedTotalPages);
    setCurrentPage((prevPage) =>
      prevPage > updatedTotalPages ? updatedTotalPages : prevPage
    );
  };

  const handleOpenEditExpense = (expense) => {
    setSelectedExpense(expense);
    setEditExpense(true);
    setIsEditing(true);
  };

  const handleCloseEditExpense = () => {
    setEditExpense(false);
    setSelectedExpense(null);
    setIsEditing(false);
  };

  // Calculate the data to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = expensedata.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={styles.main}>
      <ReactEditModal
        editExpense={editExpense}
        close={handleCloseEditExpense}
        selectedExpense={selectedExpense}
        isEditing={isEditing}
      />

      <nav>Recent Transactions</nav>

      <Box className={styles.area}>
        <Box className={styles.cardsSection}>
          {currentItems.length > 0 ? (
            currentItems.map((expense, index) => (
              <ExpenseCard
                key={index}
                data={expense}
                onDelete={() => handleDelete(startIndex + index)}
                onEdit={() => handleOpenEditExpense(expense)}
              />
            ))
          ) : (
            <Box
            className={styles.cardsSection}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:"column",
              }}
            >
            😢 No transactions to display
            </Box>
          )}
        </Box>

        {/* Pagination Controls */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "0px",
            width: "50px",
          }}
        >
          <IconButton onClick={handlePrevPage} disabled={currentPage === 1}>
            <ArrowBackIosIcon />
          </IconButton>
          {totalPages > 0 &&
            Array.from({ length: totalPages }, (_, index) => (
              <IconButton
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                sx={{
                  backgroundColor:
                    currentPage === index + 1 ? "#1976d2" : "transparent",
                  color: currentPage === index + 1 ? "#fff" : "#1976d2",
                  margin: "0 5px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid #1976d2",
                }}
              >
                {index + 1}
              </IconButton>
            ))}
          <IconButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default RecentTransactions;
