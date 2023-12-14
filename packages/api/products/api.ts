import { instance } from "../instance/instance";

export const getProducts = async () => {
  const { data } = await instance.get("/products");
  console.log(data);
  return data;
};

export const getProductById = async (id: number) => {
  const data = await instance.get(`/products/${id}`);
  return data.data;
};
