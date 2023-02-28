import { Request, Response, NextFunction } from 'express';
import { fizzbuzzRequestViewModel } from '../models/view/fizzbuzzRequestViewModel';
import { fizzbuzzViewModel } from '../models/view/fizzbuzzViewModel';
import { fizzbuzzService } from '../services/fizzbuzzService';
import { badRequestError } from '../services/generalErrorService';
import { validatorService } from '../services/validatorService';

export const fizzbuzzController = {
  getFizzbuzz(
    req: Request<fizzbuzzRequestViewModel>,
    res: Response<fizzbuzzViewModel>,
    next: NextFunction
  ) {
    const {
      fizzNumber,
      buzzNumber,
      fizzString,
      buzzString,
      minNumber,
      maxNumber,
    } = req.body;

    if (validatorService.isNotNumber(fizzNumber))
      return next(badRequestError(`fizzNumber ${fizzNumber} must be a number`));
    if (validatorService.isNotNumber(buzzNumber))
      return next(badRequestError(`buzzNumber ${buzzNumber} must be a number`));
    if (validatorService.isNotNumber(minNumber))
      return next(badRequestError(`minNumber ${minNumber} must be a number`));
    if (validatorService.isNotNumber(maxNumber))
      return next(badRequestError(`maxNumber ${maxNumber} must be a number`));

    if (validatorService.isZero(fizzNumber))
      return next(
        badRequestError(`Cannot divide by 0, fizzNumber needs to be changed`)
      );
    if (validatorService.isZero(buzzNumber))
      return next(
        badRequestError(`Cannot divide by 0, buzzNumber needs to be changed`)
      );

    try {
      const fizzbuzz: fizzbuzzViewModel = fizzbuzzService.generateFizzBuzz(
        fizzNumber,
        buzzNumber,
        fizzString,
        buzzString,
        minNumber,
        maxNumber
      );

      res.status(200).send(fizzbuzz);
    } catch (err) {
      next(err);
    }
  },
};
