import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateShop from './pages/shops/CreateShop';
import EditShop from './pages/shops/EditShop';
import Shop from './pages/shops/Shop';
import Shops from './pages/shops/Shops';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/dashboard/shops' element={<Shops />} />
          <Route path='/dashboard/shops/1' element={<Shop />} />
          <Route path='/dashboard/shops/create' element={<CreateShop />} />
          <Route path='/dashboard/shops/edit/1' element={<EditShop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
