import React from "react";
import Header from "./components/Header/Header";
import Expensetraker from "./components/Expensetraker/Expensetraker";
import RecentTransactions from "./components/RecentTransaction/RecentTrasactions";
import Topexpenses from "./components/Topexpenses/Topexpenses";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { ExpenseProvider } from "./context/ExpenseDataConext"; // Adjust the path as needed
import { TotalProvider } from "./context/TotalContext"; // Adjust the path as needed
import "./App.css";

function App() {
  return (
    <TotalProvider>
    <ExpenseProvider>
      <div className="App">
        <Header />
        <Box className="inner-section">
          <Expensetraker />
          <Box className="expenses-section">
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, lg: 8 }}>
                <RecentTransactions />
              </Grid>
              <Grid size={{ xs: 12, lg: 4 }}>
                <Topexpenses />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </ExpenseProvider>
    </TotalProvider>
  );
}

export default App;
