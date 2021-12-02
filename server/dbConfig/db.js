import mongoose from 'mongoose';

const startDatabase = async () => {
   try {
      await mongoose.connect(process.env.MONGO_LINK);
      console.log(`database Connected`);
   } catch (err) {
      console.log(err.message);
   }
};

export default startDatabase;
