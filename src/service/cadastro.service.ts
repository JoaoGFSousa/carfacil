import { IProductResponseProps } from "@/components/Types/cadastroProduto";
import { api } from "./api";

export const createStore = async ({
  nome,
  description,
  preco,
  categoria,
  img,
  ano,
  marca,
  cor,
  cilindradas,
  combustivel
}: IProductResponseProps): Promise<IProductResponseProps> => {
  const token = localStorage.getItem("@token");
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
  console.log(headers);
  const body = new FormData();
  body.append("nome", nome);
  body.append("description", description);
  body.append("price", (preco * 100).toString());
  body.append("category", categoria.toString());
  body.append("image", img);
  body.append("ano", ano.toString());
  body.append("marca",marca);
  body.append("cor", cor);
  body.append("cilindradas",cilindradas.toString());
  body.append("combustivel",combustivel)

  const { data } = await api.post("/vehicles", body, { headers });
  return data;
};
