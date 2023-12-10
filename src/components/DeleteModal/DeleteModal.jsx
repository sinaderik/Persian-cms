import React from 'react'
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { FaInfoCircle } from "react-icons/fa";
import './DeleteModal.css'

export default function DeleteModal({confirmed,rejected}) {

    function DeleteModalItem(){
        return(
            <div className='modal-parent active'>
            <div className='delete-modal' >
                <h1>
                    <FaInfoCircle className='delete-icon' />
                    آیا از حذف اطمینان دارید؟
                </h1>
                <div className='delete-modal-btns'>
                    <button onClick={confirmed} className='delete-btn delete-modal-accept-btn'>بله</button>
                    <button onClick={rejected} className='delete-btn delete-modal-reject-btn'>خیر</button>
                </div>
            </div>
        </div>
        )
    }

    return ReactDOM.createPortal(<DeleteModalItem /> , document.getElementById('modals-parent'))
}
