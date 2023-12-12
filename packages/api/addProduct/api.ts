import { instance } from "../instance/instance";
import { Product } from "../../types/product/product";

export const addProduct = async (product: Product) => {
  const { data } = await instance.post("/products", product);
  console.log(data);
  return data;
};