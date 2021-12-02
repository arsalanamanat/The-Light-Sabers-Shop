import mongoose from 'mongoose';

const saberSchema = new mongoose.Schema({
   id: { type: Number, required: true },
   name: { type: String, required: true },
   available: { type: Number, required: true },
   crystal: [],
});

const Sabers = mongoose.model('Sabers', saberSchema);

export default Sabers;
