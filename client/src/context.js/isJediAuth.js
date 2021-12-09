import { useContext, createContext, useState } from 'react';

const IsJediAuth = createContext();

export const useIsJediAuth = () => {
   return useContext(IsJediAuth);
};

export const IsJediAuthProvider = ({ children }) => {
   const [isJedi, setIsJedi] = useState(false);
   const [loading, setLoading] = useState(false);

   const value = {
      isJedi,
      setIsJedi,
      loading,
      setLoading,
   };

   return <IsJediAuth.Provider value={value}>{children}</IsJediAuth.Provider>;
};
