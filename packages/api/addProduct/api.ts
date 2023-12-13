import { instance } from "../instance/instance";

export const addProduct = async (product: FormData) => {
  const { data } = await instance.post("/products", product, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJzdWIiOiIwIiwiaWF0IjoxNzAyNDc1Njg0LCJleHAiOjE3MDI4MzU2ODR9.LF_zLUg36jorKfkGrdIFTOgF64naMk9ZBmAJMzCBWFU`
    }
  });
  console.log(data);
  return data;
};
