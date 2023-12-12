import { instance } from "../../instance/instance";

export const patchProduct = async ({productId, productPrice, isInStock}) => {
  const { data } = await instance.patch(`/products/${productId}`, productPrice, isInStock);
  console.log(data);
  return data;
};