function fizzBuzz(fizzNumber: number, buzzNumber: number): void {
  const minNumber: number = 1;
  const maxNumber: number = 100;
  const fizzString: string = 'Chocolate';
  const buzzString: string = 'Bar';

  //Loop through minNumber to maxNumber
  for (let i: number = minNumber; i <= maxNumber; i++) {
    //Output if multiple of both parameters
    if (!(i % fizzNumber) && !(i % buzzNumber))
      console.log(fizzString + buzzString);
    //Output if multiple of first parameter
    else if (!(i % fizzNumber)) console.log(fizzString);
    //Output if multiple of second parameter
    else if (!(i % buzzNumber)) console.log(buzzString);
    //Default output
    else console.log(i);
  }
}

fizzBuzz(3, 5);
