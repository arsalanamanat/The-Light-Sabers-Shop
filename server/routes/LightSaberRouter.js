import { Router } from 'express';
import createLightSaber from '../controllers/createLightSaber.js';
import getLightSaber from '../controllers/getLightSaber.js';

const LightSaberRouter = new Router();

LightSaberRouter.post('/saber', createLightSaber);
LightSaberRouter.get('/saber/:id', getLightSaber);

export default LightSaberRouter;
