import { instance } from "../../instance/instance";

export const deleteProduct = async (productId) => {
  // let token = Cookies.get("token");
  const { data } = await instance.delete(`/products/${productId}`, {
    headers: {
      // 'Authorization': `Bearer ${token}`
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJzdWIiOiIwIiwiaWF0IjoxNzAyMzk2OTMwLCJleHAiOjE3MDI0MDA1MzB9.pYOTk8RfNThaSNojqSccozQQZcLRHrKbZtt-p3xoAAw`
    }
  });
  console.log(data);
  // console.log(token);
  window.location.reload();
  return data;
};