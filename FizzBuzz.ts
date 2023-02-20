function fizzBuzz(fizz: number, buzz: number): void {
  for (let i: number = 1; i <= 100; i++) {
    if (!(i % fizz) && !(i % buzz)) console.log('FizzBuzz');
    else if (!(i % fizz)) console.log('Fizz');
    else if (!(i % buzz)) console.log('Buzz');
    else console.log(i);
  }
}

fizzBuzz(3, 5);
