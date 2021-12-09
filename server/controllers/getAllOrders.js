import Order from '../Models/Order.js';

const getAllOrders = async (req, res) => {
   try {
      const orders = await Order.find();
      res.status(200).json({ success: true, data: orders });
   } catch (err) {
      res.status(404).json({ success: false, msg: 'No Record of Orders' });
   }
};

export default getAllOrders;
