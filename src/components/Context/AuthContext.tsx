"use client"
import { createContext, useEffect, useState } from "react";
import { IProductContext, Iproducts, IproductsCart, IproductsProvider } from "../Types/context";
import data from "../database/products.json"
import { ISignIn, IUser } from "../Types/userAcess.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { login } from "@/service/login.service";




// filtro por categoria


export const AuthContext = createContext<IproductsProvider>({} as IproductsProvider);
const AuthProvider = ({ children }: IProductContext) => {
    const [product, setProduct] = useState<IproductsCart[]>([]);
    useEffect(() => { setProduct(data) }, [])
    // seleção de carros

    const [selectedcategory, setSelectedCategory] = useState<string>("");

    const handleCategoriaClick = (categoria: string) => {
        setSelectedCategory(categoria);
    }

    const filteredProducts = selectedcategory ? product.filter((prod) => prod.categoria === selectedcategory) : product;

    // criando função de signIn
    const [islogged, setIsLogged] = useState<boolean>(false);
    useEffect(() => { setIsLogged(JSON.parse(localStorage.getItem("is logged") as string)); }, []);

    const router = useRouter();
    const [user, setUser] = useState<IUser>({} as IUser);


    const signIn = (value: ISignIn) => {
        return new Promise((resolve) => {
            resolve(true);

            localStorage.setItem("isLogged", "true");

            const response = login(value);
            setUser(response);
            localStorage.setItem("user", JSON.stringify(response));

            setIsLogged(true);

        });
    };

    // Buscar o localstorage

    useEffect(() => {
        const userStorage = localStorage.getItem("user");
        if (userStorage) {
            setUser(JSON.parse(userStorage));
        }
    }, []);
    // apagando local storage

    const logout = () => {
        localStorage.clear();
        setIsLogged(false);
        setUser({} as IUser);
        router.push("/login");
    };


    return (
        <AuthContext.Provider
            value={{
                product: filteredProducts,
                handleCategoriaClick,
                signIn,
            }}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;