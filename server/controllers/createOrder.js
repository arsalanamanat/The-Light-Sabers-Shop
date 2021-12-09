import Order from '../Models/Order.js';
import Sabers from '../Models/Sabers.js';

const createOrder = async (req, res) => {
   if (req.isPaid) {
      try {
         const order = await Order.create(req.body);
         order.product.forEach(async (item) => {
            await Sabers.findOneAndUpdate({ id: item.id }, { $inc: { available: -item.qty } }, { new: true });
         });

         res.status(201).json({ success: true, message: 'order successful ', data: order });
      } catch (err) {
         res.status(400).json({ success: false, message: err.msg });
      }
   } else {
      res.status(400).json({ success: false, message: 'Sorry the payment was not successful' });
   }
};

export default createOrder;
