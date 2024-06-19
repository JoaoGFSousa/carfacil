import { ISignIn, IUser } from "./userAcess.validation";

export interface IAuthContext {
  SignIn: (values: ISignIn) => void;
  User: IUser;
  islogged: boolean;
  logout: () => void;
}
