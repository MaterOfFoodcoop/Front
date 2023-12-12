import { instance } from "../../instance/instance";

export const deleteProduct = async (id) => {
  const { data } = await instance.delete(`/products/${id}`);
  console.log(data);
  return data;
};