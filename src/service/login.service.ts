import { ISignIn } from "@/components/Types/userAcess.validation";

export const login = (values: ISignIn) => {
  return {
    id: 1,
    nome: "Cliente",
    email: values.email,
  };
};
