import { Iproducts } from "./context";

export interface IProductContextProps {
  products: Iproducts[];
  filteredProduct: Iproducts[];
  setFilteredProduct: (products: Iproducts[]) => void;
}
