import { Router } from 'express';
import createLightSaber from '../controllers/createLightSaber.js';
import getAllLightSaber from '../controllers/getAllLightSaber.js';
import getLightSaber from '../controllers/getLightSaber.js';

const LightSaberRouter = new Router();

LightSaberRouter.get('/sabers', getAllLightSaber);
LightSaberRouter.post('/saber', createLightSaber);
LightSaberRouter.get('/saber/:id', getLightSaber);

export default LightSaberRouter;
