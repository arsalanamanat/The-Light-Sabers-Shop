import Sabers from '../Models/Sabers.js';

const createLightSaber = async (req, res) => {
   const { saber } = req.body;
   const existedSaber = await Sabers.findOne({ id: saber.id[0] });
   console.log(existedSaber);

   if (!existedSaber) {
      try {
         await Sabers.create({
            id: Number(saber.id[0]),
            name: saber.name[0],
            available: Number(saber.available[0]),
            crystal: { name: saber.crystal[0].name[0], color: saber.crystal[0].color[0] },
         });

         res.status(205).json({ success: 'true', msg: 'Saber successfully Created' });
      } catch (err) {
         console.log(err.message);
      }
   } else {
      res.status(404).json({ success: 'false', msg: 'Saber already exists' });
   }
};

export default createLightSaber;
