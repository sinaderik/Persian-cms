import React from 'react'
import { useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailsModal from '../DetailsModal/DetailsModal';
import EditModal from '../EditModal/EditModal';
import ErrorBox from '../ErrorBox/ErrorBox'
import { useEffect, useMemo } from 'react'
import useFetch from '../../../hooks/useFetch'
import './ProductsTable.css'
import { json } from 'react-router-dom';

export default function ProductsTable({getAllData,allProducts }) {

    // const { data, loading, error } = useFetch(api)
    const [deleteId, setDeleteId] = useState(null)
    // State for Modals
    const [showModal, setShowModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
 
    // state for Product detail
    const [productName, setProductName] = useState(null)
    const [productPrice, setProductPrice] = useState(null)
    const [productCount, setProductCount] = useState(null)
    // state for editing products 
    const [editProduct, setEditProduct] = useState(null)


    const deleteModalHandler = () => {
        setShowModal(true)
    }
    const showDetailModalHandler = (name, price, count) => {
        setProductName(name)
        setProductCount(count)
        setProductPrice(price)
        setShowDetailModal(true)
    }
    const showEditModalHandler = (item) => {
        setShowEditModal(true)
        setEditProduct(item)
    }

    const deleteConfirmed = () => {

        fetch(`http://localhost:3000/api/products/${deleteId}`, { method: "DELETE" })
            .then(response => response.json)
            .then((data) => {
                setShowModal(false)
                getAllData();
            })
    }
    const deleteRejected = () => {
        console.log('delete rejected')
        setShowModal(false);
    }
    const closeDetailsModal = () => {
        setShowDetailModal(false)
    }
    const submitEditForm = (event, editedItem, id) => {
        event.preventDefault();
        fetch(`http://localhost:3000/api/products/${id}`, {
            method: 'PUT',
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                id: id,
                title: editedItem.newName,
                price: editedItem.newPrice,
                count: editedItem.newcount,
                img: editedItem.newImg,
                popularity: editedItem.newPopularity,
                sale: editedItem.newSale,
                colors: editedItem.newColors,
            })
        }).then((response) => {
            if(!response.ok){
                alert('Something went wrong')
            }
            getAllData();
            setShowEditModal(false)
        })
    }
    const closeEditForm = () => {
        setShowEditModal(false)
    }

    return (
        <>
            <table className='products-table'>
                <thead>
                    <tr className='products-table-heading-tr'>
                        <th>کد</th>
                        <th>عکس</th>
                        <th>نام محصول</th>
                        <th>قیمت</th>
                        <th>موجودی</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.reverse().map((item, index) => (
                        <tr key={item.id} className='products-table-tr'>
                            <td>{index + 1}</td>
                            <td>
                                <img className='products-table-img' src={`/src/assets/${item.img}`} alt="oil" />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.price.toLocaleString()} تومان</td>
                            <td>{item.count}</td>
                            <td>
                                <button
                                    className='products-table-btn'
                                    onClick={() => showDetailModalHandler(item.title, item.price, item.count)}
                                >
                                    جزییات
                                </button>
                                <button
                                    onClick={() => {
                                        deleteModalHandler()
                                        setDeleteId(item.id)
                                    }} className='products-table-btn'>
                                    حذف
                                </button>
                                <button
                                    onClick={() => showEditModalHandler(item)}
                                    className='products-table-btn'>
                                    ویرایش
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal ? <DeleteModal confirmed={deleteConfirmed} rejected={deleteRejected} /> : null}
            {showDetailModal ? <DetailsModal name={productName} price={productPrice} count={productCount} close={closeDetailsModal} /> : null}
            {showEditModal ? <EditModal product={editProduct} submit={submitEditForm} close={closeEditForm}></EditModal> : null}
        </>
    )
}
