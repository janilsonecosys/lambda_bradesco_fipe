import express from 'express';
import {BradescoFipeAdapter} from '../../infrastructure/adapters/BradescoFipeAdapter';
import {FipeUseCase} from '../../application/use-cases/FipeUseCase';
import {FipeController} from '../controllers/FipeController';

const router = express.Router();

const fipeAdapter = new BradescoFipeAdapter();
const fipeUseCase = new FipeUseCase(fipeAdapter);
const fipeController = new FipeController(fipeUseCase);

router.post('/', (req, res) => fipeController.handle(req, res));

export default router;
