import { useEffect } from 'react';
import jediMasterPic from '../assets/JediMaster.jpg';
import padwanPic from '../assets/padawan.jpg';
import { useIsJediAuth } from '../context.js/isJediAuth';
import { Link } from 'react-router-dom';
const SelectUser = () => {
   const { setLoading, setIsJedi } = useIsJediAuth();

   useEffect(() => {
      setLoading(false);
      setIsJedi(false);
   }, [setLoading, setIsJedi]);

   return (
      <div className="selectUserDiv">
         <h1> Select Your User</h1>
         <div className="selectUserContainer">
            <Link to="/jedi">
               <div className="selectUser">
                  <img src={jediMasterPic} className="userPics" alt="JediMaster" />
               </div>
            </Link>
            <Link to="/padwan">
               <div className="selectUser">
                  <img src={padwanPic} className="userPics" alt="padwan" />
               </div>
            </Link>
         </div>
      </div>
   );
};

export default SelectUser;
