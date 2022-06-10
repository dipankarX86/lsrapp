import {HashRouter as Router, Routes, Route} from 'react-router-dom'

import AdminUserLogin from './pages/AdminUserLogin';

// All Master Admin Pages imported Bellow
import MasterAdminDashboard from './pages/master/MasterAdminDashboard';
import CreateShop from './pages/master/shops/CreateShop';
import EditShop from './pages/master/shops/EditShop';
import Shop from './pages/master/shops/Shop';
import Shops from './pages/master/shops/Shops';

// Shop Pages
import ShopAdminDashboard from './pages/shop/ShopAdminDashboard';

// Front-Desk Pages
import FrontDeskDashboard from './pages/frontDesk/FrontDeskDashboard';

// Transporter Pages
import TransporterDashboard from './pages/transporter/TransporterDashboard';

// Worker Pages
import WorkerDashboard from './pages/worker/WorkerDashboard';

// Home Service Pages
import HomeServiceDashboard from './pages/homeService/HomeServiceDashboard';

function App() {
  return (
    <>
      <h1>This is outside of router</h1>
      <Router>
        <Routes>
          {/* All Admins */}
          <Route path='/' element={<AdminUserLogin />} />

          {/* Master Admin */}
          <Route path='/master' element={<MasterAdminDashboard />} />
          {/* Master Admin Shop Pages */}
          <Route path='/master/shops' element={<Shops />} />
          <Route path='/master/shops/1' element={<Shop />} />
          <Route path='/master/shops/create' element={<CreateShop />} />
          <Route path='/master/shops/edit/1' element={<EditShop />} />

          {/* Shop Admin */}
          <Route path='/shop' element={<ShopAdminDashboard />} />
          
          {/* Shop Front-Desk */}
          <Route path='/frontDesk' element={<FrontDeskDashboard />} />
          
          {/* Shop Transporter */}
          <Route path='/transporter' element={<TransporterDashboard />} />
          
          {/* Shop Worker */}
          <Route path='/worker' element={<WorkerDashboard />} />
          
          {/* Shop Home-Service */}
          <Route path='/homeService' element={<HomeServiceDashboard />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
// dashboard