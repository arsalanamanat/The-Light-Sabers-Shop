import xml2js from 'xml2js';
import fs from 'fs';
import calculatePrice from '../utils/calculatePrice.js';

const getPrice = (xmlFile, z, saberIdentifier) => {
   fs.readFile(xmlFile, async (err, data) => {
      if (err) console.log(err);
      const parser = new xml2js.Parser();
      try {
         const { sabers } = await parser.parseStringPromise(data);
         const selectedSaber = sabers.saber.filter((saber) => saber.name[0] === saberIdentifier);
         const color = selectedSaber[0].crystal[0].color;
         calculatePrice(z, color);
      } catch (err) {
         console.log(err);
      }
   });
};

export default getPrice;
