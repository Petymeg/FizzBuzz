export const calculationService = {
  isDivisible(dividend: number, divisor: number): boolean {
    return !(dividend % divisor);
  },

  isDivisibleByBoth(
    dividend: number,
    divisor1: number,
    divisor2: number
  ): boolean {
    return (
      this.isDivisible(dividend, divisor1) &&
      this.isDivisible(dividend, divisor2)
    );
  },
};
