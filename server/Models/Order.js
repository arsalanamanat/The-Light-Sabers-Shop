import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
   clientName: { type: String, required: true },
   clientAge: { type: Number, required: true },
   product: [],
   totalPrice: { type: Number, required: true },
});

const Order = mongoose.model('Orders', orderSchema);

export default Order;
