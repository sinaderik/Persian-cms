import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import './DetailsModal.css'

export default function DetailsModal({close}) {
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
                            <th>محبوبیت</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>لپ تاپ</td>
                            <td>1200000</td>
                            <td>91</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
