import OrderDetails from './OrderDetails';
import { useOrder } from '../context.js/orderContext';

const Order = () => {
   const { order } = useOrder();

   return (
      <>
         <div className="orderSummary">{order.length > 0 ? <OrderDetails /> : <h1> There are no items in the card</h1>}</div>
      </>
   );
};

export default Order;
