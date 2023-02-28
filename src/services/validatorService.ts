export const validatorService = {
  isNotNumber(value: string): boolean {
    return value !== undefined && isNaN(+value);
  },
  isZero(value: number): boolean {
    return value !== undefined && value === 0;
  },
};
