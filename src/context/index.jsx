import { ProductsProvider } from "./productsContext"
import { AuthProvider } from "./authContext"

export const CombineContextProvider = ({ children }) => {

    return(
    <AuthProvider>
        <ProductsProvider>
            {children}
        </ProductsProvider>
    </AuthProvider>
    )
}