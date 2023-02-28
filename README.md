REST API for a program that prints the numbers from 1 to 100.
But for multiples of three prints "Fizz" instead of the number and for the multiples of five prints
"Buzz".
For numbers which are multiples of both three and five prints "FizzBuzz".

Install NPM packages: `npm i`

Start application: `ts-node src/index.ts` (listens on PORT 3001 by default if not set otherwise from an environment parameter)

API path: `{{host}}/api/fizzbuzz`

Testing: `npm run test-watch`

Accepted parameters in the body of the GET request and their default values if not provided:

```
{
  fizzNumber: number = 3,
  buzzNumber: number = 5,
  fizzString: string = 'Fizz',
  buzzString: string = 'Buzz',
  minNumber: number = 1,
  maxNumber: number = 100
}
```

Response object:

```
{
  values: (number | string)[];
}
```
