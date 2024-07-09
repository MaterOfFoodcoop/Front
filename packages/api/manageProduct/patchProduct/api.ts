import { instance } from "../../instance/instance";
import Cookies from "js-cookie";

export const patchProduct = async ({ productId, productPrice, isInStock }) => {
  const token = Cookies.get("token");

  if (!token) {
    throw new Error("No authentication token found");
  }

  const { data } = await instance.patch(
    `/products/${productId}`,
    { productPrice, isInStock },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(data);
  return data;
};
