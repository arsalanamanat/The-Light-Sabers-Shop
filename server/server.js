import express from 'express';
import startDatabase from './dbConfig/db.js';
import dotenv from 'dotenv';
import xmlparser from 'express-xml-parser';
import cors from 'cors';
import LightSaberRouter from './routes/LightSaberRouter.js';
import CrystalRouter from './routes/CrystalRouter.js';
import OrderRouter from './routes/OrderRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xmlparser());

app.use(cors());

const startServer = () => {
   try {
      startDatabase();
      app.listen(process.env.PORT, () => console.log(`Server Started on Port ${process.env.PORT}`));

      // Routers
      app.use('/jedisabershop/order', OrderRouter);
      app.use('/jedisabershop', LightSaberRouter);
      app.use('/crystals', CrystalRouter);
   } catch (err) {
      console.e.log(err.message);
   }
};

startServer();
