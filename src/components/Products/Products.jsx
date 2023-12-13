import React from 'react'
import { useEffect,useState } from 'react'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductsTable from '../ProductsTable/ProductsTable'
import './Products.css'


export default function Products() {
  const [allProducts, setAllProducts] = useState([])

  const api = 'http://localhost:3000/api/products';
  
  useEffect(() => {
    getAllData()
  }, [])

  const getAllData = () => {
    fetch(api)
      .then((response) => response.json())
      .then(data => setAllProducts(data))
  }

  return (
    <>
      <AddNewProduct getAllData={getAllData} />
      <ProductsTable allProducts={allProducts} getAllData={getAllData} api={api} />
    </>
  )
}
