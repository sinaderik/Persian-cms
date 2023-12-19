import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import './DetailsModal.css'

export default function DetailsModal({ name, price, count, close }) {

    return (
        <div className='modal-parent active'>
            <div className='details-modal'>
                <div className='close-detail-icon-wrapper'>
                    <IoMdCloseCircle onClick={close} className='close-detail-icon' />
                </div>
                <table className='cms-table'>
                    <thead>
                        <tr>
                            <th>نام</th>
                            <th>قیمت</th>
                            <th>موجودی</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{price.toLocaleString()}</td>
                            <td>{count}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
