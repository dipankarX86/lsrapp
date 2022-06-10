import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import MasterHeader from '../../components/master/MasterHeader'
// import CreateShop from '../../pages/master/shops/CreateShop';
// import EditShop from '../../pages/master/shops/EditShop';
// import Shop from '../../pages/master/shops/Shop';
// import Shops from '../../pages/master/shops/Shops';

function MasterAdminDashboard() {
  return (
    <>
      <h1>Master Admin Dashboard Home!</h1>
      <MasterHeader />

      
          
      <div>this is the body of home page</div>
    </>
  )
}

export default MasterAdminDashboard