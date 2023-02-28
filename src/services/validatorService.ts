export const validatorService = {
  isNotNumber(value: string): boolean {
    return value !== undefined && isNaN(+value);
  },
};
