export function fizzBuzz(fizzNumber: number, buzzNumber: number): string[] {
  const minNumber: number = 1;
  const maxNumber: number = 100;
  const fizzString: string = 'Chocolate';
  const buzzString: string = 'Bar';
  const resultArr: string[] = [];

  //Loop through minNumber to maxNumber
  for (let i: number = minNumber; i <= maxNumber; i++) {
    //Output if multiple of both parameters
    if (!(i % fizzNumber) && !(i % buzzNumber))
      resultArr.push(fizzString + buzzString);
    //Output if multiple of first parameter
    else if (!(i % fizzNumber)) resultArr.push(fizzString);
    //Output if multiple of second parameter
    else if (!(i % buzzNumber)) resultArr.push(buzzString);
    //Default output
    else resultArr.push(`${i}`);
  }

  return resultArr;
}
