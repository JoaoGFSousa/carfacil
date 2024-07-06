import { getProduct } from "@/service/product.service";
import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Iproducts } from "../Types/context";
import { IProductContextProps } from "../Types/productContext";





export const ProductContext = createContext({} as IProductContextProps)
const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const { data: products, isSuccess } = useQuery("product", getProduct);
    // [] são estados , set atualiza o estado!
    const [filteredProduct, setFilteredProduct] = useState<Iproducts[]>([]);
    // consertado após definir product como produt inicial
    useEffect(() => {
        if (isSuccess && products) {
            setFilteredProduct(products);
        }
    }, [isSuccess, products]);

    return (
        <ProductContext.Provider value={{ products: products, setFilteredProduct, filteredProduct }} >
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider;

export const useProduct = () => useContext(ProductContext)