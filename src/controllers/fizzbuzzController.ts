import { Request, Response } from 'express';
import { fizzBuzz } from '../services/fizzbuzzService';

export const fizzbuzzController = {
  getFizzbuzz(req: Request, res: Response) {
    const fizzbuzz: string[] = fizzBuzz(3, 5);
    res.status(200).send(fizzbuzz);
  },
};
