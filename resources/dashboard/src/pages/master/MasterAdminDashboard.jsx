import React from 'react'
import {Link} from 'react-router-dom'
import { Outlet } from "react-router-dom";

function MasterAdminDashboard() {
    return (
        <>
            <header className='header'>
                <li>
                    <Link to='/master/shops'>
                        Shops
                    </Link>
                </li>
                <li>
                    <Link to='/master/shops/1'>
                        Shop-1
                    </Link>
                </li>
                <li>
                    <Link to='/master/shops/create'>
                        create Shop
                    </Link>
                </li>
                <li>
                    <Link to='/master/shops/edit/1'>
                        edit shop-1
                    </Link>
                </li>
            </header>
            <Outlet />
        </>
    )
}

export default MasterAdminDashboard