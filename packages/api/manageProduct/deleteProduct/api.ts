import { instance } from "../../instance/instance";

export const deleteProduct = async (productId) => {
  // let token = Cookies.get("token");
  const { data } = await instance.delete(`/products/${productId}`, {
    headers: {
      // 'Authorization': `Bearer ${token}
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJzdWIiOiIwIiwiaWF0IjoxNzAyNDc1Njg0LCJleHAiOjE3MDI4MzU2ODR9.LF_zLUg36jorKfkGrdIFTOgF64naMk9ZBmAJMzCBWFU`
    }
  });
  console.log(data);
  // console.log(token);
  window.location.reload();
  return data;
};