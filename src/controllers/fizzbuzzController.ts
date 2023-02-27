import { Request, Response } from 'express';
import { fizzbuzzService } from '../services/fizzbuzzService';

export const fizzbuzzController = {
  getFizzbuzz(req: Request, res: Response) {
    const fizzbuzz: string[] = fizzbuzzService.generateFizzBuzz(3, 5);
    res.status(200).send(fizzbuzz);
  },
};
