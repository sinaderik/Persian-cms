import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { IoBagHandle } from "react-icons/io5";
import { MdDiscount } from "react-icons/md";
import { useState } from 'react';
import './Sidebar.css'

export default function Sidebar({ sidebarIsOpen }) {

    // const [active, setActive] = useState(1)

    // const activeHandler = (buttonId) => {
    //     setActive(buttonId)
    // }

    return (
        <div className={sidebarIsOpen ? 'openSidebar' : 'sidebar'}>
            <h1 className='sidebar-title'>پنل کاربری شما</h1>

            <ul className='sidebar-links'>
                {/* <li onClick={() => activeHandler(1)} className={active === 1 ? 'active' : null}> */}
                    <NavLink to='/'>
                        <FaHome className="sidebar-icon" />
                        صفحه اصلی
                    </NavLink>
                {/* </li> */}
                {/* <li onClick={() => activeHandler(2)} className={active === 2 ? 'active' : null}> */}
                    <NavLink to="/products">
                        <FaCartShopping className="sidebar-icon" />
                        محصولات
                    </NavLink>
                {/* </li> */}
                {/* <li onClick={() => activeHandler(3)} className={active === 3 ? 'active' : null}> */}
                    <NavLink to="/comments">
                        <FaComments className="sidebar-icon" />
                        کامنت ها
                    </NavLink>
                {/* </li> */}
                {/* <li onClick={() => activeHandler(4)} className={active === 4 ? 'active' : null}> */}
                    <NavLink to="/users">
                        <ImUsers className="sidebar-icon" />
                        کاربران
                    </NavLink>
                {/* </li> */}
                {/* <li onClick={() => activeHandler(5)} className={active === 5 ? 'active' : null}> */}
                    <NavLink to="/orders">
                        <IoBagHandle className="sidebar-icon" />
                        سفارشات
                    </NavLink>
                {/* </li> */}
                {/* <li onClick={() => activeHandler(6)} className={active === 6 ? 'active' : null}> */}
                    <NavLink to="/offs">
                        <MdDiscount className="sidebar-icon" />
                        تخفیف ها
                    </NavLink>
                {/* </li> */}
            </ul>
        </div >
    )
}
