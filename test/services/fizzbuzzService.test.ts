import { fizzbuzzViewModel } from '../../src/models/view/fizzbuzzViewModel';
import { fizzbuzzService } from '../../src/services/fizzbuzzService';

describe('fizzbuzzService', () => {
  it('generateFizzBuzz method should return the proper output if called without any parameters', () => {
    //Arrange
    const expectedOutput = {
      values: [
        1,
        2,
        'Fizz',
        4,
        'Buzz',
        'Fizz',
        7,
        8,
        'Fizz',
        'Buzz',
        11,
        'Fizz',
        13,
        14,
        'FizzBuzz',
        16,
        17,
        'Fizz',
        19,
        'Buzz',
        'Fizz',
        22,
        23,
        'Fizz',
        'Buzz',
        26,
        'Fizz',
        28,
        29,
        'FizzBuzz',
        31,
        32,
        'Fizz',
        34,
        'Buzz',
        'Fizz',
        37,
        38,
        'Fizz',
        'Buzz',
        41,
        'Fizz',
        43,
        44,
        'FizzBuzz',
        46,
        47,
        'Fizz',
        49,
        'Buzz',
        'Fizz',
        52,
        53,
        'Fizz',
        'Buzz',
        56,
        'Fizz',
        58,
        59,
        'FizzBuzz',
        61,
        62,
        'Fizz',
        64,
        'Buzz',
        'Fizz',
        67,
        68,
        'Fizz',
        'Buzz',
        71,
        'Fizz',
        73,
        74,
        'FizzBuzz',
        76,
        77,
        'Fizz',
        79,
        'Buzz',
        'Fizz',
        82,
        83,
        'Fizz',
        'Buzz',
        86,
        'Fizz',
        88,
        89,
        'FizzBuzz',
        91,
        92,
        'Fizz',
        94,
        'Buzz',
        'Fizz',
        97,
        98,
        'Fizz',
        'Buzz',
      ],
    };

    //Act
    const result = fizzbuzzService.generateFizzBuzz();

    //Assert
    expect(result).toEqual(expectedOutput);
  });
  it('generateFizzBuzz method should return the proper output if called with valid parameters', () => {
    //Arrange
    const fizzNumber: number = 2;
    const buzzNumber: number = 3;
    const fizzString: string = 'Chocolate';
    const buzzString: string = 'Bar';
    const minNumber: number = 1;
    const maxNumber: number = 10;
    const expectedOutput = {
      values: [
        1,
        'Chocolate',
        'Bar',
        'Chocolate',
        5,
        'ChocolateBar',
        7,
        'Chocolate',
        'Bar',
        'Chocolate',
      ],
    };

    //Act
    const result = fizzbuzzService.generateFizzBuzz(
      fizzNumber,
      buzzNumber,
      fizzString,
      buzzString,
      minNumber,
      maxNumber
    );

    //Assert
    expect(result).toEqual(expectedOutput);
  });
  it('generateFizzBuzz method should return the proper output if called with custom fizzNumber', () => {
    //Arrange
    const fizzNumber: number = 2;
    const buzzNumber = undefined;
    const fizzString = undefined;
    const buzzString = undefined;
    const minNumber = undefined;
    const maxNumber = undefined;
    const expectedOutput = {
      values: [
        1,
        'Fizz',
        3,
        'Fizz',
        'Buzz',
        'Fizz',
        7,
        'Fizz',
        9,
        'FizzBuzz',
        11,
        'Fizz',
        13,
        'Fizz',
        'Buzz',
        'Fizz',
        17,
        'Fizz',
        19,
        'FizzBuzz',
        21,
        'Fizz',
        23,
        'Fizz',
        'Buzz',
        'Fizz',
        27,
        'Fizz',
        29,
        'FizzBuzz',
        31,
        'Fizz',
        33,
        'Fizz',
        'Buzz',
        'Fizz',
        37,
        'Fizz',
        39,
        'FizzBuzz',
        41,
        'Fizz',
        43,
        'Fizz',
        'Buzz',
        'Fizz',
        47,
        'Fizz',
        49,
        'FizzBuzz',
        51,
        'Fizz',
        53,
        'Fizz',
        'Buzz',
        'Fizz',
        57,
        'Fizz',
        59,
        'FizzBuzz',
        61,
        'Fizz',
        63,
        'Fizz',
        'Buzz',
        'Fizz',
        67,
        'Fizz',
        69,
        'FizzBuzz',
        71,
        'Fizz',
        73,
        'Fizz',
        'Buzz',
        'Fizz',
        77,
        'Fizz',
        79,
        'FizzBuzz',
        81,
        'Fizz',
        83,
        'Fizz',
        'Buzz',
        'Fizz',
        87,
        'Fizz',
        89,
        'FizzBuzz',
        91,
        'Fizz',
        93,
        'Fizz',
        'Buzz',
        'Fizz',
        97,
        'Fizz',
        99,
        'FizzBuzz',
      ],
    };

    //Act
    const result = fizzbuzzService.generateFizzBuzz(
      fizzNumber,
      buzzNumber,
      fizzString,
      buzzString,
      minNumber,
      maxNumber
    );

    //Assert
    expect(result).toEqual(expectedOutput);
  });
  it('generateFizzBuzz method should return the proper output if called with custom buzzNumber', () => {
    //Arrange
    const fizzNumber = undefined;
    const buzzNumber: number = 3;
    const fizzString = undefined;
    const buzzString = undefined;
    const minNumber = undefined;
    const maxNumber = undefined;
    const expectedOutput = {
      values: [
        1,
        2,
        'FizzBuzz',
        4,
        5,
        'FizzBuzz',
        7,
        8,
        'FizzBuzz',
        10,
        11,
        'FizzBuzz',
        13,
        14,
        'FizzBuzz',
        16,
        17,
        'FizzBuzz',
        19,
        20,
        'FizzBuzz',
        22,
        23,
        'FizzBuzz',
        25,
        26,
        'FizzBuzz',
        28,
        29,
        'FizzBuzz',
        31,
        32,
        'FizzBuzz',
        34,
        35,
        'FizzBuzz',
        37,
        38,
        'FizzBuzz',
        40,
        41,
        'FizzBuzz',
        43,
        44,
        'FizzBuzz',
        46,
        47,
        'FizzBuzz',
        49,
        50,
        'FizzBuzz',
        52,
        53,
        'FizzBuzz',
        55,
        56,
        'FizzBuzz',
        58,
        59,
        'FizzBuzz',
        61,
        62,
        'FizzBuzz',
        64,
        65,
        'FizzBuzz',
        67,
        68,
        'FizzBuzz',
        70,
        71,
        'FizzBuzz',
        73,
        74,
        'FizzBuzz',
        76,
        77,
        'FizzBuzz',
        79,
        80,
        'FizzBuzz',
        82,
        83,
        'FizzBuzz',
        85,
        86,
        'FizzBuzz',
        88,
        89,
        'FizzBuzz',
        91,
        92,
        'FizzBuzz',
        94,
        95,
        'FizzBuzz',
        97,
        98,
        'FizzBuzz',
        100,
      ],
    };

    //Act
    const result = fizzbuzzService.generateFizzBuzz(
      fizzNumber,
      buzzNumber,
      fizzString,
      buzzString,
      minNumber,
      maxNumber
    );

    //Assert
    expect(result).toEqual(expectedOutput);
  });
  it('generateFizzBuzz method should return the proper output if called with custom fizzString', () => {
    //Arrange
    const fizzNumber = undefined;
    const buzzNumber = undefined;
    const fizzString: string = 'Chocolate';
    const buzzString = undefined;
    const minNumber = undefined;
    const maxNumber = undefined;
    const expectedOutput = {
      values: [
        1,
        2,
        'Chocolate',
        4,
        'Buzz',
        'Chocolate',
        7,
        8,
        'Chocolate',
        'Buzz',
        11,
        'Chocolate',
        13,
        14,
        'ChocolateBuzz',
        16,
        17,
        'Chocolate',
        19,
        'Buzz',
        'Chocolate',
        22,
        23,
        'Chocolate',
        'Buzz',
        26,
        'Chocolate',
        28,
        29,
        'ChocolateBuzz',
        31,
        32,
        'Chocolate',
        34,
        'Buzz',
        'Chocolate',
        37,
        38,
        'Chocolate',
        'Buzz',
        41,
        'Chocolate',
        43,
        44,
        'ChocolateBuzz',
        46,
        47,
        'Chocolate',
        49,
        'Buzz',
        'Chocolate',
        52,
        53,
        'Chocolate',
        'Buzz',
        56,
        'Chocolate',
        58,
        59,
        'ChocolateBuzz',
        61,
        62,
        'Chocolate',
        64,
        'Buzz',
        'Chocolate',
        67,
        68,
        'Chocolate',
        'Buzz',
        71,
        'Chocolate',
        73,
        74,
        'ChocolateBuzz',
        76,
        77,
        'Chocolate',
        79,
        'Buzz',
        'Chocolate',
        82,
        83,
        'Chocolate',
        'Buzz',
        86,
        'Chocolate',
        88,
        89,
        'ChocolateBuzz',
        91,
        92,
        'Chocolate',
        94,
        'Buzz',
        'Chocolate',
        97,
        98,
        'Chocolate',
        'Buzz',
      ],
    };

    //Act
    const result = fizzbuzzService.generateFizzBuzz(
      fizzNumber,
      buzzNumber,
      fizzString,
      buzzString,
      minNumber,
      maxNumber
    );

    //Assert
    expect(result).toEqual(expectedOutput);
  });
  it('generateFizzBuzz method should return the proper output if called with custom buzzString', () => {
    //Arrange
    const fizzNumber = undefined;
    const buzzNumber = undefined;
    const fizzString = undefined;
    const buzzString: string = 'Bar';
    const minNumber = undefined;
    const maxNumber = undefined;
    const expectedOutput = {
      values: [
        1,
        2,
        'Fizz',
        4,
        'Bar',
        'Fizz',
        7,
        8,
        'Fizz',
        'Bar',
        11,
        'Fizz',
        13,
        14,
        'FizzBar',
        16,
        17,
        'Fizz',
        19,
        'Bar',
        'Fizz',
        22,
        23,
        'Fizz',
        'Bar',
        26,
        'Fizz',
        28,
        29,
        'FizzBar',
        31,
        32,
        'Fizz',
        34,
        'Bar',
        'Fizz',
        37,
        38,
        'Fizz',
        'Bar',
        41,
        'Fizz',
        43,
        44,
        'FizzBar',
        46,
        47,
        'Fizz',
        49,
        'Bar',
        'Fizz',
        52,
        53,
        'Fizz',
        'Bar',
        56,
        'Fizz',
        58,
        59,
        'FizzBar',
        61,
        62,
        'Fizz',
        64,
        'Bar',
        'Fizz',
        67,
        68,
        'Fizz',
        'Bar',
        71,
        'Fizz',
        73,
        74,
        'FizzBar',
        76,
        77,
        'Fizz',
        79,
        'Bar',
        'Fizz',
        82,
        83,
        'Fizz',
        'Bar',
        86,
        'Fizz',
        88,
        89,
        'FizzBar',
        91,
        92,
        'Fizz',
        94,
        'Bar',
        'Fizz',
        97,
        98,
        'Fizz',
        'Bar',
      ],
    };

    //Act
    const result = fizzbuzzService.generateFizzBuzz(
      fizzNumber,
      buzzNumber,
      fizzString,
      buzzString,
      minNumber,
      maxNumber
    );

    //Assert
    expect(result).toEqual(expectedOutput);
  });
  it('generateFizzBuzz method should return the proper output if called with custom minNumber', () => {
    //Arrange
    const fizzNumber = undefined;
    const buzzNumber = undefined;
    const fizzString = undefined;
    const buzzString = undefined;
    const minNumber: number = 90;
    const maxNumber = undefined;
    const expectedOutput = {
      values: [
        'FizzBuzz',
        91,
        92,
        'Fizz',
        94,
        'Buzz',
        'Fizz',
        97,
        98,
        'Fizz',
        'Buzz',
      ],
    };

    //Act
    const result = fizzbuzzService.generateFizzBuzz(
      fizzNumber,
      buzzNumber,
      fizzString,
      buzzString,
      minNumber,
      maxNumber
    );

    //Assert
    expect(result).toEqual(expectedOutput);
  });
  it('generateFizzBuzz method should return the proper output if called with custom maxNumber', () => {
    //Arrange
    const fizzNumber = undefined;
    const buzzNumber = undefined;
    const fizzString = undefined;
    const buzzString = undefined;
    const minNumber = undefined;
    const maxNumber: number = 20;
    const expectedOutput = {
      values: [
        1,
        2,
        'Fizz',
        4,
        'Buzz',
        'Fizz',
        7,
        8,
        'Fizz',
        'Buzz',
        11,
        'Fizz',
        13,
        14,
        'FizzBuzz',
        16,
        17,
        'Fizz',
        19,
        'Buzz',
      ],
    };

    //Act
    const result = fizzbuzzService.generateFizzBuzz(
      fizzNumber,
      buzzNumber,
      fizzString,
      buzzString,
      minNumber,
      maxNumber
    );

    //Assert
    expect(result).toEqual(expectedOutput);
  });
});
