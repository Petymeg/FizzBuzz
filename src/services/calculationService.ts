export const calculationService = {
  isDivisible(dividend: number, divisor: number): boolean {
    return !(dividend % divisor);
  },
};
