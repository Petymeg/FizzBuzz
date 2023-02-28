import { calculationService } from './calculationService';

export const fizzbuzzService = {
  generateFizzBuzz(
    fizzNumber: number = 3,
    buzzNumber: number = 5,
    fizzString: string = 'Fizz',
    buzzString: string = 'Buzz',
    minNumber: number = 1,
    maxNumber: number = 100
  ): (number | string)[] {
    const resultArr: (number | string)[] = [];

    //Loop through minNumber to maxNumber
    for (let i: number = minNumber; i <= maxNumber; i++) {
      //Output if multiple of both parameters
      if (calculationService.isDivisibleByBoth(i, fizzNumber, buzzNumber))
        resultArr.push(fizzString + buzzString);
      //Output if multiple of first parameter
      else if (calculationService.isDivisible(i, fizzNumber))
        resultArr.push(fizzString);
      //Output if multiple of second parameter
      else if (calculationService.isDivisible(i, buzzNumber))
        resultArr.push(buzzString);
      //Default output
      else resultArr.push(i);
    }

    return resultArr;
  },
};
