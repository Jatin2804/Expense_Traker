import React from 'react'
import { Box, Typography } from "@mui/material"; 

const PieChartColous = () => {
  return (
    
        <Box sx={{ display: "flex", flexWrap: "wrap", width: "250px" }}>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "30px",
                    height: "10px",
                    bgcolor: "#0088FE",
                    margin: "5px",
                  }}
                ></Box>
                <Box>Food</Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "30px",
                    height: "10px",
                    bgcolor: "#00C49F",
                    margin: "5px",
                  }}
                ></Box>
                <Box>Enterteinment</Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "30px",
                    height: "10px",
                    bgcolor: "#FFBB28",
                    margin: "5px",
                  }}
                ></Box>
                <Box>Travel</Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "30px",
                    height: "10px",
                    bgcolor: "#FF8042",
                    margin: "5px",
                  }}
                ></Box>
                <Box>Shopping</Box>
              </Box>
            </Box>
    
  )
}

export default PieChartColous
