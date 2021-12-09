import mongoose from 'mongoose';

const saberSchema = new mongoose.Schema({
   id: { type: String, required: true },
   name: { type: String, required: true },
   available: { type: Number, required: true },
   crystal: [],
});

const Sabers = mongoose.model('Sabers', saberSchema);

export default Sabers;
