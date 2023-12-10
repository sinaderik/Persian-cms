import React from 'react'
import { useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailsModal from '../DetailsModal/DetailsModal';
import EditModal from '../EditModal/EditModal';
import ErrorBox from '../ErrorBox/ErrorBox'
import { useEffect, useMemo } from 'react'
import useFetch from '../../../hooks/useFetch'
import './ProductsTable.css'

export default function ProductsTable({ api }) {

    // const { data, loading, error } = useFetch(api)
    const [deleteId, setDeleteId] = useState(null)
    // State for Modals
    const [showModal, setShowModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    // state for allProducts
    const [allProducts, setAllProducts] = useState([])
    // state for Product detail
    const [productName, setProductName] = useState(null)
    const [productPrice, setProductPrice] = useState(null)
    const [productCount, setProductCount] = useState(null)


    useEffect(() => {
        getAllData()
    }, [])

    const getAllData = () => {
        fetch(api)
            .then((response) => response.json())
            .then(data => setAllProducts(data))
    }

    const deleteModalHandler = () => {
        setShowModal(true)
    }
    const showDetailModalHandler = (name, price, count) => {
        setProductName(name)
        setProductCount(count)
        setProductPrice(price)
        setShowDetailModal(true)
    }
    const showEditModalHandler = () => {
        setShowEditModal(true)
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
    const submitEditForm = (event) => {
        event.preventDefault();
        console.log('edited')
    }
    const closeEditForm = () => {
        setShowEditModal(false)
    }

    return (
        <>
            {/* {error !== null ? <ErrorBox message="هیچ محصولی یافت نشد" /> : null} */}
            {/* {loading ? <ErrorBox message="در حال بارگذاری ..." /> : null} */}
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
                    {allProducts.map((item, index) => (
                        <tr key={item.id} className='products-table-tr'>
                            <td>{index + 1}</td>
                            <td>
                                <img className='products-table-img' src={`/src/assets/${item.img}`} alt="oil" />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.price.toLocaleString()} تومان</td>
                            <td>{item.count}</td>
                            <td>
                                <button onClick={() => showDetailModalHandler(item.title, item.price, item.count)} className='products-table-btn'>جزییات</button>
                                <button
                                    onClick={() => {
                                        deleteModalHandler()
                                        setDeleteId(item.id)
                                    }} className='products-table-btn'>حذف</button>
                                <button onClick={() => showEditModalHandler()} className='products-table-btn'>ویرایش</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal ? <DeleteModal confirmed={deleteConfirmed} rejected={deleteRejected} /> : null}
            {showDetailModal ? <DetailsModal name={productName} price={productPrice} count={productCount} close={closeDetailsModal} /> : null}
            {showEditModal ? <EditModal submit={submitEditForm} close={closeEditForm}></EditModal> : null}
        </>
    )
}
