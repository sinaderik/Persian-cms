import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { IoBagHandle } from "react-icons/io5";
import { MdDiscount } from "react-icons/md";
import { useState } from 'react';
import './Sidebar.css'

export default function Sidebar() {

    const [active, setActive] = useState(1)

    const activeHandler = (buttonId) => {
        setActive(buttonId)
    }

    return (
        <div className='sidebar'>
            <h1 className='sidebar-title'>پنل کاربری شما</h1>

            <ul className='sidebar-links'>
                <li onClick={()=>activeHandler(1)} className={active === 1? 'active' : null}>
                <Link to='/'>
                    <FaHome className="sidebar-icon" />
                    صفحه اصلی
                </Link>
            </li>
            <li onClick={()=>activeHandler(2)} className={active === 2? 'active' : null}>
                <Link to="/products">
                    <FaCartShopping className="sidebar-icon" />
                    محصولات
                </Link>
            </li>
            <li onClick={()=>activeHandler(3)} className={active === 3? 'active' : null}>
                <Link to="/comments">
                    <FaComments className="sidebar-icon" />
                    کامنت ها
                </Link>
            </li>
            <li onClick={()=>activeHandler(4)} className={active === 4? 'active' : null}>
                <Link to="/users">
                    <ImUsers className="sidebar-icon" />
                    کاربران
                </Link>
            </li>
            <li onClick={()=>activeHandler(5)} className={active === 5? 'active' : null}>
                <Link to="/orders">
                    <IoBagHandle className="sidebar-icon" />
                    سفارشات
                </Link>
            </li>
            <li onClick={()=>activeHandler(6)} className={active === 6? 'active' : null}>
                <Link to="/offs">
                    <MdDiscount className="sidebar-icon" />
                    تخفیف ها
                </Link>
            </li>
        </ul>
        </div >
    )
}
