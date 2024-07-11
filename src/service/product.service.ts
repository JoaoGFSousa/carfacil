import { api } from "./api";

export const getProduct = async () => {
  // metodo get ele retorna todos os itens da api!
  const { data } = await api.get("/loja");
  return data;
};

export const getProductById = async (id: number) => {
  const { data } = await api.get(`/loja/${id}`);
  console.log(data);
  return data;
};
