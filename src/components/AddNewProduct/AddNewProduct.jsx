import React from 'react'
import { BiRename } from "react-icons/bi";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { MdAttachMoney } from "react-icons/md";
import { FaGratipay } from "react-icons/fa6";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { BsCollection } from "react-icons/bs";
import './AddNewProduct.css'

export default function AddNewProduct() {
    return (
        <div className='products-main'>
            <h1 className='products-title'>افزودن محصول جدید</h1>
            <form className='add-products-form' action="#">
                <div className='add-products-form-wrapper'>
                    <div className='add-products-form-group'>
                        <BiRename />
                        <input className='add-products-input' type="text" placeholder='اسم محصول را بنویسید' />
                    </div>
                    <div className='add-products-form-group'>
                        <MdAttachMoney />
                        <input className='add-products-input' type="text" placeholder='قیمت محصول را بنویسید' />
                    </div>
                    <div className='add-products-form-group'>
                        <MdOutlinePhotoSizeSelectActual />
                        <input className='add-products-input' type="text" placeholder='آدرس عکس محصول را بنویسید' />
                    </div>
                    <div className='add-products-form-group'>
                        <FaRegFaceGrinHearts />
                        <input className='add-products-input' type="text" placeholder='میزان محبوبیت محصول را بنویسید' />
                    </div>
                    <div className='add-products-form-group'>
                        <FcStatistics />
                        <input className='add-products-input' type="text" placeholder='میزان فروش محصول را بنویسید' />
                    </div>
                    <div className='add-products-form-group'>
                        <BsCollection />
                        <input className='add-products-input' type="text" placeholder='تعداد رنگ بندی محصول را بنویسید' />
                    </div>
                </div>
                <button className='add-products-submit'>ثبت</button>
            </form>
        </div>
    )
}
