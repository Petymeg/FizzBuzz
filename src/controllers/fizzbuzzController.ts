import { Request, Response, NextFunction } from 'express';
import { fizzbuzzService } from '../services/fizzbuzzService';
import { badRequestError } from '../services/generalErrorService';
import { validatorService } from '../services/validatorService';

export const fizzbuzzController = {
  getFizzbuzz(req: Request, res: Response, next: NextFunction) {
    const {
      fizzNumber,
      buzzNumber,
      fizzString,
      buzzString,
      minNumber,
      maxNumber,
    } = req.body;

    if (validatorService.isNotNumber(fizzNumber))
      return next(badRequestError(`fizzNumber ${fizzNumber} is not a number`));
    if (validatorService.isNotNumber(buzzNumber))
      return next(badRequestError(`buzzNumber ${buzzNumber} is not a number`));
    if (validatorService.isNotNumber(minNumber))
      return next(badRequestError(`minNumber ${minNumber} is not a number`));
    if (validatorService.isNotNumber(maxNumber))
      return next(badRequestError(`maxNumber ${maxNumber} is not a number`));

    const fizzbuzz: (number | string)[] = fizzbuzzService.generateFizzBuzz(
      fizzNumber,
      buzzNumber,
      fizzString,
      buzzString,
      minNumber,
      maxNumber
    );

    res.status(200).send(fizzbuzz);
  },
};
