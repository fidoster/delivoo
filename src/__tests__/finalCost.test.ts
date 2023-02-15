import { totalFee } from "../finalCostValue";

describe("totalFee", () => {
  it("should return correct delivery fee for cart value less than 10", () => {
    const totalValue = 8.9;
    const totalDistance = 1500;
    const itemQuantity = 5;
    const orderTime = new Date("2022-01-01T16:00:00.000Z");
    expect(
      totalFee(
        totalValue,
        totalDistance,
        itemQuantity,
        orderTime
      )
    ).toBe(4.6);
  });

  it("should return correct delivery fee for delivery distance of 1000 meters or less", () => {
    const totalValue = 20;
    const totalDistance = 1000;
    const itemQuantity = 4;
    const orderTime = new Date("2022-01-01T16:00:00.000Z");
    expect(
      totalFee(
        totalValue,
        totalDistance,
        itemQuantity,
        orderTime
      )
    ).toBe(2.0);
  });

  it("should return correct delivery fee for delivery distance more than 1000 meters", () => {
    const totalValue = 20;
    const totalDistance = 1500;
    const itemQuantity = 4;
    const orderTime = new Date("2022-01-01T16:00:00.000Z");
    expect(
      totalFee(
        totalValue,
        totalDistance,
        itemQuantity,
        orderTime
      )
    ).toBe(3.0);
  });

  it("should return correct delivery fee for number of items more than 4", () => {
    const totalValue = 20;
    const totalDistance = 1000;
    const itemQuantity = 6;
    const orderTime = new Date("2022-01-01T16:00:00.000Z");
    expect(
      totalFee(
        totalValue,
        totalDistance,
        itemQuantity,
        orderTime
      )
    ).toBe(3.0);
  });

  it("should return correct delivery fee for number of items more than 12", () => {
    const totalValue = 20;
    const totalDistance = 1000;
    const itemQuantity = 13;
    const orderTime = new Date("2022-01-01T16:00:00.000Z");
    expect(
      totalFee(
        totalValue,
        totalDistance,
        itemQuantity,
        orderTime
      )
    ).toBe(7.7);
  });

  it("should return correct delivery fee for cart value more than 100", () => {
    const totalValue = 150;
    const totalDistance = 1500;
    const itemQuantity = 4;
    const orderTime = new Date("2022-01-01T16:00:00.000Z");
    expect(
      totalFee(
        totalValue,
        totalDistance,
        itemQuantity,
        orderTime
      )
    ).toBe(0.0);
  });

  it("should return correct delivery fee for cart value equal to 10", () => {
    const totalValue = 10;
    const totalDistance = 1500;
    const itemQuantity = 5;
    const orderTime = new Date("2022-01-01T16:00:00.000Z");
    expect(totalFee(totalValue, totalDistance, itemQuantity, orderTime)).toBe(
      3.5
    );
  });

  it("should return correct delivery fee for delivery distance of 0 meters", () => {
    const totalValue = 20;
    const totalDistance = 0;
    const itemQuantity = 4;
    const orderTime = new Date("2022-01-01T16:00:00.000Z");
    expect(totalFee(totalValue, totalDistance, itemQuantity, orderTime)).toBe(
      0.0
    );
  });

  it("should return correct delivery fee for number of items equal to 4", () => {
    const totalValue = 20;
    const totalDistance = 1000;
    const itemQuantity = 4;
    const orderTime = new Date("2022-01-01T16:00:00.000Z");
    expect(totalFee(totalValue, totalDistance, itemQuantity, orderTime)).toBe(
      2.0
    );
  });

  it("should return correct delivery fee for number of items equal to 12", () => {
    const totalValue = 20;
    const totalDistance = 1000;
    const itemQuantity = 12;
    const orderTime = new Date("2022-01-01T16:00:00.000Z");
    expect(totalFee(totalValue, totalDistance, itemQuantity, orderTime)).toBe(
      6
    );
  });

  it("should return correct delivery fee for cart value equal to 100", () => {
    const totalValue = 100;
    const totalDistance = 1500;
    const itemQuantity = 4;
    const orderTime = new Date("2022-01-01T16:00:00.000Z");
    expect(totalFee(totalValue, totalDistance, itemQuantity, orderTime)).toBe(
      0
    );
  });

  it("should return correct delivery fee during normal hours", () => {
    const totalValue = 20;
    const totalDistance = 1500;
    const itemQuantity = 4;
    const orderTime = new Date("2022-01-01T12:00:00.000Z");
    expect(totalFee(totalValue, totalDistance, itemQuantity, orderTime)).toBe(
      3.0
    );
  });

  it("should return correct delivery fee during Friday rush hours", () => {
    const totalValue = 20;
    const totalDistance = 1500;
    const itemQuantity = 4;
    const orderTime = new Date("2022-01-07T18:00:00.000Z");
    expect(
      totalFee(
        totalValue,
        totalDistance,
        itemQuantity,
        orderTime
      )
    ).toBe(3.6);
  });
});
