import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";

export default function Detail({hide,children}) {
  return (
    <div className='modal-parent active'>
            <div className='details-modal'>
                <div className='close-detail-icon-wrapper'>
                    <IoMdCloseCircle onClick={hide} className='close-detail-icon' />
                </div>
                {children}
            </div>
        </div>
  )
}
