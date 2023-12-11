import { instance } from "../../instance/instance";

// 지금은 배포가 더 급하다 ㅅㄱㄹ
export interface Answer {
  id: string;
  content: string;
}

export const postAnswer = async ({ content, id }: Answer) => {
  const response = await instance.post("/api/answer", { content, id });
  console.log(response);
  return response.data;
};
