import express from 'express';
import startDatabase from './dbConfig/db.js';
// import getPrice from './controllers/getPrice.js';
import dotenv from 'dotenv';
import xmlparser from 'express-xml-parser';

import path from 'path';
import LightSaberRouter from './routes/LightSaberRouter.js';
import createLightSaber from './controllers/createLightSaber.js';
// const __dirname = path.resolve();

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xmlparser());

const startServer = () => {
   try {
      startDatabase();
      app.listen(process.env.PORT, () => {
         console.log(`Server Started on Port ${process.env.PORT}`);
         //  getPrice(__dirname + '/assets/example.xml', 10, 'Master Jedi Saber');

         app.use('/jedisabershop', LightSaberRouter);
      });
   } catch (err) {
      console.e.log(err.message);
   }
};

startServer();
