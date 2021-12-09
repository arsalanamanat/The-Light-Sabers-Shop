import { parseString } from 'xml2js';

const getPrice = async (file, age, saberIdentitier) => {
   try {
      let saber;
      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = async () => {
         var xml = reader.result;

         parseString(xml, async (err, result) => {
            saber = result.sabers.saber;
         });
      };

      const request = await fetch('http://localhost:5000/crystals');
      const { data } = await request.json();
      const filteredSaber = saber.filter((saber) => saber.name[0] === saberIdentitier);
      const filterCrystal = data.filter((item) => item.color === filteredSaber[0].crystal[0].color[0]);
      const F = 10 * age;
      const powerNeeded = 100 / (F * filterCrystal[0].f);
      const price = (filterCrystal[0].cr * powerNeeded).toFixed();

      const quotation = {
         name: filteredSaber[0].name[0],
         crystal: filteredSaber[0].crystal[0].name[0],
         color: filteredSaber[0].crystal[0].color[0],
         price: price,
         powerNeeded: `${filterCrystal[0].f} F`,
         crystalType: filterCrystal[0].name,
      };

      return quotation;
   } catch (err) {
      console.log(err.message);
   }
};

export default getPrice;
