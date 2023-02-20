function fizzBuzz(fizz: number, buzz: number): void {
  const minNumber: number = 1;
  const maxNumber: number = 100;

  //Loop through minNumber to maxNumber
  for (let i: number = minNumber; i <= maxNumber; i++) {
    //Output if multiple of both parameters
    if (!(i % fizz) && !(i % buzz)) console.log('FizzBuzz');
    //Output if multiple of first parameter
    else if (!(i % fizz)) console.log('Fizz');
    //Output if multiple of second parameter
    else if (!(i % buzz)) console.log('Buzz');
    //Default output
    else console.log(i);
  }
}

fizzBuzz(3, 5);
