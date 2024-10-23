import { ReactNode } from "react";
import {
  ISignIn,
  ISignInData,
  ISignInUpData,
  IUser,
} from "./userAcess.validation";

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
  img: string;
}
export interface IproductsCart {
  id: number;
  categoria: string;
  ano: number;
  nome: string;
  marca: string;
  img: string;
  description: string;
  cor: string;
  cilindradas: number;
  combustivel: string;
  preco: number;
}

export interface IproductsProvider {
  signIn: (values: ISignInData) => void;
  signInUp: (values: ISignInUpData) => void;
  isLogged: boolean;
  logout: () => void;
  user: IUser;
  token?:string;
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
export interface ICartProduct extends IproductsCart {
  amount: number;
}
export interface ICartContext {
  addProduct: (product: ICartProduct) => void;
  cart: ICartProduct[];
  removeProduct: (id: number) => void;
  totalCart: number;
  clearCart: () => void;
}
