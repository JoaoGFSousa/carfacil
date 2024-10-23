import { api } from "./api";

export const getProduct = async () => {
  // metodo get ele retorna todos os itens da api!
  const { data } = await api.get("/vehicles");
  return data;
};

export const getProductById = async (id: number) => {
  const { data } = await api.get(`/vehicles/${id}`);
  console.log(data);
  return data;
};
