import { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';

const Orders = () => {
   const [orders, setOrders] = useState([]);
   console.log(orders);

   useEffect(() => {
      fetchData('http://localhost:5000/jedisabershop/order', setOrders);
   }, [setOrders]);
   return (
      <div className="orders">
         {orders.length > 0 ? (
            orders.map((order) => (
               <div className="card">
                  <p>
                     <strong className="tag">Client Name : </strong>
                     {order.clientName}
                  </p>

                  <p>
                     <strong className="tag">Client age : </strong>
                     {order.clientAge}
                  </p>

                  <p>
                     <strong className="tag">Products : </strong>
                     {order.product.length}
                  </p>

                  <p>
                     <strong className="tag">Total Price : </strong>
                     {order.totalPrice}
                  </p>
               </div>
            ))
         ) : (
            <h1>There are no Orders</h1>
         )}
      </div>
   );
};

export default Orders;
