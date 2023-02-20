function fizzBuzz(fizz: number, buzz: number): void {
  const minNumber: number = 1;
  const maxNumber: number = 100;

  for (let i: number = minNumber; i <= maxNumber; i++) {
    if (!(i % fizz) && !(i % buzz)) console.log('FizzBuzz');
    else if (!(i % fizz)) console.log('Fizz');
    else if (!(i % buzz)) console.log('Buzz');
    else console.log(i);
  }
}

fizzBuzz(3, 5);
