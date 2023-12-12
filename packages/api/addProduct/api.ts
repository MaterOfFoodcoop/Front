import { instance } from "../instance/instance";
import { Product, ProductCategory } from "../../types/product/product";

interface postProductType {
  productName: string,
  category: ProductCategory,
  productDetail: string,
  productPrice: number,
  isInStock: boolean
}

export const addProduct = async (product: postProductType) => {
  const { data } = await instance.post("/products", product);
  console.log(data);
  return data;
};