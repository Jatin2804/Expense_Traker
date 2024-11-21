import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MdFastfood } from "react-icons/md";
import { MdOutlineCelebration } from "react-icons/md";
import { FaCarSide, FaCartArrowDown } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function MediaCard({ data, onDelete, onEdit }) {
  // Define the icon mapping
  const mappingIcons = {
    Food: MdFastfood,
    Travel: FaCarSide,
    Entertainment: MdOutlineCelebration,
    Shopping: FaCartArrowDown,
  };

  // Get the icon based on the category
  const IconComponent = mappingIcons[data.category] || FaMoneyBill1Wave;

  return (
    <Card sx={{ width: "100%", marginY: "10px",maxHeight:"fit-content" }}>
      <Grid container>
        <Grid size={{ xs:2,md: 1 }}>
          <CardMedia
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60px",
              width: "60px",
              backgroundColor: "lightgrey",
              borderRadius: "50%",
              padding: "10px",
            }}
          >
            <IconComponent size={40} />
          </CardMedia>
        </Grid>

        <Grid size={{ xs: 8 ,md: 8 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              height:"100%"
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {data.title ? data.title : "Expense"}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {data.date? data.date : " "}
            </Typography>
          </CardContent>
        </Grid>

        <Grid size={{ xs:2,md: 1 }} >
          <Box sx={{ 
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              height:"100%"}}>
            <Typography variant="h6" sx={{ color: "text.secondary" }}>
              ₹{data.price}
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs:12,md: 2}}>
          <CardActions sx={{ 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height:"100%"}}>
            <Button
              onClick={onDelete}
              sx={{
                backgroundColor: "#e86464",
                color: "white",
                borderRadius: "10px",
              }}
              size="large"
            >
              <RiDeleteBin2Fill size={40} />
            </Button>
            <Button
              onClick={onEdit}
              sx={{
                backgroundColor: "#FE9900",
                color: "white",
                borderRadius: "10px",
              }}
              size="large"
            >
              <MdEditSquare size={40} />
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
