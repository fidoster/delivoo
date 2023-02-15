import React, { useState } from "react";
import { totalFee } from "../finalCostValue";
import { Button, Grid, TextField, Typography} from "@mui/material";

interface Props {}

const FinalCost: React.FC<Props> = () => {
    const [totalValue, settotalValue] = useState(0);
    const [totalDistance, settotalDistance] = useState(0);
    const [itemQuantity, setitemQuantity] = useState(0);
    const [orderTime, setOrderTime] = useState(new Date());
    const [deliveryFee, setDeliveryFee] = useState(0);

   const handleReset = () => {
     setDeliveryFee(0);
     settotalValue(0);
     settotalDistance(0);
     setitemQuantity(0);
     setOrderTime(new Date());
  };

  const offset = new Date().getTimezoneOffset() * 60 * 1000;


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fee = totalFee(
            totalValue,
            totalDistance,
            itemQuantity,
            orderTime
        );
        setDeliveryFee(fee);
    };

    return (
      <div
        className="calculator"
        style={{ maxWidth: "500px", margin: "50px auto" }}
      >
        <Typography
          variant="h4"
          align="center"
          className="title"
          color="#002147"
          style={{ margin: "10px 16px" }}
          sx={{ fontWeight: "bold" }}
        >
          DELIVERY FEE CALCULATOR
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Cart Value"
                type="number"
                value={totalValue}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value < 0) {
                    settotalValue(0);
                  } else {
                    settotalValue(value);
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Delivery Distance (meters)"
                type="number"
                value={totalDistance}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value < 0) {
                    settotalDistance(0);
                  } else {
                    settotalDistance(value);
                  }
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Number of Items"
                type="number"
                value={itemQuantity}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "") {
                    setitemQuantity(0);
                  } else {
                    setitemQuantity(Number(value));
                  }
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Order Time"
                type="datetime-local"
                value={`${new Date(orderTime.getTime() - offset)
                  .toISOString()
                  .slice(0, 16)}:00`}
                onChange={(e) => setOrderTime(new Date(e.target.value))}
                fullWidth
              />
            </Grid>
            <Grid container spacing={3} paddingTop="20px">
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  style={{ marginLeft: "22px" }}
                >
                  Calculate
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  style={{ marginRight: "18px", backgroundColor: "#BA1607" }}
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Delivery Fee"
                type="number"
                value={deliveryFee}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>
        </form>
      </div>
    );
}

export default FinalCost;
