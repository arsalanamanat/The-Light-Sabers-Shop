import { useEffect, useState } from 'react';
import { useIsJediAuth } from '../context.js/isJediAuth';
import fetchData from '../utils/fetchData';

const JediUi = () => {
   const { setLoading, setIsJedi } = useIsJediAuth();
   const [sabers, setSabers] = useState();
   const [inventory, setInventory] = useState();

   useEffect(() => {
      fetchData('http://localhost:5000/jedisabershop/sabers', setSabers);
      setLoading(true);
      setIsJedi(true);
   }, [setLoading, setIsJedi, setSabers]);

   const handleClick = async (e) => {
      const request = await fetch(`http://localhost:5000/jedisabershop/saber/${e.target.id}`);
      const { data } = await request.json();
      console.log(data);
      setInventory(data.available);
   };
   return (
      <>
         <div className="sabersList">
            {sabers &&
               sabers.map((saber) => (
                  <div className="card" onClick={handleClick} id={saber.id} key={saber.id}>
                     <div className="Title">
                        <h4>
                           <strong className="tag">Name : </strong>
                           {saber.name}
                        </h4>

                        <p>
                           {' '}
                           <strong className="tag">Crystal : </strong>
                           {saber.crystal[0].name}
                        </p>
                        <p>
                           {' '}
                           <strong className="tag">Color : </strong>
                           {saber.crystal[0].color}
                        </p>
                     </div>
                  </div>
               ))}
         </div>
         <div className="inventory">
            {inventory && (
               <p>
                  {' '}
                  <strong className="tag">Available : </strong>
                  {inventory}
               </p>
            )}
         </div>
      </>
   );
};

export default JediUi;
