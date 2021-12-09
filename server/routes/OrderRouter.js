import { Router } from 'express';
import createOrder from '../controllers/createOrder.js';
import isPaidAuth from '../middleware.js/isPaidAuth.js';
import getAllOrders from '../controllers/getAllOrders.js';

const OrderRouter = new Router();

OrderRouter.post('/saber', isPaidAuth, createOrder);
OrderRouter.get('/', getAllOrders);

export default OrderRouter;
