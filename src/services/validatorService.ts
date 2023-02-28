export const validatorService = {
  isNotNumber(value: any): boolean {
    return value !== undefined && isNaN(+value);
  },
  isNotString(value: any): boolean {
    return (
      value !== undefined &&
      !(typeof value === 'string' || value instanceof String)
    );
  },
  isZero(value: number): boolean {
    return value !== undefined && value === 0;
  },
};
