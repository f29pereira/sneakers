/**
 * Calculates the line total value
 */
export const getLineTotal = (
  itemPrice: number,
  itemQuantity: number,
): string => {
  const total = itemPrice * itemQuantity;
  return total.toFixed(2);
};
