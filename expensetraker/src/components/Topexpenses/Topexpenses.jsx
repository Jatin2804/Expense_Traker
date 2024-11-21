import React from "react";
import styles from "./Topexpenses.module.css";
import { Box } from "@mui/material";
import { useTotal } from "../../context/TotalContext";


const Topexpenses = () => {
  const { catergoryPercentages } = useTotal();

  const sortedData = catergoryPercentages.sort(
    (a, b) => b.percentage - a.percentage
  );
  const maxPercentage = Math.max(...sortedData.map((data) => data.percentage));
  console.log("sortedData:", sortedData);

  return (
    <div className={styles.Topexpenses}>
      <nav>Top Expenses</nav>
      <Box className={styles.area}>
       
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"flex-end",marginRight:"5px",paddingTop:"7px"}}>
        {sortedData.map((data) => (
         <Box sx={{color:"black"}}>
           {data.category.charAt(0).toUpperCase() + data.category.slice(1).toLowerCase() }
         </Box>
        ))}
        </Box>
        
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-around", alignItems:"flex-start"}}>
        {sortedData.map((data) => (
          <Box sx={{width:"250px", 
            "@media (max-width: 600px)": {
            width: "150px", // Adjust width for smaller screens
          },}}> 
           
           {/* or
           <Box sx={{  width: {
            xs: "150px", 
            sm:250,  // Width for small screens
            md:`${250}px`,  // Width for medium screens
            lg:`${250}px`,  // Width for large screens
            xl: `${250}px` // Width for extra-large screens (fixed width)
          },}}> */}
            <Box className={styles.bar}
              sx={{
                  bgcolor: "#9B9B9B",
                  width: `${maxPercentage? ((data.percentage / maxPercentage) * 100) : 0}%`,
                  height:"25px",
                  borderRadius: "0px 20px 20px 0px",
                 }}
            ></Box>
          </Box>
           
        ))}
        </Box>
       
      </Box>
    </div>
  );
};

export default Topexpenses;
