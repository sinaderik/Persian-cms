import React from 'react'
import { BiRename } from "react-icons/bi";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { MdAttachMoney } from "react-icons/md";
import { FaGratipay } from "react-icons/fa6";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { BsCollection } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import './EditModal.css'

export default function EditModal({ children, submit, close }) {

    const editFormHandler = (event) => {
        submit(event)
    }
    return (
        <div className='modal-parent active'>

            <form className='edit-modal-form'>
                <div className='close-detail-icon-wrapper'>
                    <IoMdCloseCircle onClick={close} className='close-detail-icon' />
                </div>
                <h1>اطلاعات جدید را وارد نمایید</h1>
                <div className='edit-products-form-group'>
                    <span>
                        <BiRename />
                    </span>
                    <input className='edit-product-input' type="text" placeholder='new title'/>
                </div>
                <div className='edit-products-form-group'>
                    <span>
                        <BiRename />
                    </span>
                    <input className='edit-product-input' type="text" placeholder='new title'/>
                </div>
                <div className='edit-products-form-group'>
                    <span>
                        <BiRename />
                    </span>
                    <input className='edit-product-input' type="text" placeholder='new title'/>
                </div>
                <div className='edit-products-form-group'>
                    <span>
                        <BiRename />
                    </span>
                    <input className='edit-product-input' type="text" placeholder='new title'/>
                </div>
                
                <button onClick={(event) => editFormHandler(event)} className='edit-form-submit'>ثبت</button>
            </form>
        </div>
    )
}
