/* eslint-disable react/jsx-no-comment-textnodes */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IsJediAuthProvider } from './context.js/isJediAuth';
import { PadwanProvider } from './context.js/dataContext.js';
import { OrderProvider } from './context.js/orderContext.js';
import { CrystalProvider } from './context.js/crystalContext.js';
import LightSabers from './components/LightSabers.js';
import Navbar from './components/NavBar';
import Order from './components/Order.js';
import PadwanUi from './components/PadwanUi.js';
import JediUi from './components/JediUi.js';
import SelectUser from './components/SelectUser.js';
import CreateSaber from './components/CreateSaber.js';
import UploadData from './components/UploadData.js';
import Orders from './components/Orders';

const App = () => {
   return (
      <IsJediAuthProvider>
         <PadwanProvider>
            <OrderProvider>
               <CrystalProvider>
                  <Router>
                     <Navbar />
                     <div className="cornerJedi"></div>
                     <Routes>
                        <Route exact path="/" element={<SelectUser />} />
                        // Jedi Function Routes
                        <Route exact path="/jedi" element={<JediUi />} />
                        <Route exact path="/jedi/createSaber" element={<CreateSaber />} />
                        <Route exact path="/jedi/orders" element={<Orders />} />
                        // Padwan Function Routes
                        <Route exact path="/padwan" element={<PadwanUi />} />
                        <Route exact path="/sabers" element={<LightSabers />} />
                        <Route exact path="/order" element={<Order />} />
                        <Route exact path="/padwan/quotation" element={<UploadData />} />
                     </Routes>
                  </Router>
               </CrystalProvider>
            </OrderProvider>
         </PadwanProvider>
      </IsJediAuthProvider>
   );
};

export default App;
