"use client"
import { createContext, useEffect, useState } from "react";
import { IProductContext, IproductsProvider } from "../Types/context";
import { ISignInData, ISignInUpData, IUser } from "../Types/userAcess.validation";
import { useRouter } from "next/navigation";
import { login } from "@/service/login.service";
import { api } from "@/service/api";
import { register } from "@/service/register.service";
import { toast } from "react-toastify";

// filtro por categoria


export const AuthContext = createContext<IproductsProvider>({} as IproductsProvider);
const AuthProvider = ({ children }: IProductContext) => {

    // criando função de signIn
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const router = useRouter();
    const [user, setUser] = useState<IUser>({} as IUser);

    useEffect(() => { setIsLogged(JSON.parse(localStorage.getItem("isLogged") as string)); }, []);



    const signIn = async (values: ISignInData) => {
        try {
            // sempre armazeno resposta da api dentro de uma constante
            const response = await login(values)
            console.log(response)
            setIsLogged(true)
            localStorage.setItem("isLogged", "true")
            api.defaults.headers["Authorization"] = `Bearer ${response.accessToken}`
            localStorage.setItem("@token", response.accessToken)
            setUser(response.user)
            localStorage.setItem("user", JSON.stringify(response.user))
            toast.success("Login Conclúido")
            router.push("/")
        } catch (error) {
            console.log(error)
            toast.error("Algo Deu Errado!")
        }
    };

    const signInUp = async (values: ISignInUpData) => {
        try {
            const response = await register(values)
            toast.success("Cadastro Realizado com sucesso")
            router.push("/login")

        } catch (error) {
            console.log(error)
            toast.error("Algo Deu Errado!")
        }
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
                signIn,
                signInUp,
                isLogged,
                logout,
                user
            }}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;