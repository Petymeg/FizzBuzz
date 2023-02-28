import { fizzbuzzViewModel } from '../models/view/fizzbuzzViewModel';
import { calculationService } from './calculationService';

export const fizzbuzzService = {
  generateFizzBuzz(
    fizzNumber: number = 3,
    buzzNumber: number = 5,
    fizzString: string = 'Fizz',
    buzzString: string = 'Buzz',
    minNumber: number = 1,
    maxNumber: number = 100
  ): fizzbuzzViewModel {
    const result: fizzbuzzViewModel = { values: [] };

    //Loop through minNumber to maxNumber
    for (let i: number = minNumber; i <= maxNumber; i++) {
      //Output if multiple of both parameters
      if (calculationService.isDivisibleByBoth(i, fizzNumber, buzzNumber))
        result.values.push(fizzString + buzzString);
      //Output if multiple of first parameter
      else if (calculationService.isDivisible(i, fizzNumber))
        result.values.push(fizzString);
      //Output if multiple of second parameter
      else if (calculationService.isDivisible(i, buzzNumber))
        result.values.push(buzzString);
      //Default output
      else result.values.push(i);
    }

    return result;
  },
};
