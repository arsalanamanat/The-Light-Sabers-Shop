import Crystal from '../Models/Crystals.js';

const calculatePrice = async (z, color) => {
   const crystal = await Crystal.findOne({ color: color });
   const F = 10 * z;
   const powerNeeded = 100 / (F * crystal.f);
   const price = crystal.cr * powerNeeded;

   return price.toFixed();
};

export default calculatePrice;
