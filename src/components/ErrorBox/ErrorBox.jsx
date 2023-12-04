import React from 'react'
import './ErrorBox.css'

export default function ErrorBox({message}) {
  return (
    <div className='errorBox'>
        <h1>{message}</h1>
    </div>
  )
}
