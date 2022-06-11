import React from 'react'
import {Link} from 'react-router-dom'
import { Outlet } from "react-router-dom"
import {FaSignInAlt} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'

function MasterAdminDashboard() {
    return (
        <>
            <header className='header'>
                <li>
                    <Link to='/master/shops'>
                        <FaSignInAlt /> Shops
                    </Link>
                </li>
                <li>
                    <Link to='/master/shops/1'>
                    <FaSignInAlt /> Shop-1
                    </Link>
                </li>
                <li>
                    <Link to='/master/shops/create'>
                    <FaSignInAlt /> create Shop
                    </Link>
                </li>
                <li>
                    <Link to='/master/shops/edit/1'>
                    <FaSignInAlt /> edit shop-1
                    </Link>
                </li>
            </header>

            <Button>This is RB Button</Button>

            <Outlet />
        </>
    )
}

export default MasterAdminDashboard