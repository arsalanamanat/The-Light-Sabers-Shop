import Sabers from '../Models/Sabers.js';

const getLightSaber = async (req, res) => {
   try {
      const id = req.params.id;
      const saber = await Sabers.findOne({ id: id });
      res.status(200).json({ success: true, data: saber });
   } catch (err) {
      res.status(400).json({ success: false, msg: err.message });
   }
};

export default getLightSaber;
