import React from 'react'
import { useProductsContext } from '../context/productsContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import ProtectedRoute from './ProtectedRoute'
import UnAuthorized from '../pages/unauthorized'
import LoginPage from '../pages/login'

const RouterApp = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route path='/products' element={
                    <ProtectedRoute>
                        <Products />
                    </ProtectedRoute>
                } />

                {/* <Route path='/products' element={
                    
                        <Products />
                } /> */}
                <Route path='/unauthorized' element={<UnAuthorized/>}/>
                <Route path='/product/:id' element={<ProductDetails />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp
