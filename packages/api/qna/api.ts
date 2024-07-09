import { instance } from "../instance/instance";

export const getQnA = async () => {
  const { data } = await instance.get("/qna");
  console.log(data);
  return data;
};
