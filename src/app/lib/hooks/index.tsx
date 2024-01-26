
export const  usePriceValue =  (costPrice: number, percentageDiscount: number) => {
    const sellingPrice = percentageDiscount / 100.0;
    const total = costPrice - costPrice * sellingPrice;
    return total.toFixed(3);
  }
