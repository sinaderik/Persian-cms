import React from 'react'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductsTable from '../ProductsTable/ProductsTable'
import './Products.css'


export default function Products() {
  const api = 'http://localhost:3000/api/products';

  return (
    <>
      <AddNewProduct />
      <ProductsTable api={api} />
    </>
  )
}
