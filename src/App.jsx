import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Allroutes from './routes'
import { useRoutes } from 'react-router-dom'
import { useState } from 'react'
import '../src/custom.css'
import './App.css'
import './cms.css'

export default function App() {
  let Routes = useRoutes(Allroutes)
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  return (
    <div className='main-container'>
      <button className='sidebarHandler' onClick={(event) => {
        event.preventDefault();
        setSidebarIsOpen(previous => !previous)
        console.log('changed')

      }}>open</button>
      
      <Sidebar sidebarIsOpen={sidebarIsOpen} />
      <div className='main'>
        <Header />
        {Routes}
      </div>
    </div>
  )
}

