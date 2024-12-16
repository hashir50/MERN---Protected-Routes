import React, { useEffect } from 'react'
import { useProductsContext } from '../context/productsContext'
import { getProducts } from '../services/productServices'
import ProductCard from '../components/ProductCard'

const Products = () => {


    const { allProducts, setProductsHandle } = useProductsContext()



    useEffect(() => {
        !(async () => {
            const data = await getProducts()
            setProductsHandle(data)
        })()

    }, [])

    return (
       <div className='container mx-auto'>
         <div className='grid grid-cols-5 gap-4'>
            {allProducts.map((product) => <ProductCard key={product.id} data={product} />)}
        </div>
       </div>
    )
}

export default Products
