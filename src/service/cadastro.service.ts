import { IProductResponseProps } from "@/components/Types/cadastroProduto";
import { api } from "./api";

export const createStore = async (
  productData: IProductResponseProps
): Promise<IProductResponseProps> => {
  const token = localStorage.getItem("token");
  const headers = token
    ? {
        Authorization: `Bearer${token}`,
      }
    : {};

  const { data } = await api.post("/cadastro-loja", productData, { headers });
  return data;
};
