import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";
import './Header.css'
import adminImage from '../../assets/images/sina.jpg'

export default function Header() {
  return (
    <div className='header'>
      <div className='admin-profile'>
        <img src={adminImage} alt="admin-profile" />
        <div>
          <h1>سینا دریکوند</h1>
          <h3>برنامه نویس فرانت اند</h3>
        </div>
      </div>

      <div className='header-left-section'>
        <div className='search-box'>
          <input type="text" placeholder='دنبال چی میگردی؟' />
          <button>پیدا کن</button>
        </div>
        <button className='header-left-icon'>
          <CiBrightnessUp style={{'fontSize':'xx-large'}}/>
        </button>
        <button className='header-left-icon'>
          <FaRegBell />
        </button>
      </div>

    </div>
  )
}

