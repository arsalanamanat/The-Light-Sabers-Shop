import { useEffect, useState } from 'react';
import { useOrder } from '../context.js/orderContext';
import { useData } from '../context.js/dataContext';
import { useCrystal } from '../context.js/crystalContext';

const GetQuotation = () => {
   const { order, setOrder } = useOrder();
   const { padwan } = useData();
   const { crystal } = useCrystal();
   let price;

   useEffect(() => {
      order.map((item) => {
         const filteredCrystal = crystal.filter((cry) => (cry.color = item.color));

         const F = 10 * padwan.age;
         const powerNeeded = 100 / (F * filteredCrystal[0].f);
         price = filteredCrystal[0].cr * powerNeeded;

         setOrder([...order, { ...item, price: price }]);
      });
   }, []);

   return <div>{crystal.length > 0 && <h1> {crystal[0].name} </h1>}</div>;
};

export default GetQuotation;
