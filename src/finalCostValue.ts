export function totalFee(
  totalValue: number,
  totalDistance: number,
  itemQuantity: number,
  orderTime: Date
) {
  let fee = 0;

  //If the cart value is less than 10, add modest order surcharge

  fee += totalValue < 10 ? 10 - totalValue : 0;

  // Add a delivery cost for the first 1000 meters
  fee += 2;

  // If the delivery distance is more than 100 meters add additional fee
  if (totalDistance > 1000) {
    let additionalDistance = totalDistance - 1000;
    fee += Math.ceil(additionalDistance / 500) * 1;
  }

  // If quantity of items is over 4 add surcharge
  if (itemQuantity >= 5) {
    fee += 0.5 * (itemQuantity - 4);
  }

  // If the quantity of items is over 12 add bulk fees
  if (itemQuantity > 12) {
    fee += itemQuantity > 12 ? 1.2 : 0;
  }

  // The delivery fees is capped at 15
  if (fee > 15) {
    fee = 15;
  }

  // Apply rush hour surcharge for Friday

  if (
    orderTime.getUTCHours() >= 15 &&
    orderTime.getUTCHours() <= 19 &&
    orderTime.getUTCDay() === 5
  ) {
    fee *= 1.2;
  }
  // Cap delivery fee at 15 even after surcharge
  if (fee > 15) {
    fee = 15;
  }
  // Make delivery free for orders worth more than 100
  if (totalValue >= 100) {
    fee = 0;
  }
  // If the value of item or distance or number of item is zero fee will be zero
    
  if (totalValue === 0 || totalDistance === 0 || itemQuantity === 0) {
    fee = 0;
  }
  const finalFee = Math.round(fee * 100) / 100;
  return finalFee;
}
