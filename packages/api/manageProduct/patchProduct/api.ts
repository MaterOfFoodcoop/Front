import { instance } from "../../instance/instance";

export const patchProduct = async ({productId, productPrice, isInStock}) => {
  // let token = Cookies.get("token");
  const { data } = await instance.patch(`/products/${productId}`, {productPrice, isInStock}, {
    headers: {
      // 'Authorization': `Bearer ${token}`
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJzdWIiOiIwIiwiaWF0IjoxNzAyMzk2OTMwLCJleHAiOjE3MDI0MDA1MzB9.pYOTk8RfNThaSNojqSccozQQZcLRHrKbZtt-p3xoAAw`
    }
  });
  console.log(data);
  // console.log(token);
  return data;
};