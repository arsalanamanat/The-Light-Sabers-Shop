import { Router } from 'express';
import createCrystal from '../controllers/createCrystal.js';
import getAllCrystals from '../controllers/getAllCrystals.js';
const CrystalRouter = new Router();

CrystalRouter.get('/', getAllCrystals);
CrystalRouter.post('/', createCrystal);

export default CrystalRouter;
