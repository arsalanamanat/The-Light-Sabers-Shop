import { useContext, createContext, useState } from 'react';

const PadwanContext = createContext();

export const useData = () => {
   return useContext(PadwanContext);
};

export const PadwanProvider = ({ children }) => {
   const [padwan, setPadwan] = useState({ name: '', age: '' });
   const [lightSabers, setLightSabers] = useState([]);
   const value = {
      padwan,
      setPadwan,
      lightSabers,
      setLightSabers,
   };

   return <PadwanContext.Provider value={value}>{children}</PadwanContext.Provider>;
};
