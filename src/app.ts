import express from 'express';
import { fizzBuzz } from './FizzBuzz';

const app = express();

app.get('/api', (_req, res) => {
  const responseArr: string[] = fizzBuzz(3, 5);
  res.status(200).send(responseArr);
});

export default app;
