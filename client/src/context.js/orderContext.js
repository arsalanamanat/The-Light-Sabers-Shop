import { useContext, createContext, useState } from 'react';

const OrderContext = createContext();

export const useOrder = () => {
   return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
   const [order, setOrder] = useState([]);

   const value = {
      order,
      setOrder,
   };

   return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};
