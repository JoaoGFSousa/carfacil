import { ReactNode } from "react";
import { ISignIn, IUser } from "./userAcess.validation";

export interface IAuthContext {
  SignIn: (values: ISignIn) => void;
  User: IUser;
  islogged: boolean;
  logout: () => void;
}
export interface Iproducts {
  id: number;
  categoria: string;
  ano: number;
  nome: string;
  marca: string;
  cor: string;
  cv: number;
  combustivel: string;
  img: string;
}
export interface IproductsCart {
  id: number;
  categoria: string;
  ano: number;
  nome: string;
  marca: string;
  cor: string;
  cv: number;
  combustivel: string;
  img: string;
}

export interface IproductsProvider {
  product: Iproducts[];
  handleCategoriaClick: (categoria: string) => void;
  signIn: (values: ISignIn) => void;
}
export interface IProductContext {
  children: ReactNode;
}
