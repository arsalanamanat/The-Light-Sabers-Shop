import mongoose from 'mongoose';

const crystalSchema = new mongoose.Schema({
   name: { type: String, required: true },
   color: { type: String, required: true },
   f: { type: Number, required: true },
   cr: { type: Number, required: true },
});

const Crystal = mongoose.model('Crystals', crystalSchema);

export default Crystal;
