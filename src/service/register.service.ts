import { ISignInUpData } from "@/components/Types/userAcess.validation";
import { api } from "./api";

export const register = async (values: ISignInUpData) => {
  const { data } = await api.post("/register", values);
  return data;
};