"use client"
import { createContext, useEffect, useState } from "react";
import { IProductContext, Iproducts, IproductsCart, IproductsProvider } from "../Types/context";
import data from "../database/products.json"




export const AuthContext = createContext<IproductsProvider>({} as IproductsProvider);
const AuthProvider = ({ children }: IProductContext) => {
    const [product, setProduct] = useState<IproductsCart[]>([]);

    useEffect(() => { setProduct(data) }, [])

    return (
        <AuthContext.Provider
            value={{
                product,
            }}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;