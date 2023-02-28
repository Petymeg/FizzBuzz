import { Request, Response } from 'express';
import { fizzbuzzService } from '../services/fizzbuzzService';

export const fizzbuzzController = {
  getFizzbuzz(req: Request, res: Response) {
    const {
      fizzNumber,
      buzzNumber,
      fizzString,
      buzzString,
      minNumber,
      maxNumber,
    } = req.body;
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
