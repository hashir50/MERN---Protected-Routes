import { createContext, useContext, useState } from "react";

export const ProductsContext = createContext()

export const useProductsContext = () => useContext(ProductsContext)


export const ProductsProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([])

    const setProductsHandle = (data) => {
        setAllProducts(data)
    }

    return <ProductsContext.Provider value={{allProducts, setProductsHandle}} >
        {children}
    </ProductsContext.Provider>
}