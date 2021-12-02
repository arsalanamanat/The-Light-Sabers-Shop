import Crystal from '../Models/Crystals.js';

const createCrystal = () => {
   const crystalData = [
      {
         name: 'Ilum crystal',
         color: 'red',
         f: '20',
         cr: '101',
      },

      {
         name: 'Dantooine crystal',
         color: 'blue',
         f: '19',
         cr: '10',
      },

      {
         name: ': Dagobah crystal ',
         color: 'green',
         f: '22',
         cr: '37',
      },
   ];

   crystalData.forEach(async (crystal) => await Crystal.create(crystal));
};

export default createCrystal;
