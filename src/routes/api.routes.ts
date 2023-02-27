import express from 'express';
import cors from 'cors';
import { fizzbuzzController } from '../controllers/fizzbuzzController';

const apiRouter = express.Router();

apiRouter.use(cors());
apiRouter.use(express.json());
apiRouter.get('/fizzbuzz', fizzbuzzController.getFizzbuzz);

export default apiRouter;
