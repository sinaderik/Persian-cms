import React from 'react'
import { useState } from 'react';
import { BiRename } from "react-icons/bi";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { MdAttachMoney } from "react-icons/md";
import { FaGratipay } from "react-icons/fa6";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { BsCollection } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import './EditModal.css'

export default function EditModal({ product, children, submit, close }) {

    // state for editing products 
    const [productId, setProductId] = useState(product.id)
    const [newName, setNewName] = useState(product.title)
    const [newPrice, setNewPrice] = useState(product.price)
    const [newcount, setNewCount] = useState(product.count)
    const [newImg, setNewImg] = useState(product.img)
    const [newPopularity, setNewPopularity] = useState(product.popularity)
    const [newSale, setNewSale] = useState(product.sale)
    const [newColors, setNewColors] = useState(product.colors)

    const editFormHandler = (event) => {
        const EditedItem = {
            newName,
            newPrice,
            newcount,
            newImg,
            newPopularity,
            newSale,
            newColors,
        }
        submit(event, EditedItem, productId)
    }

    const handleInputChange = (event) => {
        const rawValue = event.target.value;

        // Remove existing commas and convert to a numeric value
        const numericValue = parseFloat(rawValue.replace(/,/g, ''));

        // Check if it's a valid number
        if (!isNaN(numericValue)) {
            // Update the state with the formatted value
            setNewPrice(numericValue);
        } else {
            // If the input is not a valid number, you may want to handle it differently
            setNewPrice('');
        }
    };

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
                    <input
                        className='edit-product-input'
                        onChange={(e) => setNewName(e.target.value)}
                        value={newName}
                        type="text"
                        placeholder='عنوان'
                    />
                </div>
                <div className='edit-products-form-group'>
                    <span>
                        <BiRename />
                    </span>
                    <input
                        className='edit-product-input'
                        onChange={handleInputChange}
                        value={newPrice.toLocaleString()}
                        type="text"
                        placeholder='مبلغ'
                    />
                </div>
                <div className='edit-products-form-group'>
                    <span>
                        <BiRename />
                    </span>
                    <input
                        className='edit-product-input'
                        onChange={(e) => setNewCount(e.target.value)}
                        value={newcount}
                        type="text"
                        placeholder='موجودی'
                    />
                </div>
                <div className='edit-products-form-group'>
                    <span>
                        <BiRename />
                    </span>
                    <input
                        className='edit-product-input'
                        onChange={(e) => setNewImg(e.target.value)}
                        value={newImg}
                        type="text"
                        placeholder='لینک عکس'
                    />
                </div>
                <div className='edit-products-form-group'>
                    <span>
                        <BiRename />
                    </span>
                    <input
                        className='edit-product-input'
                        onChange={(e) => setNewSale(e.target.value)}
                        value={newSale}
                        type="text"
                        placeholder='میزان فروش'
                    />
                </div>
                <div className='edit-products-form-group'>
                    <span>
                        <BiRename />
                    </span>
                    <input
                        className='edit-product-input'
                        onChange={(e) => setNewPopularity(e.target.value)}
                        value={newPopularity}
                        type="text"
                        placeholder='میزان محبوبیت'
                    />
                </div>
                <div className='edit-products-form-group'>
                    <span>
                        <BiRename />
                    </span>
                    <input
                        className='edit-product-input'
                        onChange={(e) => setNewColors(e.target.value)}
                        value={newColors}
                        type="text"
                        placeholder='تعداد رنگ بندی'
                    />
                </div>

                <button onClick={(event) => editFormHandler(event)} className='edit-form-submit'>ثبت</button>
            </form>
        </div>
    )
}
