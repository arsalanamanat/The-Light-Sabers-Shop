import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../context.js/orderContext';
import { useData } from '../context.js/dataContext';

const OrderDetails = () => {
   const { order, setOrder } = useOrder();
   const { padwan } = useData();
   const [count, setCount] = useState(1);
   const [result, setResult] = useState('');

   const totalPrice = order.map((item) => item.total).reduce((acc, curr) => acc + curr);
   const totalQty = order.map((item) => item.qty).reduce((acc, curr) => acc + curr);
   const history = useNavigate();

   const handleClick = async () => {
      const orderData = {
         clientName: padwan.name,
         clientAge: padwan.age,
         product: order,
         totalPrice: totalPrice,
      };
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(orderData),
      };

      try {
         const request = await fetch('http://localhost:5000/jedisabershop/order/saber', options);
         const response = await request.json();
         console.log(response);
         if (response.success === true) {
            setResult(response.message);

            setTimeout(() => {
               setOrder([]);
               history(-1);
            }, 1500);
         } else if (response.success === false) {
            setResult(response.message);
         }
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <>
         <div className="orderDetails">
            {order.map((item) => (
               <div className="orderCard">
                  <h4>Saber Name: {item.name}</h4>
                  <h4>Crystal: {item.crystal}</h4>
                  <h4>Color: {item.color}</h4>
                  <div className="orderQty">
                     <h4>Quantity :</h4>
                     <div className="qtyBtn">
                        <button
                           onClick={() => {
                              setCount(count + 1);
                              item.qty += 1;
                              item.total = item.qty * item.price;
                           }}
                        >
                           +
                        </button>
                        <h4>{item.qty}</h4>
                        <button
                           onClick={() => {
                              setCount(count - 1);
                              item.qty -= 1;
                              item.total = item.qty * item.price;
                           }}
                        >
                           -
                        </button>
                     </div>
                  </div>
                  <h4>Price : {item.price} $</h4>
                  <h4>Total : {item.total} $</h4>
               </div>
            ))}
         </div>
         <div className="total">
            <h3>
               <strong className="tag">Name :</strong>
               {padwan.name}{' '}
            </h3>
            <h3>
               <strong className="tag">Email :</strong>
               {padwan.age}{' '}
            </h3>
            <h3>
               <strong className="tag">Total Items :</strong>
               {totalQty} pcs
            </h3>
            <h3>
               <strong className="tag">Total Price : </strong>
               {totalPrice} $
            </h3>
            <button className="submitButton" onClick={handleClick}>
               Pay
            </button>
            {result && <h3 className="result">{result}</h3>}
         </div>
      </>
   );
};

export default OrderDetails;
