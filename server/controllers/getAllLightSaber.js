import Sabers from '../Models/Sabers.js';

const getAllLightSaber = async (req, res) => {
   try {
      const sabers = await Sabers.find();
      res.status(200).json({ success: true, data: sabers });
   } catch (err) {
      res.status(404).json({ success: false, msg: 'No Record of sabers' });
   }
};

export default getAllLightSaber;
