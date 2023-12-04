import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Allroutes from './routes'
import { useRoutes } from 'react-router-dom'
import '../src/custom.css'
import './App.css'
import './cms.css'

export default function App() {
  let Routes = useRoutes(Allroutes)

  return (
    <div className='main-container'>
        <Sidebar />
        <div className='main'>
          <Header />
            {Routes}
        </div>
    </div>
  )
}

