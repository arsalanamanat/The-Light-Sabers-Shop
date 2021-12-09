import { useContext, createContext, useState, useEffect } from 'react';
import fetchData from '../utils/fetchData';

const CrystalContext = createContext();

export const useCrystal = () => {
   return useContext(CrystalContext);
};

export const CrystalProvider = ({ children }) => {
   const [crystal, setCrystal] = useState([]);

   useEffect(() => {
      fetchData('http://localhost:5000/crystals', setCrystal);
   }, []);

   const value = {
      crystal,
      setCrystal,
   };

   return <CrystalContext.Provider value={value}>{children}</CrystalContext.Provider>;
};
