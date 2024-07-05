import { IproductModal } from "@/components/Types/context";

export const getProductById = (id: number): IproductModal => {
  return {
    id: 0,
    img: "https://placehold.co/398x157",
    rating: "8/10",
    description:
      "Carro em bom estado, Porém, não recomendado para transporte de cargas, melhor desempenho somente para passeios!",
  };
};
