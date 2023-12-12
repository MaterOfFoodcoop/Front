import { instance } from "../../instance/instance";

export const patchProduct = async ({productId, productPrice, isInStock}) => {
  // let token = Cookies.get("token");
  const { data } = await instance.patch(`/products/${productId}`, {productPrice, isInStock}, {
    headers: {
      // 'Authorization': `Bearer ${token}`
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJzdWIiOiIwIiwiaWF0IjoxNzAyNDIzMDg4LCJleHAiOjE3MDI0MjY2ODh9.EYCQk_cJ8z5kdcy19a-VFXoeIsr4HYVvOO6eXMw0gpQ`
    }
  });
  console.log(data);
  // console.log(token);
  return data;
};