import React from 'react'
import { useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailsModal from '../DetailsModal/DetailsModal';
import EditModal from '../EditModal/EditModal';
import './ProductsTable.css'

export default function ProductsTable() {
    const [showModal, setShowModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const deleteModalHandler = () => {
        setShowModal(true)
    }
    const showDetailModalHandler = () => {
        setShowDetailModal(true)
    }
    const showEditModalHandler = () => {
        setShowEditModal(true)
    }

    const deleteConfirmed = () => {
        console.log('deleted');
        setShowModal(false);
    }
    const deleteRejected = () => {
        console.log('delete rejected')
        setShowModal(false);
    }
    const closeDetailsModal = () => {
        setShowDetailModal(false)
    }
    const submitEditForm = (event) => {
        event.preventDefault();
        console.log('edited')
    }
    const closeEditForm=()=>{
        setShowEditModal(false)
    }

    return (
        <>

            <table className='products-table'>
                <thead>
                    <tr className='products-table-heading-tr'>
                        <th>عکس</th>
                        <th>نام محصول</th>
                        <th>قیمت</th>
                        <th>موجودی</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='products-table-tr'>
                        <td>
                            <img className='products-table-img' src="/src/assets/images/oil.jpeg" alt="oil" />
                        </td>
                        <td>روغن سرخ کردنی</td>
                        <td>24000 تومان</td>
                        <td>82</td>
                        <td>
                            <button onClick={() => showDetailModalHandler()} className='products-table-btn'>جزییات</button>
                            <button onClick={() => deleteModalHandler()} className='products-table-btn'>حذف</button>
                            <button onClick={() => showEditModalHandler()} className='products-table-btn'>ویرایش</button>
                        </td>
                    </tr>
                    <tr className='products-table-tr'>
                        <td>
                            <img className='products-table-img' src="/src/assets/images/oil.jpeg" alt="oil" />
                        </td>
                        <td>روغن سرخ کردنی</td>
                        <td>24000 تومان</td>
                        <td>82</td>
                        <td>
                            <button className='products-table-btn'>جزییات</button>
                            <button className='products-table-btn'>حذف</button>
                            <button className='products-table-btn'>ویرایش</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {showModal ? <DeleteModal confirmed={deleteConfirmed} rejected={deleteRejected} /> : null}
            {showDetailModal ? <DetailsModal close={closeDetailsModal} /> : null}
            {showEditModal ? <EditModal submit={submitEditForm} close={closeEditForm}>

            </EditModal> : null}
        </>
    )
}
