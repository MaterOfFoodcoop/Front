import { instance } from "../../instance/instance";
import Cookies from "js-cookie";

export const deleteProduct = async (productId) => {
  const token = Cookies.get("token");

  if (!token) {
    throw new Error("No authentication token found");
  }

  const { data } = await instance.delete(`/products/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(data);
  window.location.reload();
  return data;
};
