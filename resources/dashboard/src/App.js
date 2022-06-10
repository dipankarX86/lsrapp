import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import CreateShop from './pages/shops/CreateShop';
import EditShop from './pages/shops/EditShop';
import Shop from './pages/shops/Shop';
import Shops from './pages/shops/Shops';

function App() {
  return (
    <>
      <h1>This is outside of router</h1>
      <Router>
        <Routes>
          <Route path='/shops' element={<Shops />} />
          <Route path='/shops/1' element={<Shop />} />
          <Route path='/shops/create' element={<CreateShop />} />
          <Route path='/shops/edit/1' element={<EditShop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
// dashboard