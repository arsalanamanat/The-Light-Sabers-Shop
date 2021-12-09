import Crystal from '../Models/Crystals.js';

const getAllCrystals = async (req, res) => {
   try {
      const crystals = await Crystal.find();
      res.status(200).json({ success: true, data: crystals });
   } catch (err) {
      res.status(404).json({ success: false, msg: 'No Record of crystals' });
   }
};

export default getAllCrystals;
