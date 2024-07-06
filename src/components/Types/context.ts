import { ReactNode } from "react";
import { ISignIn, ISignInData, ISignInUpData, IUser } from "./userAcess.validation";

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
  signIn: (values: ISignInData) => void;
  signInUp: (values: ISignInUpData) => void;
  isLogged: boolean;
  logout: () => void;
  user: IUser;
}
export interface IProductContext {
  children: ReactNode;
}

export interface IproductModal {
  id: number;
  img: string;
  description: string;
  rating: string;
}
