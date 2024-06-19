import { createContext } from "react";
import { IAuthContext } from "../Types/context";




const AuthContext = createContext<IAuthContext>({} as IAuthContext)
// Criando contexto tipando como "IAuthContext" dizendo que pode voltar como string vazia ou interface do IAuthContext

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    // Criando um AuthProvider que é uma ferramenta que tem como parametro o children que está tipado como React.ReactNode
    const router = userRouter();
}
// 

