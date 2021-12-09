import { useOrder } from '../context.js/orderContext';
import { useState } from 'react';

const SaberCard = ({ saber }) => {
   const { order, setOrder } = useOrder();
   const [active, setActive] = useState(false);

   const handleClick = () => {
      setActive(true);
      setOrder([
         ...order,
         {
            id: saber.id,
            name: saber.name,
            crystal: saber.crystal,
            color: saber.color,
            qty: 1,
            price: Number(saber.price),
            total: Number(saber.price),
         },
      ]);
   };

   return (
      <div className={active ? 'selectedCard' : 'card'} onClick={handleClick} key={saber.id}>
         <div className="Title">
            <h4>
               <strong className="tag">Name : </strong>
               {saber.name}
            </h4>

            <p>
               {' '}
               <strong className="tag">Name : </strong>
               {saber.crystal}
            </p>
            <p>
               {' '}
               <strong className="tag">Color : </strong>
               {saber.color}
            </p>

            <p>
               {' '}
               <strong className="tag">Price : </strong>$ {saber.price}
            </p>
         </div>
      </div>
   );
};

export default SaberCard;
