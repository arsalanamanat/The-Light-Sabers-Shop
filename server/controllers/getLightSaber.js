import Sabers from '../Models/Sabers.js';

const getLightSaber = async (req, res) => {
   try {
      const id = req.params.id;
      const saber = await Sabers.findOne({ id: id });
      res.status(400).json(saber);
   } catch (err) {
      console.log(err.message);
   }
};

export default getLightSaber;
