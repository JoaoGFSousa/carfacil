import { api } from "./api";

export const getProduct = async () => {
  // metodo get ele retorna todos os itens da api!
  const { data } = await api.get("/loja");
  return data;
};

