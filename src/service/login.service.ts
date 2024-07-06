import { ISignInData } from "@/components/Types/userAcess.validation";
import { api } from "./api";

export const login = async (values: ISignInData) => {
  const {data} = await api.post("/login", values);
 return data
};
