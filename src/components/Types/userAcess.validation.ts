export interface ISignIn {
  email: string;
  senha: string;
}
export interface ISignInData {
  email: string;
  password: string;
}
export interface IUser {
  name: string;
  email: string;
}
export interface ISignInUpData {
  name: string;
  email: string;
  password: string;
}
export interface ISignUp {
  nome: string;
  email: string;
  senha: string;
  confirmacaoSenha?: string;
}
