import { instance } from "../instance/instance";

export const getProducts = async () => {
  const { data } = await instance.get("/products");
  console.log(data);
  return data;
};
