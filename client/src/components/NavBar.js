import jediLogo from '../assets/jediLogo.png';
import { useOrder } from '../context.js/orderContext';
import { Link } from 'react-router-dom';
import { useIsJediAuth } from '../context.js/isJediAuth';

const Navbar = () => {
   const { isJedi, loading } = useIsJediAuth();
   const { order } = useOrder();

   return (
      <div className="navBar">
         <Link to="/">
            <div>
               <img src={jediLogo} className="logo" alt="logo"></img>
            </div>
         </Link>
         <div>
            <h1> Welcome to Light Sabers shop</h1>
         </div>

         {loading && (
            <div className="navBtns">
               {isJedi ? (
                  <div>
                     <Link to="/jedi/createSaber">
                        <button className="padwanBtn"> Create Sabers </button>
                     </Link>
                     <Link to="/jedi/orders">
                        <button className="padwanBtn"> Orders </button>
                     </Link>
                  </div>
               ) : (
                  <>
                     <div>
                        <Link to="/padwan/quotation">
                           <button className="padwanBtn"> Quotation </button>
                        </Link>
                     </div>
                     <div>
                        <Link to="/order">
                           <button className="padwanBtn"> Cart </button>
                        </Link>
                        <p className={order.length > 0 ? 'cartBadge' : undefined}>{order.length > 0 && order.length}</p>
                     </div>
                  </>
               )}
            </div>
         )}
      </div>
   );
};

export default Navbar;
