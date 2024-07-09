import { instance } from "../instance/instance";
import Cookies from "js-cookie";

export const addProduct = async (product: FormData) => {
  const token = Cookies.get("token");

  if (!token) {
    throw new Error("No authentication token found");
  }

  const { data } = await instance.post("/products", product, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(data);
  return data;
};
