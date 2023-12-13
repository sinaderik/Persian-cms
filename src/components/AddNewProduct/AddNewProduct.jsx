import React from 'react';
import { useState } from 'react';
import { BiRename } from "react-icons/bi";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { MdAttachMoney } from "react-icons/md";
import { FaGratipay } from "react-icons/fa6";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { BsCollection } from "react-icons/bs";
import './AddNewProduct.css'

export default function AddNewProduct({getAllData}) {

    const [addProduct, setAddProducts] = useState({
        title: "",
        price: "",
        count: "",
        img: "",
        popularity: "",
        sale: "",
        colors: ""
    })

    function addNewProduct(event) {
        event.preventDefault();
        console.log(addProduct)
        fetch('http://localhost:3000/api/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: addProduct.title,
                price: addProduct.price,
                count: addProduct.count,
                img: addProduct.img,
                popularity: addProduct.popularity,
                sale: addProduct.sale,
                colors: addProduct.colors
            })
        }).then((response) => {
            if (response.ok) {
                getAllData();
                setAddProducts({
                    title: "",
                    price: "",
                    count: "",
                    img: "",
                    popularity: "",
                    sale: "",
                    colors: ""
                })
            }
        })

    }

    return (
        <div className='products-main'>
            <h1 className='products-title'>افزودن محصول جدید</h1>
            <form className='add-products-form' action="#">
                <div className='add-products-form-wrapper'>
                    <div className='add-products-form-group'>
                        <BiRename />
                        <input
                            value={addProduct.title}
                            onChange={(e) => setAddProducts({ ...addProduct, title: e.target.value })}
                            className='add-products-input'
                            type="text"
                            placeholder='اسم محصول را بنویسید'
                        />
                    </div>
                    <div className='add-products-form-group'>
                        <MdAttachMoney />
                        <input
                            value={addProduct.price}
                            onChange={(e) => setAddProducts({ ...addProduct, price: e.target.value })}
                            className='add-products-input'
                            type="text"
                            placeholder='قیمت محصول را بنویسید'
                        />
                    </div>
                    <div className='add-products-form-group'>
                        <MdOutlinePhotoSizeSelectActual />
                        <input
                            value={addProduct.img}
                            onChange={(e) => setAddProducts({ ...addProduct, img: e.target.value })}
                            className='add-products-input'
                            type="text"
                            placeholder='آدرس عکس محصول را بنویسید'
                        />
                    </div>
                    <div className='add-products-form-group'>
                        <FaRegFaceGrinHearts />
                        <input
                            value={addProduct.popularity}
                            onChange={(e) => setAddProducts({ ...addProduct, popularity: e.target.value })}
                            className='add-products-input'
                            type="text"
                            placeholder='میزان محبوبیت محصول را بنویسید'
                        />
                    </div>
                    <div className='add-products-form-group'>
                        <FcStatistics />
                        <input
                            value={addProduct.sale}
                            onChange={(e) => setAddProducts({ ...addProduct, sale: e.target.value })}
                            className='add-products-input'
                            type="text"
                            placeholder='میزان فروش محصول را بنویسید'
                        />
                    </div>
                    <div className='add-products-form-group'>
                        <BsCollection />
                        <input
                            value={addProduct.colors}
                            onChange={(e) => setAddProducts({ ...addProduct, colors: e.target.value })}
                            className='add-products-input'
                            type="text"
                            placeholder='تعداد رنگ بندی محصول را بنویسید'
                        />
                    </div>
                    <div className='add-products-form-group'>
                        <BsCollection />
                        <input
                            value={addProduct.count}
                            onChange={(e) => setAddProducts({ ...addProduct, count: Number(e.target.value) })}
                            className='add-products-input'
                            type="text"
                            placeholder='موجودی'
                        />
                    </div>
                </div>
                <button onClick={(e) => addNewProduct(e)} className='add-products-submit'>ثبت</button>
            </form>
        </div>
    )
}
