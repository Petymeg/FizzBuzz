import express from 'express';
import cors from 'cors';
import { fizzBuzz } from '../services/fizzbuzzService';

const apiRouter = express.Router();

apiRouter.use(cors());
apiRouter.use(express.json());
apiRouter.get('/fizzbuzz', (_req, res) => {
  const responseArr: string[] = fizzBuzz(3, 5);
  res.status(200).send(responseArr);
});

export default apiRouter;
